"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Course {
  id: number;
  name: string;
  price: number;
  icon: string;
}

export default function MetaDigitalMarketingPage() {
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'certify'>('learn');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const courses: Course[] = [
    {
      id: 1,
      name: "Meta Certified Digital Marketing Associate E-Learning Course",
      price: 1699,
      icon: "/Digital_Mar_Assoc_800.png"
    }
  ];

  const practiceTests: Course[] = [
    {
      id: 1,
      name: "Meta Digital Marketing Associate Practice Test",
      price: 999,
      icon: "/Digital_Mar_Assoc_800.png"
    }
  ];

  const examVouchers: Course[] = [
    {
      id: 1,
      name: "Meta Certified Digital Marketing Associate Exam Voucher",
      price: 7500,
      icon: "/Digital_Mar_Assoc_800.png"
    }
  ];

  const faqs = [
    {
      question: "Who provides the certification and how long is it valid for?",
      answer: "Upon successful completion, you will be awarded an industry-recognized certificate from Meta which has lifelong validity."
    },
    {
      question: "What do I need to do to earn this certificate?",
      answer: "You need to pass the Meta Certified Digital Marketing Associate certification exam. The exam tests your understanding of digital marketing fundamentals, advertising strategies, and Meta's advertising platforms."
    },
    {
      question: "What is the duration of the certification exam?",
      answer: "The exam duration is typically 60 minutes and consists of multiple-choice questions covering various digital marketing topics."
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
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6">
                  <img 
                    src="/Digital_Mar_Assoc_800.png" 
                    alt="Meta Certified Digital Marketing Associate"
                    className="h-40 w-40 object-contain"
                  />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Meta Digital Marketing Certification
                </h1>
                
                <div className="space-y-4 text-gray-700 text-base">
                  <p>
                    The Meta Certified Digital Marketing Associate Certification Exam is for entry-level marketing professionals, advertising and marketing 
                    students, interns, etc. The exam targets secondary and immediate post-secondary students, including career professionals looking to 
                    expand their skillset or switch roles or jobs.
                  </p>
                  <p>
                    Learners who earn the Meta Certified Digital Marketing Associate Certification understand the value that advertising on Meta 
                    technologies can deliver for businesses, small and large, by helping them reach new and existing customers.
                  </p>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="bg-[#003b5c] text-white px-8 py-3 rounded font-semibold hover:bg-[#002a42] transition-colors">
                    Explore More
                  </button>
                  <a 
                    href="/Meta.pdf" 
                    download="Meta-Digital-Marketing-Syllabus.pdf"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded font-semibold hover:bg-gray-50 transition-colors inline-block"
                  >
                    Download Syllabus
                  </a>
                </div>
              </div>

              {/* Right Banner */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/Meta-Overview-Banner-e1721372762871.jpg" 
                    alt="Build a foundation in marketing with a certification from Meta"
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
                  Learning Course
                </h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-sm">
                    {courses.map((course) => (
                      <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border">
                        <div className="bg-[#00a99d] py-2 text-center">
                          <span className="text-sm font-semibold text-white uppercase">Learning Course</span>
                        </div>
                        <div className="relative h-64 bg-white flex items-center justify-center p-8">
                          <img 
                            src={course.icon} 
                            alt={course.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-center">
                          <span className="text-white font-semibold">POINTFUL EDUCATION</span>
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-4 text-base">
                            {course.name}
                          </h3>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-gray-900">₹{course.price.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-[#003b5c] text-white py-2 px-4 rounded hover:bg-[#002a42] transition-colors text-sm font-semibold">
                              Add To Cart
                            </button>
                            <button className="flex-1 bg-[#003b5c] text-white py-2 px-4 rounded hover:bg-[#002a42] transition-colors text-sm font-semibold">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Practice Tab */}
            {activeTab === 'practice' && (
              <div className="py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Practice Test
                </h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-sm">
                    {practiceTests.map((test) => (
                      <div key={test.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border">
                        <div className="bg-gray-200 py-2 text-center">
                          <span className="text-sm font-semibold text-gray-600 uppercase">Practice Test</span>
                        </div>
                        <div className="relative h-64 bg-white flex items-center justify-center p-8">
                          <img 
                            src={test.icon} 
                            alt={test.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="bg-[#3d5467] py-3 text-center">
                          <span className="text-white font-semibold">GMetrix</span>
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-4 text-base">
                            {test.name}
                          </h3>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-gray-900">₹{test.price}</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-[#003b5c] text-white py-2 px-4 rounded hover:bg-[#002a42] transition-colors text-sm font-semibold">
                              Add To Cart
                            </button>
                            <button className="flex-1 bg-[#003b5c] text-white py-2 px-4 rounded hover:bg-[#002a42] transition-colors text-sm font-semibold">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Certify Tab */}
            {activeTab === 'certify' && (
              <div className="py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Exam Voucher
                </h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-sm">
                    {examVouchers.map((voucher) => (
                      <div key={voucher.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border">
                        <div className="bg-gray-200 py-2 text-center">
                          <span className="text-sm font-semibold text-gray-600 uppercase">Exam Voucher</span>
                        </div>
                        <div className="relative h-64 bg-white flex items-center justify-center p-8">
                          <img 
                            src={voucher.icon} 
                            alt={voucher.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="bg-[#3d5467] py-3 text-center">
                          <span className="text-white font-semibold">Certiport</span>
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-4 text-base">
                            {voucher.name}
                          </h3>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-gray-900">₹{voucher.price.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-[#003b5c] text-white py-2 px-4 rounded hover:bg-[#002a42] transition-colors text-sm font-semibold">
                              Add To Cart
                            </button>
                            <button className="flex-1 bg-[#003b5c] text-white py-2 px-4 rounded hover:bg-[#002a42] transition-colors text-sm font-semibold">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  src="/Meta-Sample-Certificate-1980x1063.jpg" 
                  alt="Meta Certified Digital Marketing Associate Sample Certificate"
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
