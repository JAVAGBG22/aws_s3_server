# Create VPC

Name: MyVPC
IPv4 CIDR Block: 10.0.0.0/16

# Create Subnets

Name: Public-1A
Availability Zone: xx-xxx-1a
IPv4 CIDR Block: 10.0.1.0/24

Name: Public-1B
Availability Zone: xx-xxx-1b
IPv4 CIDR Block: 10.0.2.0/24

Name: Private-1A
Availability Zone: xx-xxx-1a
IPv4 CIDR Block: 10.0.3.0/24

Name: Private-1B
Availability Zone: xx-xxx-1b
IPv4 CIDR Block: 10.0.4.0/24

# Create private route table

Name: Private-RT
VPC: MyVPC
Subnet associations: Private-1A, Private-1B

# Create Internet Gateway

Name: MyIGW
VPC: MyVPC

# Create an Amazon S3 bucket

aws s3 mb s3://mynewbucket

# List S3 buckets

aws s3 ls

# Upload a file to the S3 bucket

aws s3 cp testfile s3://mynewbucket

aws s3 cp index.html s3://mynewbucket

# List contents of the S3 bucket

aws s3 ls s3://mynewbucket54412

# Delete the S3 bucket

aws s3 rb --force s3://mynewbucket
