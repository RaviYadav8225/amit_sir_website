"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const awsCloudPractitionerData = {
  title: "AWS Certified Cloud Practitioner",
  description: "Prepare for the AWS Certified Cloud Practitioner exam with comprehensive training covering AWS cloud concepts, services, security, architecture, pricing, and support. This entry-level certification validates your understanding of AWS cloud fundamentals.",
  duration: "6-8 Weeks",
  level: "Beginner",
  prerequisites: [
    "6 months of experience with AWS cloud",
    "Basic understanding of IT services",
    "Knowledge of basic cloud computing concepts",
    "Familiarity with AWS core services"
  ],
  objectives: [
    "Understand AWS cloud concepts and value proposition",
    "Master AWS core services and their use cases",
    "Learn AWS security and compliance practices",
    "Understand AWS pricing and billing models",
    "Identify AWS support plans and resources",
    "Pass the AWS Certified Cloud Practitioner exam"
  ],
  modules: [
    {
      title: "Cloud Concepts",
      duration: "1 Week",
      topics: [
        "AWS Well-Architected Framework",
        "Cloud computing models (IaaS, PaaS, SaaS)",
        "Cloud deployment models",
        "Benefits of AWS cloud",
        "AWS shared responsibility model"
      ]
    },
    {
      title: "AWS Core Services",
      duration: "2.5 Weeks",
      topics: [
        "Compute services (EC2, Lambda, Elastic Beanstalk)",
        "Storage services (S3, EBS, EFS)",
        "Database services (RDS, DynamoDB)",
        "Networking services (VPC, CloudFront)",
        "Analytics and machine learning services"
      ]
    },
    {
      title: "Security and Compliance",
      duration: "1.5 Weeks",
      topics: [
        "AWS Identity and Access Management (IAM)",
        "AWS security services",
        "Data encryption and key management",
        "Compliance frameworks",
        "Security best practices"
      ]
    },
    {
      title: "Technology & Architecture",
      duration: "1 Week",
      topics: [
        "Architectural design principles",
        "Fault tolerance and high availability",
        "Disaster recovery strategies",
        "Microservices and serverless architectures"
      ]
    },
    {
      title: "Billing and Pricing",
      duration: "1 Week",
      topics: [
        "AWS pricing models",
        "Cost optimization strategies",
        "AWS billing and cost management tools",
        "Support plans comparison",
        "AWS Trusted Advisor"
      ]
    }
  ],
  certification: "AWS Certified Cloud Practitioner (CLF-C02)",
  price: "18,000",
  originalPrice: "25,000",
  features: [
    "Official AWS curriculum",
    "Practice exams and mock tests",
    "Exam voucher included",
    "Study guides and reference materials",
    "Expert mentorship",
    "Flexible scheduling",
    "Certification guarantee"
  ],
  instructor: "AWS Certified Solutions Architect",
  nextBatch: "22nd October 2025",
  mode: ["Online", "Self-paced"],
  pdfUrl: "/pdfs/aws-cloud-practitioner-clf-c02-syllabus.pdf",
  pdfName: "AWS Cloud Practitioner CLF-C02 Syllabus"
};

export default function AWSCloudPractitionerPage() {
  return <CourseDetailPage course={awsCloudPractitionerData} />;
}