#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
// import { NextjsEc2CdkStack } from '../lib/deploy-stack';
import { NetworkStack } from '../lib/network-stack';
import { EC2ASGStack } from '../lib/ec2-asg-stack'
const app = new cdk.App();
const networkStack = new NetworkStack(app, 'NetworkStack');
new EC2ASGStack(
    app,
    'EC2ASGStack',
    {},
    networkStack
)

app.synth();
