"use client";
import CourseDetailPage from "../../components/CourseDetailPage";

const kubernetesAdminData = {
  title: "Certified Kubernetes Administrator (CKA)",
  description: "Master Kubernetes cluster administration and prepare for the CKA certification. Learn to install, configure, and manage production-grade Kubernetes clusters with hands-on experience in container orchestration.",
  duration: "8-10 Weeks",
  level: "Intermediate to Advanced",
  prerequisites: [
    "Strong Linux administration skills",
    "Docker containerization experience",
    "Basic understanding of networking concepts",
    "Command line proficiency"
  ],
  objectives: [
    "Install and configure Kubernetes clusters",
    "Manage cluster networking and storage",
    "Implement security and RBAC policies",
    "Monitor and troubleshoot cluster issues",
    "Perform cluster maintenance and upgrades",
    "Pass the CKA certification exam"
  ],
  modules: [
    {
      title: "Kubernetes Architecture & Installation",
      duration: "2 Weeks",
      topics: [
        "Kubernetes architecture and components",
        "Cluster installation methods (kubeadm, kops)",
        "Master and worker node configuration",
        "etcd cluster management",
        "Cluster networking setup"
      ]
    },
    {
      title: "Workload Management",
      duration: "2 Weeks",
      topics: [
        "Pods, Deployments, and ReplicaSets",
        "Services and Ingress controllers",
        "ConfigMaps and Secrets",
        "Jobs and CronJobs",
        "DaemonSets and StatefulSets"
      ]
    },
    {
      title: "Cluster Networking",
      duration: "1.5 Weeks",
      topics: [
        "CNI plugins and network policies",
        "Service discovery and DNS",
        "Load balancing and traffic routing",
        "Network troubleshooting",
        "Multi-cluster networking"
      ]
    },
    {
      title: "Storage Management",
      duration: "1.5 Weeks",
      topics: [
        "Persistent Volumes and Claims",
        "Storage classes and provisioners",
        "Volume plugins and CSI drivers",
        "Backup and disaster recovery",
        "Storage troubleshooting"
      ]
    },
    {
      title: "Security and RBAC",
      duration: "1 Week",
      topics: [
        "Authentication and authorization",
        "Role-based access control (RBAC)",
        "Pod security policies",
        "Network security and policies",
        "Certificate management"
      ]
    },
    {
      title: "Monitoring & Troubleshooting",
      duration: "2 Weeks",
      topics: [
        "Cluster monitoring and logging",
        "Resource management and quotas",
        "Performance tuning",
        "Troubleshooting methodologies",
        "Exam preparation and practice"
      ]
    }
  ],
  certification: "Certified Kubernetes Administrator (CKA)",
  price: "21,999",
  originalPrice: "31,999",
  features: [
    "Official CNCF curriculum",
    "Live Kubernetes cluster access",
    "Performance-based exam preparation",
    "Real-world scenario practice",
    "Exam voucher included",
    "Kubernetes certified instructor",
    "Post-certification career support"
  ],
  instructor: "Certified Kubernetes Administrator (CKA)",
  nextBatch: "9th December 2025",
  mode: ["Online", "Intensive Bootcamp"]
};

export default function KubernetesAdminPage() {
  return <CourseDetailPage course={kubernetesAdminData} />;
}