"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const dockerDCAData = {
  title: "Docker Certified Associate (DCA)",
  description: "Master containerization with Docker and prepare for the Docker Certified Associate certification. Learn to build, deploy, and manage containerized applications with industry best practices and hands-on experience.",
  duration: "6-8 Weeks",
  level: "Intermediate",
  prerequisites: [
    "Basic Linux command line experience",
    "Understanding of software development lifecycle",
    "Familiarity with virtualization concepts",
    "Basic networking knowledge"
  ],
  objectives: [
    "Master Docker container fundamentals",
    "Learn Docker image creation and management",
    "Implement Docker networking and storage",
    "Configure Docker Swarm orchestration",
    "Understand container security best practices",
    "Pass the Docker Certified Associate (DCA) exam"
  ],
  modules: [
    {
      title: "Docker Fundamentals",
      duration: "1 Week",
      topics: [
        "Containerization concepts and benefits",
        "Docker architecture and components",
        "Docker installation and configuration",
        "Container lifecycle management",
        "Docker CLI commands and operations"
      ]
    },
    {
      title: "Images and Containers",
      duration: "1.5 Weeks",
      topics: [
        "Docker image fundamentals",
        "Dockerfile creation and best practices",
        "Multi-stage builds",
        "Image registries and repositories",
        "Container runtime configuration"
      ]
    },
    {
      title: "Docker Networking",
      duration: "1.5 Weeks",
      topics: [
        "Docker networking models",
        "Bridge, host, and overlay networks",
        "Port mapping and exposure",
        "Network troubleshooting",
        "Service discovery"
      ]
    },
    {
      title: "Storage and Volumes",
      duration: "1 Week",
      topics: [
        "Docker storage drivers",
        "Volume management",
        "Bind mounts and tmpfs",
        "Storage troubleshooting",
        "Data persistence strategies"
      ]
    },
    {
      title: "Docker Swarm Orchestration",
      duration: "1.5 Weeks",
      topics: [
        "Swarm mode architecture",
        "Service creation and management",
        "Rolling updates and rollbacks",
        "Load balancing and routing",
        "Swarm security and secrets"
      ]
    },
    {
      title: "Security and Best Practices",
      duration: "1.5 Weeks",
      topics: [
        "Container security fundamentals",
        "Image scanning and vulnerability management",
        "Runtime security",
        "Access control and authentication",
        "Production deployment strategies"
      ]
    }
  ],
  certification: "Docker Certified Associate (DCA)",
  price: "14,999",
  originalPrice: "22,999",
  features: [
    "Official Docker curriculum",
    "Hands-on labs with Docker environments",
    "Practice exams and assessments",
    "Exam voucher included",
    "Docker Desktop license",
    "Industry expert instruction",
    "Career guidance and placement support"
  ],
  instructor: "Docker Certified Professional",
  nextBatch: "12th November 2025",
  mode: ["Online", "Weekend Batches"]
};

export default function DockerDCAPage() {
  return <CourseDetailPage course={dockerDCAData} />;
}