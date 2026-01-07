"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaShoppingCart, FaBook, FaCertificate, FaLaptopCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Course {
  id: number;
  name: string;
  price: number;
  icon: string;
}

export default function InformationTechnologySpecialistPage() {
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'certify'>('learn');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSyllabusDropdown, setShowSyllabusDropdown] = useState(false);

  const syllabusTopics = [
    "Network Security",
    "Devices",
    "Cybersecurity",
    "Data Analytics",
    "HTML and CSS",
    "Python",
    "HTML Application Development",
    "Cloud Computing",
    "Databases",
    "Javascript",
    "Java",
    "Software Development",
    "Artificial Intelligence",
    "Computational Thinking",
    "Networking"
  ];

  const badges = [
    { name: "Data Analytics", image: "/ITS/ITS-Badges-Data-Analytics-300x300.png" },
    { name: "Cloud Computing", image: "/ITS/ITS-Badges-Cloud-Comput-300x300.png" },
    { name: "Computational Thinking", image: "/ITS/ITS-Badges-Computational-Think-300x300.png" },
    { name: "Artificial Intelligence", image: "/ITS/ITS-Badges_Art-Intel-300x300.png" },
    { name: "Databases", image: "/ITS/ITS-Badges_Databases_1200px-300x300.png" },
    { name: "HTML and CSS", image: "/ITS/ITS-Badges_HTML-and-CSS_1200px-300x300.png" },
    { name: "JavaScript", image: "/ITS/ITS-Badges_JavaScript_1200px-300x300.png" },
    { name: "Python", image: "/ITS/ITS-Badges_Python_1200px-300x300.png" },
    { name: "Java", image: "/ITS/ITS-Badges_Java_1200px-300x300.png" },
    { name: "Cybersecurity", image: "/ITS/ITS-Badges-Cybersecurity-300x300.png" },
    { name: "Network Security", image: "/ITS/ITS-Badges_Network-Security_1200px-300x300.png" },
    { name: "Networking", image: "/ITS/ITS-Badges_Networking_1200px-300x300.png" },
    { name: "Device Configuration", image: "/ITS/ITS-Badges_Device-Configure_1200px-300x300.png" },
    { name: "HTML5 Application Development", image: "/ITS/ITS-Badges_HTML-5-Application-Developer_1200px-300x300.png" },
    { name: "Software Development", image: "/ITS/ITS-Badges_Software-Development_1200px-300x300.png" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (badges.length * 200));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const courses: Course[] = [
    {
      id: 1,
      name: "HTML5 Application Development LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_HTML-5-Application-Developer_1200px-300x300.png"
    },
    {
      id: 2,
      name: "IT Specialist – HTML and CSS LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_HTML-and-CSS_1200px-300x300.png"
    },
    {
      id: 3,
      name: "IT Specialist – Device Configuration and Management LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_Device-Configure_1200px-300x300.png"
    },
    {
      id: 4,
      name: "IT Specialist – Databases LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_Databases_1200px-300x300.png"
    },
    {
      id: 5,
      name: "IT Specialist – Cybersecurity LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges-Cybersecurity-300x300.png"
    },
    {
      id: 6,
      name: "IT Specialist – JavaScript LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_JavaScript_1200px-300x300.png"
    },
    {
      id: 7,
      name: "IT Specialist – Java LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_Java_1200px-300x300.png"
    },
    {
      id: 8,
      name: "IT Specialist – Python LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_Python_1200px-300x300.png"
    },
    {
      id: 9,
      name: "IT Specialist – Cloud Computing LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges-Cloud-Comput-300x300.png"
    },
    {
      id: 10,
      name: "IT Specialist – Networking LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_Networking_1200px-300x300.png"
    },
    {
      id: 11,
      name: "IT Specialist – Network Security LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_Network-Security_1200px-300x300.png"
    },
    {
      id: 12,
      name: "IT Specialist – Software Development LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_Software-Development_1200px-300x300.png"
    },
    {
      id: 13,
      name: "IT Specialist – Data Analytics LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges-Data-Analytics-300x300.png"
    },
    {
      id: 14,
      name: "IT Specialist – Computational Thinking LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges-Computational-Think-300x300.png"
    },
    {
      id: 15,
      name: "IT Specialist – Artificial Intelligence LearnKey",
      price: 1149,
      icon: "/ITS/ITS-Badges_Art-Intel-300x300.png"
    }
  ];

  const practiceTests: Course[] = [
    {
      id: 1,
      name: "IT Specialist – HTML and CSS Practice Test",
      price: 999,
      icon: "/ITS/ITS-Badges_HTML-and-CSS_1200px-300x300.png"
    },
    {
      id: 2,
      name: "IT Specialist – JavaScript Practice Test",
      price: 999,
      icon: "/ITS/ITS-Badges_JavaScript_1200px-300x300.png"
    },
    {
      id: 3,
      name: "IT Specialist – Python Practice Test",
      price: 999,
      icon: "/ITS/ITS-Badges_Python_1200px-300x300.png"
    },
    {
      id: 4,
      name: "IT Specialist – Databases Practice Test",
      price: 999,
      icon: "/ITS/ITS-Badges_Databases_1200px-300x300.png"
    },
    {
      id: 5,
      name: "IT Specialist – Cybersecurity Practice Test",
      price: 999,
      icon: "/ITS/ITS-Badges-Cybersecurity-300x300.png"
    },
    {
      id: 6,
      name: "IT Specialist – Networking Practice Test",
      price: 999,
      icon: "/ITS/ITS-Badges_Networking_1200px-300x300.png"
    }
  ];

  const examVouchers: Course[] = [
    {
      id: 1,
      name: "IT Specialist – HTML and CSS Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges_HTML-and-CSS_1200px-300x300.png"
    },
    {
      id: 2,
      name: "IT Specialist – JavaScript Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges_JavaScript_1200px-300x300.png"
    },
    {
      id: 3,
      name: "IT Specialist – Python Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges_Python_1200px-300x300.png"
    },
    {
      id: 4,
      name: "IT Specialist – Java Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges_Java_1200px-300x300.png"
    },
    {
      id: 5,
      name: "IT Specialist – Databases Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges_Databases_1200px-300x300.png"
    },
    {
      id: 6,
      name: "IT Specialist – Cybersecurity Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges-Cybersecurity-300x300.png"
    },
    {
      id: 7,
      name: "IT Specialist – Cloud Computing Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges-Cloud-Comput-300x300.png"
    },
    {
      id: 8,
      name: "IT Specialist – Networking Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges_Networking_1200px-300x300.png"
    },
    {
      id: 9,
      name: "IT Specialist – Network Security Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges_Network-Security_1200px-300x300.png"
    },
    {
      id: 10,
      name: "IT Specialist – Data Analytics Exam Voucher",
      price: 7500,
      icon: "/ITS/ITS-Badges-Data-Analytics-300x300.png"
    }
  ];

  const faqs = [
    {
      question: "Who provides the certification and how long is it valid for?",
      answer: "Upon successful completion, you will be awarded an industry-recognized certificate from ITS which has lifelong validity."
    },
    {
      question: "What do I need to do to earn this certificate?",
      answer: "You need to pass the Information Technology Specialist exam for your chosen specialization. The exam tests your proficiency in specific IT domains."
    },
    {
      question: "What is the duration of the certification exam?",
      answer: "The exam duration is typically 50 minutes and consists of both multiple-choice questions and hands-on performance-based tasks."
    },
    {
      question: "How many attempts do I have to pass the certification exam?",
      answer: "You can retake the exam after a waiting period. Contact us for detailed retake policies and additional voucher purchases."
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white pt-20">
        {/* Scrolling Badges Section */}
        <div className="bg-gray-50 py-8 overflow-hidden border-b">
          <div className="flex gap-6 animate-scroll" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {[...badges, ...badges, ...badges].map((badge, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-44 h-44 rounded-full flex items-center justify-center bg-white shadow-md"
              >
                <img 
                  src={badge.image} 
                  alt={badge.name}
                  className="w-full h-full object-contain rounded-full p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Information Technology Specialist
                </h1>
                
                <div className="space-y-4 text-gray-700 text-base">
                  <p>
                    Etrainindia provides a full pathway solution that educators can use to prepare students for the Adobe Certified Professional 
                    certification. From tailored learning materials and practice tests to Adobe endorsed certification exams, Etrainindia provides 
                    assistance every step of the way.
                  </p>
                  <p>
                    Etrainindia provides a full pathway solution that educators can use to prepare students for the Adobe Certified Professional certification. From 
                    tailored learning materials and practice tests to Adobe endorsed certification exams, Etrainindia provides assistance every step of the way.
                  </p>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="bg-[#1e3a5f] text-white px-8 py-3 rounded font-semibold hover:bg-[#152b47] transition-colors">
                    Explore More
                  </button>
                  <div className="relative">
                    <button 
                      onClick={() => setShowSyllabusDropdown(!showSyllabusDropdown)}
                      className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      Download Syllabus ⬇
                    </button>
                    {showSyllabusDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                        {syllabusTopics.map((topic, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                            onClick={() => {
                              // Handle syllabus download for specific topic
                              console.log(`Download syllabus for: ${topic}`);
                              setShowSyllabusDropdown(false);
                            }}
                          >
                            <span className="text-blue-600 hover:text-blue-800 font-medium">{topic}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Banner */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/ITS/3-1-600x314.webp" 
                    alt="IT Skills Start Here - Information Technology Specialist"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-700 text-center text-base">
              Etrainindia provides a full pathway solution that educators can use to prepare students for the Adobe Certified Professional certification. From 
              tailored learning materials and practice tests to Adobe endorsed certification exams, Etrainindia provides assistance every step of the way.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-8 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-4 border-b-2 border-gray-200">
              <button
                onClick={() => setActiveTab('learn')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'learn'
                    ? 'text-[#ff5722] border-b-4 border-[#ff5722] -mb-0.5'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Learn 📚
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'practice'
                    ? 'text-gray-900 border-b-4 border-gray-900 -mb-0.5'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Practice ✍️
              </button>
              <button
                onClick={() => setActiveTab('certify')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'certify'
                    ? 'text-gray-900 border-b-4 border-gray-900 -mb-0.5'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Certify 🎓
              </button>
            </div>

            {/* Learn Tab - Courses */}
            {activeTab === 'learn' && (
              <div className="py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Learning Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {courses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border">
                      <div className="bg-gray-200 py-2 text-center">
                        <span className="text-sm font-semibold text-gray-600 uppercase">Learning Course</span>
                      </div>
                      <div className="relative h-48 bg-white flex items-center justify-center">
                        <img 
                          src={course.icon} 
                          alt={course.name}
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                      <div className="bg-[#3d5467] py-3 text-center">
                        <span className="text-white font-semibold">LearnKey</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-3 min-h-[60px] text-sm">
                          {course.name}
                        </h3>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl font-bold text-gray-900">₹{course.price.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-[#1e3a5f] text-white py-2 px-4 rounded hover:bg-[#152b47] transition-colors text-sm font-semibold">
                            Add To Cart
                          </button>
                          <button className="flex-1 bg-[#1e3a5f] text-white py-2 px-4 rounded hover:bg-[#152b47] transition-colors text-sm font-semibold">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Practice Tab */}
            {activeTab === 'practice' && (
              <div className="py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Practice Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {practiceTests.map((test) => (
                    <div key={test.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border">
                      <div className="bg-gray-200 py-2 text-center">
                        <span className="text-sm font-semibold text-gray-600 uppercase">Practice Test</span>
                      </div>
                      <div className="relative h-48 bg-white flex items-center justify-center">
                        <img 
                          src={test.icon} 
                          alt={test.name}
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                      <div className="bg-[#3d5467] py-3 text-center">
                        <span className="text-white font-semibold">GMetrix</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-3 min-h-[60px] text-sm">
                          {test.name}
                        </h3>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl font-bold text-gray-900">₹{test.price}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-[#1e3a5f] text-white py-2 px-4 rounded hover:bg-[#152b47] transition-colors text-sm font-semibold">
                            Add To Cart
                          </button>
                          <button className="flex-1 bg-[#1e3a5f] text-white py-2 px-4 rounded hover:bg-[#152b47] transition-colors text-sm font-semibold">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certify Tab */}
            {activeTab === 'certify' && (
              <div className="py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Exam Vouchers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {examVouchers.map((voucher) => (
                    <div key={voucher.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border">
                      <div className="bg-gray-200 py-2 text-center">
                        <span className="text-sm font-semibold text-gray-600 uppercase">Exam Voucher</span>
                      </div>
                      <div className="relative h-48 bg-white flex items-center justify-center">
                        <img 
                          src={voucher.icon} 
                          alt={voucher.name}
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                      <div className="bg-[#3d5467] py-3 text-center">
                        <span className="text-white font-semibold">Certiport</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-3 min-h-[60px] text-sm">
                          {voucher.name}
                        </h3>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl font-bold text-gray-900">₹{voucher.price.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-[#1e3a5f] text-white py-2 px-4 rounded hover:bg-[#152b47] transition-colors text-sm font-semibold">
                            Add To Cart
                          </button>
                          <button className="flex-1 bg-[#1e3a5f] text-white py-2 px-4 rounded hover:bg-[#152b47] transition-colors text-sm font-semibold">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sample Certificate Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sample Certificate
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="flex justify-center">
                <img 
                  src="/ITS/its-cert.png" 
                  alt="Information Technology Specialist Sample Certificate"
                  className="w-full max-w-2xl rounded-lg shadow-xl"
                />
              </div>
              
              {/* FAQ Section */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md border overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <FaChevronUp className="flex-shrink-0 text-gray-600" />
                      ) : (
                        <FaChevronDown className="flex-shrink-0 text-gray-600" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-gray-50 border-t">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}
