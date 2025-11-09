"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const rhelDiagnosticsData = {
  title: "Red Hat Enterprise Linux Diagnostics and Troubleshooting (RH342)",
  description: "Master advanced troubleshooting and diagnostic techniques for Red Hat Enterprise Linux systems. Learn to identify, analyze, and resolve complex system issues in enterprise environments using systematic approaches, advanced tools, and proven methodologies.",
  duration: "8-10 Weeks",
  level: "Expert",
  prerequisites: [
    "RHCSA and RHCE certifications recommended",
    "Extensive Linux system administration experience",
    "Strong command-line skills and system internals knowledge",
    "Experience with enterprise production environments"
  ],
  objectives: [
    "Master systematic troubleshooting methodologies for RHEL",
    "Diagnose complex boot and system startup issues",
    "Analyze performance problems and system bottlenecks",
    "Troubleshoot advanced network and storage issues",
    "Resolve security, permission, and SELinux problems",
    "Use advanced diagnostic tools and kernel debugging techniques"
  ],
  modules: [
    {
      title: "Advanced Troubleshooting Methodology",
      duration: "1.5 Weeks",
      topics: [
        "Systematic problem-solving approach for complex issues",
        "Root cause analysis techniques and documentation",
        "Enterprise troubleshooting best practices",
        "Incident management and escalation procedures",
        "Knowledge base creation and maintenance"
      ]
    },
    {
      title: "Boot Process and System Initialization",
      duration: "2 Weeks",
      topics: [
        "UEFI/BIOS troubleshooting and firmware issues",
        "GRUB2 advanced configuration and recovery",
        "systemd service debugging and dependency analysis",
        "Kernel parameter troubleshooting",
        "Emergency and rescue mode operations"
      ]
    },
    {
      title: "Performance Analysis and Optimization",
      duration: "2 Weeks",
      topics: [
        "System performance monitoring and analysis tools",
        "CPU, memory, and I/O bottleneck identification",
        "Process and thread analysis with advanced tools",
        "Kernel performance tuning and optimization",
        "Workload characterization and capacity planning"
      ]
    },
    {
      title: "Network Troubleshooting and Analysis",
      duration: "1.5 Weeks",
      topics: [
        "Advanced network diagnostic tools and techniques",
        "Packet capture and analysis with tcpdump/Wireshark",
        "DNS, DHCP, and routing troubleshooting",
        "Firewall and iptables/nftables debugging",
        "Network performance analysis and optimization"
      ]
    },
    {
      title: "Storage and File System Issues",
      duration: "1.5 Weeks",
      topics: [
        "Advanced disk and partition troubleshooting",
        "File system corruption detection and recovery",
        "LVM, software RAID, and device mapper issues",
        "Mount point and automount troubleshooting",
        "Storage performance analysis and optimization"
      ]
    },
    {
      title: "Security and Advanced Diagnostics",
      duration: "1 Week",
      topics: [
        "SELinux advanced troubleshooting and policy analysis",
        "User authentication and authorization issues",
        "Advanced log analysis and correlation techniques",
        "Kernel debugging and crash dump analysis",
        "Proactive monitoring and alerting setup"
      ]
    },
    {
      title: "Automation and Scripting for Diagnostics",
      duration: "1 Week",
      topics: [
        "Automated diagnostic script development",
        "Health check automation and monitoring",
        "Custom diagnostic tool creation",
        "Integration with enterprise monitoring systems",
        "Documentation and knowledge transfer practices"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Linux Diagnostics and Troubleshooting (RH342)",
  price: "35,999",
  originalPrice: "51,999",
  features: [
    "Official Red Hat RH342 curriculum and expert-level labs",
    "Advanced troubleshooting lab scenarios with real-world problems",
    "Comprehensive diagnostic toolkit and methodology training",
    "Systematic problem-solving approach development",
    "Advanced tool mastery and custom script development",
    "Red Hat certified diagnostics expert instructor",
    "Expert troubleshooting skills for enterprise environments"
  ],
  instructor: "Red Hat Certified Diagnostics and Troubleshooting Expert",
  nextBatch: "12th December 2025",
  mode: ["Online", "Advanced Lab Scenarios"]
};

export default function RHELDiagnosticsPage() {
  return <CourseDetailPage course={rhelDiagnosticsData} />;
}