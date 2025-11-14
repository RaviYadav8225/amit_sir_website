import CourseDetailPage from '../../components/CourseDetailPage';

const terraformData = {
  course: {
    title: "Terraform Infrastructure Automation",
    description: "Master Infrastructure as Code with HashiCorp Terraform. Learn to provision and manage cloud infrastructure across AWS, Azure, and GCP with enterprise-level automation patterns and best practices.",
    duration: "4 Weeks",
    level: "Intermediate",
    
    prerequisites: [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Linux/Windows command line",
      "Basic networking knowledge",
      "Understanding of at least one cloud provider (AWS/Azure/GCP)"
    ],

    objectives: [
      "Master Terraform fundamentals and HCL syntax",
      "Implement Infrastructure as Code best practices",
      "Deploy multi-cloud infrastructure solutions",
      "Manage Terraform state and collaborate effectively",
      "Prepare for HashiCorp Terraform Associate certification",
      "Build enterprise-grade automation workflows"
    ],

    modules: [
      {
        title: "Terraform Fundamentals",
        duration: "1 Week",
        topics: [
          "Infrastructure as Code concepts and benefits",
          "Terraform architecture and workflow",
          "HCL (HashiCorp Configuration Language) syntax",
          "Providers and resources fundamentals",
          "Installation and configuration",
          "First infrastructure deployment"
        ]
      },
      {
        title: "Core Terraform Concepts",
        duration: "1 Week", 
        topics: [
          "Variables, outputs, and data sources",
          "Resource dependencies and graph theory",
          "State management and backends",
          "Terraform commands and CLI operations",
          "Environment management strategies",
          "Debugging and troubleshooting"
        ]
      },
      {
        title: "Advanced Features & Multi-Cloud",
        duration: "1 Week",
        topics: [
          "Modules creation and management",
          "Dynamic blocks and expressions",
          "Conditionals and loops in Terraform",
          "AWS, Azure, and GCP automation",
          "Cross-cloud networking and security",
          "Terraform functions and built-ins"
        ]
      },
      {
        title: "Enterprise & Production",
        duration: "1 Week",
        topics: [
          "Terraform Cloud and Enterprise features",
          "CI/CD pipeline integration",
          "Team collaboration workflows",
          "State locking and concurrent access",
          "Security best practices",
          "HashiCorp certification preparation"
        ]
      }
    ],

    certification: "HashiCorp Certified: Terraform Associate (003)",
    price: "₹15,000",
    originalPrice: "₹25,000",
    
    features: [
      "Multi-cloud infrastructure automation",
      "HashiCorp certification preparation", 
      "Enterprise-level projects",
      "CI/CD integration workflows",
      "100% placement assistance",
      "Hands-on cloud deployments"
    ],

    instructor: "Amit Singh - Senior Cloud Architect (12+ years experience)",
    nextBatch: "Starting Every Monday",
    mode: ["Online Live", "Offline Classroom", "Hybrid"]
  }
};

export default function TerraformPage() {
  return <CourseDetailPage {...terraformData} />;
}