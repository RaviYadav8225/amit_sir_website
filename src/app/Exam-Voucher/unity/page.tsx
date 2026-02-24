"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function UnityCertificationPage() {
  const [activeTab, setActiveTab] = useState('learn');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who provides the Unity Certified User certification?",
      answer: "The Unity Certified User (UCU) certification is issued by Unity Technologies and is globally recognized in the game development and interactive media industry."
    },
    {
      question: "What do I need to do to earn this certificate?",
      answer: "You need to complete the Unity training course and pass the Unity Certified User exam at an authorized Certiport exam center."
    },
    {
      question: "What is the duration of the certification exam?",
      answer: "The Unity Certified User exam is approximately 50 minutes and consists of multiple-choice and performance-based questions."
    },
    {
      question: "How many attempts do I have to pass the exam?",
      answer: "Each exam voucher includes one exam attempt. Contact us for details on re-attempt vouchers and retake policies."
    }
  ];

  const scrollingImages = [
    { src: "/unity/unity.webp", alt: "Unity Logo" },
    { src: "/unity/Unity-600x300.webp", alt: "Unity Certified User" },
    { src: "/unity/unity.webp", alt: "Unity Logo" },
    { src: "/unity/Unity-600x300.webp", alt: "Unity Certified User" },
    { src: "/unity/unity.webp", alt: "Unity Logo" },
    { src: "/unity/Unity-600x300.webp", alt: "Unity Certified User" },
    { src: "/unity/unity.webp", alt: "Unity Logo" },
    { src: "/unity/Unity-600x300.webp", alt: "Unity Certified User" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-slate-700 text-white pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              {/* Horizontal scrolling logos */}
              <div className="relative overflow-hidden mb-8">
                <div className="flex gap-8 animate-scroll">
                  {scrollingImages.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      className="h-20 w-auto object-contain flex-shrink-0"
                    />
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0%   { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 14s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Unity Certified User (UCU)
              </h1>

              <p className="text-lg mb-4 leading-relaxed text-gray-200">
                The Unity Certified User (UCU) certification is an industry-recognized credential
                that validates your foundational skills in Unity – the world's most popular
                real-time 3D development platform used for games, AR, VR, and interactive experiences.
              </p>

              <p className="text-lg mb-4 leading-relaxed text-gray-200">
                Designed for students and aspiring developers, the UCU certification demonstrates
                your ability to create, modify, and navigate Unity projects, work with game objects,
                scripting basics, physics, and scene design.
              </p>

              <p className="text-lg mb-8 leading-relaxed text-gray-200">
                With a Unity certification, you can stand out to employers in the gaming,
                simulation, film, and XR industries and open doors to exciting careers in
                interactive media and game development.
              </p>

              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded transition-colors"
                >
                  Explore More
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Right Sidebar Card */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="/unity/Unity-600x300.webp"
                alt="Unity Certified User"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-0">
            {(['learn', 'practice', 'certify'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-center font-semibold text-lg transition-colors border-b-4 ${
                  activeTab === tab
                    ? 'border-orange-500 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'learn' && 'Learn 📚'}
                {tab === 'practice' && 'Practice ✍️'}
                {tab === 'certify' && 'Certify 🎓'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Tab */}
      {activeTab === 'learn' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/unity/unity.webp" alt="Unity Programmer" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Unity Certified User – Programmer LearnKey
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/unity/unity.webp" alt="Unity Artist" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Unity Certified User – Artist LearnKey
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/unity/unity.webp" alt="Unity VR Developer" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Unity Certified User – VR Developer LearnKey
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/unity/unity.webp" alt="Unity Game Developer" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Unity Certified User – Game Developer LearnKey
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Practice Tab */}
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
                    <img src="/unity/Unity-600x300.webp" alt="Unity Practice Test" className="w-full max-w-xs object-contain" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-center">
                    Unity Certified User – Practice Test
                  </h3>
                  <p className="text-2xl font-bold text-gray-800 mb-6 text-center">₹899</p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Certify Tab */}
      {activeTab === 'certify' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-800 p-3 text-center">
                  <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/unity/unity.webp" alt="Unity Programmer Exam" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      Unity Certified User – Programmer Exam
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-slate-700 p-3 text-center">
                  <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/unity/unity.webp" alt="Unity Artist Exam" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      Unity Certified User – Artist Exam
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-zinc-700 p-3 text-center">
                  <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/unity/unity.webp" alt="Unity VR Developer Exam" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      Unity Certified User – VR Developer Exam
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-neutral-700 p-3 text-center">
                  <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/unity/unity.webp" alt="Unity Game Developer Exam" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      Unity Certified User – Game Dev Exam
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-800 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-900 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Sample Certificate + FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sample Certificate</h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <div className="rounded-lg shadow-2xl overflow-hidden max-w-lg w-full">
                <img
                  src="/unity/UCU-Certificate-Sample-0424-1980x1530.webp"
                  alt="Unity Certified User Sample Certificate"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-4 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="p-4 bg-white border-t border-gray-200">
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
  );
}
