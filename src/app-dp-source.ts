import { SecretValue } from 'aws-cdk-lib';
import { Artifact, IAction } from 'aws-cdk-lib/aws-codepipeline';
import { GitHubSourceAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { Construct } from 'constructs';

/**
 * Properties for AppDpSource
 */
export interface AppDpGitHubSourceProps {
  /**
   * The owner of the GitHub repository
   * This can be the username or organization name
   */
  readonly owner: string;
  /**
   * The name of the GitHub repository
   * This can be the repository name
   */
  readonly repo: string;
  /**
   * The branch of the GitHub repository
   */
  readonly branch: string;
  /**
   * The OAuth token that will be used to authenticate with GitHub
   */
  readonly oauthToken: SecretValue;
}

/**
 * An AppDpSource that fetches the source code from a GitHub repository.
 */
export interface AppDpSourceProps {
  readonly owner: string;
  readonly repo: string;
  readonly branch: string;
  readonly oauthToken: SecretValue;
}

/**
 * An AppDpSource that fetches the source code from a GitHub repository.
 */
export class AppDpSource extends Construct {
  public static fromGitHub(scope: Construct, id: string, props: AppDpGitHubSourceProps): AppDpSource {
    return new AppDpSource(scope, id, props);
  }

  public readonly sourceAction: IAction;
  public readonly sourceArtifact: Artifact;
  public readonly commitId: string;

  public constructor(scope: Construct, id: string, props: AppDpSourceProps) {
    super(scope, id);

    this.sourceArtifact = new Artifact();

    const sourceAction = new GitHubSourceAction({
      actionName: 'GitHub_Source',
      owner: props.owner,
      repo: props.repo,
      branch: props.branch,
      oauthToken: props.oauthToken,
      output: this.sourceArtifact,
    });

    this.commitId = sourceAction.variables.commitId;

    this.sourceAction = sourceAction;
  }
}
