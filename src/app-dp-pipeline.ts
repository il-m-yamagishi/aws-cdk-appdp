import { Artifact, IAction, Pipeline, PipelineProps } from 'aws-cdk-lib/aws-codepipeline'
import { Construct } from 'constructs';

/**
 * Properties for AppDpPipeline
 */
export interface AppDpPipelineProps extends PipelineProps {
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
   * @example
   * ```ts
   * const oauthToken = SecretValue.secretsManager('my-github-token');
   * const branch = 'main'; // Target branch
   * const sourceOutput = new codepipeline.Artifact();
   * const sourceAction = new GitHubSourceAction({
   *   actionName: 'GitHub_Source',
   *   owner: 'il-m-yamagishi',
   *   repo: 'aws-cdk-appdp',
   *   output: sourceOutput,
   *   oauthToken,
   *   branch,
   * });
   * ```
   */
  readonly sourceAction: IAction;

  /**
   * The build output artifact that will be used as input for the next stage
   */
  readonly sourceArtifact: Artifact;

  /**
   * The path to the Dockerfile that will be used to build the Docker image
   */
  readonly dockerfilePath: string;
}

/**
 * An AppDpPipeline that deploys the application to specified source.
 * This is a custom construct that extends CodePipeline construct.
 *
 * @see https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline-readme.html
 * @see https://github.com/aws/aws-cdk/issues/1559
 * @see https://aws.amazon.com/blogs/devops/blue-green-deployments-using-aws-cdk-pipelines-and-aws-codedeploy/
 * @see https://dev.classmethod.jp/articles/cdk-ecr-ecs-bluegreen-deployment/ (JP)
 */
export class AppDpPipeline extends Pipeline {
  /**
   * Constructor
   * User must provide props that does not include any stages
   */
  public constructor(scope: Construct, id: string, props: AppDpPipelineProps) {
    super(scope, id, props);
    if (this.stageCount > 0) {
      throw new Error('AppDpPipeline must not have any stages');
    }
    this.addStage({
      stageName: 'Source',
      actions: [props.sourceAction],
    });
  }
}
