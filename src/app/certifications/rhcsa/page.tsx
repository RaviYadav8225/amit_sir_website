"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const rhcsaData = {
  title: "RHCSA - Red Hat Certified System Administrator",
  description: "Master Red Hat Enterprise Linux administration with hands-on training for the RHCSA certification. Learn essential system administration skills including user management, file systems, networking, security, and troubleshooting in RHEL environments.",
  duration: "8-10 Weeks",
  level: "Intermediate",
  prerequisites: [
    "Basic Linux command line experience",
    "Understanding of operating system concepts",
    "Familiarity with text editors (vi/vim)",
    "Basic networking knowledge"
  ],
  objectives: [
    "Master RHEL system administration fundamentals",
    "Configure and manage users, groups, and permissions",
    "Implement storage management and file systems",
    "Configure networking and security services",
    "Perform system monitoring and troubleshooting",
    "Pass the RHCSA (EX200) certification exam"
  ],
  modules: [
    {
      title: "RHEL Installation and Configuration",
      duration: "1.5 Weeks",
      topics: [
        "RHEL installation methods and options",
        "System initialization and boot process",
        "Kernel parameters and GRUB configuration",
        "System registration and subscription management",
        "Basic system configuration tools"
      ]
    },
    {
      title: "File Systems and Storage",
      duration: "2 Weeks",
      topics: [
        "Disk partitioning and file system creation",
        "LVM (Logical Volume Management)",
        "File system mounting and /etc/fstab",
        "RAID configuration",
        "Storage troubleshooting and recovery"
      ]
    },
    {
      title: "User and Group Management",
      duration: "1.5 Weeks",
      topics: [
        "User account creation and management",
        "Group management and permissions",
        "Password policies and account security",
        "sudo configuration",
        "Access control and file permissions"
      ]
    },
    {
      title: "Process and Service Management",
      duration: "1.5 Weeks",
      topics: [
        "systemd service management",
        "Process monitoring and control",
        "Job scheduling with cron and at",
        "System resource monitoring",
        "Performance tuning basics"
      ]
    },
    {
      title: "Networking and Security",
      duration: "2 Weeks",
      topics: [
        "Network interface configuration",
        "NetworkManager and nmcli",
        "Firewall configuration with firewalld",
        "SELinux configuration and troubleshooting",
        "SSH configuration and key management"
      ]
    },
    {
      title: "System Maintenance and Troubleshooting",
      duration: "1.5 Weeks",
      topics: [
        "System logging and log analysis",
        "Package management with yum/dnf",
        "System backup and recovery",
        "Troubleshooting boot issues",
        "Performance monitoring and optimization"
      ]
    }
  ],
  certification: "Red Hat Certified System Administrator (RHCSA) - EX200",
  price: "15,000",
  originalPrice: "25,000",
  features: [
    "Official Red Hat curriculum",
    "Live virtual machines for practice",
    "Performance-based exam preparation",
    "Exam voucher included",
    "Red Hat certified instructor",
    "Lab manual and study guides",
    "Post-training support"
  ],
  instructor: "Red Hat Certified Engineer (RHCE)",
  nextBatch: "5th November 2025",
  mode: ["Online", "Classroom"]
};

export default function RHCSAPage() {
  return <CourseDetailPage course={rhcsaData} />;
}