"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const do188CourseData = {
  title: "Red Hat OpenShift Development I: Introduction to Containers",
  description: "Design, build, and deploy containerized applications on Red Hat OpenShift Container Platform. Learn application development workflows, container image creation, and deployment strategies for cloud-native applications.",
  duration: "30 Days",
  level: "Intermediate",
  prerequisites: [
    "Experience with web application development",
    "Basic understanding of Linux commands",
    "Familiarity with Git version control",
    "Knowledge of containerization concepts (DO180 recommended)"
  ],
  objectives: [
    "Design containerized applications for OpenShift",
    "Build and deploy applications using Source-to-Image",
    "Manage application configurations and secrets",
    "Implement application health checks",
    "Work with OpenShift templates and deployment configs",
    "Troubleshoot containerized applications"
  ],
  modules: [
    {
      title: "Containerizing Applications",
      duration: "1 Week",
      topics: [
        "Designing containerized applications",
        "Creating container images for applications",
        "Best practices for containerization",
        "Multi-container applications",
        "Container image optimization"
      ]
    },
    {
      title: "Deploying Applications on OpenShift",
      duration: "1 Week",
      topics: [
        "Source-to-Image (S2I) deployments",
        "Binary and Dockerfile deployments",
        "Deployment configurations and strategies",
        "Rolling updates and rollbacks",
        "Application scaling"
      ]
    },
    {
      title: "Managing Application Configuration",
      duration: "0.5 Weeks",
      topics: [
        "ConfigMaps for configuration data",
        "Secrets for sensitive information",
        "Environment variables",
        "Volume mounts and persistent storage",
        "External configuration sources"
      ]
    },
    {
      title: "Application Health and Monitoring",
      duration: "0.5 Weeks",
      topics: [
        "Readiness and liveness probes",
        "Health check implementation",
        "Application logging",
        "Monitoring application metrics",
        "Debugging containerized applications"
      ]
    },
    {
      title: "Advanced Deployment Patterns",
      duration: "1 Week",
      topics: [
        "OpenShift templates",
        "Helm charts for OpenShift",
        "Blue-green deployments",
        "Canary deployments",
        "A/B testing strategies",
        "CI/CD integration basics"
      ]
    }
  ],
  certification: "Red Hat DO188",
  price: "22,000",
  originalPrice: "38,000",
  features: [
    "Application containerization",
    "OpenShift deployment strategies",
    "Configuration management",
    "Health monitoring and probes",
    "Hands-on development labs",
    "Real-world project scenarios",
    "Expert developer guidance",
    "Certificate of completion"
  ],
  instructor: "Red Hat Certified Developer",
  nextBatch: "Starting Soon",
  mode: ["Online", "Live Classes"]
};

export default function DO188Page() {
  return <CourseDetailPage course={do188CourseData} />;
}
