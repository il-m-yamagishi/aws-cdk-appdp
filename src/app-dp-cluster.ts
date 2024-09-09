import { ISecurityGroup, IVpc, SubnetSelection } from 'aws-cdk-lib/aws-ec2';
import {
  Cluster,
  DeploymentControllerType,
  FargateService,
  FargateTaskDefinition,
  ICluster,
} from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';

export interface ServiceProps {
  /**
   * The task definition that will be used to run the service
   */
  readonly taskDefinition: FargateTaskDefinition;

  /**
   * The desired number of tasks that should be running in the service
   *
   * @default - 1
   */
  readonly desiredCount?: number;

  /**
   * Whether to enable the execute command feature for the service
   *
   * @default - false
   */
  readonly enableExecuteCommand?: boolean;

  /**
   * The subnets that the service will be deployed to
   *
   * @default - undefined
   */
  readonly vpcSubnets?: SubnetSelection;

  /**
   * The security groups that will be attached to the service
   *
   * @default - []
   */
  readonly securityGroups?: ISecurityGroup[];
}

/**
 * Properties for AppDpCluster
 */
export interface AppDpClusterProps {
  /**
   * The VPC that the cluster will be deployed to
   */
  readonly vpc: IVpc;

  /**
   * Whether to enable container insights for the cluster
   * NOTICE: Container Insights may incur additional charges
   */
  readonly containerInsights?: boolean;
}

export class AppDpCluster extends Construct {
  public readonly cluster: ICluster;

  public httpServices: FargateService[] = [];
  public nonHttpServices: FargateService[] = [];

  constructor(scope: Construct, id: string, props: AppDpClusterProps) {
    super(scope, id);

    const {
      vpc,
      containerInsights,
    } = props;

    this.cluster = new Cluster(this, 'Cluster', {
      vpc,
      containerInsights,
    });
  }

  /**
   * Add HTTP Blue/Green deployment service
   * @param id
   * @param props
   * @returns Created FargateService
   */
  public addHTTPService(id: string, props: ServiceProps): FargateService {
    const cluster = this.cluster;
    const {
      taskDefinition,
      desiredCount,
      enableExecuteCommand,
      vpcSubnets,
      securityGroups,
    } = props;

    const service = new FargateService(this, id, {
      serviceName: id.toLowerCase(),
      cluster,
      taskDefinition,
      desiredCount,
      enableExecuteCommand,
      vpcSubnets,
      securityGroups,

      deploymentController: {
        type: DeploymentControllerType.CODE_DEPLOY, // Blue/Green deployment
      },
      circuitBreaker: {
        enable: true,
        rollback: true,
      },
    });

    this.httpServices.push(service);

    return service;
  }

  /**
   * Add non-HTTP service like queue, worker
   * This service will be deployed with rolling-update deployment
   * @param id
   * @param props
   * @returns Created FargateService
   */
  public addNonHTTPService(id: string, props: ServiceProps): FargateService {
    const cluster = this.cluster;
    const {
      taskDefinition,
      desiredCount,
      enableExecuteCommand,
      vpcSubnets,
      securityGroups,
    } = props;

    const service = new FargateService(this, id, {
      serviceName: id.toLowerCase(),
      cluster,
      taskDefinition,
      desiredCount,
      enableExecuteCommand,
      vpcSubnets,
      securityGroups,
      deploymentController: {
        type: DeploymentControllerType.ECS, // Default rolling-update deployment
      },
      circuitBreaker: {
        enable: true,
        rollback: true,
      },
    });

    this.nonHttpServices.push(service);

    return service;
  }
}
