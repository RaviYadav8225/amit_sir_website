"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const ansibleRH358Data = {
  title: "Service Management Through Ansible (RH358)",
  description: "Master advanced Ansible automation for enterprise service management and infrastructure orchestration. Learn to implement sophisticated automation workflows, manage complex service deployments, and integrate Ansible with enterprise monitoring and management systems.",
  duration: "10-12 Weeks",
  level: "Expert",
  prerequisites: [
    "RHCE certification with Ansible automation experience",
    "Strong experience with Red Hat Enterprise Linux",
    "Understanding of enterprise service architectures",
    "Experience with network services and application deployment"
  ],
  objectives: [
    "Implement advanced Ansible automation for service management",
    "Design and deploy complex service orchestration workflows",
    "Integrate Ansible with enterprise monitoring and ITSM tools",
    "Automate service lifecycle management and provisioning",
    "Implement self-healing infrastructure and automated remediation",
    "Master enterprise-grade automation best practices"
  ],
  modules: [
    {
      title: "Advanced Ansible Architecture",
      duration: "2 Weeks",
      topics: [
        "Enterprise Ansible architecture and design patterns",
        "Ansible Tower/AWX advanced configuration",
        "Automation workflow design and orchestration",
        "Integration with enterprise identity management",
        "API-driven automation and REST service integration"
      ]
    },
    {
      title: "Service Lifecycle Automation",
      duration: "2 Weeks",
      topics: [
        "Automated service provisioning and deprovisioning",
        "Configuration management for complex services",
        "Database and middleware automation",
        "Application deployment and rollback strategies",
        "Service dependency management and orchestration"
      ]
    },
    {
      title: "Monitoring and Event-Driven Automation",
      duration: "2 Weeks",
      topics: [
        "Integration with monitoring systems (Nagios, Zabbix, Prometheus)",
        "Event-driven automation and webhook integration",
        "Automated incident response and remediation",
        "Performance monitoring and auto-scaling",
        "Log aggregation and analysis automation"
      ]
    },
    {
      title: "Network and Security Automation",
      duration: "1.5 Weeks",
      topics: [
        "Network device automation and configuration",
        "Security policy automation and compliance",
        "Firewall and access control automation",
        "Certificate management and PKI automation",
        "Vulnerability scanning and patch management"
      ]
    },
    {
      title: "Cloud and Hybrid Infrastructure",
      duration: "1.5 Weeks",
      topics: [
        "Multi-cloud automation strategies",
        "Hybrid cloud service management",
        "Container orchestration with Ansible",
        "Infrastructure as Code (IaC) best practices",
        "Cloud cost optimization automation"
      ]
    },
    {
      title: "Enterprise Integration",
      duration: "1.5 Weeks",
      topics: [
        "ITSM tool integration (ServiceNow, Remedy)",
        "CMDB synchronization and maintenance",
        "Change management workflow automation",
        "Backup and disaster recovery automation",
        "Compliance reporting and audit automation"
      ]
    },
    {
      title: "Performance and Troubleshooting",
      duration: "1 Week",
      topics: [
        "Ansible performance optimization techniques",
        "Parallel execution and workflow optimization",
        "Troubleshooting complex automation scenarios",
        "Custom callback plugins and module development",
        "Advanced debugging and error handling"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Advanced Automation: Ansible Best Practices (RH358)",
  price: "38,999",
  originalPrice: "55,999",
  features: [
    "Official Red Hat RH358 curriculum and advanced lab environment",
    "Enterprise-grade Ansible Tower/AWX lab environment",
    "Real-world service management automation scenarios",
    "Expert-level automation techniques and best practices",
    "Integration with popular enterprise tools and platforms",
    "Red Hat certified automation expert instructor",
    "Career advancement to enterprise automation architect"
  ],
  instructor: "Red Hat Certified Ansible Automation Expert",
  nextBatch: "5th December 2025",
  mode: ["Online", "Advanced Labs"]
};

export default function AnsibleRH358Page() {
  return <CourseDetailPage course={ansibleRH358Data} />;
}