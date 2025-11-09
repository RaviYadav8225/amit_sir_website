"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const securityData = {
  title: "RedHat Security (RH415)",
  description: "Master comprehensive security practices for Red Hat Enterprise Linux systems. Learn to implement, configure, and maintain security controls across physical, virtual, and cloud environments to protect enterprise infrastructure.",
  duration: "8-10 Weeks",
  level: "Advanced",
  prerequisites: [
    "RHCSA and RHCE certifications recommended",
    "Strong Linux system administration skills",
    "Understanding of networking concepts",
    "Basic security knowledge and principles"
  ],
  objectives: [
    "Implement comprehensive Linux security controls",
    "Configure advanced authentication and authorization",
    "Master SELinux security policies",
    "Secure network services and communications",
    "Implement auditing and compliance frameworks",
    "Design security architectures for enterprise environments"
  ],
  modules: [
    {
      title: "Security Fundamentals and Risk Assessment",
      duration: "1.5 Weeks",
      topics: [
        "Security principles and threat modeling",
        "Risk assessment and vulnerability analysis",
        "Security policy development",
        "Compliance frameworks (NIST, ISO 27001)",
        "Security architecture design"
      ]
    },
    {
      title: "Authentication and Access Control",
      duration: "2 Weeks",
      topics: [
        "Advanced user authentication methods",
        "LDAP and Kerberos integration",
        "Multi-factor authentication setup",
        "Role-based access control (RBAC)",
        "Privileged access management"
      ]
    },
    {
      title: "SELinux Advanced Configuration",
      duration: "2 Weeks",
      topics: [
        "SELinux policy development and customization",
        "Context management and labeling",
        "Confined and unconfined domains",
        "Policy troubleshooting and debugging",
        "Custom policy module creation"
      ]
    },
    {
      title: "Network Security and Encryption",
      duration: "1.5 Weeks",
      topics: [
        "Advanced firewall configuration",
        "VPN and tunnel setup",
        "SSL/TLS certificate management",
        "Network intrusion detection",
        "Secure remote access implementation"
      ]
    },
    {
      title: "System Hardening and Monitoring",
      duration: "1.5 Weeks",
      topics: [
        "System hardening best practices",
        "Security scanning and vulnerability assessment",
        "Log management and SIEM integration",
        "Incident response procedures",
        "Forensics and evidence collection"
      ]
    },
    {
      title: "Cloud and Container Security",
      duration: "1.5 Weeks",
      topics: [
        "Cloud security best practices",
        "Container security with Podman/Docker",
        "Kubernetes security implementation",
        "Security automation and DevSecOps",
        "Compliance monitoring and reporting"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Security: Linux",
  price: "28,999",
  originalPrice: "41,999",
  features: [
    "Official Red Hat RH415 curriculum",
    "Advanced security lab environments",
    "Real-world security scenarios",
    "Compliance framework training",
    "Security automation tools",
    "Red Hat security expert instructor",
    "Enterprise security architecture skills"
  ],
  instructor: "Red Hat Certified Security Specialist",
  nextBatch: "10th December 2025",
  mode: ["Online", "Security Labs"]
};

export default function SecurityPage() {
  return <CourseDetailPage course={securityData} />;
}