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

// All courses data
const coursesData: Course[] = [
  // AWS Cloud Courses
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
    price: "₹25,000",
    rating: 4.9,
    students: "3.2K+",
    features: ["Real Projects", "AWS Labs", "Expert Mentoring", "Job Assistance"]
  },
  {
    id: 3,
    title: "AWS Developer Associate",
    description: "Master AWS application development with Lambda, API Gateway, DynamoDB, and CI/CD pipelines.",
    category: "AWS Cloud",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe51c870a?auto=format&fit=crop&w=600&q=80",
    color: "from-green-500 to-emerald-500",
    urlPath: "/aws/certified-developer-associate",
    certification: "AWS DVA (DVA-C02)",
    price: "₹24,000",
    rating: 4.7,
    students: "1.8K+",
    features: ["Serverless Apps", "DevOps Integration", "Hands-on Coding", "Industry Projects"]
  },
  {
    id: 4,
    title: "AWS SysOps Administrator",
    description: "Deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS.",
    category: "AWS Cloud",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-pink-500",
    urlPath: "/aws/certified-sysops-administrator-associate",
    certification: "AWS SOA (SOA-C02)",
    price: "₹23,000",
    rating: 4.6,
    students: "1.5K+",
    features: ["System Operations", "Monitoring", "Security", "Cost Optimization"]
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
  {
    id: 6,
    title: "AWS Security Specialty",
    description: "Master AWS security services and implement comprehensive security controls and compliance.",
    category: "AWS Cloud",
    level: "Advanced",
    duration: "10-12 Weeks",
    icon: "🔒",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
    color: "from-indigo-500 to-purple-500",
    urlPath: "/aws/certified-security-specialty",
    certification: "AWS SCS (SCS-C02)",
    price: "₹32,000",
    rating: 4.8,
    students: "600+",
    features: ["Security Labs", "Incident Response", "Compliance", "Expert Training"]
  },
  {
    id: 7,
    title: "AWS Advanced Networking",
    description: "Design and implement complex AWS network architectures with advanced routing and security.",
    category: "AWS Cloud",
    level: "Advanced",
    duration: "10-12 Weeks",
    icon: "🌐",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    color: "from-teal-500 to-cyan-500",
    urlPath: "/aws/certified-advanced-networking-specialty",
    certification: "AWS ANS (ANS-C01)",
    price: "₹34,000",
    rating: 4.7,
    students: "400+",
    features: ["Network Design", "Hybrid Cloud", "Advanced Routing", "Specialty Level"]
  },

  // RedHat Linux Courses
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
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80",
    color: "from-red-600 to-pink-600",
    urlPath: "/certifications/rhce",
    certification: "RHCE (EX294)",
    price: "₹12,000",
    rating: 4.9,
    students: "1.2K+",
    features: ["Advanced Linux", "Automation", "Enterprise Services", "Expert Level"]
  },

  // DevOps Courses
  {
    id: 10,
    title: "Jenkins Certified Engineer",
    description: "Master continuous integration and deployment with Jenkins, pipeline as code, and automation.",
    category: "DevOps",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-indigo-500",
    urlPath: "/devops/jenkins-certified-engineer",
    certification: "Jenkins CE",
    price: "₹22,000",
    rating: 4.7,
    students: "1.8K+",
    features: ["CI/CD Pipelines", "Pipeline as Code", "Automation", "DevOps Integration"]
  },
  {
    id: 11,
    title: "GitLab Certified Associate",
    description: "Complete GitLab workflow mastery including version control, CI/CD, and project management.",
    category: "DevOps",
    level: "Intermediate",
    duration: "6-8 Weeks",
    icon: "🦊",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=600&q=80",
    color: "from-orange-500 to-red-500",
    urlPath: "/devops/gitlab-certified-associate",
    certification: "GitLab GCA",
    price: "₹19,000",
    rating: 4.6,
    students: "1.3K+",
    features: ["Version Control", "CI/CD", "Project Management", "Collaboration"]
  },
  {
    id: 12,
    title: "Terraform Associate",
    description: "Infrastructure as Code mastery with HashiCorp Terraform for cloud automation and provisioning.",
    category: "DevOps",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-indigo-500",
    urlPath: "/devops/terraform-associate",
    certification: "Terraform Associate",
    price: "₹24,000",
    rating: 4.8,
    students: "1.6K+",
    features: ["Infrastructure as Code", "Multi-Cloud", "Automation", "Best Practices"]
  },
  {
    id: 13,
    title: "Ansible Automation",
    description: "Master configuration management and automation with Red Hat Ansible for enterprise environments.",
    category: "DevOps",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80",
    color: "from-red-500 to-orange-500",
    urlPath: "/devops/ansible-automation",
    certification: "Ansible EX407",
    price: "₹21,000",
    rating: 4.7,
    students: "1.4K+",
    features: ["Configuration Management", "Automation", "Playbooks", "Enterprise Ready"]
  },

  // Cisco Courses
  {
    id: 14,
    title: "CCNA Training 200-301",
    description: "Master networking fundamentals with Cisco CCNA certification covering routing, switching, and security.",
    category: "Cisco",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "🌐",
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
    id: 15,
    title: "CCNP Enterprise 350-401",
    description: "Advanced Cisco networking skills for enterprise networks with complex routing and switching.",
    category: "Cisco",
    level: "Advanced",
    duration: "12-14 Weeks",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    color: "from-indigo-500 to-purple-500",
    urlPath: "/cisco/ccnp-training-350-401",
    certification: "CCNP Enterprise",
    price: "₹35,000",
    rating: 4.9,
    students: "800+",
    features: ["Enterprise Networking", "Advanced Routing", "Network Design", "Professional Level"]
  },
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
    certification: "CCST Networking",
    price: "₹16,000",
    rating: 4.6,
    students: "1.9K+",
    features: ["Networking Basics", "Entry Level", "Foundation Skills", "Career Starter"]
  },

  // Cybersecurity Courses
  {
    id: 17,
    title: "Certified Ethical Hacker (CEH)",
    description: "Learn ethical hacking techniques, penetration testing, and cybersecurity fundamentals.",
    category: "Cybersecurity",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "👨‍💻",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
    color: "from-gray-700 to-red-600",
    urlPath: "/cybersecurity/ceh",
    certification: "CEH v12",
    price: "₹30,000",
    rating: 4.8,
    students: "1.5K+",
    features: ["Ethical Hacking", "Penetration Testing", "Security Tools", "Hands-on Labs"]
  },
  {
    id: 18,
    title: "CompTIA Security+",
    description: "Foundation cybersecurity certification covering security concepts, threats, and risk management.",
    category: "Cybersecurity",
    level: "Beginner",
    duration: "8-10 Weeks",
    icon: "🛡️",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-600 to-purple-600",
    urlPath: "/cybersecurity/security-plus",
    certification: "Security+ (SY0-601)",
    price: "₹22,000",
    rating: 4.7,
    students: "2.2K+",
    features: ["Security Fundamentals", "Risk Management", "Industry Standard", "Career Foundation"]
  },
  {
    id: 19,
    title: "CISSP - Information Security",
    description: "Advanced information security management covering security architecture and governance.",
    category: "Cybersecurity",
    level: "Advanced",
    duration: "12-14 Weeks",
    icon: "🔐",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
    color: "from-indigo-600 to-purple-700",
    urlPath: "/cybersecurity/cissp",
    certification: "CISSP",
    price: "₹40,000",
    rating: 4.9,
    students: "600+",
    features: ["Security Management", "Governance", "Architecture", "Executive Level"]
  },

  // Docker & Kubernetes
  {
    id: 20,
    title: "Docker Certified Associate",
    description: "Master containerization with Docker including orchestration, networking, and security.",
    category: "Docker",
    level: "Intermediate",
    duration: "6-8 Weeks",
    icon: "🐳",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335a?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-400 to-cyan-500",
    urlPath: "/docker/docker-certified-associate",
    certification: "Docker DCA",
    price: "₹20,000",
    rating: 4.7,
    students: "1.7K+",
    features: ["Containerization", "Docker Compose", "Swarm Mode", "Container Security"]
  },
  {
    id: 21,
    title: "Kubernetes Administrator (CKA)",
    description: "Comprehensive Kubernetes administration including cluster management, networking, and troubleshooting.",
    category: "Kubernetes",
    level: "Advanced",
    duration: "10-12 Weeks",
    icon: "☸️",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335a?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-indigo-600",
    urlPath: "/kubernetes/certified-kubernetes-administrator",
    certification: "CKA",
    price: "₹28,000",
    rating: 4.8,
    students: "1.3K+",
    features: ["Cluster Management", "Networking", "Storage", "Troubleshooting"]
  },
  {
    id: 22,
    title: "Kubernetes Developer (CKAD)",
    description: "Application development on Kubernetes with focus on deployments, services, and configuration.",
    category: "Kubernetes",
    level: "Intermediate",
    duration: "8-10 Weeks",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335a?auto=format&fit=crop&w=600&q=80",
    color: "from-green-500 to-blue-500",
    urlPath: "/kubernetes/certified-kubernetes-application-developer",
    certification: "CKAD",
    price: "₹25,000",
    rating: 4.7,
    students: "1.1K+",
    features: ["App Development", "Deployments", "Services", "Configuration"]
  },

  // Microsoft Courses
  {
    id: 23,
    title: "Azure Fundamentals",
    description: "Introduction to Microsoft Azure cloud services, solutions, and management tools.",
    category: "Microsoft",
    level: "Beginner",
    duration: "6-8 Weeks",
    icon: "☁️",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-azure-500",
    urlPath: "/microsoft/azure-fundamentals",
    certification: "AZ-900",
    price: "₹18,000",
    rating: 4.6,
    students: "1.8K+",
    features: ["Azure Basics", "Cloud Concepts", "Azure Services", "Pricing Models"]
  },
  {
    id: 24,
    title: "Azure Administrator",
    description: "Manage Azure subscriptions, secure identities, administer infrastructure, and configure virtual networking.",
    category: "Microsoft",
    level: "Intermediate",
    duration: "10-12 Weeks",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-600 to-indigo-600",
    urlPath: "/microsoft/azure-administrator",
    certification: "AZ-104",
    price: "₹25,000",
    rating: 4.7,
    students: "1.4K+",
    features: ["Azure Management", "Virtual Networks", "Storage", "Identity Management"]
  },

  // Python Courses
  {
    id: 25,
    title: "Python Full Stack Development",
    description: "Complete Python web development with Django, Flask, databases, and deployment.",
    category: "Python",
    level: "Intermediate",
    duration: "12-14 Weeks",
    icon: "🐍",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe51c870a?auto=format&fit=crop&w=600&q=80",
    color: "from-yellow-500 to-green-500",
    urlPath: "/python/full-stack-development",
    certification: "Python Full Stack",
    price: "₹25,000",
    rating: 4.8,
    students: "2.5K+",
    features: ["Django/Flask", "Database Design", "API Development", "Deployment"]
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
            {course.price && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Price:</span>
                <span className="text-white font-bold">{course.price}</span>
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
                className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                title="Filter by Level"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
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