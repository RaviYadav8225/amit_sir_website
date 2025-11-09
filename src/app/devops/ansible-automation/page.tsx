import CourseDetailPage from '../../components/CourseDetailPage';

const devopsWithAnsibleData = {
  course: {
    title: "DevOps with Ansible Automation",
    description: "Master Infrastructure Automation and Configuration Management using Ansible. Learn to automate infrastructure deployment, configuration management, and application deployment with hands-on projects and real-world scenarios.",
    duration: "5 Weeks",
    level: "Intermediate",
    
    prerequisites: [
      "Basic Linux administration knowledge",
      "Understanding of networking concepts", 
      "Familiarity with command line interface",
      "Basic scripting knowledge (helpful but not mandatory)"
    ],

    objectives: [
      "Master Ansible fundamentals and architecture",
      "Create and manage complex playbooks and roles",
      "Implement enterprise-level automation strategies",
      "Integrate Ansible with CI/CD pipelines",
      "Prepare for Red Hat Certified Engineer (RHCE) certification",
      "Build scalable infrastructure automation solutions"
    ],

    modules: [
      {
        title: "Ansible Fundamentals",
        duration: "1 Week",
        topics: [
          "Introduction to DevOps and Infrastructure Automation",
          "Ansible architecture and components",
          "Installation and configuration",
          "Inventory management and host patterns",
          "Ad-hoc commands and basic operations",
          "SSH configuration and key management"
        ]
      },
      {
        title: "Playbooks and Advanced Features",
        duration: "1.5 Weeks", 
        topics: [
          "YAML syntax and best practices",
          "Writing and executing playbooks",
          "Tasks, handlers, and variables",
          "Conditional statements and loops",
          "Roles and role-based automation",
          "Templates with Jinja2"
        ]
      },
      {
        title: "Enterprise Automation",
        duration: "1.5 Weeks",
        topics: [
          "Vault for secrets management",
          "Dynamic inventory and cloud integration",
          "Multi-tier application deployment", 
          "Database automation and management",
          "Network device configuration",
          "Container orchestration with Ansible"
        ]
      },
      {
        title: "CI/CD Integration & Projects",
        duration: "1 Week",
        topics: [
          "Integration with Jenkins and CI/CD",
          "Complete infrastructure automation project",
          "Application deployment pipeline",
          "Monitoring and logging automation",
          "RHCE exam preparation",
          "Best practices and optimization"
        ]
      }
    ],

    certification: "Red Hat Certified Engineer (RHCE) - EX294",
    price: "₹14,000",
    originalPrice: "₹24,000",
    
    features: [
      "Hands-on projects with enterprise scenarios",
      "RHCE certification preparation", 
      "CI/CD pipeline integration",
      "Multi-cloud automation strategies",
      "100% job assistance",
      "Lifetime access to course materials"
    ],

    instructor: "Amit Singh - Senior DevOps Architect (12+ years experience)",
    nextBatch: "Starting Every Monday",
    mode: ["Online Live", "Offline Classroom", "Hybrid"]
  }
};

export default function DevOpsWithAnsiblePage() {
  return <CourseDetailPage {...devopsWithAnsibleData} />;
}