"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const awsSolutionsArchitectData = {
  title: "AWS Certified Solutions Architect – Associate",
  description: "Master AWS architectural best practices and prepare for the Solutions Architect Associate certification. Learn to design resilient, secure, and cost-effective cloud solutions using AWS services and architectural patterns.",
  duration: "10-12 Weeks",
  level: "Intermediate",
  prerequisites: [
    "AWS Certified Cloud Practitioner or equivalent knowledge",
    "1+ years of hands-on experience with AWS",
    "Understanding of distributed systems",
    "Basic knowledge of networking and security"
  ],
  objectives: [
    "Design resilient AWS architectures",
    "Implement secure and cost-effective solutions",
    "Master AWS core services for architecture",
    "Understand performance optimization strategies",
    "Learn disaster recovery and backup strategies",
    "Pass the AWS Solutions Architect Associate exam"
  ],
  modules: [
    {
      title: "Architectural Design Principles",
      duration: "2 Weeks",
      topics: [
        "AWS Well-Architected Framework",
        "Design for fault tolerance and high availability",
        "Scalability and elasticity principles",
        "Cost optimization strategies",
        "Security by design"
      ]
    },
    {
      title: "Compute and Storage Architecture",
      duration: "2.5 Weeks",
      topics: [
        "EC2 instance selection and optimization",
        "Auto Scaling and Load Balancing design",
        "Storage solutions (S3, EBS, EFS) architecture",
        "Lambda and serverless patterns",
        "Container orchestration with ECS/EKS"
      ]
    },
    {
      title: "Networking and Content Delivery",
      duration: "2 Weeks",
      topics: [
        "VPC design and implementation",
        "Hybrid connectivity (VPN, Direct Connect)",
        "CloudFront and content delivery strategies",
        "Route 53 DNS architecture",
        "Network security and monitoring"
      ]
    },
    {
      title: "Database and Data Architecture",
      duration: "2 Weeks",
      topics: [
        "RDS Multi-AZ and Read Replicas",
        "DynamoDB design patterns",
        "Data warehousing with Redshift",
        "Data lakes and analytics services",
        "Database migration strategies"
      ]
    },
    {
      title: "Security and Compliance",
      duration: "1.5 Weeks",
      topics: [
        "IAM design best practices",
        "Encryption in transit and at rest",
        "Compliance and governance",
        "Security monitoring and incident response",
        "Shared responsibility model"
      ]
    },
    {
      title: "Monitoring and Optimization",
      duration: "2 Weeks",
      topics: [
        "CloudWatch architecture and alerting",
        "Cost monitoring and optimization",
        "Performance monitoring and tuning",
        "Troubleshooting methodologies",
        "Exam preparation and practice"
      ]
    }
  ],
  certification: "AWS Certified Solutions Architect – Associate (SAA-C03)",
  price: "18,000",
  originalPrice: "27,000",
  features: [
    "Official AWS curriculum",
    "Hands-on architecture labs",
    "Case study projects",
    "Exam voucher included",
    "Practice exams and assessments",
    "Expert mentorship",
    "Job placement assistance"
  ],
  instructor: "AWS Certified Solutions Architect Professional",
  nextBatch: "8th November 2025",
  mode: ["Online", "Weekend Batches"],
  pdfUrl: "/pdfs/aws-solutions-architect-associate-saa-c03-syllabus.pdf",
  pdfName: "AWS Solutions Architect Associate SAA-C03 Syllabus"
};

export default function AWSSolutionsArchitectPage() {
  return <CourseDetailPage course={awsSolutionsArchitectData} />;
}