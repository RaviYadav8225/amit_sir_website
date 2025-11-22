"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const awsCloudServicesData = {
  title: "AWS Cloud Services",
  description: "Master Amazon Web Services fundamentals and learn to build, deploy, and manage applications in the AWS cloud. This comprehensive course covers core AWS services, best practices, and real-world scenarios to prepare you for cloud computing success.",
  duration: "8-12 Weeks",
  level: "Beginner to Intermediate",
  prerequisites: [
    "Basic understanding of computing concepts",
    "Familiarity with networking fundamentals", 
    "Basic knowledge of operating systems (Windows/Linux)",
    "No prior cloud experience required"
  ],
  objectives: [
    "Understand AWS cloud computing concepts and architecture",
    "Learn to deploy and manage AWS infrastructure services",
    "Master AWS storage, networking, and security services",
    "Implement cost optimization and monitoring strategies",
    "Design fault-tolerant and scalable cloud solutions",
    "Prepare for AWS certification exams"
  ],
  modules: [
    {
      title: "Introduction to Cloud Computing & AWS",
      duration: "1 Week",
      topics: [
        "Cloud computing fundamentals and service models",
        "AWS global infrastructure and regions",
        "AWS Management Console overview",
        "AWS CLI and SDK basics",
        "AWS account setup and billing"
      ]
    },
    {
      title: "Core Compute Services",
      duration: "2 Weeks", 
      topics: [
        "Amazon EC2 instances and instance types",
        "AMIs, security groups, and key pairs",
        "Elastic Load Balancing (ELB)",
        "Auto Scaling Groups",
        "AWS Lambda serverless computing"
      ]
    },
    {
      title: "Storage Services",
      duration: "2 Weeks",
      topics: [
        "Amazon S3 buckets and object management",
        "S3 storage classes and lifecycle policies",
        "Amazon EBS volumes and snapshots",
        "Amazon EFS file systems",
        "AWS Storage Gateway"
      ]
    },
    {
      title: "Database Services",
      duration: "1.5 Weeks",
      topics: [
        "Amazon RDS and database engines",
        "Amazon DynamoDB NoSQL database",
        "Amazon ElastiCache",
        "Database backup and recovery",
        "Performance monitoring"
      ]
    },
    {
      title: "Networking & Security",
      duration: "2 Weeks",
      topics: [
        "Amazon VPC and subnets",
        "Internet and NAT Gateways",
        "Route Tables and Security Groups",
        "AWS IAM users, roles, and policies",
        "AWS CloudTrail and monitoring"
      ]
    },
    {
      title: "Monitoring & Deployment",
      duration: "1.5 Weeks",
      topics: [
        "Amazon CloudWatch metrics and alarms",
        "AWS CloudFormation templates",
        "AWS Elastic Beanstalk",
        "Cost optimization strategies",
        "Best practices and troubleshooting"
      ]
    }
  ],
  certification: "AWS Certified Cloud Practitioner / Solutions Architect Associate Preparation",
  price: "18,000",
  originalPrice: "27,000",
  features: [
    "Live instructor-led training",
    "Hands-on labs with real AWS environment",
    "Course completion certificate",
    "Lifetime access to recorded sessions",
    "24/7 doubt clearing support",
    "Job placement assistance",
    "Free AWS credits for practice"
  ],
  instructor: "Expert AWS Certified Trainer",
  nextBatch: "15th October 2025",
  mode: ["Online", "Classroom", "Hybrid"]
};

export default function AWSCloudServicesPage() {
  return <CourseDetailPage course={awsCloudServicesData} />;
}