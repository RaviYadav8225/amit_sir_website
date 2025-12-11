"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const rhceData = {
  title: "RHCE (ANSIBLE 294) - RedHat Certified Engineer",
  description: "Master Red Hat Ansible automation with our comprehensive RHCE (ANSIBLE 234) certification program. Learn advanced automation techniques, enterprise configuration management, and orchestration workflows using Ansible and Red Hat Enterprise Linux.",
  duration: "35 Days", 
  level: "Advanced",
  prerequisites: [
    "RHCSA certification or equivalent knowledge",
    "2+ years of Linux system administration experience",
    "Understanding of scripting and automation concepts",
    "Familiarity with YAML syntax"
  ],
  objectives: [
    "Master Ansible automation and orchestration",
    "Implement advanced system configuration management",
    "Design and deploy complex automation workflows",
    "Manage enterprise-scale infrastructure with Ansible",
    "Troubleshoot and optimize automation scripts",
    "Pass the RHCE (ANSIBLE 294) certification exam"
  ],
  modules: [
    {
      title: "Ansible Fundamentals & ANSIBLE 294 Prep",
      duration: "1 Week",
      topics: [
        "Ansible architecture and components",
        "ANSIBLE 294 exam objectives overview",
        "Inventory management and configuration",
        "Ad-hoc commands and modules",
        "Playbook creation and structure",
        "YAML syntax and best practices"
      ]
    },
    {
      title: "Advanced Playbook Development",
      duration: "1 Week",
      topics: [
        "Variables, facts, and conditionals",
        "Loops and iterations",
        "Templates with Jinja2",
        "Handlers and notifications",
        "Error handling and debugging"
      ]
    },
    {
      title: "Roles and Automation Scripts",
      duration: "1 Week",
      topics: [
        "Creating and organizing roles",
        "Ansible Galaxy usage",
        "Role dependencies and requirements",
        "Automation script development",
        "Best practices for role development"
      ]
    },
    {
      title: "System Management & Enterprise Solutions",
      duration: "1 Week",
      topics: [
        "Advanced Linux system management",
        "Network configuration automation",
        "Storage and file system management",
        "Service and daemon management",
        "Enterprise solution implementation"
      ]
    },
    {
      title: "ANSIBLE 294 Exam Preparation",
      duration: "1 Week",
      topics: [
        "Performance-based exam scenarios",
        "Troubleshooting automation workflows",
        "Time management strategies",
        "Mock exams and practice labs",
        "Final preparation and review"
      ]
    }
  ],
  certification: "Red Hat Certified Engineer (RHCE) - ANSIBLE 294",
  price: "15,000",
  originalPrice: "25,000",
  features: [
    "Official Red Hat ANSIBLE 294 curriculum",
    "Live Ansible lab environment",
    "Performance-based exam preparation", 
    "Real-world automation projects",
    "ANSIBLE 294 exam voucher included",
    "Red Hat certified instructor",
    "35-day intensive training program",
    "Career advancement support"
  ],
  instructor: "Red Hat Certified Architect (RHCA)",
  nextBatch: "18th November 2025",
  mode: ["Online", "Classroom"],
  pdfUrl: "/pdfs/RHCE (ansible) -RH294.pdf",
  pdfName: "RHCE (Ansible) RH294 Syllabus"
};

export default function RHCEPage() {
  return <CourseDetailPage course={rhceData} />;
}