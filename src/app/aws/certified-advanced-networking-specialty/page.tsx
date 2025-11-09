"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const awsNetworkingData = {
  title: "AWS Certified Advanced Networking – Specialty",
  description: "Master advanced AWS networking concepts and prepare for the Specialty certification. Learn to design and implement AWS and hybrid IT network architectures at scale with complex routing, security, and connectivity requirements.",
  duration: "10-12 Weeks",
  level: "Advanced",
  prerequisites: [
    "AWS Certified Solutions Architect Associate or equivalent",
    "5+ years of hands-on experience with AWS networking",
    "Deep understanding of networking protocols and concepts",
    "Experience with enterprise network architecture"
  ],
  objectives: [
    "Design and implement complex AWS network architectures",
    "Configure advanced routing and connectivity solutions",
    "Implement network security and monitoring at scale",
    "Optimize network performance and troubleshoot issues",
    "Design hybrid cloud networking solutions",
    "Pass the AWS Advanced Networking Specialty exam"
  ],
  modules: [
    {
      title: "Network Design and Implementation",
      duration: "3 Weeks",
      topics: [
        "Advanced VPC design patterns",
        "Multi-account networking strategies",
        "CIDR planning and IP address management",
        "Network segmentation and micro-segmentation",
        "Cross-region networking architectures"
      ]
    },
    {
      title: "Network Routing and Connectivity",
      duration: "2.5 Weeks",
      topics: [
        "Transit Gateway advanced configurations",
        "VPC peering and PrivateLink implementations",
        "Direct Connect and hybrid connectivity",
        "Advanced routing policies and BGP",
        "Network Load Balancer and Gateway Load Balancer"
      ]
    },
    {
      title: "Network Security",
      duration: "2.5 Weeks",
      topics: [
        "Advanced security groups and NACLs",
        "AWS WAF and DDoS protection",
        "Network-based security services",
        "VPN and encrypted connectivity",
        "Network access control and compliance"
      ]
    },
    {
      title: "Network Performance Optimization",
      duration: "1.5 Weeks",
      topics: [
        "Network performance monitoring and analysis",
        "Bandwidth optimization techniques",
        "Latency reduction strategies",
        "Cost optimization for network resources",
        "Performance troubleshooting methodologies"
      ]
    },
    {
      title: "Automation and Management",
      duration: "1.5 Weeks",
      topics: [
        "Network automation with APIs and SDKs",
        "Infrastructure as Code for networking",
        "Network Change management",
        "Automated network monitoring and alerting",
        "DevOps practices for network operations"
      ]
    },
    {
      title: "Troubleshooting and Optimization",
      duration: "1 Week",
      topics: [
        "Advanced network troubleshooting techniques",
        "Network flow analysis and monitoring",
        "Performance optimization case studies",
        "Real-world networking scenarios",
        "Exam preparation and practice"
      ]
    }
  ],
  certification: "AWS Certified Advanced Networking – Specialty (ANS-C01)",
  price: "29,999",
  originalPrice: "42,999",
  features: [
    "Specialty-level AWS curriculum",
    "Advanced networking labs",
    "Real-world network design projects",
    "Exam voucher included",
    "Network simulation environments",
    "Expert networking architect guidance",
    "Specialized career opportunities"
  ],
  instructor: "AWS Certified Advanced Networking Specialist",
  nextBatch: "6th December 2025",
  mode: ["Online", "Expert-led Sessions"]
};

export default function AWSNetworkingPage() {
  return <CourseDetailPage course={awsNetworkingData} />;
}