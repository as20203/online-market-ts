

import * as cdk from 'aws-cdk-lib';
import { AutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import { ApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';
import { NetworkStack } from './network-stack';

export class ApplicationLoadBalancerStack extends cdk.Stack {
    public readonly lb: ApplicationLoadBalancer;

    constructor(scope: Construct, id: string, asg: AutoScalingGroup, networkStack: NetworkStack, props?: cdk.StackProps,) {
        super(scope, id, props);
        // Create the Load Balancer
        this.lb = new ApplicationLoadBalancer(this, 'NextJsALB', {
            vpc: networkStack.vpc,
            internetFacing: true,
            securityGroup: networkStack.securityGroup
        });

        // Add a listener to forward HTTP traffic
        const listener = this.lb.addListener('Listener', {
            port: 80,
        });

        // Register the Auto Scaling Group (ASG) as a target for the ALB
        listener.addTargets('NextJsTargetGroup', {
            port: 80,
            targets: [asg],
            healthCheck: {
                path: '/', // Path for health checks
            }
        });

        // Output the Load Balancer URL
        new cdk.CfnOutput(this, 'LoadBalancerURL', {
            value: this.lb.loadBalancerDnsName
        });

    }
}