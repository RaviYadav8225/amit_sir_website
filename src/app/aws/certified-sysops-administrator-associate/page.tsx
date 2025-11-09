"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const awsSysOpsAdminData = {
  title: "AWS Certified SysOps Administrator – Associate",
  description: "Master AWS systems operations and prepare for the SysOps Administrator Associate certification. Learn to deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS with monitoring, security, and cost optimization.",
  duration: "10-12 Weeks",
  level: "Intermediate",
  prerequisites: [
    "AWS Certified Cloud Practitioner or equivalent knowledge",
    "1+ years of hands-on experience with AWS",
    "Understanding of operating systems administration",
    "Basic knowledge of networking and security"
  ],
  objectives: [
    "Deploy, manage, and operate AWS systems",
    "Implement and control data flow to and from AWS",
    "Monitor and audit AWS environments",
    "Implement security controls and compliance",
    "Optimize cost and performance of AWS resources",
    "Pass the AWS SysOps Administrator Associate exam"
  ],
  modules: [
    {
      title: "Monitoring and Reporting",
      duration: "2.5 Weeks",
      topics: [
        "CloudWatch metrics, alarms, and dashboards",
        "AWS Config and compliance monitoring",
        "CloudTrail for audit and governance",
        "Systems Manager for operational insights",
        "Performance monitoring and optimization"
      ]
    },
    {
      title: "High Availability and Deployment",
      duration: "2.5 Weeks",
      topics: [
        "Auto Scaling Groups and Launch Templates",
        "Elastic Load Balancers configuration",
        "Multi-AZ deployments and disaster recovery",
        "Blue/green and rolling deployments",
        "Backup and recovery strategies"
      ]
    },
    {
      title: "Data Management and Transfer",
      duration: "2 Weeks",
      topics: [
        "S3 storage classes and lifecycle policies",
        "EBS volume management and snapshots",
        "Data transfer services (DataSync, Migration Hub)",
        "Database backup and recovery",
        "Data encryption in transit and at rest"
      ]
    },
    {
      title: "Security and Compliance",
      duration: "2 Weeks",
      topics: [
        "IAM policies and access management",
        "Network security and VPC configuration",
        "Security groups and NACLs",
        "AWS Organizations and SCPs",
        "Compliance frameworks and auditing"
      ]
    },
    {
      title: "Networking and Content Delivery",
      duration: "1.5 Weeks",
      topics: [
        "VPC peering and transit gateways",
        "Direct Connect and VPN setup",
        "CloudFront distribution management",
        "Route 53 health checks and routing",
        "Network troubleshooting"
      ]
    },
    {
      title: "Automation and Optimization",
      duration: "1.5 Weeks",
      topics: [
        "CloudFormation stack management",
        "Systems Manager automation",
        "Cost optimization strategies",
        "Resource tagging and governance",
        "Exam preparation and practice"
      ]
    }
  ],
  certification: "AWS Certified SysOps Administrator – Associate (SOA-C02)",
  price: "22,999",
  originalPrice: "32,999",
  features: [
    "Official AWS curriculum",
    "Hands-on labs with real AWS environments",
    "Performance-based scenarios",
    "Exam voucher included",
    "AWS CloudFormation templates",
    "Expert instructor guidance",
    "Career advancement support"
  ],
  instructor: "AWS Certified SysOps Administrator Professional",
  nextBatch: "15th November 2025",
  mode: ["Online", "Weekend Batches"]
};

export default function AWSSysOpsAdminPage() {
  return <CourseDetailPage course={awsSysOpsAdminData} />;
}