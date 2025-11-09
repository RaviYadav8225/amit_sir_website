"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const vmwareData = {
  title: "VMware DataCenter Virtualization Training",
  description: "Master VMware vSphere technologies and become proficient in datacenter virtualization. Learn to design, implement, and manage enterprise virtualization solutions using VMware's industry-leading platform for cloud infrastructure.",
  duration: "10-12 Weeks",
  level: "Intermediate to Advanced",
  prerequisites: [
    "Basic understanding of server hardware",
    "Knowledge of networking concepts",
    "Experience with Windows/Linux operating systems",
    "Understanding of storage technologies"
  ],
  objectives: [
    "Master VMware vSphere infrastructure design",
    "Implement and configure ESXi hypervisor",
    "Manage virtual machines and resource allocation",
    "Configure vCenter Server and clustering",
    "Implement high availability and disaster recovery",
    "Prepare for VMware Certified Professional (VCP) certification"
  ],
  modules: [
    {
      title: "Virtualization Fundamentals",
      duration: "1.5 Weeks",
      topics: [
        "Introduction to virtualization concepts",
        "Type 1 vs Type 2 hypervisors",
        "VMware product portfolio overview",
        "Hardware requirements and compatibility",
        "Virtualization benefits and use cases",
        "Planning virtualization projects"
      ]
    },
    {
      title: "ESXi Installation and Configuration",
      duration: "2 Weeks",
      topics: [
        "ESXi hypervisor installation methods",
        "Initial ESXi configuration and management",
        "ESXi networking configuration",
        "Storage configuration and management",
        "ESXi security and user management",
        "ESXi troubleshooting and maintenance"
      ]
    },
    {
      title: "Virtual Machine Management",
      duration: "2 Weeks",
      topics: [
        "VM creation and configuration",
        "Virtual hardware optimization",
        "VM templates and cloning",
        "VM snapshots and backup strategies",
        "VM migration and vMotion",
        "VM performance monitoring and tuning"
      ]
    },
    {
      title: "vCenter Server and Clustering",
      duration: "2.5 Weeks",
      topics: [
        "vCenter Server installation and configuration",
        "Datacenter and cluster management",
        "Resource pools and folders organization",
        "vSphere HA (High Availability) configuration",
        "vSphere DRS (Distributed Resource Scheduler)",
        "vSphere FT (Fault Tolerance) implementation"
      ]
    },
    {
      title: "Advanced Storage and Networking",
      duration: "2 Weeks",
      topics: [
        "vSphere storage technologies (VMFS, NFS, vSAN)",
        "Storage DRS and I/O control",
        "vSphere networking concepts",
        "Distributed switches and port groups",
        "Network I/O control and traffic shaping",
        "Storage and network troubleshooting"
      ]
    },
    {
      title: "Backup, Recovery, and Monitoring",
      duration: "1.5 Weeks",
      topics: [
        "Backup strategies and solutions",
        "vSphere Replication configuration",
        "Site Recovery Manager (SRM) basics",
        "Performance monitoring with vRealize",
        "Log management and analysis",
        "Capacity planning and optimization"
      ]
    },
    {
      title: "Security and Compliance",
      duration: "1 Week",
      topics: [
        "vSphere security best practices",
        "VM encryption and secure boot",
        "Certificate management",
        "Compliance and auditing",
        "Troubleshooting methodologies",
        "VCP certification preparation"
      ]
    }
  ],
  certification: "VMware Certified Professional - Data Center Virtualization (VCP-DCV)",
  price: "34,999",
  originalPrice: "52,999",
  features: [
    "Official VMware curriculum",
    "Live VMware vSphere lab environment",
    "Real datacenter virtualization scenarios",
    "VCP exam preparation and guidance",
    "Enterprise virtualization best practices",
    "VMware certified instructor (VCI)",
    "Career advancement in virtualization",
    "Industry-recognized VMware certification"
  ],
  instructor: "VMware Certified Instructor (VCI)",
  nextBatch: "30th November 2025",
  mode: ["Online", "Virtual Labs"]
};

export default function VMwarePage() {
  return <CourseDetailPage course={vmwareData} />;
}