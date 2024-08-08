import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'm-yamagishi',
  authorAddress: 'm-yamagishi@infiniteloop.co.jp',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'aws-cdk-appdp',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/m-yamagishi/aws-cdk-appdp.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();