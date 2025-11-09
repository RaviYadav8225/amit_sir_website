"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const rh415Data = {
  title: "Red Hat Security: Linux in Physical, Virtual, and Cloud (RH415)",
  description: "Master comprehensive security practices for Red Hat Enterprise Linux systems across physical, virtual, and cloud environments. Learn to implement, configure, and maintain advanced security controls to protect enterprise infrastructure from modern threats.",
  duration: "10-12 Weeks",
  level: "Expert",
  prerequisites: [
    "RHCSA and RHCE certifications strongly recommended",
    "Strong Linux system administration and networking skills",
    "Understanding of security principles and threat landscape",
    "Experience with enterprise environments and compliance requirements"
  ],
  objectives: [
    "Implement comprehensive Linux security controls and frameworks",
    "Configure advanced authentication and authorization systems",
    "Master SELinux security policies and custom policy development",
    "Secure network services and communications across environments",
    "Implement enterprise auditing and compliance frameworks",
    "Design and implement security architectures for hybrid environments"
  ],
  modules: [
    {
      title: "Security Fundamentals and Risk Assessment",
      duration: "2 Weeks",
      topics: [
        "Advanced security principles and threat modeling",
        "Risk assessment and vulnerability analysis methodologies",
        "Security frameworks and compliance standards (NIST, ISO 27001)",
        "Incident response planning and forensic preparation",
        "Security architecture design for enterprise environments"
      ]
    },
    {
      title: "Identity and Access Management",
      duration: "2 Weeks",
      topics: [
        "Advanced user authentication systems (Kerberos, LDAP, SAML)",
        "Multi-factor authentication and smart card integration",
        "Role-based access control (RBAC) implementation",
        "Privileged access management and sudo policies",
        "Directory service security and integration"
      ]
    },
    {
      title: "SELinux Advanced Security",
      duration: "2 Weeks",
      topics: [
        "SELinux policy analysis and custom policy development",
        "Advanced SELinux troubleshooting and debugging",
        "Application confinement and sandboxing",
        "Multi-level security (MLS) and multi-category security",
        "SELinux integration with container technologies"
      ]
    },
    {
      title: "Network Security and Communications",
      duration: "1.5 Weeks",
      topics: [
        "Advanced firewall configuration and management",
        "VPN implementation and IPSec configuration",
        "Network intrusion detection and prevention",
        "Secure remote access and SSH hardening",
        "Network segmentation and micro-segmentation strategies"
      ]
    },
    {
      title: "System Hardening and Monitoring",
      duration: "1.5 Weeks",
      topics: [
        "System hardening best practices and security benchmarks",
        "Advanced security scanning and vulnerability assessment",
        "Log management, SIEM integration, and correlation",
        "Incident response procedures and forensic techniques",
        "Continuous monitoring and threat detection"
      ]
    },
    {
      title: "Cloud and Container Security",
      duration: "1.5 Weeks",
      topics: [
        "Cloud security best practices and shared responsibility models",
        "Container security with Podman, Docker, and Kubernetes",
        "Kubernetes security implementation and policy enforcement",
        "Security automation and DevSecOps integration",
        "Compliance monitoring and automated reporting"
      ]
    },
    {
      title: "Advanced Topics and Certification Prep",
      duration: "1 Week",
      topics: [
        "Cryptographic systems and key management",
        "Security automation with Ansible and scripting",
        "Advanced threat hunting and malware analysis",
        "Business continuity and disaster recovery security",
        "RH415 exam preparation and practical scenarios"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Security: Linux (RH415)",
  price: "42,999",
  originalPrice: "62,999",
  features: [
    "Official Red Hat RH415 curriculum and advanced security labs",
    "Comprehensive security lab environments with real threats",
    "Real-world enterprise security scenarios and case studies",
    "Compliance framework training and implementation",
    "Advanced security automation tools and techniques",
    "Red Hat certified security expert instructor",
    "Enterprise security architecture and leadership skills"
  ],
  instructor: "Red Hat Certified Security Specialist and CISSP",
  nextBatch: "15th December 2025",
  mode: ["Online", "Advanced Security Labs"]
};

export default function RH415Page() {
  return <CourseDetailPage course={rh415Data} />;
}