"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const rhcaData = {
  title: "RHCA (Red Hat Certified Architect)",
  description: "Achieve the highest level of Red Hat certification by mastering enterprise architecture design and implementation. The RHCA certification demonstrates expertise in designing, deploying, and managing large-scale Red Hat solutions across hybrid cloud environments.",
  duration: "12-16 Weeks",
  level: "Expert",
  prerequisites: [
    "RHCE (Red Hat Certified Engineer) certification required",
    "Minimum 5 Red Hat specialist certifications",
    "Extensive enterprise Linux experience",
    "Understanding of enterprise architecture principles"
  ],
  objectives: [
    "Design enterprise-scale Red Hat solutions",
    "Architect hybrid cloud infrastructures",
    "Lead complex implementation projects",
    "Optimize performance and scalability",
    "Implement security and compliance frameworks",
    "Mentor technical teams and drive best practices"
  ],
  modules: [
    {
      title: "Enterprise Architecture Fundamentals",
      duration: "2 Weeks",
      topics: [
        "Enterprise architecture principles and frameworks",
        "Solution design methodologies",
        "Requirements gathering and analysis",
        "Technology stack evaluation and selection",
        "Risk assessment and mitigation strategies"
      ]
    },
    {
      title: "Hybrid Cloud Design",
      duration: "3 Weeks",
      topics: [
        "Multi-cloud strategy development",
        "OpenShift Container Platform architecture",
        "Red Hat Satellite for lifecycle management",
        "CloudForms for cloud management",
        "Integration with public cloud providers"
      ]
    },
    {
      title: "Infrastructure Automation and Orchestration",
      duration: "2.5 Weeks",
      topics: [
        "Ansible automation at enterprise scale",
        "Infrastructure as Code (IaC) implementation",
        "CI/CD pipeline design and optimization",
        "Service mesh and microservices architecture",
        "DevOps culture and practices implementation"
      ]
    },
    {
      title: "Performance and Scalability",
      duration: "2 Weeks",
      topics: [
        "Large-scale system design principles",
        "Performance optimization strategies",
        "Load balancing and high availability",
        "Disaster recovery and business continuity",
        "Capacity planning and resource optimization"
      ]
    },
    {
      title: "Security and Compliance Architecture",
      duration: "2 Weeks",
      topics: [
        "Enterprise security architecture design",
        "Compliance framework implementation",
        "Zero-trust security model",
        "Identity and access management at scale",
        "Security automation and monitoring"
      ]
    },
    {
      title: "Leadership and Project Management",
      duration: "1.5 Weeks",
      topics: [
        "Technical leadership and mentoring",
        "Project management methodologies",
        "Stakeholder communication and management",
        "Change management strategies",
        "Continuous improvement processes"
      ]
    }
  ],
  certification: "Red Hat Certified Architect (RHCA)",
  price: "49,999",
  originalPrice: "75,999",
  features: [
    "Comprehensive RHCA preparation program",
    "Real enterprise architecture case studies",
    "Mentorship from RHCA-certified architects",
    "Portfolio development guidance",
    "Career advancement support",
    "Executive-level technical leadership skills",
    "Industry recognition as Red Hat expert"
  ],
  instructor: "Red Hat Certified Architect (RHCA)",
  nextBatch: "15th December 2025",
  mode: ["Online", "Architect-level Projects"]
};

export default function RHCAPage() {
  return <CourseDetailPage course={rhcaData} />;
}