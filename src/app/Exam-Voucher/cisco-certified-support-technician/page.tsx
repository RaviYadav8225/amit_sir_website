"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function CiscoCertificationsPage() {
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white pt-20">
        {/* Main Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Content */}
              <div className="lg:col-span-2">
                {/* CCST Logos */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-white border-2 border-gray-200 p-3 rounded-xl shadow-sm">
                    <img 
                      src="/ccst-cyber-300x300.png" 
                      alt="CCST Cybersecurity" 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="bg-white border-2 border-gray-200 p-3 rounded-xl shadow-sm">
                    <img 
                      src="/ccst-net-300x300.png" 
                      alt="CCST Networking" 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Cisco Certifications
                </h1>

                {/* Description Text */}
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                  <p>
                    This program includes two certification exams designed to validate work-ready skills and knowledge to help learners 
                    find a job in the field of networking and cybersecurity.
                  </p>
                  
                  <p>
                    Earning a <strong>Cisco Certified Support Technician certification</strong> showcases the learner's skillset to employers, telling 
                    them they are ready to roll up their sleeves on day one.
                  </p>
                  
                  <p>
                    The <strong>CCST Networking</strong> and <strong>CCST Cybersecurity</strong> exams were created by a team of subject-matter experts from 
                    diverse careers and industries (including Cisco employees, networking and cybersecurity professionals, hiring 
                    managers, professors and teachers) to ensure these certifications effectively bridge the gap between education and 
                    the skills and knowledge needed to succeed in the workplace. It helps prepare learners for high-demand roles in 
                    cybersecurity and networking, including analysts, auditors, support specialists, and technicians.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    Explore More
                  </button>
                  <div className="relative group">
                    <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Syllabus
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <a href="/Cisco-Networking-OD-0123.pdf" download className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 font-medium">Networking</span>
                      </a>
                      <div className="border-t border-gray-100"></div>
                      <a href="/Cisco-Cybersecurity-OD-0123.pdf" download className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors rounded-b-lg">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 font-medium">Cybersecurity</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar Card */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  
                  {/* Cisco Logo */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-2xl font-bold tracking-wider">
                      ■■■■■
                    </div>
                    <span className="text-xl font-semibold">CISCO</span>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-bold leading-tight">
                      ESTABLISH YOUR CAREER IN IT WITH A WORK-READY,
                    </h2>
                    <h3 className="text-2xl font-bold text-yellow-400">
                      CISCO CERTIFIED SUPPORT TECHNICIAN 
                      <span className="text-yellow-300">CERTIFICATION</span>
                    </h3>
                    <p className="text-lg">
                      FROM CERTIPORT.
                    </p>
                  </div>

                  {/* Professional Image */}
                  <div className="mt-8 flex justify-center">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/cisco-professional.webp" 
                        alt="Professional Woman" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Section - Course Learning Path */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 max-w-4xl mx-auto text-lg">
              Etrainindia provides a full pathway solution that educators can use to prepare students for the Cisco Certified Support Technician 
              certification. From tailored <strong>learning materials</strong> and <strong>practice tests</strong> to Cisco endorsed certification exams, Etrainindia provides assistance 
              every step of the way.
            </p>
          </div>
        </section>

        {/* Three Button Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              <button 
                onClick={() => setActiveTab('learn')}
                className={`border-2 px-6 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                  activeTab === 'learn' ? 'border-orange-400 bg-orange-50 text-orange-600' : 'border-orange-400 text-orange-600 hover:bg-orange-50'
                }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Learn 📚
              </button>
              <button 
                onClick={() => setActiveTab('practice')}
                className={`border-2 px-6 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                  activeTab === 'practice' ? 'border-purple-400 bg-purple-50 text-purple-600' : 'border-purple-400 text-purple-600 hover:bg-purple-50'
                }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Practice ✍️
              </button>
              <button 
                onClick={() => setActiveTab('certify')}
                className={`border-2 px-6 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                  activeTab === 'certify' ? 'border-blue-400 bg-blue-50 text-blue-600' : 'border-blue-400 text-blue-600 hover:bg-blue-50'
                }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certify 🎓
              </button>
            </div>
          </div>
        </section>

        {/* Practice Test Section - Shown when Practice is clicked */}
        {activeTab === 'practice' && (
          <section className="py-8 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm max-w-xs">
                <div className="bg-yellow-400 p-3 text-center">
                  <span className="text-sm text-gray-900 font-bold">PRACTICE TEST</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/cisco-certprep-logo.png" 
                      alt="Cisco CertPREP" 
                      className="w-full max-w-xs object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-center">
                    Cisco Certified Support Technician – Practice Test
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
          </section>
        )}

        {/* Certify Tab - Exam Voucher Packages */}
        {activeTab === 'certify' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* CCST Cybersecurity Exam Voucher */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-orange-500 p-3 text-center">
                  <span className="text-sm text-white font-bold">EXAM VOUCHER</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/ccst-cyber-300x300.png" 
                      alt="CCST Cybersecurity" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Cisco Certified Support Technician – Cybersecurity Exam Voucher
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
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

              {/* CCST Networking Exam Voucher */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-orange-500 p-3 text-center">
                  <span className="text-sm text-white font-bold">EXAM VOUCHER</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/ccst-net-300x300.png" 
                      alt="CCST Networking" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Cisco Certified Support Technician – Networking Exam Voucher
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
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

        {/* Course Cards Section - Shown by default (Learn tab) */}
        {activeTab === 'learn' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* CCST Networking Card */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/ccst-net-300x300.png" 
                      alt="CCST Networking" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Cisco Certified Support Technician – Networking LearnKey
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

              {/* CCST Cybersecurity Card */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/ccst-cyber-300x300.png" 
                      alt="CCST Cybersecurity" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Cisco Certified Support Technician – Cybersecurity LearnKey
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
                    src="/cisco-certificate-sample.jpeg" 
                    alt="Cisco CCST Certificate Sample" 
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
                  <div className="p-4 text-gray-700 bg-white">
                    Upon successful completion, you will be awarded an industry-recognized certificate from Cisco which has lifelong validity.
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
    </>
  );
}