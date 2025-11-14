'use client';

import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EnrollmentModal from './EnrollmentModal';
import { useCart } from '../context/CartContext';

const FeaturedCourses = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const { addToCart, isInCart } = useCart();

  const handleEnrollClick = useCallback((course: any) => {
    console.log('🎓 ENROLL NOW BUTTON CLICKED!');
    console.log('📚 Current Course:', course.title);
    console.log('💰 Price:', course.price);
    
    try {
      const courseData = {
        name: course.title,
        code: course.code,
        price: course.price,
        originalPrice: course.originalPrice,
        duration: course.duration,
        level: course.level,
        discount: course.discount
      };
      
      console.log('📦 Course Data:', courseData);
      setSelectedCourse(courseData);
      console.log('✅ Selected Course Set');
      
      setIsEnrollModalOpen(true);
      console.log('✅ Modal Open State Set to TRUE');
    } catch (error) {
      console.error('❌ Error in handleEnrollClick:', error);
    }
  }, []);

  const handleAddToCart = useCallback((course: any) => {
    const priceNumber = parseInt(course.price.replace(/[^\d]/g, ''));
    const originalPriceNumber = parseInt(course.originalPrice.replace(/[^\d]/g, ''));
    
    addToCart({
      id: course.id.toString(),
      name: course.title,
      code: course.code,
      price: priceNumber,
      originalPrice: originalPriceNumber,
      duration: course.duration,
      level: course.level,
      discount: course.discount
    });
  }, [addToCart]);

  const coursesData = [
    {
      id: 1,
      title: "AWS CLOUD SOLUTIONS ARCHITECT",
      code: "SAA-C03",
      price: "₹18,000",
      originalPrice: "₹30,000",
      discount: "40% OFF",
      description: "Master Amazon Web Services and become a certified cloud architect. Learn to design scalable, secure, and cost-effective cloud solutions.",
      icon: "/images/aws-icon.png",
      color: "from-orange-500 to-orange-600",
      delay: "0s",
      urlPath: "/aws/cloud-services",
      duration: "8-12 Weeks",
      level: "Intermediate to Advanced",
      certification: "AWS Solutions Architect Associate (SAA-C03)",
      backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=60",
      syllabus: ["EC2 & VPC Architecture", "S3 & Storage Solutions", "RDS & Database Services", "Load Balancing & Auto Scaling", "IAM & Security", "CloudFormation & DevOps"],
      jobRoles: [
        { role: "Cloud Solutions Architect", salary: "₹12-25 LPA" },
        { role: "AWS DevOps Engineer", salary: "₹10-20 LPA" },
        { role: "Cloud Infrastructure Engineer", salary: "₹8-18 LPA" },
        { role: "Site Reliability Engineer", salary: "₹12-22 LPA" }
      ],
      projects: "3 Real-world Projects",
      placement: "95% Placement Rate"
    },
    {
      id: 2,
      title: "REDHAT LINUX ADMINISTRATION",
      code: "EX200",
      price: "₹15,000",
      originalPrice: "₹25,000",
      discount: "40% OFF",
      description: "Become a certified Red Hat System Administrator with hands-on training in enterprise Linux environments and automation tools.",
      icon: "/images/redhat-icon.png",
      color: "from-red-500 to-red-600",
      delay: "0.2s",
      urlPath: "/certifications/rhcsa",
      duration: "6-8 Weeks",
      level: "Beginner to Intermediate",
      certification: "RHCSA (EX200) + RHCE (EX294)",
      backgroundImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=60",
      syllabus: ["System Installation & Configuration", "User & Group Management", "File Systems & Storage", "Network Services", "Security & Firewall", "Automation with Ansible"],
      jobRoles: [
        { role: "Linux System Administrator", salary: "₹6-15 LPA" },
        { role: "DevOps Engineer", salary: "₹8-18 LPA" },
        { role: "Infrastructure Engineer", salary: "₹7-16 LPA" },
        { role: "Cloud Engineer", salary: "₹9-20 LPA" }
      ],
      projects: "4 Hands-on Lab Projects",
      placement: "92% Placement Rate"
    },
    {
      id: 3,
      title: "CISCO CCNA NETWORKING",
      code: "CCNA 200-301",
      price: "₹15,000",
      originalPrice: "₹25,000",
      discount: "40% OFF",
      description: "Master networking fundamentals with Cisco CCNA certification. Learn routing, switching, and network security from industry experts.",
      icon: "/images/cisco-icon.png",
      color: "from-blue-500 to-blue-600",
      delay: "0.4s",
      urlPath: "/cisco/ccna-training-200-301",
      duration: "10-12 Weeks",
      level: "Beginner to Intermediate",
      certification: "Cisco CCNA (200-301)",
      backgroundImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=60",
      syllabus: ["Network Fundamentals", "Network Access", "IP Connectivity", "IP Services", "Security Fundamentals", "Automation & Programmability"],
      jobRoles: [
        { role: "Network Engineer", salary: "₹5-12 LPA" },
        { role: "Network Administrator", salary: "₹4-10 LPA" },
        { role: "Cybersecurity Analyst", salary: "₹6-14 LPA" },
        { role: "Technical Support Engineer", salary: "₹4-8 LPA" }
      ],
      projects: "5 Network Lab Simulations",
      placement: "88% Placement Rate"
    },
    {
      id: 4,
      title: "PYTHON FULL STACK DEVELOPMENT",
      code: "PYTHON-FS",
      price: "₹25,000",
      originalPrice: "₹45,000",
      discount: "44% OFF",
      description: "Become a complete Python developer with Django, Flask, databases, and modern web technologies. Build scalable applications from scratch.",
      icon: "/images/python-icon.png",
      color: "from-yellow-500 to-blue-500",
      delay: "0.6s",
      urlPath: "/python/full-stack-development",
      duration: "12-16 Weeks",
      level: "Beginner to Advanced",
      certification: "Python Institute PCAP + Project Portfolio",
      backgroundImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=60",
      syllabus: ["Python Fundamentals", "Web Development (Django/Flask)", "Database Design & ORM", "REST APIs", "Frontend Integration", "Deployment & DevOps"],
      jobRoles: [
        { role: "Python Developer", salary: "₹6-16 LPA" },
        { role: "Full Stack Developer", salary: "₹8-20 LPA" },
        { role: "Backend Developer", salary: "₹7-18 LPA" },
        { role: "Software Engineer", salary: "₹8-22 LPA" }
      ],
      projects: "6 Real-world Applications",
      placement: "94% Placement Rate"
    },
    {
      id: 6,
      title: "DOCKER & CONTAINERIZATION",
      code: "DCA",
      price: "₹10,000",
      originalPrice: "₹18,000",
      discount: "44% OFF",
      description: "Master containerization technology with Docker and orchestration with Kubernetes. Learn to build, deploy, and scale applications efficiently.",
      icon: "/images/docker-icon.png",
      color: "from-blue-400 to-blue-600",
      delay: "1.0s",
      urlPath: "/docker/docker-certified-associate",
      duration: "6-8 Weeks",
      level: "Intermediate",
      certification: "Docker Certified Associate (DCA)",
      backgroundImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=60",
      syllabus: ["Container Fundamentals", "Docker Images & Registries", "Docker Networking", "Storage & Volumes", "Docker Compose", "Container Security"],
      jobRoles: [
        { role: "DevOps Engineer", salary: "₹8-18 LPA" },
        { role: "Container Engineer", salary: "₹9-20 LPA" },
        { role: "Cloud Engineer", salary: "₹10-22 LPA" },
        { role: "Platform Engineer", salary: "₹12-25 LPA" }
      ],
      projects: "4 Containerization Projects",
      placement: "91% Placement Rate"
    },
    {
      id: 7,
      title: "KUBERNETES ORCHESTRATION",
      code: "CKA",
      price: "₹14,000",
      originalPrice: "₹25,000",
      discount: "44% OFF",
      description: "Become a Certified Kubernetes Administrator. Learn container orchestration, cluster management, and cloud-native application deployment.",
      icon: "/images/kubernetes-icon.png",
      color: "from-blue-500 to-indigo-600",
      delay: "1.2s",
      urlPath: "/kubernetes/certified-kubernetes-administrator",
      duration: "8-10 Weeks",
      level: "Advanced",
      certification: "Certified Kubernetes Administrator (CKA)",
      backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=60",
      syllabus: ["Cluster Architecture", "Workloads & Scheduling", "Services & Networking", "Storage", "Troubleshooting", "Cluster Maintenance"],
      jobRoles: [
        { role: "Kubernetes Administrator", salary: "₹12-25 LPA" },
        { role: "DevOps Engineer", salary: "₹10-22 LPA" },
        { role: "Cloud Native Engineer", salary: "₹14-28 LPA" },
        { role: "Site Reliability Engineer", salary: "₹15-30 LPA" }
      ],
      projects: "5 Cluster Management Projects",
      placement: "96% Placement Rate"
    },
    {
      id: 8,
      title: "RED HAT OPENSHIFT PLATFORM",
      description: "Master enterprise container platform with Red Hat OpenShift. Learn to deploy, manage, and scale applications in production environments.",
      icon: "/images/openshift-icon.png",
      color: "from-red-500 to-red-700",
      delay: "1.4s",
      urlPath: "/openshift/certified-specialist-administration-ex280",
      duration: "6-8 Weeks",
      level: "Advanced",
      certification: "Red Hat Certified Specialist (EX280)",
      backgroundImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&q=60",
      syllabus: ["OpenShift Architecture", "Application Deployment", "Resource Management", "Networking & Routes", "Storage & Persistence", "Monitoring & Logging"],
      jobRoles: [
        { role: "OpenShift Administrator", salary: "₹10-22 LPA" },
        { role: "Container Platform Engineer", salary: "₹12-25 LPA" },
        { role: "Cloud Platform Architect", salary: "₹15-30 LPA" },
        { role: "Enterprise DevOps Engineer", salary: "₹14-28 LPA" }
      ],
      projects: "4 Enterprise Platform Projects",
      placement: "93% Placement Rate"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % coursesData.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlay, coursesData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coursesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coursesData.length) % coursesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentCourse = coursesData[currentSlide];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src={currentCourse?.backgroundImage || ''}
          alt="Course Background"
          fill
          className="object-cover transition-all duration-1000 ease-in-out opacity-30"
          priority
        />
      </div>

      {/* Background Animation - Smaller on mobile */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-blue-500 rounded-full animate-bounce [animation-delay:0s]" />
        <div className="absolute top-20 right-10 md:top-40 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-purple-500 rounded-full animate-bounce [animation-delay:1s]" />
        <div className="absolute bottom-10 left-1/4 md:bottom-20 w-8 h-8 md:w-12 md:h-12 bg-orange-500 rounded-full animate-bounce [animation-delay:2s]" />
        <div className="absolute bottom-20 right-5 md:bottom-40 md:right-10 w-12 h-12 md:w-24 md:h-24 bg-green-500 rounded-full animate-bounce [animation-delay:3s]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-30">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-3 md:mb-4">
            Featured <span className="text-yellow-400">Professional Courses</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-4 md:mb-6" />
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto drop-shadow-lg px-4">
            Explore our comprehensive range of industry-leading certification courses designed to accelerate your career
          </p>
          
          {/* Auto-play Toggle & Navigation - Mobile friendly */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-6 flex-wrap px-4">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              title={isAutoPlay ? 'Pause auto play' : 'Start auto play'}
              aria-label={isAutoPlay ? 'Pause auto play' : 'Start auto play'}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-green-500 text-white shadow-lg hover:bg-green-600' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              {isAutoPlay ? '⏸️ Pause' : '▶️ Play'}
            </button>
            
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
              <button
                onClick={prevSlide}
                title="Previous course"
                aria-label="Previous course"
                className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors active:scale-95"
              >
                ←
              </button>
              <span className="text-white text-xs md:text-sm font-medium px-2 md:px-3">
                {currentSlide + 1} / {coursesData.length}
              </span>
              <button
                onClick={nextSlide}
                title="Next course"
                aria-label="Next course"
                className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors active:scale-95"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Main Slider - Mobile Optimized */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile, touch-friendly on tablet+ */}
          <button
            title="Previous course"
            onClick={prevSlide}
            className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            title="Next course"
            onClick={nextSlide}
            className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Course Card - Mobile Optimized */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            <div className="lg:flex">
              {/* Course Icon & Basic Info - Responsive */}
              <div className={`lg:w-1/3 bg-gradient-to-br ${currentCourse.color} p-5 md:p-8 text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 border-2 border-white rounded-full transform translate-x-12 md:translate-x-16 -translate-y-12 md:-translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 border-2 border-white rounded-full transform -translate-x-8 md:-translate-x-12 translate-y-8 md:translate-y-12"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Course Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                    {currentCourse.title.includes("AWS") && (
                      <div className="text-xl md:text-2xl font-bold text-orange-600">AWS</div>
                    )}
                    {currentCourse.title.includes("REDHAT") && (
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">RH</span>
                      </div>
                    )}
                    {currentCourse.title.includes("CISCO") && (
                      <div className="text-blue-600 font-bold text-sm">CCNA</div>
                    )}
                    {currentCourse.title.includes("PYTHON") && (
                      <div className="flex">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full -ml-1"></div>
                      </div>
                    )}
                    {currentCourse.title.includes("DOCKER") && (
                      <div className="text-xl md:text-2xl">🐳</div>
                    )}
                    {currentCourse.title.includes("KUBERNETES") && (
                      <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-blue-600 rounded flex items-center justify-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    )}
                    {currentCourse.title.includes("OPENSHIFT") && (
                      <div className="text-red-600 font-bold text-xs text-center">
                        <div>OS</div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 leading-tight">
                    {currentCourse.title}
                  </h3>
                  
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 text-sm md:text-base">⏱️</span>
                      <span className="text-xs md:text-sm font-medium">{currentCourse.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 text-sm md:text-base">📊</span>
                      <span className="text-xs md:text-sm font-medium">{currentCourse.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 text-sm md:text-base">🎯</span>
                      <span className="text-xs md:text-sm font-medium">{currentCourse.placement}</span>
                    </div>
                  </div>

                  <div className="bg-white/20 rounded-lg md:rounded-xl p-2.5 md:p-3 backdrop-blur-sm">
                    <div className="text-xs text-white/80 mb-1">Certification</div>
                    <div className="text-xs md:text-sm font-bold leading-tight">{currentCourse.certification}</div>
                  </div>
                </div>
              </div>

              {/* Detailed Content - Mobile padding */}
              <div className="lg:w-2/3 p-5 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
                  <div className="flex-1 md:mr-6 mb-4 md:mb-0">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                      {currentCourse.description}
                    </p>
                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600 flex-wrap">
                      <span className="flex items-center gap-1">
                        <span>📚</span>
                        {currentCourse.projects}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>💼</span>
                        {currentCourse.jobRoles.length} Job Roles
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-3 relative z-50">
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('🔥 ONCLICK EVENT FIRED!');
                        handleEnrollClick(currentCourse);
                      }}
                      onMouseDown={(e) => {
                        console.log('🖱️ MOUSEDOWN EVENT FIRED!');
                      }}
                      onPointerDown={(e) => {
                        console.log('👆 POINTERDOWN EVENT FIRED!');
                      }}
                      title="Enroll in this course"
                      className="px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg md:hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer relative z-50 text-sm md:text-base active:scale-95"
                    >
                      🎓 Enroll Now
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(currentCourse);
                      }}
                      disabled={isInCart(currentCourse.id.toString())}
                      title={isInCart(currentCourse.id.toString()) ? "Already in cart" : "Add to cart"}
                      className={`px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-bold transition-all duration-300 text-xs md:text-sm flex items-center justify-center gap-2 active:scale-95 ${
                        isInCart(currentCourse.id.toString()) 
                          ? 'bg-green-100 text-green-700 border-2 border-green-500' 
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border-2 border-blue-200 md:hover:scale-105'
                      }`}
                    >
                      {isInCart(currentCourse.id.toString()) ? '✓ In Cart' : '🛒 Add to Cart'}
                    </button>
                    <Link href={currentCourse.urlPath}>
                      <button 
                        title="View course details"
                        className="px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg md:hover:scale-105 transition-all duration-300 whitespace-nowrap w-full text-sm md:text-base active:scale-95"
                      >
                        View Details →
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Syllabus Overview - Mobile Optimized */}
                <div className="mb-5 md:mb-6">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2.5 md:mb-3 flex items-center gap-2">
                    <span className="text-blue-500">📋</span>
                    Course Syllabus
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentCourse.syllabus.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Job Roles & Salaries - Mobile Cards */}
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2.5 md:mb-3 flex items-center gap-2">
                    <span className="text-green-500">💼</span>
                    Career Opportunities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
                    {currentCourse.jobRoles.map((job, i) => (
                      <div key={i} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-2.5 md:p-3 border border-green-100">
                        <div className="font-semibold text-gray-900 text-xs md:text-sm">{job.role}</div>
                        <div className="text-green-600 font-bold text-base md:text-lg">{job.salary}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators - Touch-friendly */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
            {coursesData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                title={`Go to course ${index + 1}`}
                aria-label={`Go to course ${index + 1}`}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 active:scale-125 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseData={selectedCourse}
      />
    </section>
  );
});

FeaturedCourses.displayName = 'FeaturedCourses';

export default FeaturedCourses;