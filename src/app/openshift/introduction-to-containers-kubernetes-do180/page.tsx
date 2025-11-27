"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const do180CourseData = {
  title: "Introduction to Containers, Kubernetes, and Red Hat OpenShift",
  description: "Learn how to build and manage containerized applications using Docker, Kubernetes, and Red Hat OpenShift Container Platform. This course provides hands-on training in container technology and prepares you for advanced OpenShift administration.",
  duration: "30 Days",
  level: "Beginner",
  prerequisites: [
    "Basic understanding of Linux commands",
    "Familiarity with system administration concepts",
    "Basic knowledge of networking",
    "Understanding of application deployment basics"
  ],
  objectives: [
    "Understand container technology and Docker basics",
    "Learn Kubernetes architecture and components",
    "Deploy and manage containerized applications",
    "Introduction to Red Hat OpenShift Container Platform",
    "Build container images using Dockerfile",
    "Manage pods, deployments, and services in Kubernetes"
  ],
  modules: [
    {
      title: "Container Technology Fundamentals",
      duration: "1 Week",
      topics: [
        "Introduction to containers and containerization",
        "Docker architecture and components",
        "Container images and registries",
        "Running and managing containers",
        "Container networking basics"
      ]
    },
    {
      title: "Building Container Images",
      duration: "1 Week",
      topics: [
        "Dockerfile syntax and best practices",
        "Creating custom container images",
        "Multi-stage builds",
        "Image optimization techniques",
        "Working with container registries"
      ]
    },
    {
      title: "Kubernetes Fundamentals",
      duration: "1 Week",
      topics: [
        "Kubernetes architecture overview",
        "Pods, deployments, and replica sets",
        "Services and networking",
        "ConfigMaps and secrets",
        "Persistent storage in Kubernetes"
      ]
    },
    {
      title: "Introduction to OpenShift",
      duration: "1 Week",
      topics: [
        "OpenShift architecture and features",
        "OpenShift vs Kubernetes",
        "Projects and role-based access control",
        "Source-to-Image (S2I) builds",
        "Routes and ingress",
        "OpenShift web console and CLI"
      ]
    }
  ],
  certification: "Red Hat DO180",
  price: "20,000",
  originalPrice: "35,000",
  features: [
    "Container fundamentals with Docker",
    "Kubernetes core concepts",
    "OpenShift platform introduction",
    "Hands-on labs and exercises",
    "Real-world deployment scenarios",
    "Image building and management",
    "Expert instruction",
    "Course completion certificate"
  ],
  instructor: "Red Hat Certified Specialist",
  nextBatch: "Starting Soon",
  mode: ["Online", "Live Classes"]
};

export default function DO180Page() {
  return <CourseDetailPage course={do180CourseData} />;
}
