"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function PMICertificationPage() {
  const [activeTab, setActiveTab] = useState('learn');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who provides the certification and how long is it valid for?",
      answer:
        "Upon successful completion, you will be awarded an industry-recognized PMI certification. The PMI Project Management Ready™ certification does not expire.",
    },
    {
      question: "What do I need to do to earn this certificate?",
      answer:
        "You need to complete the PMI learning course and pass the PMI Project Management Ready™ certification exam at an authorized Certiport exam center.",
    },
    {
      question: "What is the duration of the certification exam?",
      answer:
        "The PMI Project Management Ready™ exam is typically 40–60 minutes and consists of multiple-choice questions testing project management knowledge.",
    },
    {
      question: "How many attempts do I have to pass the certification exam?",
      answer:
        "You get a fixed number of attempts with the exam voucher purchased. Contact us for details on re-attempt policies and retake options.",
    },
  ];



  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 via-orange-800 to-red-700 text-white pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              {/* PMI Logo */}
              <div className="mb-8">
                <img src="/pmi/pm.webp" alt="PMI Project Management Ready" className="h-20 w-auto object-contain" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                PMI Project Management Ready™
              </h1>

              <p className="text-lg mb-4 leading-relaxed text-orange-100">
                The PMI Project Management Ready™ certification validates your foundational
                knowledge of project management concepts, terminology, and the importance
                of project management in today&apos;s organizations.
              </p>

              <p className="text-lg mb-4 leading-relaxed text-orange-100">
                This certification is designed for secondary and post-secondary students
                who are beginning their career journey and want to demonstrate a commitment
                to project management excellence recognized by employers worldwide.
              </p>

              <p className="text-lg mb-8 leading-relaxed text-orange-100">
                With a PMI certification, you can stand out in the job market and prove
                that you have the project management skills needed to drive results and
                lead teams effectively.
              </p>

              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="bg-orange-900 hover:bg-orange-950 text-white font-semibold py-3 px-8 rounded transition-colors"
                >
                  Explore More
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-orange-900 font-semibold py-3 px-8 rounded transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Right Sidebar Card */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="/pmi/pmi-banner.jpeg"
                alt="PMI Project Management Ready"
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
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Project Management Ready" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      PMI Project Management Ready™ – LearnKey
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-4 rounded font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Project Management Fundamentals" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      PMI Project Management Fundamentals – LearnKey
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-4 rounded font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Agile" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      PMI Agile Project Management – LearnKey
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-4 rounded font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-3 text-center">
                  <span className="text-sm text-gray-600 font-medium">LEARNING COURSE</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Risk Management" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      PMI Risk Management Essentials – LearnKey
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹1,149</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-4 rounded font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
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
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Practice Test" className="w-full max-w-xs object-contain" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-center">
                    PMI Project Management Ready™ – Practice Test
                  </h3>
                  <p className="text-2xl font-bold text-gray-800 mb-6 text-center">₹899</p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-4 rounded font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
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
                <div className="bg-orange-600 p-3 text-center">
                  <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Project Management Ready" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      PMI Project Management Ready™ – Certification Exam
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-red-700 p-3 text-center">
                  <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Fundamentals" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      PMI Project Management Fundamentals – Certification
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-amber-700 p-3 text-center">
                  <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Agile" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      PMI Agile Project Management – Certification
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-rose-700 p-3 text-center">
                  <span className="text-sm text-white font-bold">CERTIFICATION EXAM</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img src="/pmi/pmi-banner.jpeg" alt="PMI Risk" className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      PMI Risk Management Essentials – Certification
                    </h3>
                    <p className="text-2xl font-bold text-gray-800">₹3,600+GST</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-orange-700 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-800 transition-colors">Add To Cart</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-orange-600 transition-colors">Buy Now</button>
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
                  src="/pmi/PMI-Certificate-Standard-Sample-1-1980x1530.webp"
                  alt="PMI Certification Sample Certificate"
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
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
