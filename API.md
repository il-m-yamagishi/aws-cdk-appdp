# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppDpBuildDefinition <a name="AppDpBuildDefinition" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition"></a>

#### Initializers <a name="Initializers" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.Initializer"></a>

```typescript
import { AppDpBuildDefinition } from '@m-yamagishi/aws-cdk-appdp'

new AppDpBuildDefinition(scope: Construct, id: string, props?: AppDpBuildDefinitionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.Initializer.parameter.props">props</a></code> | <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps">AppDpBuildDefinitionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.Initializer.parameter.props"></a>

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps">AppDpBuildDefinitionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.isConstruct"></a>

```typescript
import { AppDpBuildDefinition } from '@m-yamagishi/aws-cdk-appdp'

AppDpBuildDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.codeBuildProject">codeBuildProject</a></code> | <code>aws-cdk-lib.aws_codebuild.Project</code> | The CodeBuild project that will build the Docker image with Linux AMD64 architecture. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.repository">repository</a></code> | <code>aws-cdk-lib.aws_ecr.IRepository</code> | The ECR repository that will be used to store the Docker image. |

---

##### `node`<sup>Required</sup> <a name="node" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `codeBuildProject`<sup>Required</sup> <a name="codeBuildProject" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.codeBuildProject"></a>

```typescript
public readonly codeBuildProject: Project;
```

- *Type:* aws-cdk-lib.aws_codebuild.Project

The CodeBuild project that will build the Docker image with Linux AMD64 architecture.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.repository"></a>

```typescript
public readonly repository: IRepository;
```

- *Type:* aws-cdk-lib.aws_ecr.IRepository

The ECR repository that will be used to store the Docker image.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.BUILDX_VERSION">BUILDX_VERSION</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.SOCI_VERSION">SOCI_VERSION</a></code> | <code>string</code> | *No description.* |

---

##### `BUILDX_VERSION`<sup>Required</sup> <a name="BUILDX_VERSION" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.BUILDX_VERSION"></a>

```typescript
public readonly BUILDX_VERSION: string;
```

- *Type:* string

> [https://github.com/docker/buildx/releases](https://github.com/docker/buildx/releases)

---

##### `SOCI_VERSION`<sup>Required</sup> <a name="SOCI_VERSION" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition.property.SOCI_VERSION"></a>

```typescript
public readonly SOCI_VERSION: string;
```

- *Type:* string

> [https://github.com/aws-samples/aws-fargate-seekable-oci-toolbox/](https://github.com/aws-samples/aws-fargate-seekable-oci-toolbox/)

---

### AppDpCluster <a name="AppDpCluster" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster"></a>

#### Initializers <a name="Initializers" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.Initializer"></a>

```typescript
import { AppDpCluster } from '@m-yamagishi/aws-cdk-appdp'

new AppDpCluster(scope: Construct, id: string, props: AppDpClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.Initializer.parameter.props">props</a></code> | <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpClusterProps">AppDpClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.Initializer.parameter.props"></a>

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.AppDpClusterProps">AppDpClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.addHTTPService">addHTTPService</a></code> | Add HTTP Blue/Green deployment service. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.addNonHTTPService">addNonHTTPService</a></code> | Add non-HTTP service like queue, worker This service will be deployed with rolling-update deployment. |

---

##### `toString` <a name="toString" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addHTTPService` <a name="addHTTPService" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.addHTTPService"></a>

```typescript
public addHTTPService(id: string, props: ServiceProps): FargateService
```

Add HTTP Blue/Green deployment service.

###### `id`<sup>Required</sup> <a name="id" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.addHTTPService.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.addHTTPService.parameter.props"></a>

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.ServiceProps">ServiceProps</a>

---

##### `addNonHTTPService` <a name="addNonHTTPService" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.addNonHTTPService"></a>

```typescript
public addNonHTTPService(id: string, props: ServiceProps): FargateService
```

Add non-HTTP service like queue, worker This service will be deployed with rolling-update deployment.

###### `id`<sup>Required</sup> <a name="id" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.addNonHTTPService.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.addNonHTTPService.parameter.props"></a>

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.ServiceProps">ServiceProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.isConstruct"></a>

```typescript
import { AppDpCluster } from '@m-yamagishi/aws-cdk-appdp'

AppDpCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.property.httpServices">httpServices</a></code> | <code>aws-cdk-lib.aws_ecs.FargateService[]</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster.property.nonHttpServices">nonHttpServices</a></code> | <code>aws-cdk-lib.aws_ecs.FargateService[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

---

##### `httpServices`<sup>Required</sup> <a name="httpServices" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.property.httpServices"></a>

```typescript
public readonly httpServices: FargateService[];
```

- *Type:* aws-cdk-lib.aws_ecs.FargateService[]

---

##### `nonHttpServices`<sup>Required</sup> <a name="nonHttpServices" id="@m-yamagishi/aws-cdk-appdp.AppDpCluster.property.nonHttpServices"></a>

```typescript
public readonly nonHttpServices: FargateService[];
```

- *Type:* aws-cdk-lib.aws_ecs.FargateService[]

---


### AppDpPipeline <a name="AppDpPipeline" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline"></a>

An AppDpPipeline that deploys the application to specified source.

> [https://github.com/tsukuboshi/cdk-microservices-bluegreendeployment-template](https://github.com/tsukuboshi/cdk-microservices-bluegreendeployment-template)

#### Initializers <a name="Initializers" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.Initializer"></a>

```typescript
import { AppDpPipeline } from '@m-yamagishi/aws-cdk-appdp'

new AppDpPipeline(scope: Construct, id: string, props: AppDpPipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipeline.Initializer.parameter.props">props</a></code> | <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps">AppDpPipelineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.Initializer.parameter.props"></a>

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps">AppDpPipelineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipeline.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.isConstruct"></a>

```typescript
import { AppDpPipeline } from '@m-yamagishi/aws-cdk-appdp'

AppDpPipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipeline.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.aws_codepipeline.Pipeline</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@m-yamagishi/aws-cdk-appdp.AppDpPipeline.property.pipeline"></a>

```typescript
public readonly pipeline: Pipeline;
```

- *Type:* aws-cdk-lib.aws_codepipeline.Pipeline

---


### AppDpSource <a name="AppDpSource" id="@m-yamagishi/aws-cdk-appdp.AppDpSource"></a>

An AppDpSource that fetches the source code from a GitHub repository.

#### Initializers <a name="Initializers" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.Initializer"></a>

```typescript
import { AppDpSource } from '@m-yamagishi/aws-cdk-appdp'

new AppDpSource(scope: Construct, id: string, props: AppDpSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.Initializer.parameter.props">props</a></code> | <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSourceProps">AppDpSourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.Initializer.parameter.props"></a>

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.AppDpSourceProps">AppDpSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.fromGitHub">fromGitHub</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.isConstruct"></a>

```typescript
import { AppDpSource } from '@m-yamagishi/aws-cdk-appdp'

AppDpSource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromGitHub` <a name="fromGitHub" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.fromGitHub"></a>

```typescript
import { AppDpSource } from '@m-yamagishi/aws-cdk-appdp'

AppDpSource.fromGitHub(scope: Construct, id: string, props: AppDpGitHubSourceProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.fromGitHub.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.fromGitHub.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.fromGitHub.parameter.props"></a>

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps">AppDpGitHubSourceProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.property.commitId">commitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.property.sourceAction">sourceAction</a></code> | <code>aws-cdk-lib.aws_codepipeline.IAction</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource.property.sourceArtifact">sourceArtifact</a></code> | <code>aws-cdk-lib.aws_codepipeline.Artifact</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

---

##### `sourceAction`<sup>Required</sup> <a name="sourceAction" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.property.sourceAction"></a>

```typescript
public readonly sourceAction: IAction;
```

- *Type:* aws-cdk-lib.aws_codepipeline.IAction

---

##### `sourceArtifact`<sup>Required</sup> <a name="sourceArtifact" id="@m-yamagishi/aws-cdk-appdp.AppDpSource.property.sourceArtifact"></a>

```typescript
public readonly sourceArtifact: Artifact;
```

- *Type:* aws-cdk-lib.aws_codepipeline.Artifact

---


## Structs <a name="Structs" id="Structs"></a>

### AppDpBuildDefinitionProps <a name="AppDpBuildDefinitionProps" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps"></a>

#### Initializer <a name="Initializer" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.Initializer"></a>

```typescript
import { AppDpBuildDefinitionProps } from '@m-yamagishi/aws-cdk-appdp'

const appDpBuildDefinitionProps: AppDpBuildDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.property.buildArgs">buildArgs</a></code> | <code>{[ key: string ]: string}</code> | The build arguments that will be passed to the Docker build command. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.property.directory">directory</a></code> | <code>string</code> | The path to the Dockerfile that will be used to build the Docker image. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.property.disableArm64Build">disableArm64Build</a></code> | <code>boolean</code> | Whether to disable the ARM64 build. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.property.target">target</a></code> | <code>string</code> | The target stage in the Dockerfile that will be used to build the Docker image. |

---

##### `buildArgs`<sup>Optional</sup> <a name="buildArgs" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.property.buildArgs"></a>

```typescript
public readonly buildArgs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The build arguments that will be passed to the Docker build command.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

The path to the Dockerfile that will be used to build the Docker image.

---

##### `disableArm64Build`<sup>Optional</sup> <a name="disableArm64Build" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.property.disableArm64Build"></a>

```typescript
public readonly disableArm64Build: boolean;
```

- *Type:* boolean

Whether to disable the ARM64 build.

---

##### `target`<sup>Optional</sup> <a name="target" id="@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinitionProps.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The target stage in the Dockerfile that will be used to build the Docker image.

---

### AppDpClusterProps <a name="AppDpClusterProps" id="@m-yamagishi/aws-cdk-appdp.AppDpClusterProps"></a>

Properties for AppDpCluster.

#### Initializer <a name="Initializer" id="@m-yamagishi/aws-cdk-appdp.AppDpClusterProps.Initializer"></a>

```typescript
import { AppDpClusterProps } from '@m-yamagishi/aws-cdk-appdp'

const appDpClusterProps: AppDpClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC that the cluster will be deployed to. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpClusterProps.property.containerInsights">containerInsights</a></code> | <code>boolean</code> | Whether to enable container insights for the cluster NOTICE: Container Insights may incur additional charges. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@m-yamagishi/aws-cdk-appdp.AppDpClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC that the cluster will be deployed to.

---

##### `containerInsights`<sup>Optional</sup> <a name="containerInsights" id="@m-yamagishi/aws-cdk-appdp.AppDpClusterProps.property.containerInsights"></a>

```typescript
public readonly containerInsights: boolean;
```

- *Type:* boolean

Whether to enable container insights for the cluster NOTICE: Container Insights may incur additional charges.

---

### AppDpGitHubSourceProps <a name="AppDpGitHubSourceProps" id="@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps"></a>

Properties for AppDpSource.

#### Initializer <a name="Initializer" id="@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.Initializer"></a>

```typescript
import { AppDpGitHubSourceProps } from '@m-yamagishi/aws-cdk-appdp'

const appDpGitHubSourceProps: AppDpGitHubSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.property.branch">branch</a></code> | <code>string</code> | The branch of the GitHub repository. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.property.oauthToken">oauthToken</a></code> | <code>aws-cdk-lib.SecretValue</code> | The OAuth token that will be used to authenticate with GitHub. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.property.owner">owner</a></code> | <code>string</code> | The owner of the GitHub repository This can be the username or organization name. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.property.repo">repo</a></code> | <code>string</code> | The name of the GitHub repository This can be the repository name. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The branch of the GitHub repository.

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.property.oauthToken"></a>

```typescript
public readonly oauthToken: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

The OAuth token that will be used to authenticate with GitHub.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The owner of the GitHub repository This can be the username or organization name.

---

##### `repo`<sup>Required</sup> <a name="repo" id="@m-yamagishi/aws-cdk-appdp.AppDpGitHubSourceProps.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

The name of the GitHub repository This can be the repository name.

---

### AppDpPipelineProps <a name="AppDpPipelineProps" id="@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps"></a>

Properties for AppDpPipeline.

#### Initializer <a name="Initializer" id="@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.Initializer"></a>

```typescript
import { AppDpPipelineProps } from '@m-yamagishi/aws-cdk-appdp'

const appDpPipelineProps: AppDpPipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.property.buildDefinitions">buildDefinitions</a></code> | <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition">AppDpBuildDefinition</a>[]</code> | The build definitions that will build the Docker images. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.property.cluster">cluster</a></code> | <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster">AppDpCluster</a></code> | The cluster that the application will be deployed to. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.property.sourceAction">sourceAction</a></code> | <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource">AppDpSource</a></code> | The source action that will trigger the pipeline This can be a CodeCommit, GitHub, S3 or any other source action that implements the IAction interface It must be provided by the user. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.property.needManualApproval">needManualApproval</a></code> | <code>boolean</code> | Whether the pipeline requires manual approval before deploying the application. |

---

##### `buildDefinitions`<sup>Required</sup> <a name="buildDefinitions" id="@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.property.buildDefinitions"></a>

```typescript
public readonly buildDefinitions: AppDpBuildDefinition[];
```

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.AppDpBuildDefinition">AppDpBuildDefinition</a>[]

The build definitions that will build the Docker images.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.property.cluster"></a>

```typescript
public readonly cluster: AppDpCluster;
```

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.AppDpCluster">AppDpCluster</a>

The cluster that the application will be deployed to.

---

##### `sourceAction`<sup>Required</sup> <a name="sourceAction" id="@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.property.sourceAction"></a>

```typescript
public readonly sourceAction: AppDpSource;
```

- *Type:* <a href="#@m-yamagishi/aws-cdk-appdp.AppDpSource">AppDpSource</a>

The source action that will trigger the pipeline This can be a CodeCommit, GitHub, S3 or any other source action that implements the IAction interface It must be provided by the user.

> [https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline_actions.GitHubSourceAction.html
Example:

```ts
const oauthToken = SecretValue.secretsManager('my-github-token');
const branch = 'main'; // Target branch
const sourceAction = AppDpSource.fromGitHub({
owner: 'il-m-yamagishi',
repo: 'aws-cdk-appdp',
oauthToken,
branch,
});
```](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline_actions.GitHubSourceAction.html
Example:

```ts
const oauthToken = SecretValue.secretsManager('my-github-token');
const branch = 'main'; // Target branch
const sourceAction = AppDpSource.fromGitHub({
owner: 'il-m-yamagishi',
repo: 'aws-cdk-appdp',
oauthToken,
branch,
});
```)

---

##### `needManualApproval`<sup>Optional</sup> <a name="needManualApproval" id="@m-yamagishi/aws-cdk-appdp.AppDpPipelineProps.property.needManualApproval"></a>

```typescript
public readonly needManualApproval: boolean;
```

- *Type:* boolean

Whether the pipeline requires manual approval before deploying the application.

---

### AppDpSourceProps <a name="AppDpSourceProps" id="@m-yamagishi/aws-cdk-appdp.AppDpSourceProps"></a>

An AppDpSource that fetches the source code from a GitHub repository.

#### Initializer <a name="Initializer" id="@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.Initializer"></a>

```typescript
import { AppDpSourceProps } from '@m-yamagishi/aws-cdk-appdp'

const appDpSourceProps: AppDpSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.property.oauthToken">oauthToken</a></code> | <code>aws-cdk-lib.SecretValue</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.property.repo">repo</a></code> | <code>string</code> | *No description.* |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.property.oauthToken"></a>

```typescript
public readonly oauthToken: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

---

##### `owner`<sup>Required</sup> <a name="owner" id="@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@m-yamagishi/aws-cdk-appdp.AppDpSourceProps.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

### ServiceProps <a name="ServiceProps" id="@m-yamagishi/aws-cdk-appdp.ServiceProps"></a>

#### Initializer <a name="Initializer" id="@m-yamagishi/aws-cdk-appdp.ServiceProps.Initializer"></a>

```typescript
import { ServiceProps } from '@m-yamagishi/aws-cdk-appdp'

const serviceProps: ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.ServiceProps.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | The task definition that will be used to run the service. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.ServiceProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | The desired number of tasks that should be running in the service. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.ServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether to enable the execute command feature for the service. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.ServiceProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The security groups that will be attached to the service. |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.ServiceProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets that the service will be deployed to. |

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@m-yamagishi/aws-cdk-appdp.ServiceProps.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

The task definition that will be used to run the service.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@m-yamagishi/aws-cdk-appdp.ServiceProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

The desired number of tasks that should be running in the service.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@m-yamagishi/aws-cdk-appdp.ServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean

Whether to enable the execute command feature for the service.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@m-yamagishi/aws-cdk-appdp.ServiceProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The security groups that will be attached to the service.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@m-yamagishi/aws-cdk-appdp.ServiceProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

The subnets that the service will be deployed to.

---

## Classes <a name="Classes" id="Classes"></a>

### Hello <a name="Hello" id="@m-yamagishi/aws-cdk-appdp.Hello"></a>

#### Initializers <a name="Initializers" id="@m-yamagishi/aws-cdk-appdp.Hello.Initializer"></a>

```typescript
import { Hello } from '@m-yamagishi/aws-cdk-appdp'

new Hello()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@m-yamagishi/aws-cdk-appdp.Hello.sayHello">sayHello</a></code> | *No description.* |

---

##### `sayHello` <a name="sayHello" id="@m-yamagishi/aws-cdk-appdp.Hello.sayHello"></a>

```typescript
public sayHello(): string
```





