"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const ex380Data = {
  title: "Red Hat Certified Specialist in OpenShift Automation and Integration (EX380)",
  description: "Master advanced OpenShift automation and enterprise integration patterns. Learn to implement sophisticated automation workflows, integrate OpenShift with enterprise systems, and manage complex multi-cluster deployments.",
  duration: "10-12 Weeks",
  level: "Expert",
  prerequisites: [
    "Red Hat Certified Specialist in OpenShift Administration (EX280)",
    "Strong experience with Ansible automation",
    "Understanding of enterprise integration patterns",
    "Experience with API management and microservices"
  ],
  objectives: [
    "Implement advanced OpenShift automation workflows",
    "Design enterprise integration architectures",
    "Automate multi-cluster management and deployment",
    "Integrate OpenShift with enterprise systems",
    "Implement advanced security and compliance automation",
    "Prepare for Red Hat EX380 certification exam"
  ],
  modules: [
    {
      title: "Advanced Automation with Ansible",
      duration: "2.5 Weeks",
      topics: [
        "Ansible Automation Platform for OpenShift",
        "Kubernetes collection and modules",
        "Advanced playbook patterns for containers",
        "Operator development with Ansible",
        "Automation Hub and execution environments"
      ]
    },
    {
      title: "Multi-Cluster Management and GitOps",
      duration: "2 Weeks",
      topics: [
        "Red Hat Advanced Cluster Management (ACM)",
        "GitOps workflows with ArgoCD",
        "Policy-based governance automation",
        "Cluster lifecycle automation",
        "Application deployment across clusters"
      ]
    },
    {
      title: "Enterprise Integration Patterns",
      duration: "2.5 Weeks",
      topics: [
        "API management with 3scale",
        "Enterprise service bus integration",
        "Message queuing and streaming platforms",
        "Legacy system integration strategies",
        "Data pipeline automation"
      ]
    },
    {
      title: "Advanced Security Automation",
      duration: "1.5 Weeks",
      topics: [
        "Compliance automation frameworks",
        "Security policy as code",
        "Vulnerability scanning automation",
        "Certificate lifecycle automation",
        "Zero-trust security implementation"
      ]
    },
    {
      title: "Observability and Performance Automation",
      duration: "1.5 Weeks",
      topics: [
        "Automated monitoring and alerting",
        "Performance optimization automation",
        "Capacity planning and auto-scaling",
        "Cost optimization strategies",
        "SLA and SLO automation"
      ]
    },
    {
      title: "Advanced Topics and Certification Prep",
      duration: "1 Week",
      topics: [
        "Custom resource definitions (CRDs) automation",
        "Advanced troubleshooting automation",
        "Disaster recovery automation",
        "Industry best practices and case studies",
        "EX380 exam preparation and practice"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in OpenShift Automation and Integration (EX380)",
  price: "39,999",
  originalPrice: "57,999",
  features: [
    "Official Red Hat advanced OpenShift curriculum",
    "Multi-cluster lab environment",
    "Enterprise integration scenarios",
    "Advanced automation projects",
    "EX380 exam voucher included",
    "Red Hat certified expert instructor",
    "Enterprise automation architect skills"
  ],
  instructor: "Red Hat Certified OpenShift Automation Expert",
  nextBatch: "1st December 2025",
  mode: ["Online", "Expert-level Labs"]
};

export default function EX380Page() {
  return <CourseDetailPage course={ex380Data} />;
}