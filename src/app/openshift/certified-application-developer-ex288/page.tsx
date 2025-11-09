"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const ex288Data = {
  title: "Red Hat Certified OpenShift Application Developer (EX288)",
  description: "Master cloud-native application development on OpenShift Container Platform. Learn to design, build, and deploy containerized applications using OpenShift's developer tools and best practices for modern application development.",
  duration: "8-10 Weeks",
  level: "Intermediate to Advanced",
  prerequisites: [
    "Basic programming experience (Python, Java, or Node.js)",
    "Understanding of containerization and Docker",
    "Familiarity with REST APIs and web services",
    "Basic knowledge of version control (Git)"
  ],
  objectives: [
    "Develop cloud-native applications for OpenShift",
    "Master containerization and image building",
    "Implement CI/CD pipelines with OpenShift",
    "Configure application networking and storage",
    "Deploy and manage application lifecycle",
    "Prepare for Red Hat EX288 certification exam"
  ],
  modules: [
    {
      title: "OpenShift Developer Fundamentals",
      duration: "1.5 Weeks",
      topics: [
        "OpenShift developer perspective overview",
        "Application development workflow",
        "Developer CLI (oc) mastery",
        "OpenShift Web Console for developers",
        "Source-to-Image (S2I) build process"
      ]
    },
    {
      title: "Container Image Development",
      duration: "2 Weeks",
      topics: [
        "Dockerfile best practices for OpenShift",
        "Multi-stage builds and optimization",
        "Image security and scanning",
        "Image streams and triggers",
        "Custom builder images creation"
      ]
    },
    {
      title: "Application Deployment and Configuration",
      duration: "2 Weeks",
      topics: [
        "Deployment strategies and patterns",
        "ConfigMaps and Secrets management",
        "Environment-specific configurations",
        "Health checks and readiness probes",
        "Resource limits and requests"
      ]
    },
    {
      title: "Networking and Service Integration",
      duration: "1.5 Weeks",
      topics: [
        "Service discovery and communication",
        "Route and ingress configuration",
        "Load balancing and traffic splitting",
        "External service integration",
        "API gateway patterns"
      ]
    },
    {
      title: "CI/CD Pipeline Development",
      duration: "2 Weeks",
      topics: [
        "OpenShift Pipelines (Tekton) implementation",
        "Build triggers and webhooks",
        "Automated testing integration",
        "GitOps workflow implementation",
        "Pipeline security and compliance"
      ]
    },
    {
      title: "Advanced Development Topics",
      duration: "1 Week",
      topics: [
        "Serverless applications with OpenShift Serverless",
        "Event-driven architecture patterns",
        "Application monitoring and observability",
        "Troubleshooting application issues",
        "EX288 exam preparation and practice"
      ]
    }
  ],
  certification: "Red Hat Certified OpenShift Application Developer (EX288)",
  price: "29,999",
  originalPrice: "43,999",
  features: [
    "Official Red Hat OpenShift developer curriculum",
    "Live OpenShift development environment",
    "Real-world application development projects",
    "CI/CD pipeline hands-on experience",
    "EX288 exam voucher included",
    "Red Hat certified developer instructor",
    "Cloud-native development expertise"
  ],
  instructor: "Red Hat Certified OpenShift Developer",
  nextBatch: "20th November 2025",
  mode: ["Online", "Development Labs"]
};

export default function EX288Page() {
  return <CourseDetailPage course={ex288Data} />;
}