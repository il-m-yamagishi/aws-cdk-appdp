import { Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { CodeBuildAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { Construct } from 'constructs';
import { AppDpBuildDefinition } from './app-dp-build-definition';
import { AppDpCluster } from './app-dp-cluster';
import { AppDpSource } from './app-dp-source';

/**
 * Properties for AppDpPipeline
 */
export interface AppDpPipelineProps {
  /**
   * The source action that will trigger the pipeline
   * This can be a CodeCommit, GitHub, S3 or any other source action
   * that implements the IAction interface
   * It must be provided by the user
   *
   * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline_actions.CodeCommitSourceAction.html
   * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline_actions.CodeStarConnectionsSourceAction.html
   * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline_actions.S3SourceAction.html
   * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline_actions.GitHubSourceAction.html
   *
   * Example:
   *
   * ```ts
   * const oauthToken = SecretValue.secretsManager('my-github-token');
   * const branch = 'main'; // Target branch
   * const sourceAction = AppDpSource.fromGitHub({
   *   owner: 'il-m-yamagishi',
   *   repo: 'aws-cdk-appdp',
   *   oauthToken,
   *   branch,
   * });
   * ```
   */
  readonly sourceAction: AppDpSource;

  /**
   * The build definitions that will build the Docker images
   */
  readonly buildDefinitions: AppDpBuildDefinition[];

  /**
   * The cluster that the application will be deployed to
   */
  readonly cluster: AppDpCluster;

  /**
   * Whether the pipeline requires manual approval before deploying the application
   */
  readonly needManualApproval?: boolean;
}

/**
 * An AppDpPipeline that deploys the application to specified source.
 *
 * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline-readme.html
 * @see https://github.com/aws/aws-cdk/issues/1559
 * @see https://aws.amazon.com/blogs/devops/blue-green-deployments-using-aws-cdk-pipelines-and-aws-codedeploy/
 * @see https://github.com/tsukuboshi/cdk-microservices-bluegreendeployment-template
 */
export class AppDpPipeline extends Construct {
  public readonly pipeline: Pipeline;

  /**
   * Constructor
   * User must provide props that does not include any stages
   */
  public constructor(scope: Construct, id: string, props: AppDpPipelineProps) {
    super(scope, id);

    if (props.buildDefinitions.length === 0) {
      throw new Error('Build definitions cannot be empty');
    }

    this.pipeline = new Pipeline(this, 'Pipeline', {
      pipelineName: `deploy-${id.toLowerCase()}`,
    });

    // Source stages
    this.pipeline.addStage({
      stageName: 'Source',
      actions: [props.sourceAction.sourceAction],
    });

    // Build stages
    this.pipeline.addStage({
      stageName: 'Build images',
      actions: props.buildDefinitions.map((definition) => (new CodeBuildAction({
        actionName: `Build_${definition.repository.repositoryName}`,
        project: definition.codeBuildProject,
        input: props.sourceAction.sourceArtifact,
        environmentVariables: {
          COMMIT_ID: {
            value: props.sourceAction.commitId,
          },
        },
      }))),
    });

    // Deploy stages
    // TODO
  }
}
