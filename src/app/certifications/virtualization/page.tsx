"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const virtualizationData = {
  title: "RedHat Enterprise Virtualization",
  description: "Master Red Hat Enterprise Virtualization (RHV) to build and manage enterprise-grade virtualized infrastructure. Learn to deploy, configure, and optimize virtualization solutions for scalable data center operations.",
  duration: "6-8 Weeks",
  level: "Advanced",
  prerequisites: [
    "RHCSA certification or equivalent Linux experience",
    "Understanding of virtualization concepts",
    "Basic networking and storage knowledge",
    "Experience with enterprise IT environments"
  ],
  objectives: [
    "Deploy and configure Red Hat Enterprise Virtualization",
    "Manage virtual machines and virtual infrastructure",
    "Implement high availability and disaster recovery",
    "Configure storage domains and networking",
    "Monitor and optimize virtualization performance",
    "Implement security and access controls"
  ],
  modules: [
    {
      title: "RHV Architecture and Installation",
      duration: "1.5 Weeks",
      topics: [
        "Red Hat Enterprise Virtualization overview",
        "RHV Manager installation and configuration",
        "Hypervisor (RHV-H) deployment",
        "Data centers and cluster configuration",
        "Initial environment setup"
      ]
    },
    {
      title: "Storage and Networking Configuration",
      duration: "2 Weeks",
      topics: [
        "Storage domain types and configuration",
        "NFS, iSCSI, and Fibre Channel storage",
        "Network configuration and VLANs",
        "Virtual network setup",
        "Quality of Service (QoS) implementation"
      ]
    },
    {
      title: "Virtual Machine Management",
      duration: "1.5 Weeks",
      topics: [
        "VM creation and configuration",
        "Templates and cloning",
        "VM migration (live and offline)",
        "Snapshot management",
        "VM pools and user portals"
      ]
    },
    {
      title: "High Availability and Performance",
      duration: "1.5 Weeks",
      topics: [
        "High availability configuration",
        "Load balancing and failover",
        "Performance monitoring and tuning",
        "Resource allocation and limits",
        "Power management features"
      ]
    },
    {
      title: "Security and User Management",
      duration: "1 Week",
      topics: [
        "User roles and permissions",
        "Directory service integration",
        "VM security configuration",
        "Network security policies",
        "Audit and compliance features"
      ]
    },
    {
      title: "Backup and Disaster Recovery",
      duration: "0.5 Weeks",
      topics: [
        "Backup strategies and implementation",
        "Disaster recovery planning",
        "Environment maintenance",
        "Troubleshooting common issues",
        "Best practices and optimization"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Virtualization",
  price: "22,999",
  originalPrice: "32,999",
  features: [
    "Official Red Hat curriculum",
    "Enterprise virtualization lab environment",
    "Real-world scenarios and case studies",
    "Performance optimization techniques",
    "Industry best practices",
    "Red Hat certified instructor",
    "Career advancement support"
  ],
  instructor: "Red Hat Certified Virtualization Specialist",
  nextBatch: "25th November 2025",
  mode: ["Online", "Hands-on Labs"]
};

export default function VirtualizationPage() {
  return <CourseDetailPage course={virtualizationData} />;
}