"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const enterpriseVirtualizationData = {
  title: "Red Hat Enterprise Virtualization (EX318)",
  description: "Master Red Hat Enterprise Virtualization (RHV) to build and manage enterprise-grade virtualized infrastructure. Learn to deploy, configure, and optimize virtualization solutions for scalable data center operations with advanced features.",
  duration: "8-10 Weeks",
  level: "Advanced",
  prerequisites: [
    "RHCSA certification or equivalent Linux experience",
    "Understanding of virtualization concepts and hypervisors",
    "Basic networking and storage knowledge",
    "Experience with enterprise IT environments and data centers"
  ],
  objectives: [
    "Deploy and configure Red Hat Enterprise Virtualization Manager",
    "Manage virtual machines and virtual infrastructure at scale",
    "Implement high availability and disaster recovery solutions",
    "Configure advanced storage domains and networking",
    "Monitor and optimize virtualization performance",
    "Prepare for Red Hat Certified Specialist in Virtualization (EX318)"
  ],
  modules: [
    {
      title: "RHV Architecture and Installation",
      duration: "2 Weeks",
      topics: [
        "Red Hat Enterprise Virtualization overview and architecture",
        "RHVM (Manager) installation and configuration",
        "RHVH (Hypervisor) deployment and management",
        "Engine database setup and maintenance",
        "Initial environment configuration and validation"
      ]
    },
    {
      title: "Data Centers and Clusters",
      duration: "1.5 Weeks",
      topics: [
        "Data center design and implementation",
        "Cluster configuration and management",
        "Host management and maintenance",
        "CPU compatibility and optimization",
        "Load balancing and migration policies"
      ]
    },
    {
      title: "Storage and Networking",
      duration: "2 Weeks",
      topics: [
        "Storage domain types and configuration",
        "SAN, NAS, and local storage integration",
        "Network configuration and VLAN management",
        "Virtual network interface setup",
        "Quality of Service (QoS) implementation"
      ]
    },
    {
      title: "Virtual Machine Management",
      duration: "1.5 Weeks",
      topics: [
        "VM creation, deployment, and lifecycle management",
        "Template creation and management",
        "Snapshot and backup strategies",
        "VM migration and cloning",
        "Resource allocation and optimization"
      ]
    },
    {
      title: "High Availability and Performance",
      duration: "1.5 Weeks",
      topics: [
        "High availability configuration",
        "Live migration and load balancing",
        "Performance monitoring and tuning",
        "Resource scheduling and policies",
        "Power management features"
      ]
    },
    {
      title: "Security and User Management",
      duration: "1 Week",
      topics: [
        "User roles and permissions management",
        "Directory service integration (LDAP/AD)",
        "VM security configuration and policies",
        "Network security and access controls",
        "Audit and compliance features"
      ]
    },
    {
      title: "Backup and Disaster Recovery",
      duration: "1 Week",
      topics: [
        "Backup strategies and implementation",
        "Disaster recovery planning and testing",
        "Environment maintenance and updates",
        "Troubleshooting common virtualization issues",
        "EX318 exam preparation and practice scenarios"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Virtualization (EX318)",
  price: "32,999",
  originalPrice: "47,999",
  features: [
    "Official Red Hat RHV curriculum and lab environment",
    "Enterprise virtualization lab with multiple hosts",
    "Real-world virtualization scenarios and case studies",
    "Performance optimization and troubleshooting techniques",
    "Industry best practices for data center virtualization",
    "Red Hat certified virtualization expert instructor",
    "Career advancement to virtualization architect"
  ],
  instructor: "Red Hat Certified Virtualization Specialist",
  nextBatch: "25th November 2025",
  mode: ["Online", "Hands-on Labs"]
};

export default function EnterpriseVirtualizationPage() {
  return <CourseDetailPage course={enterpriseVirtualizationData} />;
}