"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const awsSecurityData = {
  title: "AWS Certified Security – Specialty",
  description: "Master AWS security services and prepare for the Security Specialty certification. Learn to secure AWS workloads, implement security controls, manage compliance, and respond to security incidents with advanced AWS security tools and best practices.",
  duration: "10-12 Weeks",
  level: "Advanced",
  prerequisites: [
    "AWS Certified Solutions Architect Associate or equivalent",
    "2+ years of hands-on experience with AWS security",
    "Understanding of security concepts and practices",
    "Experience with compliance and governance frameworks"
  ],
  objectives: [
    "Design and implement secure AWS architectures",
    "Manage identity and access management at scale",
    "Implement data protection and encryption strategies",
    "Configure security monitoring and incident response",
    "Ensure compliance with security standards",
    "Pass the AWS Security Specialty certification exam"
  ],
  modules: [
    {
      title: "Incident Response and Forensics",
      duration: "2.5 Weeks",
      topics: [
        "Security incident response planning",
        "CloudTrail for forensics and auditing",
        "Security event correlation and analysis",
        "Automated incident response workflows",
        "Digital forensics in AWS environments"
      ]
    },
    {
      title: "Logging and Monitoring",
      duration: "2.5 Weeks",
      topics: [
        "Centralized security logging strategies",
        "GuardDuty threat detection and response",
        "Security Hub for security posture management",
        "Config Rules for compliance monitoring",
        "Custom security metrics and alerting"
      ]
    },
    {
      title: "Infrastructure Security",
      duration: "2.5 Weeks",
      topics: [
        "VPC security design patterns",
        "Network security controls and monitoring",
        "EC2 and container security hardening",
        "Serverless security considerations",
        "Infrastructure as Code security scanning"
      ]
    },
    {
      title: "Identity and Access Management",
      duration: "2 Weeks",
      topics: [
        "Advanced IAM policies and conditions",
        "Cross-account access patterns",
        "Identity federation and SAML integration",
        "Privileged access management",
        "Access analytics and recommendations"
      ]
    },
    {
      title: "Data Protection and Encryption",
      duration: "1.5 Weeks",
      topics: [
        "KMS key management and rotation",
        "CloudHSM for dedicated encryption",
        "Data encryption strategies (at rest and in transit)",
        "Secrets Manager and Parameter Store",
        "Data loss prevention and classification"
      ]
    },
    {
      title: "Management and Governance",
      duration: "1 Week",
      topics: [
        "AWS Organizations and SCPs for security",
        "Compliance automation and reporting",
        "Security assessment and penetration testing",
        "Cost optimization for security services",
        "Exam preparation and security scenarios"
      ]
    }
  ],
  certification: "AWS Certified Security – Specialty (SCS-C02)",
  price: "28,999",
  originalPrice: "41,999",
  features: [
    "Specialty-level security curriculum",
    "Hands-on security labs and simulations",
    "Real-world security incident scenarios",
    "Exam voucher included",
    "Security tool certifications",
    "Expert security architect guidance",
    "High-demand security career paths"
  ],
  instructor: "AWS Certified Security Specialist",
  nextBatch: "13th December 2025",
  mode: ["Online", "Security-focused Intensive"]
};

export default function AWSSecurityPage() {
  return <CourseDetailPage course={awsSecurityData} />;
}