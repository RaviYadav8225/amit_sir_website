"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const openStackData = {
  title: "Open Stack Cloud Administration",
  description: "Master Red Hat OpenStack Platform administration and prepare for cloud infrastructure certification. Learn to deploy, configure, and manage private cloud environments using OpenStack services for compute, storage, and networking.",
  duration: "8-10 Weeks",
  level: "Advanced",
  prerequisites: [
    "RHCSA certification or equivalent Linux skills",
    "Understanding of virtualization concepts",
    "Basic knowledge of networking and storage",
    "Experience with cloud computing concepts"
  ],
  objectives: [
    "Deploy and configure OpenStack environments",
    "Manage compute, storage, and networking services",
    "Implement security and access controls",
    "Monitor and troubleshoot OpenStack operations",
    "Perform day-to-day cloud administration tasks",
    "Prepare for Red Hat Certified Specialist in Cloud Infrastructure (EX210)"
  ],
  modules: [
    {
      title: "OpenStack Fundamentals",
      duration: "2 Weeks",
      topics: [
        "OpenStack architecture and core services",
        "Identity service (Keystone) configuration",
        "Image service (Glance) management",
        "Compute service (Nova) administration",
        "OpenStack dashboard (Horizon) usage"
      ]
    },
    {
      title: "Networking and Storage",
      duration: "2.5 Weeks",
      topics: [
        "Neutron networking service configuration",
        "Virtual networks and routers setup",
        "Security groups and floating IPs",
        "Cinder block storage service",
        "Swift object storage implementation"
      ]
    },
    {
      title: "Instance and Image Management",
      duration: "1.5 Weeks",
      topics: [
        "Virtual machine lifecycle management",
        "Flavor creation and management",
        "Image creation and distribution",
        "Snapshot and backup strategies",
        "Instance migration and evacuation"
      ]
    },
    {
      title: "Project and User Management",
      duration: "1.5 Weeks",
      topics: [
        "Project (tenant) creation and management",
        "User roles and permissions",
        "Quota management and enforcement",
        "Multi-tenancy best practices",
        "Resource allocation strategies"
      ]
    },
    {
      title: "Monitoring and Troubleshooting",
      duration: "1.5 Weeks",
      topics: [
        "OpenStack service monitoring",
        "Log analysis and troubleshooting",
        "Performance optimization techniques",
        "Backup and disaster recovery",
        "Health checks and maintenance"
      ]
    },
    {
      title: "Advanced Operations",
      duration: "1 Week",
      topics: [
        "Heat orchestration service",
        "Ceilometer telemetry and metering",
        "Integration with external systems",
        "Automation and scripting",
        "Certification exam preparation"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Cloud Infrastructure (EX210)",
  price: "24,999",
  originalPrice: "35,999",
  features: [
    "Official Red Hat OpenStack curriculum",
    "Live OpenStack lab environment",
    "Real-world cloud scenarios",
    "Performance-based exam preparation",
    "Exam voucher included",
    "Red Hat certified instructor",
    "Private cloud expertise development"
  ],
  instructor: "Red Hat Certified OpenStack Specialist",
  nextBatch: "20th November 2025",
  mode: ["Online", "Hands-on Labs"]
};

export default function OpenStackPage() {
  return <CourseDetailPage course={openStackData} />;
}