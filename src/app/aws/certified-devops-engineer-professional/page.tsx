"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const awsDevOpsEngineerData = {
  title: "AWS Certified DevOps Engineer – Professional",
  description: "Master advanced DevOps practices on AWS and prepare for the Professional-level certification. Learn to implement and manage continuous delivery systems, automate security controls, and optimize AWS environments for high availability and scalability.",
  duration: "12-14 Weeks",
  level: "Advanced",
  prerequisites: [
    "AWS Certified Developer or SysOps Administrator Associate",
    "2+ years of provisioning and managing AWS environments",
    "Experience with scripting and automation",
    "Understanding of DevOps methodologies and practices"
  ],
  objectives: [
    "Implement and manage continuous delivery systems",
    "Automate security controls and governance processes",
    "Design and implement monitoring and logging solutions",
    "Optimize AWS environments for high availability",
    "Manage infrastructure as code at enterprise scale",
    "Pass the AWS DevOps Engineer Professional exam"
  ],
  modules: [
    {
      title: "SDLC Automation",
      duration: "3 Weeks",
      topics: [
        "Advanced CodePipeline orchestration",
        "CodeBuild custom build environments",
        "CodeDeploy advanced deployment strategies",
        "Multi-account CI/CD architectures",
        "Automated testing and quality gates"
      ]
    },
    {
      title: "Configuration Management and IaC",
      duration: "3 Weeks",
      topics: [
        "Advanced CloudFormation techniques",
        "CDK for infrastructure development",
        "Systems Manager advanced automation",
        "Configuration drift detection and remediation",
        "Cross-region and multi-account deployments"
      ]
    },
    {
      title: "Monitoring and Logging",
      duration: "2.5 Weeks",
      topics: [
        "Advanced CloudWatch analytics and insights",
        "Centralized logging with CloudWatch Logs",
        "Custom metrics and automated remediation",
        "Distributed tracing with X-Ray",
        "Third-party monitoring integrations"
      ]
    },
    {
      title: "Policies and Standards Automation",
      duration: "2 Weeks",
      topics: [
        "AWS Config advanced rules and remediation",
        "Service Control Policies (SCPs) implementation",
        "AWS Security Hub automation",
        "Compliance monitoring and reporting",
        "Automated security scanning and patching"
      ]
    },
    {
      title: "Incident and Event Response",
      duration: "1.5 Weeks",
      topics: [
        "Automated incident response workflows",
        "EventBridge for event-driven automation",
        "Lambda for reactive automation",
        "Disaster recovery automation",
        "Chaos engineering practices"
      ]
    },
    {
      title: "High Availability and DRP",
      duration: "2 Weeks",
      topics: [
        "Multi-region architecture patterns",
        "Automated failover mechanisms",
        "Backup and recovery automation",
        "Business continuity planning",
        "Exam preparation and case studies"
      ]
    }
  ],
  certification: "AWS Certified DevOps Engineer – Professional (DOP-C02)",
  price: "60,000",
  originalPrice: "1,00,000",
  features: [
    "Professional-level AWS curriculum",
    "Enterprise-scale hands-on labs",
    "Real-world DevOps case studies",
    "Exam voucher included",
    "Advanced automation projects",
    "Expert DevOps mentorship",
    "Career advancement to senior roles"
  ],
  instructor: "AWS Certified DevOps Engineer Professional",
  nextBatch: "29th November 2025",
  mode: ["Online", "Intensive Bootcamp"]
};

export default function AWSDevOpsEngineerPage() {
  return <CourseDetailPage course={awsDevOpsEngineerData} />;
}