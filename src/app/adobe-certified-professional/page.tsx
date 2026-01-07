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

export default function AdobeCertifiedProfessionalPage() {
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'certify'>('learn');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const badges = [
    { name: "Adobe Photoshop", image: "/adobe/Adobe1.webp" },
    { name: "Adobe Illustrator", image: "/adobe/Adobe2.webp" },
    { name: "Adobe InDesign", image: "/adobe/adobe3.webp" },
    { name: "Adobe Premiere Pro", image: "/adobe/adobe4.webp" },
    { name: "Adobe After Effects", image: "/adobe/adobe5.webp" },
    { name: "Adobe XD", image: "/adobe/adobe6.webp" },
    { name: "Adobe Animate", image: "/adobe/adobe7.webp" }
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
      name: "Adobe Certified Professional in Visual Design using Photoshop",
      price: 8500,
      icon: "/adobe/Adobe1.webp"
    },
    {
      id: 2,
      name: "Adobe Certified Professional in Graphic Design & Illustration using Illustrator",
      price: 8500,
      icon: "/adobe/Adobe2.webp"
    },
    {
      id: 3,
      name: "Adobe Certified Professional in Print & Digital Media Publication using InDesign",
      price: 8500,
      icon: "/adobe/adobe3.webp"
    },
    {
      id: 4,
      name: "Adobe Certified Professional in Video Editing using Premiere Pro",
      price: 8500,
      icon: "/adobe/adobe4.webp"
    },
    {
      id: 5,
      name: "Adobe Certified Professional in Visual Effects & Motion Graphics using After Effects",
      price: 8500,
      icon: "/adobe/adobe5.webp"
    },
    {
      id: 6,
      name: "Adobe Certified Professional in User Experience Design using Adobe XD",
      price: 8500,
      icon: "/adobe/adobe6.webp"
    },
    {
      id: 7,
      name: "Adobe Certified Professional in Digital Video using Premiere Pro",
      price: 8500,
      icon: "/adobe/adobe7.webp"
    },
    {
      id: 8,
      name: "Adobe Certified Professional in Web Authoring using Dreamweaver",
      price: 8500,
      icon: "/adobe/adobe8.webp"
    },
    {
      id: 9,
      name: "Adobe Certified Professional in Animation using Animate",
      price: 8500,
      icon: "/adobe/adobe9.webp"
    }
  ];

  const practiceTests: Course[] = [
    {
      id: 1,
      name: "Adobe Photoshop Practice Test",
      price: 999,
      icon: "/adobe/Adobe1.webp"
    },
    {
      id: 2,
      name: "Adobe Illustrator Practice Test",
      price: 999,
      icon: "/adobe/Adobe2.webp"
    },
    {
      id: 3,
      name: "Adobe InDesign Practice Test",
      price: 999,
      icon: "/adobe/adobe3.webp"
    },
    {
      id: 4,
      name: "Adobe Premiere Pro Practice Test",
      price: 999,
      icon: "/adobe/adobe4.webp"
    }
  ];

  const examVouchers: Course[] = [
    {
      id: 1,
      name: "Adobe Certified Professional - Photoshop Exam Voucher",
      price: 7500,
      icon: "/adobe/Adobe1.webp"
    },
    {
      id: 2,
      name: "Adobe Certified Professional - Illustrator Exam Voucher",
      price: 7500,
      icon: "/adobe/Adobe2.webp"
    },
    {
      id: 3,
      name: "Adobe Certified Professional - InDesign Exam Voucher",
      price: 7500,
      icon: "/adobe/adobe3.webp"
    },
    {
      id: 4,
      name: "Adobe Certified Professional - Premiere Pro Exam Voucher",
      price: 7500,
      icon: "/adobe/adobe4.webp"
    },
    {
      id: 5,
      name: "Adobe Certified Professional - After Effects Exam Voucher",
      price: 7500,
      icon: "/adobe/adobe5.webp"
    },
    {
      id: 6,
      name: "Adobe Certified Professional - Adobe XD Exam Voucher",
      price: 7500,
      icon: "/adobe/adobe6.webp"
    }
  ];

  const faqs = [
    {
      question: "Who provides the certification and how long is it valid for?",
      answer: "Upon successful completion, you will be awarded an industry-recognized certificate from Adobe through Certiport which has lifelong validity."
    },
    {
      question: "What do I need to do to earn this certificate?",
      answer: "You need to pass the Adobe Certified Professional exam for your chosen application. The exam tests your proficiency in using Adobe Creative Cloud applications."
    },
    {
      question: "What is the duration of the certification exam?",
      answer: "The exam duration is typically 50 minutes and consists of both multiple-choice questions and hands-on performance-based tasks."
    },
    {
      question: "How many attempts do I have to pass the certification exam?",
      answer: "You can retake the exam after a waiting period. Contact us for detailed retake policies and additional voucher purchases."
    },
    {
      question: "What software skills will I need for the exam?",
      answer: "You should have hands-on experience with the Adobe application you're testing for. We recommend completing our training courses before attempting the certification exam."
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
                  Adobe Certified Professional
                </h1>
                
                <div className="space-y-4 text-gray-700 text-base">
                  <p>
                    <strong>Adobe Certified Professional</strong> certifications validate your skills in Adobe Creative Cloud applications, 
                    demonstrating your proficiency to employers and clients worldwide.
                  </p>
                  <p>
                    These certifications are industry-recognized credentials that prove your expertise in creative and digital media tools 
                    including Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, and more.
                  </p>
                  <p>
                    Earn your Adobe certification and stand out in the competitive creative industry with globally recognized credentials 
                    that validate your technical skills and creative capabilities.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <button className="bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition-colors">
                    Explore Courses
                  </button>
                  <div className="flex items-center gap-4">
                    <a href="tel:+91-9522220892" className="text-red-600 font-semibold hover:text-red-700">
                      📞 Call +91-9522220892
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Banner */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-lg overflow-hidden shadow-2xl relative">
                  {/* Diagonal pattern background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute right-0 top-0 w-full h-full">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute right-0" style={{ top: `${i * 30}px` }}>
                          {[...Array(30)].map((_, j) => (
                            <span key={j} className="inline-block w-2 h-2 bg-red-400 rounded-full mx-1 my-1"></span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* White card with content */}
                  <div className="relative m-8 bg-white rounded-lg p-8">
                    <div className="flex flex-col items-center">
                      <div className="self-start mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                          Get Certified<br/>with Adobe
                        </h2>
                      </div>
                      
                      {/* Image/Video Section */}
                      <div className="relative w-full flex justify-center mb-6">
                        <img 
                          src="/adobe/Rectangle-40-600x389.webp" 
                          alt="Adobe Certified Professional"
                          className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                      </div>
                      
                      {/* Adobe Logo */}
                      <div className="self-end">
                        <img 
                          src="/adobe/Adobe1.webp" 
                          alt="Adobe Logo"
                          className="h-12 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Adobe Certification?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Watch this video to learn more about Adobe Certified Professional certifications and how they can help advance your career
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <video 
                  controls 
                  className="w-full rounded-lg shadow-2xl"
                  poster="/adobe/Rectangle-40-600x389.webp"
                >
                  <source src="/adobe/Adobe-Certified-Professional-_-Adobe-_-EtrainIndia-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Certificate Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sample Adobe Certificate
              </h2>
              <p className="text-gray-600">
                Get an industry-recognized certificate upon successful completion
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/adobe/ACPro-Certificate-Sample-1-768x593.webp" 
                alt="Adobe Certified Professional Sample Certificate"
                className="max-w-3xl w-full rounded-lg shadow-xl border-4 border-gray-200"
              />
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-4 border-b-2 border-gray-200">
              <button
                onClick={() => setActiveTab('learn')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'learn'
                    ? 'text-red-600 border-b-4 border-red-600 -mb-0.5'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Learn 📚
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'practice'
                    ? 'text-red-600 border-b-4 border-red-600 -mb-0.5'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Practice 📝
              </button>
              <button
                onClick={() => setActiveTab('certify')}
                className={`px-8 py-3 font-semibold transition-all ${
                  activeTab === 'certify'
                    ? 'text-red-600 border-b-4 border-red-600 -mb-0.5'
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
                  Adobe Certified Professional Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                        <img 
                          src={course.icon} 
                          alt={course.name}
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-3 min-h-[60px]">
                          {course.name}
                        </h3>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-red-600">₹{course.price}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                            <FaShoppingCart className="inline mr-2" />
                            Add to Cart
                          </button>
                          <button className="flex-1 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition-colors">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Practice Tab - Practice Tests */}
            {activeTab === 'practice' && (
              <div className="py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Adobe Practice Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {practiceTests.map((test) => (
                    <div key={test.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-40 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                        <img 
                          src={test.icon} 
                          alt={test.name}
                          className="h-24 w-24 object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-3 min-h-[60px] text-center">
                          {test.name}
                        </h3>
                        <div className="text-center mb-4">
                          <span className="text-2xl font-bold text-orange-600">₹{test.price}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors text-sm">
                            Add to Cart
                          </button>
                          <button className="flex-1 bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800 transition-colors text-sm">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certify Tab - Exam Vouchers */}
            {activeTab === 'certify' && (
              <div className="py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Adobe Certified Professional Exam Vouchers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {examVouchers.map((voucher) => (
                    <div key={voucher.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                      <div className="bg-red-600 p-3 text-center">
                        <span className="text-sm text-white font-bold">EXAM VOUCHER</span>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-center mb-4">
                          <img 
                            src={voucher.icon} 
                            alt={voucher.name}
                            className="w-24 h-24 object-contain"
                          />
                        </div>
                        <div className="text-center mb-4">
                          <h3 className="font-semibold text-gray-900 mb-2 min-h-[60px]">
                            {voucher.name}
                          </h3>
                          <p className="text-2xl font-bold text-gray-800">₹{voucher.price}+GST</p>
                        </div>
                        <div className="flex gap-3">
                          <button className="flex-1 bg-red-700 text-white py-2 px-4 rounded font-medium hover:bg-red-800 transition-colors">
                            Add To Cart
                          </button>
                          <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded font-medium hover:bg-red-700 transition-colors">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 bg-red-50 rounded-lg p-8 border border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    📞 Need Help Choosing the Right Certification?
                  </h3>
                  <p className="text-gray-700 text-center mb-6">
                    Our experts are here to help you select the best Adobe certification path for your career goals
                  </p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href="tel:+91-9522220892"
                      className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Call Now: +91-9522220892
                    </a>
                    <Link 
                      href="/contact"
                      className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold border-2 border-red-600 hover:bg-red-50 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Why Choose LITC INFOTECH?
              </h2>
              <p className="text-xl text-white/90">
                Your trusted partner for Adobe certifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "✅",
                  title: "Official Exam Partner",
                  desc: "Authorized Certiport testing center for Adobe certifications"
                },
                {
                  icon: "💰",
                  title: "Best Pricing",
                  desc: "Competitive rates with no hidden charges"
                },
                {
                  icon: "⚡",
                  title: "Instant Delivery",
                  desc: "Get your exam voucher code immediately after purchase"
                },
                {
                  icon: "🎯",
                  title: "Expert Training",
                  desc: "Comprehensive training courses for all Adobe applications"
                },
                {
                  icon: "🔒",
                  title: "Secure Payment",
                  desc: "Safe and encrypted payment processing"
                },
                {
                  icon: "📚",
                  title: "Study Materials",
                  desc: "Free study resources and practice tests included"
                },
                {
                  icon: "👨‍🏫",
                  title: "Professional Support",
                  desc: "Expert guidance throughout your certification journey"
                },
                {
                  icon: "🏆",
                  title: "High Success Rate",
                  desc: "95%+ pass rate from our students"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-left text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <FaChevronUp className="text-red-600" />
                    ) : (
                      <FaChevronDown className="text-red-600" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Get Adobe Certified?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Contact us today to purchase your exam voucher and take the next step in your creative career
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+91-9522220892"
                className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <span className="text-2xl group-hover:animate-bounce">📞</span>
                <span>Call +91-9522220892</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <span className="text-2xl group-hover:animate-bounce">💬</span>
                <span>Contact Us</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link
                href="/explore-courses"
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <span className="text-2xl group-hover:animate-bounce">🎓</span>
                <span>Explore Courses</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-4xl font-black mb-2">9+</div>
                <div className="text-white/80">Adobe Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">5000+</div>
                <div className="text-white/80">Students Certified</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>

            <div className="mt-12 text-white/80">
              <p className="mb-2">📍 Ground Floor, Metro Tower, near Mangal city Behind Tinku Cafe, Indore, MP</p>
              <p>📧 info@litcindore.com</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
