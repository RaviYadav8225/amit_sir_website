"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function MicrosoftCertifiedFundamentalsPage() {
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="relative overflow-hidden mb-8">
                <div className="flex gap-6 animate-scroll">
                  <img 
                    src="/pl-bad.png" 
                    alt="Power Platform Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/sc-bad.png" 
                    alt="Security Compliance Identity" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/az-bad-1.png" 
                    alt="Azure Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/ai-bad.png" 
                    alt="Azure AI Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/data-bad.png" 
                    alt="Azure Data Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/crm-bad.png" 
                    alt="Microsoft 365 Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  {/* Duplicate for seamless loop */}
                  <img 
                    src="/pl-bad.png" 
                    alt="Power Platform Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/sc-bad.png" 
                    alt="Security Compliance Identity" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/az-bad-1.png" 
                    alt="Azure Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/ai-bad.png" 
                    alt="Azure AI Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/data-bad.png" 
                    alt="Azure Data Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/crm-bad.png" 
                    alt="Microsoft 365 Fundamentals" 
                    className="w-24 h-24 object-contain flex-shrink-0"
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
                Microsoft Certified Fundamentals
              </h1>
              
              <p className="text-lg mb-4 leading-relaxed text-gray-100">
                The Microsoft Certified Fundamentals exams are the pathway to fully understanding what cloud computing is, what options are available from Microsoft, and which options make sense for businesses to invest in.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed text-gray-100">
                This set of exams is for candidates who are exploring a career in artificial intelligence, data science, and cloud computing. With the usage of big data and artificial intelligence on the rise, the demand for data scientists is not being met – and the gap is widening.
              </p>

              <div className="flex gap-4">
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded transition-colors">
                  Explore More
                </button>
                <div className="relative group">
                  <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded transition-colors">
                    Download Syllabus ↓
                  </button>
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <a href="/MCF-OD-365-Fundamentals-MS-900.pdf" download className="block px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors border-b border-gray-100">
                      MCF OD 365 Fundamentals MS-900
                    </a>
                    <a href="/MCF-OD-Azure-AI-Fundamentals-AI-900-0423.pdf" download className="block px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors border-b border-gray-100">
                      MCF OD Azure AI Fundamentals AI-900 0423
                    </a>
                    <a href="/MCF-OD-Azure-Data-DP-900.pdf" download className="block px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors border-b border-gray-100">
                      MCF OD Azure Data DP-900
                    </a>
                    <a href="/MCF-OD-Azure-Fundamentals-AZ-900-0822.pdf" download className="block px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors border-b border-gray-100">
                      MCF OD Azure Fundamentals AZ-900 0822
                    </a>
                    <a href="/MCF-OD-Dynamics-Fundamentals-ERP-MB-920.pdf" download className="block px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors border-b border-gray-100">
                      MCF OD Dynamics Fundamentals ERP MB-920
                    </a>
                    <a href="/MCF-OD-Dynamics-Fundamentals-MB-910-0323.pdf" download className="block px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors border-b border-gray-100">
                      MCF OD Dynamics Fundamentals MB-910 0323
                    </a>
                    <a href="/MCF-OD-Power-Platform-Fundamentals-PL-900-0323.pdf" download className="block px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors border-b border-gray-100">
                      MCF OD Power Platform Fundamentals PL-900 0323
                    </a>
                    <a href="/MCF-OD-Security-Compliance-Identity-Fundamentals-SC-900-0423.pdf" download className="block px-4 py-3 text-blue-900 hover:bg-blue-50 transition-colors">
                      MCF OD Security Compliance Identity Fundamentals SC-900 0423
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Card */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="/10.webp" 
                alt="Microsoft Certified Fundamentals" 
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

      {/* Practice Tab - Practice Test Card */}
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
                    Microsoft Certified Fundamentals – Practice Test
                  </h3>
                  <p className="text-2xl font-bold text-gray-800 mb-6 text-center">₹899</p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-800 text-white py-2 px-4 rounded font-medium hover:bg-blue-900 transition-colors">
                      Add To Cart
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Security, Compliance, and Identity */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/sc-bad.png" 
                    alt="Security, Compliance" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Microsoft Security, Compliance, and Identity Fundamentals SC-900 LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Microsoft 365 Fundamentals */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/crm-bad.png" 
                    alt="Microsoft 365" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Microsoft 365 Fundamentals (MS – 900) LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Azure AI Fundamentals */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/ai-bad.png" 
                    alt="Azure AI Fundamentals" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Microsoft Azure AI Fundamentals (AI – 900) LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Azure Fundamentals */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/az-bad-1.png" 
                    alt="Azure Fundamentals" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Microsoft Azure Fundamentals (AZ – 900) LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Azure Data Fundamentals */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/data-bad.png" 
                    alt="Azure Data Fundamentals" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Microsoft Azure Data Fundamentals (DP – 900) LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Course Cards Section - Shown by default (Learn tab) */}
      {activeTab === 'learn' && (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Security, Compliance Learning Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/sc-bad.png" 
                    alt="Security Compliance" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Microsoft Security, Compliance, and Identity Fundamentals SC-900 LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,199</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-4 rounded font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Microsoft 365 Learning Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/crm-bad.png" 
                    alt="Microsoft 365" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Microsoft 365 Fundamentals (MS – 900) LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-4 rounded font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Azure AI Learning Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/ai-bad.png" 
                    alt="Azure AI" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Microsoft Azure AI Fundamentals (AI – 900) LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-4 rounded font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Azure Fundamentals Learning Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/az-bad-1.png" 
                    alt="Azure Fundamentals" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Microsoft Azure Fundamentals (AZ – 900) LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-4 rounded font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Azure Data Fundamentals Learning Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/data-bad.png" 
                    alt="Azure Data" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Microsoft Azure Data Fundamentals (DP – 900) LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-800 text-white py-2 px-4 rounded font-medium hover:bg-blue-900 transition-colors">
                    Add To Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Sample Certificate Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sample Certificate</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Certificate Image */}
            <div className="flex justify-center">
              <div className="rounded-lg shadow-2xl overflow-hidden max-w-lg w-full">
                <img 
                  src="/microsoft-certificate_480.webp" 
                  alt="Microsoft Certified Fundamentals Certificate Sample" 
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
                    Upon successful completion, you will be awarded an industry-recognized certificate from Microsoft which has lifelong validity.
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
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full p-4 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span>What is the duration of the certification exam?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full p-4 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
                  <span>How many attempts do I have to pass the certification exam?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
