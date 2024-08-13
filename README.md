# AWS CDK APPDP

![cdk-constructs: Experimental](https://img.shields.io/badge/cdk--constructs-experimental-important.svg?style=for-the-badge)

[![View on Construct Hub](https://constructs.dev/badge?package=%40m-yamagishi%2Faws-cdk-appdp)](https://constructs.dev/packages/@m-yamagishi/aws-cdk-appdp)

> The APIs in this module are experimental and under active development.

AWS CDK Typical application deployment for AWS Fargate, alternative to AWS CDK Pipelines.

This repository structure refers to [cdk-pipelines-github](https://github.com/cdklabs/cdk-pipelines-github).

## Usage

### Source

```ts
declare const githubOwner: string;
declare const githubRepo: string;
declare const targetBranch: string;

const source = AppDpSource.fromGitHub({
  owner: githubOwner,
  repo: githubRepo,
  branch: targetBranch,
  oauthToken: SecretValue.secretsManager('github-token'),
});

// FUTURE: fromCodeStarConnection or other repositories
```

### Container Build Definitions

```ts
const defaultBuildDefinition = {
  directory: '../../',
  buildArgs: {
    VERSION: 'v2024.09.01.01',
    ENV: 'production',
  },
};
const appBuildDefinition = new AppDpBuildDefinition(this, 'App', {
  ...defaultBuildDefinition,
  ...{
    target: 'app',
  },
});
const adminBuildDefinition = new AppDpBuildDefinition(this, 'Admin', {
  ...defaultBuildDefinition,
  ...{
    target: 'admin',
  },
});
const cliBuildDefinition = new AppDpBuildDefinition(this, 'CLI', {
  ...defaultBuildDefinition,
  ...{
    target: 'cli',
  },
});
```

### Cluster Configurations

```ts
declare const vpc: ec2.Vpc;

const cluster = new AppDpCluster(this, 'AppDpCluster', {
  vpc,
});
const appTaskDefinition = new ecs.FargateTaskDefinition(this, 'AppTask', {
  cpu: '4096',
  memoryLimitMiB: '8192',
  executionRole,
  taskRole,
});
appTaskDefinition.addContainer('app', {
  image: ecs.ContainerImage.fromEcrRepository(appBuildDefinition.repository, source.commitId),
  portMappings: [
    {
      containerPort: 80,
    },
  ],
});
const service = cluster.addHttpService('app', {
  taskDefinition: appTaskDefinition,
});
// You can add auto-scaling config to FargateService
const scaling = service.autoScaleTaskCount({
  maxCapacity: 100,
});
scaling.scaleOnCpuUtilization('CpuScaling', {
  targetUtilizationPercent: 50,
});
const adminTaskDefinition = new ecs.FargateTaskDefinition(this, 'AdminTask', {
  cpu: '256',
  memoryLimitMiB: '512',
  executionRole,
  taskRole,
});
adminTaskDefinition.addContainer('admin', {
  image: ecs.ContainerImage.fromEcrRepository(adminBuildDefinition.repository, source.commitId),
  portMappings: [
    {
      containerPort: 80,
    },
  ],
});
cluster.addHttpService('admin', {
  taskDefinition: adminTaskDefinition,
});
const cliTaskDefinition = new ecs.FargateTaskDefinition(this, 'CLITask', {
  cpu: '256',
  memoryLimitMiB: '512',
  executionRole,
  taskRole,
});
cliTaskDefinition.addContainer('cli', {
  image: ecs.ContainerImage.fromEcrRepository(cliBuildDefinition.repository, source.commitId),
});
cluster.addNonHttpService('cli', {
  taskDefinition: cliTaskDefinition,
});
```

### Pipeline

```ts
const pipeline = new AppDpPipeline(this, 'AppDpPipeline', {
  source,
  buildDefinitions: [
    appBuildDefinition,
    adminBuildDefinition,
    cliBuildDefinition,
  ],
  cluster,
  needManualApprove: true, // default: false
});
```

## References



## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for more information.

## License

This project is licensed under the Apache-2.0 License.
