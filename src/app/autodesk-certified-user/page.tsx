"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function AutodeskCertifiedUserPage() {
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="relative overflow-hidden mb-8">
                <div className="flex gap-6 animate-scroll">
                  <img 
                    src="/autodesk/Maya.png" 
                    alt="Autodesk Maya Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/Revit.png" 
                    alt="Autodesk Revit Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/3ds-Max.png" 
                    alt="Autodesk 3ds Max Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/AutoCAD.png" 
                    alt="Autodesk AutoCAD Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/Fusion.png" 
                    alt="Autodesk Fusion 360 Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/Inventor.png" 
                    alt="Autodesk Inventor Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  {/* Duplicate for seamless loop */}
                  <img 
                    src="/autodesk/Maya.png" 
                    alt="Autodesk Maya Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/Revit.png" 
                    alt="Autodesk Revit Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/3ds-Max.png" 
                    alt="Autodesk 3ds Max Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/AutoCAD.png" 
                    alt="Autodesk AutoCAD Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/Fusion.png" 
                    alt="Autodesk Fusion 360 Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
                  />
                  <img 
                    src="/autodesk/Inventor.png" 
                    alt="Autodesk Inventor Certified User" 
                    className="w-32 h-32 object-contain flex-shrink-0"
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
                  animation: scroll 15s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Autodesk Certified User (ACU)
              </h1>
              
              <p className="text-lg mb-4 leading-relaxed text-white">
                Career and technical education programs across India equip students with marketable 2D and 3D design skills by teaching them to use state of the art Autodesk® design software.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed text-white">
                <strong>Autodesk Certified User</strong> certification confirms students have the skills necessary to continue their design careers whether they attend college, enter the workforce or work toward additional levels of industry certification after graduation.
              </p>

              <div className="flex gap-4">
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded transition-colors">
                  Explore More
                </button>
                <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded transition-colors">
                  Download Syllabus ↓
                </button>
              </div>
            </div>

            {/* Right Sidebar Card */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="/autodesk/4-1-600x314.webp" 
                alt="Autodesk Imagine Design Create" 
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AutoCAD Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center border-b border-gray-200">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/AutoCAD.png" 
                    alt="AutoCAD" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="bg-gray-700 text-white text-center py-2 mb-4 rounded">
                  <span className="text-sm font-bold">LearnKey</span>
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm min-h-[40px]">
                    Autodesk Certified User – AutoCAD LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,149</p>
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

            {/* Inventor Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center border-b border-gray-200">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/Inventor.png" 
                    alt="Inventor" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="bg-gray-700 text-white text-center py-2 mb-4 rounded">
                  <span className="text-sm font-bold">LearnKey</span>
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm min-h-[40px]">
                    Autodesk Certified User – Inventor LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,149</p>
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

            {/* Revit Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center border-b border-gray-200">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/Revit.png" 
                    alt="Revit" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="bg-gray-700 text-white text-center py-2 mb-4 rounded">
                  <span className="text-sm font-bold">LearnKey</span>
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm min-h-[40px]">
                    Autodesk Certified User – Revit Architecture LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,149</p>
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

            {/* Fusion 360 Course */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-3 text-center border-b border-gray-200">
                <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/Fusion.png" 
                    alt="Fusion 360" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="bg-gray-700 text-white text-center py-2 mb-4 rounded">
                  <span className="text-sm font-bold">LearnKey</span>
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm min-h-[40px]">
                    Autodesk Certified User – Fusion 360 LearnKey
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">₹1,149</p>
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
                    Autodesk Certified User – Practice Test
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AutoCAD Exam */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/AutoCAD.png" 
                    alt="AutoCAD" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Autodesk Certified User – AutoCAD
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

            {/* Inventor Exam */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/Inventor.png" 
                    alt="Inventor" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Autodesk Certified User – Inventor
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

            {/* Revit Exam */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/Revit.png" 
                    alt="Revit" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Autodesk Certified User – Revit Architecture
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

            {/* Fusion 360 Exam */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/Fusion.png" 
                    alt="Fusion 360" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Autodesk Certified User – Fusion 360
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

            {/* 3ds Max Exam */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/3ds-Max.png" 
                    alt="3ds Max" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Autodesk Certified User – 3ds Max
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

            {/* Maya Exam */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-3 text-center">
                <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/autodesk/Maya.png" 
                    alt="Maya" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    Autodesk Certified User – Maya
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

      {/* EtrainIndia Pathway Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              EtrainIndia provides a full pathway solution that educators can use to prepare students for the Autodesk Certified User certification. From tailored learning materials and practice tests to Autodesk endorsed certification exams, EtrainIndia provides assistance every step of the way.
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
                  src="/autodesk/acu-cert.webp" 
                  alt="Autodesk Certified User Certificate Sample" 
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
                    Upon successful completion, you will be awarded an industry-recognized certificate from Autodesk which has lifelong validity.
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
                    Complete the training course for your chosen Autodesk software and pass the certification exam to earn your certificate.
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
                    The certification exam duration varies by software. Typically, exams range from 50 to 90 minutes depending on the specific Autodesk product.
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
                    Each exam voucher provides one attempt. If you need to retake the exam, you will need to purchase another exam voucher.
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
