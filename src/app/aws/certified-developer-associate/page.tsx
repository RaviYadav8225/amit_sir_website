"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const awsDeveloperData = {
  title: "AWS Certified Developer – Associate",
  description: "Master AWS application development and prepare for the Developer Associate certification. Learn to develop, deploy, and debug cloud-based applications using AWS services including Lambda, API Gateway, DynamoDB, and CI/CD pipelines.",
  duration: "10-12 Weeks",
  level: "Intermediate",
  prerequisites: [
    "Programming experience in any high-level language",
    "Understanding of core AWS services",
    "Basic knowledge of software development lifecycle",
    "Familiarity with REST APIs and HTTP protocols"
  ],
  objectives: [
    "Develop and deploy applications on AWS",
    "Master serverless application architectures",
    "Implement security and monitoring in applications",
    "Use AWS SDKs and developer tools",
    "Build CI/CD pipelines for application deployment",
    "Pass the AWS Certified Developer Associate exam"
  ],
  modules: [
    {
      title: "Development with AWS Services",
      duration: "3 Weeks",
      topics: [
        "AWS SDKs and CLI development",
        "EC2 and container-based applications",
        "Lambda functions and serverless architecture",
        "API Gateway for RESTful APIs",
        "Application integration with SQS and SNS"
      ]
    },
    {
      title: "Security and Authentication",
      duration: "2 Weeks",
      topics: [
        "IAM roles and policies for applications",
        "Cognito for user authentication",
        "AWS Secrets Manager and Parameter Store",
        "Application-level security best practices",
        "Data encryption and key management"
      ]
    },
    {
      title: "Database and Storage Services",
      duration: "2.5 Weeks",
      topics: [
        "DynamoDB design patterns and operations",
        "RDS integration and connection pooling",
        "S3 integration and signed URLs",
        "ElastiCache for application caching",
        "Database migration and data modeling"
      ]
    },
    {
      title: "Deployment and CI/CD",
      duration: "2 Weeks",
      topics: [
        "CodeCommit, CodeBuild, and CodePipeline",
        "CodeDeploy strategies and configurations",
        "Elastic Beanstalk application deployment",
        "CloudFormation for infrastructure as code",
        "Blue/green and canary deployments"
      ]
    },
    {
      title: "Monitoring and Debugging",
      duration: "1.5 Weeks",
      topics: [
        "CloudWatch Logs and application monitoring",
        "X-Ray for distributed tracing",
        "Application performance optimization",
        "Error handling and retry mechanisms",
        "Debugging techniques and tools"
      ]
    },
    {
      title: "Advanced Development Topics",
      duration: "1 Week",
      topics: [
        "Event-driven architectures",
        "Microservices patterns on AWS",
        "Cost optimization for applications",
        "Testing strategies and automation",
        "Exam preparation and practice projects"
      ]
    }
  ],
  certification: "AWS Certified Developer – Associate (DVA-C02)",
  price: "23,999",
  originalPrice: "33,999",
  features: [
    "Official AWS curriculum",
    "Hands-on coding labs and projects",
    "Real-world application development",
    "Exam voucher included",
    "AWS SDK training",
    "Expert developer mentorship",
    "Portfolio project development"
  ],
  instructor: "AWS Certified Developer Professional",
  nextBatch: "22nd November 2025",
  mode: ["Online", "Project-based Learning"]
};

export default function AWSDeveloperPage() {
  return <CourseDetailPage course={awsDeveloperData} />;
}