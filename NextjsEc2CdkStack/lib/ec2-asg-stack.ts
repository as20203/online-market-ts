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
        role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));


        // Define Auto Scaling Group (ASG)
        this.asg = new AutoScalingGroup(this, 'NextJsASG', {
            vpc: networkStack.vpc,
            instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO), // Choose instance type
            machineImage: MachineImage.latestAmazonLinux2023(), // Amazon Linux 2
            securityGroup: networkStack.securityGroup,
            role,
            minCapacity: 1, // Minimum number of instances
            maxCapacity: 5, // Maximum number of instances,
        });

        const userData = `#!/bin/bash
# Update the system
sudo dnf update -y

# Install Nginx
sudo dnf install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Allow port 80 traffic in Nginx
sudo sed -i '/listen 80 default_server;/ s/^/#/; /listen \[::\]:80 default_server;/ s/^/#/' /etc/nginx/nginx.conf
cat <<EOL | sudo tee /etc/nginx/conf.d/your-nextjs-app.conf
server {
listen 80;
server_name your-domain.com;

location / {
proxy_pass http://localhost:3000;
proxy_http_version 1.1;
proxy_set_header Upgrade \$http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host \$host;
proxy_cache_bypass \$http_upgrade;
}
}
EOL
sudo systemctl restart nginx

# Install Git
sudo dnf install git -y

# Install NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

# Install Node.js 20 using NVM
nvm install 20
nvm use 20

# Install PM2 for process management
npm install -g pm2

# Clone your application from GitHub
cd /home/ec2-user
git clone https://github.com/as20203/online-market-ts
cd online-market-ts

# Install application dependencies
npm install

# Build the application
npm run build

# Start the application using PM2 and bind to port 80
pm2 start npm --name "online-market" -- run start -- -p 80
# Ensure PM2 restarts the app on server reboot
pm2 startup
pm2 save
        `;

        this.asg.addUserData(userData);
    }
}