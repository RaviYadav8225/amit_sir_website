"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

export default function DevOpsWithAzure() {
  const courseData = {
    title: "DevOps with Azure",
    code: "DEVOPS-AZURE-003",
    duration: "4 Months",
    level: "Intermediate to Advanced",
    description: "Master DevOps on Microsoft Azure platform. Learn Azure DevOps services, Azure cloud infrastructure, and CI/CD pipeline automation. Prepare for Microsoft Certified: DevOps Engineer Expert certification.",
    features: [
      "Complete DevOps on Azure Cloud",
      "Azure DevOps - Boards, Repos, Pipelines, Test Plans, Artifacts",
      "Infrastructure as Code with ARM Templates and Terraform",
      "CI/CD pipelines with Azure Pipelines",
      "Container orchestration with AKS (Azure Kubernetes Service)",
      "Azure monitoring with Application Insights and Monitor",
      "Azure security and governance",
      "Integration with GitHub Actions",
      "Preparation for Microsoft DevOps Engineer Expert certification",
      "Real-world Azure DevOps projects",
      "Industry expert mentorship",
      "Job placement assistance"
    ],
    objectives: [
      "Master Azure DevOps services - Boards, Repos, Pipelines, Artifacts",
      "Build CI/CD pipelines with Azure Pipelines",
      "Deploy applications on AKS",
      "Implement Infrastructure as Code with ARM and Bicep",
      "Monitor applications with Azure Monitor and Application Insights",
      "Integrate with GitHub Actions",
      "Prepare for Microsoft DevOps Engineer Expert certification"
    ],
    modules: [
      {
        title: "Module 1: DevOps and Azure Fundamentals",
        duration: "1 Week",
        topics: [
          "DevOps Principles and Azure Cloud Overview",
          "Azure Core Services - VMs, VNets, Storage, AD",
          "Azure CLI and Portal Management"
        ]
      },
      {
        title: "Module 2: Azure DevOps - Boards & Repos",
        duration: "4 Days",
        topics: [
          "Azure Boards - Agile Planning and Tracking",
          "Azure Repos - Git Workflows",
          "Branch Policies and Pull Requests"
        ]
      },
      {
        title: "Module 3: Azure Pipelines - CI/CD",
        duration: "1.5 Weeks",
        topics: [
          "YAML Pipelines and Build Automation",
          "Release Pipelines and Deployment",
          "Multi-stage Pipelines and Templates"
        ]
      },
      {
        title: "Module 4: Azure Artifacts & Package Management",
        duration: "3 Days",
        topics: [
          "Package Feeds - NuGet, npm, Maven",
          "Publishing and Consuming Packages",
          "Integration with CI/CD Pipelines"
        ]
      },
      {
        title: "Module 5: Infrastructure as Code",
        duration: "1 Week",
        topics: [
          "ARM Templates and Bicep",
          "Terraform for Azure Infrastructure",
          "Multi-environment Deployments"
        ]
      },
      {
        title: "Module 6: Container Services on Azure",
        duration: "1.5 Weeks",
        topics: [
          "Azure Container Registry (ACR)",
          "Azure Kubernetes Service (AKS)",
          "Helm Charts and AKS Monitoring"
        ]
      },
      {
        title: "Module 7: Monitoring and Security",
        duration: "1 Week",
        topics: [
          "Azure Monitor and Application Insights",
          "Azure AD and Key Vault",
          "DevSecOps and Compliance"
        ]
      },
      {
        title: "Module 8: GitHub Actions with Azure",
        duration: "4 Days",
        topics: [
          "GitHub Actions Workflows",
          "Azure Deployment with GitHub",
          "Hybrid CI/CD Strategies"
        ]
      },
      {
        title: "Module 9: Real-World Projects & Certification",
        duration: "1.5 Weeks",
        topics: [
          "Enterprise CI/CD Pipeline on Azure",
          "Microservices on AKS",
          "Microsoft DevOps Engineer Expert (AZ-400) Prep"
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of DevOps concepts",
      "Azure fundamentals or Azure Administrator certification",
      "Windows/Linux command line experience",
      "Basic networking knowledge",
      "Programming/scripting knowledge (PowerShell, Python, or C#)"
    ],
    audience: [
      "DevOps Engineers specializing in Microsoft technologies",
      "Azure Cloud Engineers and Architects",
      "System Administrators working with Azure",
      ".NET Developers building cloud applications",
      "IT professionals preparing for Azure DevOps certification",
      "Anyone wanting to master DevOps on Azure"
    ],
    careerPaths: [
      "Azure DevOps Engineer",
      "Cloud DevOps Specialist - Azure",
      "Azure Solutions Architect",
      "Site Reliability Engineer (SRE) - Azure",
      "Cloud Automation Engineer",
      "Azure Infrastructure Engineer"
    ],
    certification: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
    price: "45,000",
    originalPrice: "65,000",
    instructor: "Microsoft Certified Azure Solutions Architect & DevOps Expert",
    nextBatch: "Starting Soon",
    mode: ["Online", "Live Classes", "Azure Hands-on Labs"]
  };

  return <CourseDetailPage course={courseData} />;
}
