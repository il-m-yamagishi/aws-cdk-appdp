import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Masaru Yamagishi',
  authorAddress: 'm-yamagishi@infiniteloop.co.jp',
  cdkVersion: '2.151.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: '@m-yamagishi/aws-cdk-appdp',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yamayuski/aws-cdk-appdp.git',
  npmProvenance: true,
  npmAccess: NpmAccess.PUBLIC,

  // deps: [],                /* Runtime dependencies of this module. */
  description: 'AWS CDK Typical application deployment for AWS Fargate, alternative to AWS CDK Pipelines.', /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@aws-cdk/integ-runner@latest',
    '@aws-cdk/integ-tests-alpha@latest',
  ],
  packageName: '@m-yamagishi/aws-cdk-appdp',
});
project.synth();
