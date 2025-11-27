"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

export default function DevOpsWithAWS() {
  const courseData = {
    title: "DevOps with AWS",
    code: "DEVOPS-AWS-002",
    duration: "4 Months",
    level: "Intermediate to Advanced",
    description: "Master DevOps practices on AWS cloud platform. Learn to build, deploy, and manage scalable applications using AWS DevOps services and industry-standard tools. Prepare for AWS DevOps Engineer Professional certification.",
    features: [
      "Complete DevOps on AWS Cloud",
      "AWS DevOps services - CodePipeline, CodeBuild, CodeDeploy",
      "Infrastructure as Code with AWS CloudFormation and Terraform",
      "CI/CD pipelines on AWS",
      "Container orchestration with ECS and EKS",
      "AWS monitoring with CloudWatch and X-Ray",
      "AWS security and compliance best practices",
      "Serverless DevOps with Lambda and SAM",
      "Preparation for AWS Certified DevOps Engineer Professional",
      "Real-world AWS DevOps projects",
      "Industry expert mentorship",
      "Job placement assistance"
    ],
    objectives: [
      "Master AWS DevOps services and tools",
      "Build CI/CD pipelines with CodePipeline and CodeBuild",
      "Deploy applications on ECS and EKS",
      "Implement Infrastructure as Code with CloudFormation and Terraform",
      "Monitor applications with CloudWatch and X-Ray",
      "Implement security best practices",
      "Prepare for AWS DevOps Engineer Professional certification"
    ],
    modules: [
      {
        title: "Module 1: DevOps and AWS Fundamentals",
        duration: "1 Week",
        topics: [
          "DevOps Principles and AWS Infrastructure",
          "AWS Core Services - EC2, VPC, S3, IAM",
          "AWS Well-Architected Framework"
        ]
      },
      {
        title: "Module 2: Version Control with AWS CodeCommit",
        duration: "3 Days",
        topics: [
          "Git Workflows and AWS CodeCommit",
          "GitHub/GitLab Integration with AWS",
          "Branch Strategies and Code Reviews"
        ]
      },
      {
        title: "Module 3: CI/CD on AWS",
        duration: "1 Week",
        topics: [
          "AWS CodeBuild and CodeDeploy",
          "AWS CodePipeline - Multi-stage Pipelines",
          "Deployment Strategies and Automation"
        ]
      },
      {
        title: "Module 4: Infrastructure as Code",
        duration: "1 Week",
        topics: [
          "AWS CloudFormation Templates and Stacks",
          "Terraform for AWS Infrastructure",
          "Multi-region and Multi-account Setup"
        ]
      },
      {
        title: "Module 5: Container Services on AWS",
        duration: "1.5 Weeks",
        topics: [
          "Amazon ECS and AWS Fargate",
          "Amazon EKS - Kubernetes on AWS",
          "Container Registry and Helm Charts"
        ]
      },
      {
        title: "Module 6: Monitoring and Security",
        duration: "1 Week",
        topics: [
          "CloudWatch, X-Ray, and CloudTrail",
          "AWS IAM and Secrets Management",
          "DevSecOps on AWS"
        ]
      },
      {
        title: "Module 7: Serverless DevOps",
        duration: "1 Week",
        topics: [
          "AWS Lambda and SAM",
          "API Gateway and Step Functions",
          "Serverless CI/CD Pipelines"
        ]
      },
      {
        title: "Module 8: Real-World Projects & Certification",
        duration: "1.5 Weeks",
        topics: [
          "Enterprise CI/CD Pipeline Implementation",
          "Microservices on ECS/EKS",
          "AWS DevOps Engineer Professional Exam Prep"
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of DevOps concepts",
      "AWS Cloud fundamentals or AWS Certified Solutions Architect Associate",
      "Linux/Windows command line experience",
      "Basic networking knowledge",
      "Programming/scripting knowledge (Python, Bash, or similar)"
    ],
    audience: [
      "DevOps Engineers looking to specialize in AWS",
      "Cloud Engineers and Solutions Architects",
      "System Administrators migrating to AWS",
      "Developers building cloud-native applications",
      "IT professionals preparing for AWS DevOps certification",
      "Anyone wanting to master DevOps on AWS"
    ],
    careerPaths: [
      "AWS DevOps Engineer",
      "Cloud DevOps Specialist",
      "AWS Solutions Architect",
      "Site Reliability Engineer (SRE) - AWS",
      "Cloud Automation Engineer",
      "AWS Infrastructure Engineer"
    ],
    certification: "AWS Certified DevOps Engineer Professional (DOP-C02)",
    price: "45,000",
    originalPrice: "65,000",
    instructor: "AWS Certified Solutions Architect & DevOps Professional",
    nextBatch: "Starting Soon",
    mode: ["Online", "Live Classes", "AWS Hands-on Labs"]
  };

  return <CourseDetailPage course={courseData} />;
}
