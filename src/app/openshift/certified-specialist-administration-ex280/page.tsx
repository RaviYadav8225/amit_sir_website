"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const openshiftAdminData = {
  title: "Red Hat Certified Specialist in OpenShift Administration (EX280)",
  description: "Master OpenShift container platform administration and prepare for the EX280 certification. Learn to install, configure, and manage OpenShift clusters with enterprise-grade container orchestration capabilities.",
  duration: "8-10 Weeks",
  level: "Advanced",
  prerequisites: [
    "RHCSA certification or equivalent Linux skills",
    "Docker and Kubernetes fundamentals",
    "Container technology experience",
    "Understanding of DevOps practices"
  ],
  objectives: [
    "Install and configure OpenShift clusters",
    "Manage applications and workloads",
    "Implement security and networking policies",
    "Configure storage and persistent volumes",
    "Monitor and troubleshoot OpenShift environments",
    "Pass the Red Hat EX280 certification exam"
  ],
  modules: [
    {
      title: "OpenShift Architecture & Installation",
      duration: "2 Weeks",
      topics: [
        "OpenShift vs Kubernetes differences",
        "Cluster installation methods",
        "Master and worker node configuration",
        "Registry and router configuration",
        "Cluster verification and validation"
      ]
    },
    {
      title: "Application Management",
      duration: "2 Weeks",
      topics: [
        "Deploying applications from source code",
        "Working with images and image streams",
        "Build configurations and strategies",
        "Deployment configurations",
        "Application scaling and updates"
      ]
    },
    {
      title: "User and Project Management",
      duration: "1.5 Weeks",
      topics: [
        "User authentication and authorization",
        "Project creation and management",
        "Role-based access control (RBAC)",
        "Resource quotas and limits",
        "Multi-tenancy best practices"
      ]
    },
    {
      title: "Networking and Routing",
      duration: "1.5 Weeks",
      topics: [
        "Software-defined networking (SDN)",
        "Service and route configuration",
        "Load balancing strategies",
        "Network policies and security",
        "External access configuration"
      ]
    },
    {
      title: "Storage and Persistence",
      duration: "1 Week",
      topics: [
        "Persistent volume configuration",
        "Storage classes and provisioning",
        "Application data management",
        "Backup and recovery strategies",
        "Storage troubleshooting"
      ]
    },
    {
      title: "Monitoring and Troubleshooting",
      duration: "2 Weeks",
      topics: [
        "Cluster monitoring and metrics",
        "Log aggregation and analysis",
        "Performance optimization",
        "Troubleshooting methodologies",
        "Exam preparation and practice"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in OpenShift Administration (EX280)",
  price: "32,999",
  originalPrice: "47,999",
  features: [
    "Official Red Hat curriculum",
    "Live OpenShift cluster environment",
    "Performance-based exam preparation",
    "Real-world enterprise scenarios",
    "Exam voucher included",
    "Red Hat certified instructor",
    "Enterprise career opportunities"
  ],
  instructor: "Red Hat Certified OpenShift Specialist",
  nextBatch: "15th November 2025",
  mode: ["Online", "Hands-on Labs"]
};

export default function OpenShiftAdminPage() {
  return <CourseDetailPage course={openshiftAdminData} />;
}