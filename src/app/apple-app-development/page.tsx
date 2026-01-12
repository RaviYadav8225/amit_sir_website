"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function AppleAppDevelopmentSwiftPage() {
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="relative overflow-hidden mb-8">
                <div className="flex gap-6 animate-scroll">
                  <img 
                    src="/apple/cu-1.webp" 
                    alt="App Development with Swift Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0 bg-white rounded-lg p-2"
                  />
                  <img 
                    src="/apple/ass.webp" 
                    alt="App Development with Swift Associate" 
                    className="w-32 h-32 object-contain flex-shrink-0 bg-white rounded-lg p-2"
                  />
                  {/* Duplicate for seamless loop */}
                  <img 
                    src="/apple/cu-1.webp" 
                    alt="App Development with Swift Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0 bg-white rounded-lg p-2"
                  />
                  <img 
                    src="/apple/ass.webp" 
                    alt="App Development with Swift Associate" 
                    className="w-32 h-32 object-contain flex-shrink-0 bg-white rounded-lg p-2"
                  />
                </div>
              </div>
              
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 12s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Apple Certifications
              </h1>
              
              <p className="text-lg mb-4 leading-relaxed text-white">
                Swift is a robust and intuitive programming language created by Apple. It's easy to learn, simple to use, and super powerful — which makes it a great language for first time coders and full time developers.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed text-white">
                App Development with Swift certifications recognize students for their knowledge of Swift, Xcode, and app development tools. Students are expected to have completed at least 150 hours of instructional time before taking the certification exam. Students who pass the certification exam will earn a digital badge they can share in a resume, portfolio, email, or in online professional networks.
              </p>

              <div className="flex gap-4">
                <button className="bg-white hover:bg-gray-100 text-orange-600 font-semibold py-3 px-8 rounded transition-colors">
                  Explore More
                </button>
                <button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 px-8 rounded transition-colors">
                  Download Syllabus ↓
                </button>
              </div>
            </div>

            {/* Right Sidebar Card */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="/apple/7-600x314.webp" 
                alt="Apple App Development with Swift" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Button Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-0">
            <button 
              onClick={() => setActiveTab('learn')}
              className={`py-4 text-center font-semibold text-lg transition-colors border-b-4 ${
                activeTab === 'learn' 
                  ? 'border-orange-500 text-gray-900' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Learn 📚
            </button>
            <button 
              onClick={() => setActiveTab('practice')}
              className={`py-4 text-center font-semibold text-lg transition-colors border-b-4 ${
                activeTab === 'practice' 
                  ? 'border-orange-500 text-gray-900' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Practice ✍️
            </button>
            <button 
              onClick={() => setActiveTab('certify')}
              className={`py-4 text-center font-semibold text-lg transition-colors border-b-4 ${
                activeTab === 'certify' 
                  ? 'border-orange-500 text-gray-900' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Certify 🎓
            </button>
          </div>
        </div>
      </section>

      {/* Learn Tab - Learning Courses */}
      {activeTab === 'learn' && (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certified User Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/apple/cu-1.webp" 
                    alt="App Development with Swift Certified User" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    App Development with Swift – Certified User E-Book
                  </h3>
                  <p className="text-2xl font-bold text-orange-600">₹1,149</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded font-medium hover:bg-orange-700 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Associate Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/apple/ass.webp" 
                    alt="App Development with Swift Associate" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    App Development with Swift – Associate E-Book
                  </h3>
                  <p className="text-2xl font-bold text-orange-600">₹1,149</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded font-medium hover:bg-orange-700 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Practice Tab - Practice Test */}
      {activeTab === 'practice' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center border-b border-gray-200">
                  <span className="text-sm text-gray-900 font-bold">PRACTICE TEST</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/Certiport-Pearson-Logo-2016.png" 
                      alt="Certiport" 
                      className="w-full max-w-xs object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-center">
                    App Development with Swift – Practice Test
                  </h3>
                  <p className="text-2xl font-bold text-orange-600 mb-6 text-center">₹899</p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded font-medium hover:bg-orange-700 transition-colors">
                      Add To Cart
                    </button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Certify Tab - Exam Voucher Packages */}
      {activeTab === 'certify' && (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Certified User Exam */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-orange-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/apple/cu-1.webp" 
                    alt="App Development with Swift Certified User" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    App Development with Swift<br/>Certified User
                  </h3>
                  <p className="text-2xl font-bold text-orange-600">₹3,600+GST</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-orange-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-700 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-orange-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-600 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Associate Exam */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-orange-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/apple/ass.webp" 
                    alt="App Development with Swift Associate" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    App Development with Swift<br/>Associate
                  </h3>
                  <p className="text-2xl font-bold text-orange-600">₹3,600+GST</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-orange-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-700 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-orange-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-600 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* EtrainIndia Pathway Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              EtrainIndia provides a full pathway solution that educators can use to prepare students for the App Development with Swift certification. From tailored learning materials and practice tests to Apple endorsed certification exams, EtrainIndia provides assistance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Certificate Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sample Certificate</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Certificate Image */}
            <div className="flex justify-center">
              <div className="rounded-lg shadow-2xl overflow-hidden max-w-lg w-full">
                <img 
                  src="/apple/Apple-App-Dev-with-Swift-Cert-User-Sample-1-1-1980x1530.png" 
                  alt="App Development with Swift Certificate Sample" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg">
                <button className="w-full p-4 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span>Who provides the certification and how long is it valid for?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Upon successful completion, you will be awarded an industry-recognized certificate from Apple which has lifelong validity.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full p-4 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span>What do I need to do to earn this certificate?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Students are expected to have completed at least 150 hours of instructional time before taking the certification exam. Pass the certification exam to earn your digital badge.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full p-4 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span>What is the duration of the certification exam?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    The certification exam duration varies by level. Please check with your instructor or testing center for specific timing.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full p-4 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span>How many attempts do I have to pass the certification exam?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">
                    Each exam voucher provides one attempt. Additional attempts require purchasing another exam voucher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
