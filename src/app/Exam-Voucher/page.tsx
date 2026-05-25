"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import AppleLogo from '../components/AppleLogo';
import IBMLogo from '../components/IBMLogo';
import QuickBooksLogo from '../components/QuickBooksLogo';
import MetaLogo from '../components/MetaLogo';
import UnityLogo from '../components/UnityLogo';
import AdobeLogo from '../components/AdobeLogo';
import AutodeskLogo from '../components/AutodeskLogo';
import IC3Logo from '../components/IC3Logo';
import TallyLogo from '../components/TallyLogo';
import PMILogo from '../components/PMILogo';
import PearsonLogo from '../components/PearsonLogo';
import MicrosoftLogo from '../components/MicrosoftLogo';
import CiscoLogo from '../components/CiscoLogo';

interface Certification {
  id: number;
  name: string;
  company: string;
  icon: string;
  color: string;
  path?: string;
}

export default function ExamVoucherPage() {
  const topCompanies = [
    { 
      name: "IBM", 
      text: "",
      logo: "IBMLogo",
      color: "from-blue-600 to-blue-800" 
    },
    { 
      name: "QuickBooks", 
      text: "",
      logo: "QuickBooksLogo",
      color: "from-green-500 to-green-700" 
    },
    { 
      name: "Meta", 
      text: "Meta",
      logo: "MetaLogo",
      color: "from-blue-500 to-indigo-600" 
    },
    { 
      name: "IC3", 
      text: "",
      logo: "IC3Logo",
      color: "from-green-600 to-teal-600" 
    },
    { 
      name: "Unity", 
      text: "",
      logo: "UnityLogo",
      color: "from-gray-700 to-black" 
    },
    { 
      name: "Adobe", 
      text: "",
      logo: "AdobeLogo",
      color: "from-red-600 to-pink-600" 
    },
    { 
      name: "Autodesk", 
      text: "",
      logo: "AutodeskLogo",
      color: "from-blue-500 to-cyan-600" 
    },
    { 
      name: "Microsoft", 
      text: "Microsoft",
      logo: "MicrosoftLogo",
      color: "from-blue-500 to-indigo-600" 
    },
    { 
      name: "Cisco", 
      text: "",
      logo: "CiscoLogo",
      color: "from-blue-600 to-cyan-500" 
    },
    { 
      name: "Tally", 
      text: "",
      logo: "TallyLogo",
      color: "from-red-500 to-orange-600" 
    },
    { 
      name: "PMI", 
      text: "",
      logo: "PMILogo",
      color: "from-orange-500 to-red-600" 
    },
    { 
      name: "Apple", 
      text: "Apple",
      logo: "AppleLogo",
      color: "from-gray-700 to-black" 
    },
    { 
      name: "Pearson VUE", 
      text: "",
      logo: "PearsonLogo",
      color: "from-purple-600 to-indigo-700" 
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      name: "IBM Certifications",
      company: "IBM",
      icon: "IBMLogo",
      color: "from-blue-600 to-blue-800",
      path: "/ibm-certification"
    },
    {
      id: 2,
      name: "Certified Digital Marketing Associate",
      company: "Meta",
      icon: "MetaLogo",
      color: "from-blue-500 to-indigo-600",
      path: "/digital-marketing"
    },
    {
      id: 3,
      name: "PMI Project Management Ready™",
      company: "PMI",
      icon: "PMILogo",
      color: "from-orange-500 to-red-600",
      path: "/certifications"
    },
    {
      id: 4,
      name: "Information Technology Specialist",
      company: "Pearson",
      icon: "PearsonLogo",
      color: "from-purple-600 to-indigo-700",
      path: "/certifications"
    },
    {
      id: 5,
      name: "App Development With Swift",
      company: "Apple",
      icon: "AppleLogo",
      color: "from-gray-600 to-gray-800",
      path: "/certifications"
    },
    {
      id: 6,
      name: "Tally Certifications",
      company: "Tally",
      icon: "TallyLogo",
      color: "from-red-500 to-orange-600",
      path: "/certifications"
    },
    {
      id: 7,
      name: "Microsoft Office Specialist",
      company: "Microsoft",
      icon: "MicrosoftLogo",
      color: "from-blue-500 to-indigo-600",
      path: "/Exam-Voucher/microsoft-office-specialist"
    },
    {
      id: 8,
      name: "Autodesk Certified User",
      company: "Autodesk",
      icon: "AutodeskLogo",
      color: "from-blue-500 to-cyan-600",
      path: "/certifications"
    },
    {
      id: 9,
      name: "Unity Certified User",
      company: "Unity",
      icon: "UnityLogo",
      color: "from-gray-700 to-black",
      path: "/certifications"
    },
    {
      id: 10,
      name: "Adobe Certified Professional",
      company: "Adobe",
      icon: "AdobeLogo",
      color: "from-red-600 to-pink-600",
      path: "/certifications"
    },
    {
      id: 11,
      name: "Microsoft Certified Fundamentals",
      company: "Microsoft",
      icon: "MicrosoftLogo",
      color: "from-indigo-600 to-blue-700",
      path: "/Exam-Voucher/microsoft-certified-fundamentals"
    },
    {
      id: 12,
      name: "Cisco Certified Support Technician",
      company: "Cisco",
      icon: "CiscoLogo",
      color: "from-blue-600 to-cyan-500",
      path: "/Exam-Voucher/cisco-certified-support-technician"
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Certiport Section */}
            <div className="text-center mb-20">
              <div className="flex flex-col items-center gap-8">
                {/* Certiport Logo */}
                <div className="flex justify-center">
                  <img 
                    src="/Certiport-Pearson-Logo-2016.png" 
                    alt="Certiport Logo" 
                    className="h-20 md:h-24 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Get Certified Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 whitespace-nowrap">
                  Get Certified by World&apos;s Leading IT Companies
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
              </div>

              {/* Company Logos - Horizontal Auto Scroll */}
              <div className="relative overflow-hidden mb-16 py-8">
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
                
                {/* Scrolling container */}
                <div className="flex items-center animate-scroll-horizontal hover:pause-animation gap-12 md:gap-16">
                  {/* First set of logos */}
                  {topCompanies.map((company, index) => {
                    const LogoComponent = company.logo === 'IBMLogo' ? <IBMLogo size={140} /> :
                                        company.logo === 'QuickBooksLogo' ? <QuickBooksLogo size={160} /> :
                                        company.logo === 'MetaLogo' ? <MetaLogo size={50} /> :
                                        company.logo === 'IC3Logo' ? <IC3Logo size={140} /> :
                                        company.logo === 'UnityLogo' ? <UnityLogo size={160} /> :
                                        company.logo === 'AdobeLogo' ? <AdobeLogo size={50} /> :
                                        company.logo === 'AutodeskLogo' ? <AutodeskLogo size={190} /> :
                                        company.logo === 'MicrosoftLogo' ? <MicrosoftLogo size={50} /> :
                                        company.logo === 'CiscoLogo' ? <CiscoLogo size={170} /> :
                                        company.logo === 'TallyLogo' ? <TallyLogo size={170} /> :
                                        company.logo === 'PMILogo' ? <PMILogo size={160} /> :
                                        company.logo === 'AppleLogo' ? <AppleLogo size={50} /> :
                                        company.logo === 'PearsonLogo' ? <PearsonLogo size={140} /> : null;
                    
                    return (
                      <div 
                        key={`first-${index}`}
                        className="flex items-center gap-3 md:gap-4 flex-shrink-0 group"
                      >
                        {/* Logo Icon */}
                        <div className={`group-hover:scale-110 transition-transform duration-300 ${LogoComponent ? '' : 'text-4xl md:text-5xl'}`}>
                          {LogoComponent || company.logo}
                        </div>
                        {/* Company Name */}
                        <div className={`text-xl md:text-2xl font-black bg-gradient-to-r ${company.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 whitespace-nowrap`}>
                          {company.text}
                        </div>
                      </div>
                    );
                  })}
                  {/* Duplicate set for seamless loop */}
                  {topCompanies.map((company, index) => {
                    const LogoComponent = company.logo === 'IBMLogo' ? <IBMLogo size={140} /> :
                                        company.logo === 'QuickBooksLogo' ? <QuickBooksLogo size={160} /> :
                                        company.logo === 'MetaLogo' ? <MetaLogo size={50} /> :
                                        company.logo === 'IC3Logo' ? <IC3Logo size={140} /> :
                                        company.logo === 'UnityLogo' ? <UnityLogo size={160} /> :
                                        company.logo === 'AdobeLogo' ? <AdobeLogo size={50} /> :
                                        company.logo === 'AutodeskLogo' ? <AutodeskLogo size={70} /> :
                                        company.logo === 'MicrosoftLogo' ? <MicrosoftLogo size={50} /> :
                                        company.logo === 'CiscoLogo' ? <CiscoLogo size={170} /> :
                                        company.logo === 'TallyLogo' ? <TallyLogo size={170} /> :
                                        company.logo === 'PMILogo' ? <PMILogo size={140} /> :
                                        company.logo === 'AppleLogo' ? <AppleLogo size={50} /> :
                                        company.logo === 'PearsonLogo' ? <PearsonLogo size={140} /> : null;
                    
                    return (
                      <div 
                        key={`second-${index}`}
                        className="flex items-center gap-3 md:gap-4 flex-shrink-0 group"
                      >
                        {/* Logo Icon */}
                        <div className={`group-hover:scale-110 transition-transform duration-300 ${LogoComponent ? '' : 'text-4xl md:text-5xl'}`}>
                          {LogoComponent || company.logo}
                        </div>
                        {/* Company Name */}
                        <div className={`text-xl md:text-2xl font-black bg-gradient-to-r ${company.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 whitespace-nowrap`}>
                          {company.text}
                        </div>
                      </div>
                    );
                  })}
                  {/* Third set for extra smoothness */}
                  {topCompanies.map((company, index) => {
                    const LogoComponent = company.logo === 'IBMLogo' ? <IBMLogo size={120} /> :
                                        company.logo === 'QuickBooksLogo' ? <QuickBooksLogo size={140} /> :
                                        company.logo === 'MetaLogo' ? <MetaLogo size={50} /> :
                                        company.logo === 'IC3Logo' ? <IC3Logo size={120} /> :
                                        company.logo === 'UnityLogo' ? <UnityLogo size={140} /> :
                                        company.logo === 'AdobeLogo' ? <AdobeLogo size={50} /> :
                                        company.logo === 'AutodeskLogo' ? <AutodeskLogo size={70} /> :
                                        company.logo === 'MicrosoftLogo' ? <MicrosoftLogo size={50} /> :
                                        company.logo === 'CiscoLogo' ? <CiscoLogo size={150} /> :
                                        company.logo === 'TallyLogo' ? <TallyLogo size={150} /> :
                                        company.logo === 'PMILogo' ? <PMILogo size={140} /> :
                                        company.logo === 'AppleLogo' ? <AppleLogo size={50} /> :
                                        company.logo === 'PearsonLogo' ? <PearsonLogo size={140} /> : null;
                    
                    return (
                      <div 
                        key={`third-${index}`}
                        className="flex items-center gap-3 md:gap-4 flex-shrink-0 group"
                      >
                        {/* Logo Icon */}
                        <div className={`group-hover:scale-110 transition-transform duration-300 ${LogoComponent ? '' : 'text-4xl md:text-5xl'}`}>
                          {LogoComponent || company.logo}
                        </div>
                        {/* Company Name */}
                        <div className={`text-xl md:text-2xl font-black bg-gradient-to-r ${company.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 whitespace-nowrap`}>
                          {company.text}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Popular Courses and Certifications */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 whitespace-nowrap">
                  Popular Courses and Certifications
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {certifications.map((cert) => {
                  const CertLogoComponent = cert.icon === 'IBMLogo' ? <IBMLogo size={64} /> :
                                           cert.icon === 'MetaLogo' ? <MetaLogo size={64} /> :
                                           cert.icon === 'AppleLogo' ? <AppleLogo size={64} /> :
                                           cert.icon === 'MicrosoftLogo' ? <MicrosoftLogo size={64} /> :
                                           cert.icon === 'AutodeskLogo' ? <AutodeskLogo size={64} /> :
                                           cert.icon === 'UnityLogo' ? <UnityLogo size={64} /> :
                                           cert.icon === 'AdobeLogo' ? <AdobeLogo size={64} /> :
                                           cert.icon === 'CiscoLogo' ? <CiscoLogo size={64} /> :
                                           cert.icon === 'TallyLogo' ? <TallyLogo size={64} /> :
                                           cert.icon === 'PMILogo' ? <PMILogo size={64} /> :
                                           cert.icon === 'PearsonLogo' ? <PearsonLogo size={64} /> : null;
                  
                  return (
                    <Link
                      key={cert.id}
                      href={cert.path || "/certifications"}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300 hover:scale-105"
                    >
                      <div className="p-6 flex items-center gap-4">
                        {/* Icon */}
                        <div className={`flex-shrink-0 ${CertLogoComponent ? '' : `w-16 h-16 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center text-3xl shadow-md`} group-hover:scale-110 transition-transform duration-300`}>
                          {CertLogoComponent || (
                            <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center text-3xl shadow-md`}>
                              {cert.icon}
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-gray-900 font-bold text-base md:text-lg mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {cert.name}
                          </h4>
                          <p className="text-gray-500 text-sm font-medium">
                            {cert.company}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Exam Vouchers */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Why Buy Exam Vouchers from
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2">
                  LITC INFOTECH?
                </span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Get official certification exam vouchers at the best prices with expert support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "✅",
                  title: "100% Official",
                  desc: "Authorized exam vouchers directly from certification providers"
                },
                {
                  icon: "💰",
                  title: "Best Pricing",
                  desc: "Competitive rates with no hidden charges or extra fees"
                },
                {
                  icon: "⚡",
                  title: "Instant Delivery",
                  desc: "Get your exam voucher code instantly after purchase"
                },
                {
                  icon: "🎯",
                  title: "Expert Guidance",
                  desc: "Free consultation on choosing the right certification"
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
                  title: "Training Support",
                  desc: "Optional training courses available for all certifications"
                },
                {
                  icon: "🏆",
                  title: "Success Rate",
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

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Get Certified?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Contact us today to purchase your exam voucher and take the next step in your career
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
                <div className="text-4xl font-black mb-2">50+</div>
                <div className="text-white/80">Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">40K+</div>
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
    </>
  );
}
