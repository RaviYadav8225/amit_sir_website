"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const diagnosticsData = {
  title: "RHEL Diagnostics and Troubleshooting (RH342)",
  description: "Master advanced troubleshooting and diagnostic techniques for Red Hat Enterprise Linux systems. Learn to identify, analyze, and resolve complex system issues in enterprise environments using systematic approaches and advanced tools.",
  duration: "6-8 Weeks",
  level: "Advanced",
  prerequisites: [
    "RHCSA certification or equivalent Linux experience",
    "Strong command-line skills",
    "Understanding of Linux system internals",
    "Experience with system administration"
  ],
  objectives: [
    "Master systematic troubleshooting methodologies",
    "Diagnose boot and system startup issues",
    "Analyze performance problems and bottlenecks",
    "Troubleshoot network and storage issues",
    "Resolve security and permission problems",
    "Use advanced diagnostic tools and techniques"
  ],
  modules: [
    {
      title: "Troubleshooting Methodology",
      duration: "1 Week",
      topics: [
        "Systematic problem-solving approach",
        "Information gathering techniques",
        "Problem isolation strategies",
        "Documentation and case management",
        "Root cause analysis methods"
      ]
    },
    {
      title: "Boot and System Startup Issues",
      duration: "1.5 Weeks",
      topics: [
        "GRUB bootloader troubleshooting",
        "Kernel parameter modification",
        "systemd service debugging",
        "Recovery mode and rescue operations",
        "File system corruption recovery"
      ]
    },
    {
      title: "Performance Analysis and Tuning",
      duration: "2 Weeks",
      topics: [
        "System performance monitoring tools",
        "CPU, memory, and I/O analysis",
        "Process and thread troubleshooting",
        "Resource contention identification",
        "Performance optimization strategies"
      ]
    },
    {
      title: "Network Troubleshooting",
      duration: "1.5 Weeks",
      topics: [
        "Network connectivity diagnosis",
        "DNS and hostname resolution issues",
        "Firewall and iptables troubleshooting",
        "Network service debugging",
        "Packet capture and analysis"
      ]
    },
    {
      title: "Storage and File System Issues",
      duration: "1.5 Weeks",
      topics: [
        "Disk and partition troubleshooting",
        "File system errors and recovery",
        "LVM and software RAID issues",
        "Mount point and automount problems",
        "Storage performance optimization"
      ]
    },
    {
      title: "Security and Advanced Diagnostics",
      duration: "1 Week",
      topics: [
        "Permission and SELinux troubleshooting",
        "User authentication issues",
        "Log analysis and correlation",
        "Advanced diagnostic tools usage",
        "Proactive monitoring setup"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Linux Diagnostics and Troubleshooting",
  price: "23,999",
  originalPrice: "34,999",
  features: [
    "Official Red Hat RH342 curriculum",
    "Advanced troubleshooting lab scenarios",
    "Real-world problem-solving exercises",
    "Systematic diagnostic methodology",
    "Advanced tool mastery",
    "Red Hat certified instructor",
    "Expert troubleshooting skills development"
  ],
  instructor: "Red Hat Certified Diagnostics Expert",
  nextBatch: "5th December 2025",
  mode: ["Online", "Problem-solving Labs"]
};

export default function DiagnosticsPage() {
  return <CourseDetailPage course={diagnosticsData} />;
}