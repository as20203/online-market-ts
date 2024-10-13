import * as cdk from 'aws-cdk-lib';
import { InstanceType, InstanceClass, InstanceSize, MachineImage } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { AutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import { NetworkStack } from './network-stack';

export class EC2ASGStack extends cdk.Stack {
    public readonly asg: AutoScalingGroup;

    constructor(scope: Construct, id: string, props: cdk.StackProps, networkStack: NetworkStack) {
        super(scope, id, props);

        // Create an EC2 Role
        const role = new Role(this, 'NextJsEc2Role', {
            assumedBy: new ServicePrincipal('ec2.amazonaws.com')
        });

        role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonS3ReadOnlyAccess'));

        // Define Auto Scaling Group (ASG)
        this.asg = new AutoScalingGroup(this, 'NextJsASG', {
            vpc: networkStack.vpc,
            instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO), // Choose instance type
            machineImage: MachineImage.latestAmazonLinux2(), // Amazon Linux 2
            securityGroup: networkStack.securityGroup,
            role,
            minCapacity: 1, // Minimum number of instances
            maxCapacity: 5, // Maximum number of instances
        });
    }
}