import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import {
  BuildEnvironmentVariableType,
  BuildSpec,
  LinuxBuildImage,
  PipelineProject,
  Project,
} from 'aws-cdk-lib/aws-codebuild';
import { IRepository, Repository, TagMutability } from 'aws-cdk-lib/aws-ecr';
import { Construct } from 'constructs';

/**
 * Properties for defining a AppDpBuildDefinition
 */
export interface AppDpBuildDefinitionProps {
  /**
   * The path to the Dockerfile that will be used to build the Docker image
   *
   * @default - .
   */
  readonly directory?: string;
  /**
   * The build arguments that will be passed to the Docker build command
   *
   * @default - undefined
   */
  readonly buildArgs?: Record<string, string>;
  /**
   * The target stage in the Dockerfile that will be used to build the Docker image
   *
   * @default - undefined
   */
  readonly target?: string;
  /**
   * Whether to disable the ARM64 build
   *
   * @default - false
   */
  readonly disableArm64Build?: boolean;

  /**
   * Whether to scan the Docker image for vulnerabilities
   *
   * @default - true
   */
  readonly imageScanOnPush?: boolean;
}

export class AppDpBuildDefinition extends Construct {
  /**
   * The version of the SOCI tool that will be used to create and push Docker images
   * @link https://github.com/awslabs/soci-snapshotter/releases
   * @link https://github.com/aws-samples/aws-fargate-seekable-oci-toolbox/
   */
  public static readonly SOCI_VERSION = '0.7.0';

  /**
   * The version of the Docker Buildx plugin that will be used to build Docker images
   * @link https://github.com/docker/buildx/releases
   */
  public static readonly BUILDX_VERSION = '0.16.2';

  /**
   * The ECR repository that will be used to store the Docker image
   */
  public readonly repository: IRepository;

  /**
   * The CodeBuild project that will build the Docker image
   */
  public readonly codeBuildProject: Project;

  public constructor(scope: Construct, id: string, props?: AppDpBuildDefinitionProps) {
    super(scope, id);

    this.repository = new Repository(this, 'EcrRepository', {
      imageScanOnPush: props?.imageScanOnPush ?? true,
      imageTagMutability: TagMutability.MUTABLE, // for cache tag
      removalPolicy: RemovalPolicy.DESTROY,
      repositoryName: `${id.toLowerCase()}`,
    });

    const region = Stack.of(this).region;
    const accountId = Stack.of(this).account;

    const environmentVariables = {
      DOCKER_BUILDKIT: {
        type: BuildEnvironmentVariableType.PLAINTEXT,
        value: '1',
      },
      REPOSITORY_URI: {
        type: BuildEnvironmentVariableType.PLAINTEXT,
        value: this.repository.repositoryUri,
      },
      CONTAINER_NAME: {
        type: BuildEnvironmentVariableType.PLAINTEXT,
        value: this.repository.repositoryName,
      },
      AWS_REGION: {
        type: BuildEnvironmentVariableType.PLAINTEXT,
        value: region,
      },
      AWS_ACCOUNT_ID: {
        type: BuildEnvironmentVariableType.PLAINTEXT,
        value: accountId,
      },
      SOCI_VERSION: {
        type: BuildEnvironmentVariableType.PLAINTEXT,
        value: AppDpBuildDefinition.SOCI_VERSION,
      },
      BUILDX_VERSION: {
        type: BuildEnvironmentVariableType.PLAINTEXT,
        value: AppDpBuildDefinition.BUILDX_VERSION,
      },
    };

    const dockerBuildxBuildCommand = [
      'docker buildx build',
      '--tag ${REPOSITORY_URI}:${COMMIT_ID}-${CPU_ARCH}',
      '--cache-from type=registry,ref=${REPOSITORY_URI}:cache-${CPU_ARCH}',
      '--cache-to mode=max,image-manifest=true,oci-mediatypes=true,type=registry,ref=${REPOSITORY_URI}:cache-${CPU_ARCH}',
      '--output type=docker,dest=./image-${CPU_ARCH}.tar',
      '--platform linux/${CPU_ARCH}',
      `${props?.buildArgs ? Object.entries(props.buildArgs).map(([key, value]) => `--build-arg ${key}=${value}`).join(' ') : ''}`,
      `${props?.target ? `--target ${props.target} ` : ''}`,
      `${props?.directory ?? '.'}`,
    ];
    const dockerBuildAndPushCommands = [
      'echo "Building Docker image with BuildKit for ${REPOSITORY_URI}:${COMMIT_ID}-${CPU_ARCH}"',
      dockerBuildxBuildCommand.join(' '),
      'ctr image import ./image-${CPU_ARCH}.tar',
      'soci create ${REPOSITORY_URI}:${COMMIT_ID}-${CPU_ARCH}',
      'ctr image push --user AWS:${PASSWORD} ${REPOSITORY_URI}:${COMMIT_ID}-${CPU_ARCH}',
      'soci push --user AWS:${PASSWORD} ${REPOSITORY_URI}:${COMMIT_ID}-${CPU_ARCH}',
    ];

    this.codeBuildProject = new PipelineProject(this, 'CodeBuildProject', {
      projectName: `${id}CodeBuildProject`,
      description: `CodeBuild project for building Docker image ${id}`,
      environment: {
        buildImage: LinuxBuildImage.STANDARD_7_0,
        privileged: true, // for Docker build
        environmentVariables: {
          CONTAINERD_ADDRESS: {
            value: '/var/run/containerd/containerd.sock',
          },
          CPU_ARCH: {
            value: 'amd64',
          },
          APP_SPEC_JSON_TEMPLATE: {
            value: '{"version":"0.0","Resources":[{"TargetService":{"Type":"AWS::ECS::Service","Properties":{"TaskDefinition":"%s","LoadBalancerInfo":{"ContainerName":"%s","ContainerPort":80},"PlatformVersion":"LATEST"}}}]}',
          },
        },
      },
      environmentVariables,
      buildSpec: BuildSpec.fromObject({
        version: '0.2',
        phases: {
          pre_build: {
            commands: [
              'echo CPU_ARCH=${CPU_ARCH}',

              // containerd version
              'ctr --version',

              // Install SOCI Binaries
              'wget --quiet https://github.com/awslabs/soci-snapshotter/releases/download/v${SOCI_VERSION}/soci-snapshotter-${SOCI_VERSION}-linux-${CPU_ARCH}.tar.gz',
              'tar -C /usr/local/bin -xvf soci-snapshootter-${SOCI_VERSION}-linux-amd64.tar.gz soci soci-snapshotter-grpc',
              'soci --version',

              // Install Docker Buildx
              'wget --quiet https://github.com/docker/buildx/releases/download/v${BUILDX_VERSION}/buildx-v${BUILDX_VERSION}.linux-${CPU_ARCH} -o docker-buildx',
              'chmod +x docker-buildx',
              'mkdir -p ~/.docker/cli-plugins',
              'mv docker-buildx ~/.docker/cli-plugins/docker-buildx',
              'docker buildx version',

              // Login to ECR
              'export PASSWORD=$(aws ecr get-login-password --region ${AWS_REGION})',
            ],
          },
          build: {
            commands: [
              // for multi-arch build
              'docker buildx create --driver=docker-container --use --platform linux/amd64,linux/arm64 --bootstrap ' +
              '--driver-opt image=public.ecr.aws/vend/moby/buildkit:buildx-stable-1',

              // Build Docker image with BuildKit
              // @link https://aws.amazon.com/blogs/news/announcing-remote-cache-support-in-amazon-ecr-for-buildkit-clients/
              'export CPU_ARCH=amd64',
              ...dockerBuildAndPushCommands,

              ...(props?.disableArm64Build ? [] : [
                'export CPU_ARCH=arm64',
                ...dockerBuildAndPushCommands,
              ]),

              // create and push multi-arch manifests
              // @link https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-multi-architecture-image.html
              'docker manifest create --amend ${REPOSITORY_URI}:${COMMIT_ID} ${REPOSITORY_URI}:${COMMIT_ID}-amd64' + (props?.disableArm64Build ? '' : ' ${REPOSITORY_URI}:${COMMIT_ID}-arm64'),
              'docker manifest push --purge ${REPOSITORY_URI}:${COMMIT_ID}',
            ],
          },
          post_build: {
            commands: [
              // @link https://docs.aws.amazon.com/codepipeline/latest/userguide/file-reference.html
              'printf \'{"ImageURI":"%s"}\' "${REPOSITORY_URI}:${COMMIT_ID}" > imageDetail.json',
              'printf "${APP_SPEC_JSON_TEMPLATE}" "${TASK_DEFINITION_ARN}" "${CONTAINER_NAME}" > appspec.yaml',
            ],
          },
        },
        artifacts: {
          files: [
            'imageDetail.json',
            'appspec.yaml',
            'taskdef.json',
          ],
        },
      }),
    });

    // Grant the CodeBuild project permissions to pull and push to the ECR repository
    this.repository.grantPullPush(this.codeBuildProject);
  }
}
