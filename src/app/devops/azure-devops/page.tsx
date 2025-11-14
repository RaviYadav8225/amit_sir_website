import CourseDetailPage from '../../components/CourseDetailPage';

const devopsWithAzureData = {
  course: {
    title: "DevOps with Azure - AZ-400",
    description: "Master Azure DevOps and Cloud Infrastructure. Learn to build, test, and deploy applications using Azure DevOps Services, implement CI/CD pipelines, infrastructure as code, and cloud-native DevOps practices with hands-on projects.",
    duration: "8-10 Weeks",
    level: "Intermediate",
    
    prerequisites: [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure fundamentals", 
      "Basic programming knowledge (Python, PowerShell, or Bash)",
      "Understanding of software development lifecycle"
    ],

    objectives: [
      "Master Azure DevOps Services and tools",
      "Design and implement CI/CD pipelines in Azure",
      "Implement Infrastructure as Code using ARM, Terraform, and Bicep",
      "Configure Azure Kubernetes Service (AKS) for containerized applications",
      "Prepare for Microsoft Certified: DevOps Engineer Expert (AZ-400)",
      "Build enterprise-grade DevOps solutions on Azure cloud"
    ],

    modules: [
      {
        title: "Azure DevOps Fundamentals",
        duration: "2 Weeks",
        topics: [
          "Introduction to DevOps culture and practices",
          "Azure DevOps Services overview and setup",
          "Azure Boards - Agile project management",
          "Azure Repos - Git version control",
          "Azure Artifacts - Package management",
          "Azure Test Plans - Test management"
        ]
      },
      {
        title: "CI/CD with Azure Pipelines",
        duration: "2.5 Weeks", 
        topics: [
          "Azure Pipelines architecture and agents",
          "Build pipelines - YAML and Classic",
          "Release pipelines and deployment strategies",
          "Multi-stage pipelines and environments",
          "Pipeline triggers and schedules",
          "Security and secrets management with Azure Key Vault"
        ]
      },
      {
        title: "Infrastructure as Code & Container Orchestration",
        duration: "2 Weeks",
        topics: [
          "ARM Templates and Azure Bicep",
          "Terraform for Azure infrastructure",
          "Azure Kubernetes Service (AKS) deployment", 
          "Container registry and image management",
          "Helm charts and Kubernetes deployments",
          "Monitoring with Azure Monitor and Application Insights"
        ]
      },
      {
        title: "Advanced DevOps & Cloud Native Practices",
        duration: "1.5 Weeks",
        topics: [
          "GitOps workflows and best practices",
          "Azure DevOps integration with GitHub",
          "Microservices deployment strategies",
          "Security scanning and compliance automation",
          "Cost optimization and governance",
          "AZ-400 certification exam preparation"
        ]
      },
      {
        title: "Real-World Projects",
        duration: "2 Weeks",
        topics: [
          "End-to-end DevOps pipeline for .NET application",
          "Multi-cloud deployment with Azure and hybrid scenarios",
          "Automated testing and quality gates",
          "Blue-Green and Canary deployment implementation",
          "Disaster recovery and backup automation",
          "Portfolio project presentation"
        ]
      }
    ],

    certification: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
    price: "₹40,000",
    originalPrice: "₹70,000",
    
    features: [
      "Hands-on Azure cloud labs and projects",
      "AZ-400 certification preparation", 
      "Real-world CI/CD pipeline implementations",
      "Azure Kubernetes Service (AKS) mastery",
      "100% job placement assistance",
      "Lifetime access to course materials and updates",
      "Azure free credits for practice",
      "Industry expert mentorship"
    ],

    instructor: "Amit Singh - Microsoft Certified DevOps Architect (12+ years experience)",
    nextBatch: "20th November 2025",
    mode: ["Online Live", "Offline Classroom", "Hybrid"]
  }
};

export default function DevOpsWithAzurePage() {
  return <CourseDetailPage {...devopsWithAzureData} />;
}