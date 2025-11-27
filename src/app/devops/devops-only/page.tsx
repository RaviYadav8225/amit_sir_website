"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

export default function DevOpsOnly() {
  const courseData = {
    title: "DevOps Only",
    code: "DEVOPS-001",
    duration: "3 Months",
    level: "Beginner to Advanced",
    description: "Master DevOps fundamentals with complete hands-on training in CI/CD, automation, monitoring, and collaboration tools. Perfect for developers and IT professionals starting their DevOps journey.",
    features: [
      "Complete DevOps lifecycle and methodology",
      "Version Control with Git and GitHub",
      "CI/CD pipelines with Jenkins",
      "Configuration Management with Ansible",
      "Containerization with Docker",
      "Container orchestration with Kubernetes",
      "Infrastructure as Code with Terraform",
      "Monitoring with Prometheus and Grafana",
      "DevOps best practices and culture",
      "Real-world projects and case studies",
      "Industry expert mentorship",
      "Job placement assistance"
    ],
    objectives: [
      "Master complete DevOps lifecycle and methodology",
      "Build CI/CD pipelines with Jenkins",
      "Automate configuration with Ansible",
      "Containerize applications with Docker",
      "Orchestrate containers with Kubernetes",
      "Implement Infrastructure as Code with Terraform",
      "Set up monitoring with Prometheus and Grafana",
      "Apply DevOps best practices in real projects"
    ],
    modules: [
      {
        title: "Module 1: DevOps Fundamentals",
        duration: "3 Days",
        topics: [
          "Introduction to DevOps Culture and Practices",
          "DevOps Lifecycle and Tools Ecosystem",
          "Agile and DevOps Integration"
        ]
      },
      {
        title: "Module 2: Version Control with Git",
        duration: "4 Days",
        topics: [
          "Git Workflows and Best Practices",
          "GitHub/GitLab/Bitbucket Integration",
          "Pull Requests and Code Reviews"
        ]
      },
      {
        title: "Module 3: Continuous Integration with Jenkins",
        duration: "1 Week",
        topics: [
          "Jenkins Installation and Configuration",
          "Jenkins Pipelines and Jenkinsfile",
          "Build Automation and Testing"
        ]
      },
      {
        title: "Module 4: Configuration Management - Ansible",
        duration: "1 Week",
        topics: [
          "Ansible Architecture and Installation",
          "Ansible Playbooks and Roles",
          "Configuration Management Best Practices"
        ]
      },
      {
        title: "Module 5: Containerization with Docker",
        duration: "1 Week",
        topics: [
          "Docker Installation and Images",
          "Dockerfile and Docker Compose",
          "Docker Networking and Security"
        ]
      },
      {
        title: "Module 6: Container Orchestration - Kubernetes",
        duration: "1.5 Weeks",
        topics: [
          "Kubernetes Architecture and Installation",
          "Pods, Deployments, Services",
          "Helm and Kubernetes Security"
        ]
      },
      {
        title: "Module 7: Infrastructure as Code - Terraform",
        duration: "1 Week",
        topics: [
          "Terraform Fundamentals and HCL",
          "State Management and Modules",
          "Infrastructure Provisioning Automation"
        ]
      },
      {
        title: "Module 8: Monitoring and Logging",
        duration: "1 Week",
        topics: [
          "Prometheus and Grafana Setup",
          "ELK Stack - Elasticsearch, Logstash, Kibana",
          "Application Performance Monitoring"
        ]
      },
      {
        title: "Module 9: DevOps Best Practices",
        duration: "3 Days",
        topics: [
          "CI/CD Pipeline Design Patterns",
          "Blue-Green and Canary Deployments",
          "DevSecOps and Cost Optimization"
        ]
      },
      {
        title: "Module 10: Real-World Projects",
        duration: "1 Week",
        topics: [
          "Complete CI/CD Pipeline Implementation",
          "Microservices Deployment with Kubernetes",
          "Capstone Project - End-to-End DevOps Workflow"
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of Linux/Windows operating systems",
      "Familiarity with command line interface",
      "Basic networking concepts",
      "Programming knowledge (any language) is helpful but not mandatory"
    ],
    audience: [
      "Software Developers looking to adopt DevOps practices",
      "System Administrators transitioning to DevOps",
      "IT Operations professionals",
      "QA Engineers interested in automation",
      "Fresh graduates entering IT industry",
      "Anyone interested in DevOps career"
    ],
    careerPaths: [
      "DevOps Engineer",
      "Site Reliability Engineer (SRE)",
      "CI/CD Engineer",
      "Automation Engineer",
      "Build and Release Engineer",
      "Infrastructure Engineer"
    ],
    certification: "Industry Recognized DevOps Certification",
    price: "35,000",
    originalPrice: "50,000",
    instructor: "Certified DevOps Professional with 10+ years experience",
    nextBatch: "Starting Soon",
    mode: ["Online", "Live Classes", "Hands-on Labs"]
  };

  return <CourseDetailPage course={courseData} />;
}
