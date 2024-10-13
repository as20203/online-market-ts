import * as cdk from 'aws-cdk-lib';
import { Peer, Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class NetworkStack extends cdk.Stack {
    public readonly vpc: Vpc;
    public readonly securityGroup: SecurityGroup;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define a VPC resource
        this.vpc = new Vpc(this, 'MyVpc', {
            maxAzs: 2  // Create a VPC with 3 Availability Zones
        });
        // Create a Security Group
        this.securityGroup = new SecurityGroup(this, 'NextJsSecurityGroup', {
            vpc: this.vpc,
            allowAllOutbound: true
        });

        // Allow SSH, HTTP, and HTTPS access
        this.securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(22), 'Allow SSH access');
        this.securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(80), 'Allow HTTP access');
        this.securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(443), 'Allow HTTPS access');
    }
}