"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const cybersecurityCourseData = {
  title: "Cybersecurity (Basic + Advanced)",
  description: "Master cybersecurity fundamentals and advanced techniques with comprehensive training in ethical hacking, network security, and threat analysis. Learn industry-standard security tools and methodologies to protect systems and networks from cyber threats.",
  duration: "70 Days",
  level: "Intermediate",
  prerequisites: [
    "Basic understanding of networking concepts",
    "Familiarity with operating systems (Windows/Linux)",
    "Knowledge of basic IT security concepts",
    "Understanding of TCP/IP protocols"
  ],
  objectives: [
    "Master network security fundamentals and advanced concepts",
    "Learn ethical hacking techniques and methodologies",
    "Understand threat analysis and vulnerability assessment",
    "Implement security controls and defensive strategies",
    "Use industry-standard security tools effectively",
    "Prepare for cybersecurity certifications"
  ],
  modules: [
    {
      title: "Security Fundamentals",
      duration: "1 Week",
      topics: [
        "Information security principles",
        "CIA Triad (Confidentiality, Integrity, Availability)",
        "Security policies and procedures",
        "Risk management frameworks",
        "Compliance and regulations"
      ]
    },
    {
      title: "Network Security",
      duration: "1.5 Weeks",
      topics: [
        "Network protocols and security",
        "Firewalls and IDS/IPS",
        "VPN and secure remote access",
        "Wireless security",
        "Network monitoring and analysis"
      ]
    },
    {
      title: "Ethical Hacking & Penetration Testing",
      duration: "2 Weeks",
      topics: [
        "Reconnaissance and footprinting",
        "Scanning and enumeration",
        "Vulnerability analysis",
        "System hacking techniques",
        "Web application security testing",
        "Exploitation frameworks"
      ]
    },
    {
      title: "Threat Analysis & Incident Response",
      duration: "1 Week",
      topics: [
        "Threat intelligence",
        "Malware analysis",
        "Incident detection and response",
        "Digital forensics basics",
        "Security event monitoring"
      ]
    },
    {
      title: "Security Tools & Technologies",
      duration: "1 Week",
      topics: [
        "Kali Linux and security distributions",
        "Metasploit Framework",
        "Wireshark and packet analysis",
        "Nmap and vulnerability scanners",
        "SIEM tools and log analysis"
      ]
    },
    {
      title: "Advanced Security Concepts",
      duration: "0.5 Weeks",
      topics: [
        "Cloud security fundamentals",
        "Application security",
        "Cryptography and encryption",
        "Security automation",
        "Best practices and career guidance"
      ]
    }
  ],
  certification: "CEH / Security+ / Industry Recognized",
  price: "35,000",
  originalPrice: "60,000",
  features: [
    "Network Security fundamentals",
    "Ethical Hacking techniques",
    "Threat Analysis & Detection",
    "Security Tools & Technologies",
    "Hands-on Labs & Exercises",
    "Real-world Security Scenarios",
    "Industry Expert Instructors",
    "Certification Preparation"
  ],
  instructor: "Certified Security Professional (CEH/CISSP)",
  nextBatch: "Starting Soon",
  mode: ["Online", "Live Classes"],
  pdfUrl: "/pdfs/cybersecurity-basic-advanced-syllabus.pdf",
  pdfName: "Cybersecurity Basic + Advanced Syllabus"
};

export default function CybersecurityBasicAdvancedPage() {
  return <CourseDetailPage course={cybersecurityCourseData} />;
}
