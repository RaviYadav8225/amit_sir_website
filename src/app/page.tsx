
"use client";
import React, { useState, useEffect, lazy, Suspense, memo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AggressivePrefetch from './components/AggressivePrefetch';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Optimize heavy components - Load immediately with SSR
import FeaturedCourses from './components/FeaturedCourses';
import FloatingCourses from './components/FloatingCourses';
import StudentCertifications from './components/StudentCertifications';

const ChatBot = dynamic(() => import('./components/ChatBot'), {
  loading: () => null,
  ssr: false
});

const ConsultationModal = dynamic(() => import('./components/consultation/ConsultationModal'), {
  loading: () => null,
  ssr: false
});

const EnrollmentModal = dynamic(() => import('./components/EnrollmentModal'), {
  loading: () => null,
  ssr: false
});

const PolicyModal = dynamic(() => import('./components/PolicyModal'), {
  loading: () => null,
  ssr: false
});

// Import policy content normally (it's just data)
import { privacyPolicyContent, termsConditionsContent, refundPolicyContent, cancellationPolicyContent } from './components/PolicyContent';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [policyModal, setPolicyModal] = useState<{isOpen: boolean; type: string}>({isOpen: false, type: ''});

  // Optimized scroll progress tracker
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrollTop / docHeight) * 100;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=60",
      title: "Transform Your Career",
      subtitle: "Master cutting-edge technologies with industry experts",
      gradient: "from-blue-900 via-purple-900 to-indigo-900"
    },
    {
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=60",
      title: "100% Practical Training and Exam Center",
      subtitle: "Hands-on learning with real-world projects & certifications",
      gradient: "from-emerald-900 via-teal-900 to-cyan-900"
    },
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60",
      title: "Global Certifications",
      subtitle: "RedHat, Microsoft, AWS, DevOps, Cisco, Cybersecurity - Get certified, Get hired",
      gradient: "from-orange-900 via-red-900 to-pink-900"
    }
  ];

  const testimonials = [
    {
      name: "Anurudh Verma",
      role: "IT Professional",
      rating: 5,
      text: "Ram Sir demonstrates excellent knowledge and delivers in-depth discussions on each topic. His clarity and depth of explanation greatly enhance the learning experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=60"
    },
    {
      name: "Rishikant Pathak",
      role: "DevOps Engineer",
      rating: 5,
      text: "Excellent training especially for Docker and Kubernetes. Complete, in-depth and very aligned to industry practices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=60"
    },
    {
      name: "Chinmay Mishra",
      role: "Cloud Architect",
      rating: 5,
      text: "Outstanding AWS training with hands-on labs. Helped me pass certification on first attempt. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=60"
    }
  ];

  const handleBatchEnrollment = (batchInfo: any) => {
    // Convert batch info to course data format expected by EnrollmentModal
    setSelectedCourse({
      name: batchInfo.course,
      code: batchInfo.course.split('(')[1]?.replace(')', '') || 'BATCH',
      price: '₹15,000',
      originalPrice: '₹25,000',
      duration: batchInfo.schedule,
      level: 'All Levels',
      discount: '40% OFF'
    });
    setIsEnrollmentModalOpen(true);
  };

  useEffect(() => {
    // Start timers immediately for instant page display
    const heroTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(heroTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

  return (
    <>
      {/* Aggressive Prefetch Component */}
      <AggressivePrefetch />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-40">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 shadow-lg"
          data-scroll-progress={scrollProgress}
        />
      </div>

    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen font-sans overflow-x-hidden">
      {/* Animated Hero Slider Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-screen py-20 px-4 text-white overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-85`} />
          </div>
        ))}

        <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in">
              🚀 Leading IT Training Institute in Indore
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 text-center tracking-tight drop-shadow-2xl animate-slide-down leading-tight px-4">
            {heroSlides[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2 md:mr-4 last:mr-0">
                {word}
              </span>
            ))}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 text-center max-w-4xl font-medium opacity-95 animate-fade-in leading-relaxed px-4">
            {heroSlides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-in px-4">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="group bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:shadow-white/25 text-center"
            >
              <span className="flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                📞 <span className="hidden sm:inline">Book Free</span> Consultation
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <Link
              href="/explore-courses"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-300 text-center"
              prefetch={true}
            >
              <span className="flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                🎓 Explore Courses
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-float-slow2" />
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-purple-300/15 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-300/20 rounded-full blur-xl animate-float-slow2" />

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 md:-mt-20 z-10 px-4 animate-fade-in-up">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12 border border-white/20 mx-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {[
                { number: "40K+", label: "Students Certified", icon: "🎓" },
                { number: "15+", label: "Years Experience", icon: "🏆" },
                { number: "95+", label: "Courses Available", icon: "📚" },
                { number: "92K+", label: "Yearly Visitors", icon: "👥" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-2xl md:text-4xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Import and use FloatingCourses component */}
      <FloatingCourses />

      {/* Featured Courses inspired by Grras.com */}
      <FeaturedCourses />

      {/* Student Certifications Section */}
      <StudentCertifications />

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4 animate-fade-in-up overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=60"
            alt="Technology Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/95 to-indigo-900/95" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-slow" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-float-slow2" />
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-purple-300/15 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-300/20 rounded-full blur-xl animate-float-slow2" />
          
          {/* Circuit Pattern */}
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">LITC?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for IT training in Indore
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: "🏆",
                title: "Industry Expertise",
                desc: "Deep professional expertise in DevOps, Cybersecurity, Red Hat, and Software Technologies with specialized training content.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🎯",
                title: "Certification Success",
                desc: "Proven track record of success in assisting students achieve highly valued certifications that open fresh employment opportunities.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "⏰",
                title: "Flexible Learning",
                desc: "Courses designed to fit your busy life with online learning preferences and flexible scheduling options.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "👨‍🏫",
                title: "Qualified Instructors",
                desc: "Learn from knowledgeable, certified instructors committed to providing guidance, real-world experience, and excellent instruction.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "🛠️",
                title: "Hands-On Training",
                desc: "Courses place extreme value on practical training, ensuring you get the skills and real-world experience necessary for success.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: "🎓",
                title: "Career Support",
                desc: "Comprehensive career support services including job placement assistance and guidance to help you transition into your selected career.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: "📊",
                title: "Live Projects",
                desc: "Work on real-world projects that build your portfolio and give you practical experience that employers value.",
                color: "from-teal-500 to-teal-600"
              },
              {
                icon: "💰",
                title: "Best Value",
                desc: "Competitive pricing with high-quality training, certifications, and placement support that delivers exceptional ROI.",
                color: "from-pink-500 to-pink-600"
              }
            ].map((feature, i) => (
              <div key={i} className="group bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-xl md:text-2xl text-white group-hover:animate-bounce">{feature.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Batches Section */}
      <section className="relative py-20 px-4 animate-fade-in-up overflow-hidden">
        {/* Background with Animation */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=60"
            alt="Students Learning"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-purple-900/90" />
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-green-400 font-mono text-sm animate-pulse">{"<html>"}</div>
          <div className="absolute top-20 right-20 text-blue-400 font-mono text-sm animate-pulse">{"function()"}</div>
          <div className="absolute bottom-32 left-32 text-purple-400 font-mono text-sm animate-pulse">{"docker run"}</div>
          <div className="absolute bottom-20 right-20 text-cyan-400 font-mono text-sm animate-pulse">{"kubectl apply"}</div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Upcoming <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Batches</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our weekend and weekday batches designed for working professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                course: "RHCSA (Linux Admin)",
                date: "3rd March 2026",
                time: "08:30 AM - 10:30 AM",
                schedule: "Weekdays (Mon-Fri)",
                instructor: "Linux Expert",
                spots: "10 Seats Left",
                color: "from-red-500 to-orange-600"
              },
              {
                course: "RHCE (Ansible)",
                date: "7th March 2026",
                time: "09:00 AM - 11:00 AM",
                schedule: "Weekends (Sat-Sun)",
                instructor: "Ansible Expert",
                spots: "8 Seats Left",
                color: "from-green-500 to-teal-600"
              },
              {
                course: "CCNA (Networking)",
                date: "10th March 2026",
                time: "08:00 AM - 10:00 AM",
                schedule: "Weekends (Sat-Sun)",
                instructor: "Cisco Expert",
                spots: "12 Seats Left",
                color: "from-blue-500 to-cyan-600"
              },
              {
                course: "Azure Cloud",
                date: "14th March 2026",
                time: "09:00 AM - 11:00 AM",
                schedule: "Weekends (Sat-Sun)",
                instructor: "Azure Expert",
                spots: "10 Seats Left",
                color: "from-indigo-500 to-blue-600"
              },
              {
                course: "AWS Cloud",
                date: "15th March 2026",
                time: "08:00 AM - 11:00 AM",
                schedule: "Weekends (Sat-Sun)",
                instructor: "AWS Expert",
                spots: "6 Seats Left",
                color: "from-orange-500 to-yellow-600"
              },
              {
                course: "DevOps",
                date: "1st March 2026",
                time: "09:00 AM - 11:00 PM",
                schedule: "Weekends (Sat-Sun)",
                instructor: "DevOps Expert",
                spots: "Limited Seats",
                color: "from-purple-500 to-pink-600"
              },
              {
                course: "Cybersecurity",
                date: "21st March 2026",
                time: "08:30 PM - 10:30 PM",
                schedule: "Weekends (Sat-Sun)",
                instructor: "Security Expert",
                spots: "8 Seats Left",
                color: "from-red-500 to-pink-600"
              },
              {
                course: "Docker & Kubernetes",
                date: "16th March 2026",
                time: "08:30 AM - 11:00 AM",
                schedule: "Weekends (Sat-Sun)",
                instructor: "Kubernetes Expert",
                spots: "4 Seats Left",
                color: "from-teal-500 to-blue-600"
              },
              {
                course: "Hardware & Networking",
                date: "24th March 2026",
                time: "09:00 AM - 12:00 PM",
                schedule: "Weekdays (Mon-Fri)",
                instructor: "Hardware Expert",
                spots: "15 Seats Left",
                color: "from-gray-600 to-slate-700"
              }
            ].map((batch, i) => (
              <div key={i} className="group bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50">
                <div className={`h-2 bg-gradient-to-r ${batch.color} rounded-full mb-3 md:mb-4`} />

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                  {batch.course}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-blue-500">📅</span>
                    <span>{batch.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">⏰</span>
                    <span>{batch.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-purple-500">📚</span>
                    <span>{batch.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-orange-500">👨‍🏫</span>
                    <span>{batch.instructor}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    batch.spots.includes('Limited') ? 'bg-red-100 text-red-600' :
                    batch.spots.includes('4') || batch.spots.includes('6') ? 'bg-orange-100 text-orange-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {batch.spots}
                  </span>
                </div>

                <button className={`w-full bg-gradient-to-r ${batch.color} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  onClick={() => handleBatchEnrollment(batch)}
                >
                  Book Your Seat
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 animate-fade-in-up overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1920&q=60"
            alt="Success Stories"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/95 to-indigo-50/95" />
        </div>
        
        {/* Success Icons Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-16 text-4xl animate-bounce">🎓</div>
          <div className="absolute top-32 right-24 text-4xl animate-pulse">🏆</div>
          <div className="absolute bottom-40 left-24 text-4xl animate-bounce">⭐</div>
          <div className="absolute bottom-16 right-16 text-4xl animate-pulse">💼</div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from our successful students who transformed their careers with us
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-center mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute inset-0'
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-blue-100"
                        />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                          ))}
                        </div>

                        <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                          &quot;{testimonial.text}&quot;
                        </blockquote>

                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-blue-600 font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute top-20 right-20 w-24 h-24 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-28 h-28 border border-white/20 rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <div className="mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Start Your Tech Career Today
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Future?
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join thousands of successful professionals who chose LITC for their career transformation.
            Get certified, get hired, get ahead!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12 px-4">
            <a
              href="tel:+91-9522220892"
              className="group bg-white text-gray-900 px-4 md:px-8 py-3 md:py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:shadow-white/25 flex items-center justify-center gap-2 md:gap-3"
            >
              <span className="text-xl md:text-2xl group-hover:animate-bounce">📞</span>
              <span className="text-sm md:text-base">Call <span className="hidden sm:inline">+91-9522220892</span></span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <Link
              href="/explore-courses"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
              prefetch={true}
            >
              <span className="text-xl md:text-2xl group-hover:animate-bounce">🎓</span>
              <span className="text-sm md:text-base">Explore Courses</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link
              href="/contact"
              className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
              prefetch={true}
            >
              <span className="text-xl md:text-2xl group-hover:animate-bounce">💬</span>
              <span className="text-sm md:text-base"><span className="hidden sm:inline">Get Free</span> Consultation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { icon: "🎯", title: "Expert Faculty", desc: "Learn from certified industry professionals" },
              { icon: "📜", title: "Global Certifications", desc: "Red Hat, Microsoft, Cisco & more" },
              { icon: "💼", title: "100% Placement", desc: "Career support & job assistance" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/80 mb-4 text-sm md:text-base px-4">📍 Ground Floor, Metro Tower, near Mangal city Behind Tinku Cafe, Indore, MP, India</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-white/60 px-4">
              <a href="mailto:info@litcindore.com" className="hover:text-white transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                <span>✉️</span> info@litcindore.com
              </a>
              <span className="text-white/40 hidden sm:inline">|</span>
              <a href="https://wa.me/919522220892" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LITC Siri ChatBot */}
      <ChatBot />

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollmentModalOpen} 
        onClose={() => setIsEnrollmentModalOpen(false)}
        courseData={selectedCourse}
      />

      {/* Policy Modal (Privacy / Terms / Refund / Cancellation) */}
      {policyModal.isOpen && (
        <PolicyModal
          isOpen={policyModal.isOpen}
          onClose={() => setPolicyModal({ isOpen: false, type: '' })}
          title={
            policyModal.type === 'privacy'
              ? 'Privacy Policy'
              : policyModal.type === 'terms'
              ? 'Terms & Conditions'
              : policyModal.type === 'refund'
              ? 'Refund Policy'
              : 'Cancellation Policy'
          }
          content={
            policyModal.type === 'privacy'
              ? privacyPolicyContent
              : policyModal.type === 'terms'
              ? termsConditionsContent
              : policyModal.type === 'refund'
              ? refundPolicyContent
              : cancellationPolicyContent
          }
        />
      )}

      {/* Back to Top Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group bg-white/10 backdrop-blur-md text-white p-3 rounded-full shadow-xl hover:scale-110 hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          <span className="text-xl group-hover:animate-bounce">⬆️</span>
        </button>
      </div>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1.2s ease; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(.4,0,.2,1); }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 1.2s cubic-bezier(.4,0,.2,1); }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-float-slow2 { animation: float-slow2 8s ease-in-out infinite; }
        
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-loading-bar { animation: loading-bar 2s ease-in-out; }
      `}</style>
    </div>
    
    <Footer onPolicyClick={(type) => setPolicyModal({isOpen: true, type})} />
    </>
  );
}
