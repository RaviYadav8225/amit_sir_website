"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const ansibleData = {
  title: "Service Management Through Ansible (RH358)",
  description: "Master advanced automation and service management using Red Hat Ansible Tower and Ansible Engine. Learn to design, implement, and manage large-scale automation solutions for enterprise environments.",
  duration: "8-10 Weeks",
  level: "Expert",
  prerequisites: [
    "RHCE certification or equivalent Ansible experience",
    "Strong Linux system administration skills",
    "Understanding of YAML and scripting",
    "Experience with network and cloud services"
  ],
  objectives: [
    "Design and implement enterprise automation solutions",
    "Manage Ansible Tower for team collaboration",
    "Automate complex service configurations",
    "Integrate Ansible with CI/CD pipelines",
    "Implement role-based access controls",
    "Optimize automation performance and scalability"
  ],
  modules: [
    {
      title: "Advanced Ansible Architecture",
      duration: "2 Weeks",
      topics: [
        "Enterprise Ansible deployment strategies",
        "Ansible Tower/AWX installation and configuration",
        "Inventory management at scale",
        "Dynamic inventory sources",
        "Custom modules and plugins development"
      ]
    },
    {
      title: "Enterprise Automation Design",
      duration: "2 Weeks",
      topics: [
        "Automation workflow design patterns",
        "Complex playbook structuring",
        "Role dependencies and collections",
        "Variable management strategies",
        "Error handling and rollback procedures"
      ]
    },
    {
      title: "Ansible Tower Management",
      duration: "2 Weeks",
      topics: [
        "Organizations and teams setup",
        "Job templates and workflows",
        "Credential management and security",
        "RBAC implementation",
        "Notifications and integrations"
      ]
    },
    {
      title: "Service Integration and Orchestration",
      duration: "1.5 Weeks",
      topics: [
        "Cloud service automation (AWS, Azure, GCP)",
        "Network device automation",
        "Database service management",
        "Application deployment pipelines",
        "Multi-tier service orchestration"
      ]
    },
    {
      title: "Performance and Optimization",
      duration: "1.5 Weeks",
      topics: [
        "Playbook performance optimization",
        "Parallel execution strategies",
        "Caching and fact gathering optimization",
        "Resource usage monitoring",
        "Troubleshooting automation issues"
      ]
    },
    {
      title: "Advanced Topics and Best Practices",
      duration: "1 Week",
      topics: [
        "Ansible Vault advanced usage",
        "Custom callback plugins",
        "API integration and REST services",
        "Compliance and security automation",
        "Industry best practices and case studies"
      ]
    }
  ],
  certification: "Red Hat Certified Specialist in Advanced Automation: Ansible Best Practices",
  price: "26,999",
  originalPrice: "38,999",
  features: [
    "Official Red Hat RH358 curriculum",
    "Advanced Ansible Tower lab environment",
    "Real enterprise automation scenarios",
    "Expert-level automation techniques",
    "Industry case studies",
    "Red Hat certified expert instructor",
    "Career advancement to automation architect"
  ],
  instructor: "Red Hat Certified Ansible Automation Expert",
  nextBatch: "1st December 2025",
  mode: ["Online", "Expert Labs"]
};

export default function AnsiblePage() {
  return <CourseDetailPage course={ansibleData} />;
}