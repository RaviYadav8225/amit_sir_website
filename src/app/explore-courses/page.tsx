"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './animations.css';

// Course interface definition
interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon: string;
  image: string;
  color: string;
  urlPath: string;
  certification?: string;
  price?: string;
  rating?: number;
  students?: string;
  features?: string[];
}

// All courses data - Only courses listed in navbar
const coursesData: Course[] = [
  // AWS Cloud Courses (from navbar)
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    description: "Entry-level AWS certification covering cloud concepts, services, security, architecture, pricing, and support.",
    category: "AWS Cloud",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "☁️",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-orange-500 to-yellow-500",
    urlPath: "/aws/certified-cloud-practitioner",
    certification: "AWS CCP (CLF-C02)",
    price: "₹18,000",
    rating: 4.8,
    students: "2.5K+",
    features: ["Hands-on Labs", "Exam Voucher", "Industry Projects", "24/7 Support"]
  },
  {
    id: 2,
    title: "AWS Solutions Architect Associate",
    description: "Design and deploy scalable, highly available systems on AWS. Master architectural best practices.",
    category: "AWS Cloud",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-cyan-500",
    urlPath: "/aws/certified-solutions-architect-associate",
    certification: "AWS SAA (SAA-C03)",
    price: "₹18,000",
    rating: 4.9,
    students: "3.2K+",
    features: ["Real Projects", "AWS Labs", "Expert Mentoring", "Job Assistance"]
  },
  {
    id: 3,
    title: "AWS SysOps Administrator Associate",
    description: "Deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS.",
    category: "AWS Cloud",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-pink-500",
    urlPath: "/aws/certified-sysops-administrator-associate",
    certification: "AWS SOA (SOA-C02)",
    price: "₹23,000",
    rating: 4.6,
    students: "1.5K+",
    features: ["System Operations", "Monitoring", "Security", "Cost Optimization"]
  },
  {
    id: 4,
    title: "AWS Developer Associate",
    description: "Master AWS application development with Lambda, API Gateway, DynamoDB, and CI/CD pipelines.",
    category: "AWS Cloud",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=600&q=80",
    color: "from-green-500 to-emerald-500",
    urlPath: "/aws/certified-developer-associate",
    certification: "AWS DVA (DVA-C02)",
    price: "₹24,000",
    rating: 4.7,
    students: "1.8K+",
    features: ["Serverless Apps", "DevOps Integration", "Hands-on Coding", "Industry Projects"]
  },
  {
    id: 5,
    title: "AWS DevOps Engineer Professional",
    description: "Advanced AWS DevOps practices including CI/CD, infrastructure as code, and automation.",
    category: "AWS Cloud",
    level: "Advanced",
    duration: "12-14 Weeks",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80",
    color: "from-red-500 to-orange-500",
    urlPath: "/aws/certified-devops-engineer-professional",
    certification: "AWS DOP (DOP-C02)",
    price: "₹35,000",
    rating: 4.9,
    students: "800+",
    features: ["Advanced DevOps", "Automation", "Professional Level", "Elite Mentoring"]
  },

  // RedHat Linux Courses (from navbar)
  {
    id: 8,
    title: "RHCSA - Red Hat System Administrator",
    description: "Master essential Linux system administration skills and get certified in Red Hat Enterprise Linux.",
    category: "RedHat Linux",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "🔴",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80",
    color: "from-red-500 to-red-600",
    urlPath: "/certifications/rhcsa",
    certification: "RHCSA (EX200)",
    price: "₹15,000",
    rating: 4.8,
    students: "2.1K+",
    features: ["Hands-on Labs", "Real Servers", "Industry Standard", "Job Ready Skills"]
  },
  {
    id: 9,
    title: "RHCE - Red Hat Certified Engineer",
    description: "Advanced Red Hat Linux skills including automation, networking, and enterprise services.",
    category: "RedHat Linux",
    level: "Advanced",
    duration: "10-12 Weeks",
    icon: "🏅",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80",
    color: "from-red-600 to-pink-600",
    urlPath: "/certifications/rhce",
    certification: "RHCE (EX294)",
    price: "₹15,000",
    rating: 4.9,
    students: "1.2K+",
    features: ["Advanced Linux", "Automation", "Enterprise Services", "Expert Level"]
  },
  {
    id: 10,
    title: "OpenStack Cloud Administration",
    description: "Learn OpenStack cloud infrastructure deployment, configuration, and management for enterprise environments.",
    category: "RedHat Linux",
    level: "Advanced",
    duration: "10-12 Weeks",
    icon: "☁️",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-indigo-600",
    urlPath: "/certifications/openstack",
    certification: "EX210",
    price: "₹25,000",
    rating: 4.7,
    students: "800+",
    features: ["Cloud Infrastructure", "OpenStack", "Enterprise Cloud", "Virtualization"]
  },
  {
    id: 11,
    title: "Red Hat Enterprise Virtualization",
    description: "Master Red Hat virtualization technologies and manage enterprise virtual environments.",
    category: "RedHat Linux",
    level: "Advanced",
    duration: "8-10 Weeks",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-pink-600",
    urlPath: "/certifications/enterprise-virtualization",
    certification: "EX318",
    price: "₹22,000",
    rating: 4.6,
    students: "650+",
    features: ["Virtualization", "KVM", "Virtual Machines", "Enterprise Solutions"]
  },
  {
    id: 12,
    title: "Introduction to Containers, Kubernetes, and OpenShift",
    description: "Learn containerization fundamentals with Docker, Kubernetes, and Red Hat OpenShift.",
    category: "RedHat Linux",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "🐳",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    color: "from-cyan-500 to-blue-600",
    urlPath: "/openshift/introduction-to-containers-kubernetes-do180",
    certification: "DO180",
    price: "₹20,000",
    rating: 4.7,
    students: "1.1K+",
    features: ["Container Basics", "Kubernetes Intro", "OpenShift Platform", "Hands-on Labs"]
  },
  {
    id: 13,
    title: "Red Hat OpenShift Administration",
    description: "Deploy, manage, and troubleshoot OpenShift Container Platform clusters and applications.",
    category: "RedHat Linux",
    level: "Advanced",
    duration: "10-12 Weeks",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80",
    color: "from-red-500 to-blue-600",
    urlPath: "/openshift/certified-specialist-administration-ex280",
    certification: "DO280/EX280",
    price: "₹30,000",
    rating: 4.8,
    students: "950+",
    features: ["OpenShift", "Container Platform", "Kubernetes", "Cloud Native"]
  },
  {
    id: 14,
    title: "Red Hat OpenShift Development",
    description: "Develop containerized applications using Red Hat OpenShift Container Platform.",
    category: "RedHat Linux",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80",
    color: "from-green-500 to-blue-600",
    urlPath: "/openshift/red-hat-openshift-development-do188",
    certification: "DO188",
    price: "₹24,000",
    rating: 4.6,
    students: "750+",
    features: ["Container Development", "OpenShift", "Application Deployment", "DevOps"]
  },
  {
    id: 15,
    title: "Red Hat OpenShift Application Developer",
    description: "Design and deploy containerized applications on Red Hat OpenShift Container Platform.",
    category: "RedHat Linux",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80",
    color: "from-cyan-500 to-blue-700",
    urlPath: "/openshift/certified-application-developer-ex288",
    certification: "DO288/EX288",
    price: "₹26,000",
    rating: 4.7,
    students: "850+",
    features: ["Application Development", "Containers", "OpenShift", "DevOps"]
  },

  // Cisco Courses (from navbar)
  {
    id: 16,
    title: "CCST Networking",
    description: "Entry-level Cisco certification covering fundamental networking concepts and basic configuration.",
    category: "Cisco",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "🌟",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    color: "from-green-500 to-blue-500",
    urlPath: "/cisco/ccst-networking",
    certification: "CCST Networking (100-150)",
    price: "₹16,000",
    rating: 4.6,
    students: "1.9K+",
    features: ["Networking Basics", "Entry Level", "Foundation Skills", "Career Starter"]
  },
  {
    id: 17,
    title: "CCNA Training 200-301",
    description: "Master networking fundamentals with Cisco CCNA certification covering routing, switching, and security.",
    category: "Cisco",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-cyan-500",
    urlPath: "/cisco/ccna-training-200-301",
    certification: "CCNA (200-301)",
    price: "₹15,000",
    rating: 4.8,
    students: "2.8K+",
    features: ["Network Fundamentals", "Routing & Switching", "Network Security", "Real Labs"]
  },
  {
    id: 18,
    title: "CCNP Training 350-401",
    description: "Advanced networking certification covering enterprise network core technologies and solutions.",
    category: "Cisco",
    level: "Advanced",
    duration: "12-14 Weeks",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    color: "from-indigo-500 to-purple-600",
    urlPath: "/cisco/ccnp-training-350-401",
    certification: "CCNP (350-401)",
    price: "₹30,000",
    rating: 4.8,
    students: "1.2K+",
    features: ["Advanced Networking", "Enterprise Solutions", "Professional Level", "Expert Skills"]
  },

  // Python Courses (from navbar)
  {
    id: 19,
    title: "Python Programming",
    description: "Master Python fundamentals and advanced concepts with PCEP and PCAP certification preparation.",
    category: "Python",
    level: "Beginner",
    duration: "10-12 Weeks",
    icon: "🐍",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-yellow-500",
    urlPath: "/python/python-programming",
    certification: "PCEP/PCAP",
    price: "₹20,000",
    rating: 4.7,
    students: "2.8K+",
    features: ["Python Basics", "OOP", "Data Structures", "Certification Prep"]
  },
  {
    id: 20,
    title: "Python Full Stack Development",
    description: "Complete Python web development with Django, Flask, databases, and deployment.",
    category: "Python",
    level: "Intermediate",
    duration: "12-14 Weeks",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80",
    color: "from-yellow-500 to-green-500",
    urlPath: "/python/full-stack-development",
    certification: "Python Full Stack",
    price: "₹25,000",
    rating: 4.8,
    students: "2.5K+",
    features: ["Django/Flask", "Database Design", "API Development", "Deployment"]
  },

  // Docker Courses (from navbar)
  {
    id: 21,
    title: "Docker Fundamentals Training",
    description: "Learn Docker basics, container creation, image management, and deployment strategies.",
    category: "Docker",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "🐳",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    color: "from-cyan-500 to-blue-600",
    urlPath: "/docker/docker-fundamentals",
    certification: "Docker Fundamentals (DO101)",
    price: "₹18,000",
    rating: 4.6,
    students: "2.1K+",
    features: ["Container Basics", "Image Management", "Docker Compose", "Best Practices"]
  },
  {
    id: 22,
    title: "Docker Certified Associate",
    description: "Master containerization with Docker including orchestration, networking, and security.",
    category: "Docker",
    level: "Intermediate",
    duration: "6-8 Weeks",
    icon: "🏅",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-400 to-cyan-500",
    urlPath: "/docker/docker-certified-associate",
    certification: "Docker DCA",
    price: "₹20,000",
    rating: 4.7,
    students: "1.7K+",
    features: ["Containerization", "Docker Compose", "Swarm Mode", "Container Security"]
  },

  // Kubernetes Courses (from navbar)
  {
    id: 23,
    title: "Certified Kubernetes Administrator",
    description: "Comprehensive Kubernetes administration including cluster management, networking, and troubleshooting.",
    category: "Kubernetes",
    level: "Advanced",
    duration: "10-12 Weeks",
    icon: "🏅",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-indigo-600",
    urlPath: "/kubernetes/certified-kubernetes-administrator",
    certification: "CKA",
    price: "₹28,000",
    rating: 4.8,
    students: "1.3K+",
    features: ["Cluster Management", "Networking", "Storage", "Troubleshooting"]
  },
  {
    id: 24,
    title: "Certified Kubernetes Application Developer",
    description: "Application development on Kubernetes with focus on deployments, services, and configuration.",
    category: "Kubernetes",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=600&q=80",
    color: "from-green-500 to-blue-500",
    urlPath: "/kubernetes/certified-kubernetes-application-developer",
    certification: "CKAD",
    price: "₹25,000",
    rating: 4.7,
    students: "1.1K+",
    features: ["App Development", "Deployments", "Services", "Configuration"]
  },
  {
    id: 25,
    title: "Certified Kubernetes Security Specialist",
    description: "Advanced Kubernetes security covering cluster hardening, system security, and compliance.",
    category: "Kubernetes",
    level: "Advanced",
    duration: "10-12 Weeks",
    icon: "🔒",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=600&q=80",
    color: "from-red-500 to-purple-600",
    urlPath: "/kubernetes/certified-kubernetes-security-specialist",
    certification: "CKS",
    price: "₹30,000",
    rating: 4.8,
    students: "850+",
    features: ["Security Hardening", "System Security", "Compliance", "Threat Detection"]
  },

  // Microsoft Courses (from navbar)
  {
    id: 26,
    title: "Microsoft Azure Fundamentals",
    description: "Introduction to Microsoft Azure cloud services, solutions, and management tools.",
    category: "Microsoft",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "☁️",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-cyan-500",
    urlPath: "/microsoft/az-900",
    certification: "AZ-900",
    price: "₹18,000",
    rating: 4.6,
    students: "1.8K+",
    features: ["Azure Basics", "Cloud Concepts", "Azure Services", "Pricing Models"]
  },
  {
    id: 27,
    title: "Microsoft Azure Administrator Associate",
    description: "Manage Azure subscriptions, secure identities, administer infrastructure, and configure virtual networking.",
    category: "Microsoft",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-600 to-indigo-600",
    urlPath: "/microsoft/az-104",
    certification: "AZ-104",
    price: "₹25,000",
    rating: 4.7,
    students: "1.4K+",
    features: ["Azure Management", "Virtual Networks", "Storage", "Identity Management"]
  },
  {
    id: 29,
    title: "Microsoft Azure Data Fundamentals",
    description: "Foundation knowledge of core data concepts and Azure data services including relational and non-relational data.",
    category: "Microsoft",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-blue-600",
    urlPath: "/microsoft/dp-900",
    certification: "DP-900",
    price: "₹17,000",
    rating: 4.5,
    students: "1.5K+",
    features: ["Data Concepts", "SQL", "NoSQL", "Azure Data Services"]
  },
  {
    id: 30,
    title: "Microsoft Azure Data Engineer Associate",
    description: "Design and implement data management, monitoring, security, and privacy using Azure data services.",
    category: "Microsoft",
    level: "Advanced",
    duration: "12-14 Weeks",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-indigo-600 to-purple-700",
    urlPath: "/microsoft/dp-203",
    certification: "DP-203",
    price: "₹30,000",
    rating: 4.8,
    students: "900+",
    features: ["Data Engineering", "ETL", "Data Lakes", "Big Data"]
  },
  {
    id: 31,
    title: "Microsoft Azure AI Fundamentals",
    description: "Introduction to AI concepts and Azure AI services including machine learning and cognitive services.",
    category: "Microsoft",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "🤖",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-pink-500 to-purple-600",
    urlPath: "/microsoft/ai-900",
    certification: "AI-900",
    price: "₹19,000",
    rating: 4.6,
    students: "1.3K+",
    features: ["AI Basics", "Machine Learning", "Cognitive Services", "Azure AI"]
  },
  {
    id: 32,
    title: "Microsoft Azure AI Engineer Associate",
    description: "Design and implement AI solutions using Azure Cognitive Services, Machine Learning, and Knowledge Mining.",
    category: "Microsoft",
    level: "Advanced",
    duration: "12-14 Weeks",
    icon: "🧠",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-600 to-pink-700",
    urlPath: "/microsoft/ai-102",
    certification: "AI-102",
    price: "₹32,000",
    rating: 4.8,
    students: "800+",
    features: ["AI Solutions", "Cognitive Services", "ML Models", "Knowledge Mining"]
  },
  {
    id: 35,
    title: "Microsoft Power Platform Fundamentals",
    description: "Learn to build low-code/no-code solutions with Power Apps, Power Automate, Power BI, and Power Virtual Agents.",
    category: "Microsoft",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-pink-600",
    urlPath: "/microsoft/pl-900",
    certification: "PL-900 Fundamentals",
    rating: 4.8,
    students: "1.1K+",
    features: ["Power Apps", "Power Automate", "Power BI", "Low-Code Development"]
  },
  {
    id: 36,
    title: "Microsoft Power BI Data Analyst",
    description: "Master data analytics and visualization with Power BI. Learn data transformation, modeling, DAX, and interactive dashboard creation.",
    category: "Microsoft",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    color: "from-yellow-500 to-orange-600",
    urlPath: "/microsoft/pl-300",
    certification: "PL-300 Associate",
    rating: 4.9,
    students: "1.3K+",
    features: ["Data Modeling", "DAX", "Visualizations", "Power Query"]
  },
  {
    id: 33,
    title: "Microsoft 365 Fundamentals",
    description: "Learn foundational knowledge of cloud services and how they are provided with Microsoft 365. Perfect for beginners.",
    category: "Microsoft",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "🖥️",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-green-600",
    urlPath: "/microsoft/ms-365",
    certification: "MS-900 Fundamentals",
    price: "₹27,000",
    rating: 4.7,
    students: "1.1K+",
    features: ["Microsoft 365", "Desktop Admin", "Security", "Cloud Services"]
  },

  // DevOps Courses (from navbar - these are not individual courses but categories)
  // Note: DevOps courses in navbar are just labels, actual courses would be separate

  // Cybersecurity Courses (from navbar)
  {
    id: 35,
    title: "CCST Cybersecurity",
    description: "Entry-level Cisco certification covering fundamental cybersecurity concepts and basic security practices.",
    category: "Cybersecurity",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "🌟",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    color: "from-green-500 to-blue-500",
    urlPath: "/cisco/ccst-cybersecurity",
    certification: "CCST Cybersecurity (100-150)",
    price: "₹16,000",
    rating: 4.6,
    students: "1.9K+",
    features: ["Cybersecurity Basics", "Entry Level", "Foundation Skills", "Career Starter"]
  },
  {
    id: 37,
    title: "Cybersecurity Basic + Advanced",
    description: "Comprehensive cybersecurity training from fundamentals to advanced security techniques and tools.",
    category: "Cybersecurity",
    level: "Intermediate",
    duration: "12-14 Weeks",
    icon: "🚫",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
    color: "from-red-600 to-purple-700",
    urlPath: "/cybersecurity/basic-advanced",
    certification: "Cybersecurity Professional",
    price: "₹30,000",
    rating: 4.8,
    students: "1.5K+",
    features: ["Security Basics", "Advanced Techniques", "Ethical Hacking", "Security Tools"]
  }
];


export default function ExploreCourses() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  // Get unique categories for filter dropdown
  const categories = ['All', ...Array.from(new Set(coursesData.map(course => course.category)))];

  // Course Card Component
  const CourseCard = ({ course, index }: { course: Course; index: number }) => (
    <Link href={course.urlPath} className="block group">
      <div 
        className={`relative bg-gradient-to-br ${course.color} rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white rounded-full transform translate-x-16 -translate-y-16 group-hover:rotate-45 transition-transform duration-500"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-white rounded-full transform -translate-x-12 translate-y-12 group-hover:-rotate-45 transition-transform duration-500"></div>
        </div>
        
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                {course.icon}
              </div>
              <div>
                <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">
                  {course.category}
                </div>
                <div className={`text-xs px-2 py-1 rounded-full font-medium mt-1 ${
                  course.level === 'Beginner' ? 'bg-green-500/30 text-green-100' :
                  course.level === 'Intermediate' ? 'bg-yellow-500/30 text-yellow-100' :
                  'bg-red-500/30 text-red-100'
                }`}>
                  {course.level}
                </div>
              </div>
            </div>
            
            {/* Rating */}
            <div className="text-right">
              <div className="flex items-center gap-1 text-yellow-300">
                <span className="text-sm">⭐</span>
                <span className="text-sm font-semibold">{course.rating}</span>
              </div>
              <div className="text-xs text-white/70">{course.students}</div>
            </div>
          </div>
          
          {/* Course Title */}
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-200 transition-colors duration-300">
            {course.title}
          </h3>
          
          {/* Description */}
          <p className="text-white/80 text-sm mb-4 line-clamp-3 flex-grow">
            {course.description}
          </p>
          
          {/* Course Details */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Duration:</span>
              <span className="text-white font-semibold">{course.duration}</span>
            </div>
            {course.certification && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Certification:</span>
                <span className="text-white font-semibold text-xs">{course.certification}</span>
              </div>
            )}
          </div>
          
          {/* Features */}
          {course.features && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {course.features.slice(0, 3).map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {course.features.length > 3 && (
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                    +{course.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* CTA Button */}
          <div className="mt-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center group-hover:bg-white/30 transition-all duration-300">
              <span className="text-white font-semibold text-sm">Explore Course</span>
              <div className="text-xs text-white/80 mt-1">Click to learn more</div>
            </div>
          </div>
        </div>
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Explore All Courses
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover comprehensive training programs in Cloud Computing, DevOps, Cybersecurity, 
            and IT Infrastructure from industry-leading experts
          </p>
          
          {/* Search and Filter Section */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="absolute right-3 top-3 text-gray-300">
                  🔍
                </div>
              </div>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                title="Filter by Category"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
              
              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                title="Filter by Level"
              >
                <option value="All" className="bg-gray-800 text-white">All Levels</option>
                <option value="Beginner" className="bg-gray-800 text-white">Beginner</option>
                <option value="Intermediate" className="bg-gray-800 text-white">Intermediate</option>
                <option value="Advanced" className="bg-gray-800 text-white">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Counter */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-gray-300">
              {selectedCategory !== 'All' && `${selectedCategory} • `}
              {selectedLevel !== 'All' && `${selectedLevel} Level • `}
              Professional Training Programs
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Courses Found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedLevel('All');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Category Overview */}
          <div className="mt-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Course Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.filter(cat => cat !== 'All').map((category) => {
                const categoryCount = coursesData.filter(course => course.category === category).length;
                const categoryIcon = coursesData.find(course => course.category === category)?.icon || '📚';
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`p-4 rounded-xl text-center transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-blue-600/30 border-2 border-blue-400' 
                        : 'bg-white/10 hover:bg-white/20 border-2 border-transparent'
                    }`}
                  >
                    <div className="text-2xl mb-2">{categoryIcon}</div>
                    <div className="text-white font-semibold text-sm">{category}</div>
                    <div className="text-gray-300 text-xs">{categoryCount} course{categoryCount !== 1 ? 's' : ''}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}