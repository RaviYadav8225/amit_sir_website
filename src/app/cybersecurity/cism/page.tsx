"use client";
import Link from "next/link";

export default function CISM() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">👨‍💼 Management Professional</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            CISM
            <span className="block text-purple-300">Certified Information</span>
            <span className="block text-indigo-300">Security Manager</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            ISACA's Premier Information Security Management Certification
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-16 px-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CISM Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">About CISM</h3>
              <p className="text-gray-300 mb-6">
                CISM is the leading certification for information security managers. It validates expertise in information security governance, risk management, incident management, and program development and management. Designed specifically for management-level professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Management-focused certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">ISACA globally recognized</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Governance and strategy emphasis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Business alignment focus</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">150 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">450/800 points</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$760 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Validity:</span>
                  <span className="text-white font-semibold">3 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Domains */}
      <div className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CISM 4 Domains</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">1. Information Security Governance (17%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Information security strategy development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Information security governance framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Legal, regulatory, and compliance requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Organizational structure and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Business case development</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">2. Information Risk Management (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Information risk management strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Risk identification and assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Risk response and mitigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Risk monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Third-party risk management</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">3. Information Security Program (33%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Information security program strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Information security program management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Information security resources management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Information security architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Information security technologies</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">4. Incident Management (30%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Incident management readiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Incident management response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Incident recovery and post-incident activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Forensics and evidence collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Business continuity and disaster recovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Experience Requirements</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Experience Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Minimum 5 years of information security experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">3+ years of information security management experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Experience in 3 of the 4 CISM domains</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Bachelor's degree can substitute 1 year</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">💡</span>
                  <span className="text-gray-300">Master's degree can substitute 2 years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Ideal Candidate Profile</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">Information security managers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security consultants and advisors</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">Chief information security officers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">IT directors with security responsibilities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security program leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Management Salary</h3>
              <p className="text-gray-300">₹20-45 LPA for CISM professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Leadership Path</h3>
              <p className="text-gray-300">CISO, Security Director, Program Manager roles</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-2">Global Recognition</h3>
              <p className="text-gray-300">ISACA credential recognized worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-16 px-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our CISM Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Management Focus</h3>
              <p className="text-gray-300 text-sm">Leadership and governance emphasis</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-white mb-2">ISACA Materials</h3>
              <p className="text-gray-300 text-sm">Official review manual and QA&E</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Case Studies</h3>
              <p className="text-gray-300 text-sm">Real-world management scenarios</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-300 text-sm">CISM certified instructors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Lead with CISM!</h2>
          <p className="text-xl text-gray-300 mb-8">Master information security management and governance</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Training Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
