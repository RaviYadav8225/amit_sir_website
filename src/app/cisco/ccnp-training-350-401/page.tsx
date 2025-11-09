"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const ccnpData = {
  title: "CCNP Training – 350-401 (Cisco Certified Network Professional)",
  description: "Master advanced Cisco networking technologies and prepare for CCNP Enterprise certification. Learn advanced routing, switching, wireless, and security technologies with enterprise-level implementation scenarios and hands-on labs.",
  duration: "12-16 Weeks",
  level: "Advanced",
  prerequisites: [
    "CCNA certification or equivalent knowledge",
    "Strong understanding of routing and switching",
    "Experience with Cisco IOS configuration",
    "Knowledge of network protocols and services"
  ],
  objectives: [
    "Master advanced enterprise networking architectures",
    "Implement complex routing and switching solutions",
    "Configure advanced wireless and security technologies",
    "Design and implement network automation solutions",
    "Troubleshoot complex enterprise network issues",
    "Pass the CCNP Enterprise 350-401 ENCOR exam"
  ],
  modules: [
    {
      title: "Enterprise Network Architecture",
      duration: "2.5 Weeks",
      topics: [
        "Enterprise network design principles",
        "Hierarchical network models",
        "Campus LAN architecture",
        "WAN architecture and technologies",
        "SD-WAN and cloud connectivity",
        "Network virtualization concepts",
        "Quality of Service (QoS) implementation"
      ]
    },
    {
      title: "Advanced Switching Technologies",
      duration: "2.5 Weeks",
      topics: [
        "Advanced VLAN configurations",
        "Spanning Tree Protocol optimization",
        "VXLAN and EVPN technologies",
        "Cisco StackWise and VSS",
        "Advanced EtherChannel configurations",
        "Multicasting in enterprise networks",
        "Switch security hardening"
      ]
    },
    {
      title: "Enterprise Routing Protocols",
      duration: "3 Weeks",
      topics: [
        "Advanced OSPF areas and LSA types",
        "BGP implementation and optimization",
        "EIGRP advanced features",
        "Route redistribution and filtering",
        "Policy-based routing (PBR)",
        "IPv6 routing protocols",
        "Routing protocol security"
      ]
    },
    {
      title: "Wireless Technologies",
      duration: "2 Weeks",
      topics: [
        "Enterprise wireless architectures",
        "Cisco wireless controller configuration",
        "Advanced WLAN security (802.1X, WPA3)",
        "Wireless site surveys and RF design",
        "Cisco DNA Center wireless management",
        "Wireless troubleshooting methodologies",
        "Guest access and BYOD implementations"
      ]
    },
    {
      title: "Security and Infrastructure Services",
      duration: "2.5 Weeks",
      topics: [
        "Advanced ACL implementations",
        "VPN technologies (IPSec, DMVPN, FlexVPN)",
        "Network security monitoring",
        "Device hardening and AAA",
        "Cisco TrustSec and MACsec",
        "Network access control (NAC)",
        "Security information correlation"
      ]
    },
    {
      title: "Automation and Programmability",
      duration: "2 Weeks",
      topics: [
        "Network automation frameworks",
        "Cisco DNA Center and Intent-Based Networking",
        "REST APIs and NETCONF/YANG",
        "Python for network automation",
        "Ansible and network orchestration",
        "Configuration management tools",
        "Network monitoring and analytics"
      ]
    },
    {
      title: "Troubleshooting and Exam Preparation",
      duration: "1.5 Weeks",
      topics: [
        "Advanced troubleshooting methodologies",
        "Network performance optimization",
        "Complex scenario troubleshooting",
        "CCNP exam strategies and practice",
        "Real-world case studies",
        "Career development in networking"
      ]
    }
  ],
  certification: "Cisco Certified Network Professional (CCNP) Enterprise",
  price: "39,999",
  originalPrice: "59,999",
  features: [
    "Official Cisco CCNP Enterprise curriculum",
    "Advanced enterprise lab environment",
    "Real-world implementation scenarios",
    "ENCOR 350-401 exam voucher included",
    "CCIE-level expert instruction",
    "Enterprise networking expertise",
    "Advanced troubleshooting skills",
    "Career advancement to senior roles"
  ],
  instructor: "Cisco Certified Internetwork Expert (CCIE)",
  nextBatch: "25th November 2025",
  mode: ["Online", "Advanced Labs"]
};

export default function CCNPPage() {
  return <CourseDetailPage course={ccnpData} />;
}