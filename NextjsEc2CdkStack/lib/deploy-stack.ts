// import * as cdk from 'aws-cdk-lib';
// import { Stack, StackProps } from 'aws-cdk-lib';
// import {
//   InstanceClass,
//   InstanceSize,
//   InstanceType,
//   MachineImage,
//   Vpc,
//   SecurityGroup,
//   Peer,
//   Port,
// } from 'aws-cdk-lib/aws-ec2';
// import {
//   Role,
//   ServicePrincipal,
//   ManagedPolicy,
// } from 'aws-cdk-lib/aws-iam';
// import { AutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
// import {
//   ApplicationLoadBalancer,
//   // Listener,
// } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
// // import {
// //     HostedZone,
// //     ARecord,
// //     RecordTarget
// // } from 'aws-cdk-lib/aws-route53';
// // import { LoadBalancerTarget } from 'aws-cdk-lib/aws-route53-targets';
// import { Construct } from 'constructs';

// export class NextjsEc2CdkStack extends Stack {
//   constructor(scope: Construct, id: string, props?: StackProps) {
//     super(scope, id, props);

//     // Create a VPC
//     const vpc = new Vpc(this, 'NextJsVpc', {
//       maxAzs: 2 // Creates the VPC in 2 Availability Zones
//     });

//     // Create a Security Group
//     const securityGroup = new SecurityGroup(this, 'NextJsSecurityGroup', {
//       vpc,
//       allowAllOutbound: true
//     });

//     // Allow SSH, HTTP, and HTTPS access
//     securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(22), 'Allow SSH access');
//     securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(80), 'Allow HTTP access');
//     securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(443), 'Allow HTTPS access');

//     // Create an EC2 Role
//     const role = new Role(this, 'NextJsEc2Role', {
//       assumedBy: new ServicePrincipal('ec2.amazonaws.com')
//     });

//     role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonS3ReadOnlyAccess'));

//     // Define Auto Scaling Group (ASG)
//     const asg = new AutoScalingGroup(this, 'NextJsASG', {
//       vpc,
//       instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO), // Choose instance type
//       machineImage: MachineImage.latestAmazonLinux2(), // Amazon Linux 2
//       securityGroup,
//       role,
//       minCapacity: 2, // Minimum number of instances
//       maxCapacity: 5, // Maximum number of instances
//     });

//     // Add EC2 User Data (install Node.js, Nginx, and app setup)
//     const userData = `#!/bin/bash
//         sudo yum update -y
//         sudo amazon-linux-extras install nginx1.12 -y
//         sudo systemctl start nginx
//         sudo systemctl enable nginx
//         curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
//         sudo yum install -y nodejs
//         sudo yum install git -y
//         cd /home/ec2-user
//         git clone https://github.com/as20203/online-market-ts
//         cd online-market-ts
//         npm install
//         npm run build
//         npm run start`;

//     asg.addUserData(userData);

//     // Create the Load Balancer
//     const lb = new ApplicationLoadBalancer(this, 'NextJsALB', {
//       vpc,
//       internetFacing: true,
//     });

//     // Add a listener to forward HTTP traffic
//     const listener = lb.addListener('Listener', {
//       port: 80,
//     });

//     // Register the Auto Scaling Group (ASG) as a target for the ALB
//     listener.addTargets('NextJsTargetGroup', {
//       port: 80,
//       targets: [asg],
//       healthCheck: {
//         path: '/', // Path for health checks
//       }
//     });

//     // Output the Load Balancer URL
//     new cdk.CfnOutput(this, 'LoadBalancerURL', {
//       value: lb.loadBalancerDnsName
//     });

//     // // Replace with your hosted zone domain name
//     // const zone = HostedZone.fromLookup(this, 'MyZone', { domainName: 'yourdomain.com' });

//     // // Create a Route 53 alias record pointing to the ALB
//     // new ARecord(this, 'NextJsAliasRecord', {
//     //     zone,
//     //     target: RecordTarget.fromAlias(new LoadBalancerTarget(lb)),
//     //     recordName: 'www' // This would create www.yourdomain.com alias to the ALB
//     // });

//     // Auto-scale based on average CPU utilization
//     asg.scaleOnCpuUtilization('CpuScaling', {
//       targetUtilizationPercent: 50, // Scale when average CPU usage exceeds 50%
//     });
//   }
// }

// //OqG9Q(^4
