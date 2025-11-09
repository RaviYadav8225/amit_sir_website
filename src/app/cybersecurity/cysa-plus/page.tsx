"use client";
import Link from "next/link";

export default function CySAPlus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-indigo-300 text-sm font-semibold">🔍 Analyst Professional</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            CompTIA CySA+
            <span className="block text-indigo-300">CS0-003</span>
            <span className="block text-purple-300">Cybersecurity Analyst</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced Threat Detection and Analysis Certification
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CySA+ CS0-003 Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">About CySA+</h3>
              <p className="text-gray-300 mb-6">
                CompTIA CySA+ is an IT workforce certification that applies behavioral analytics to networks and devices to prevent, detect and combat cybersecurity threats through continuous security monitoring. CySA+ is for IT professionals looking to gain hands-on skills in threat detection, analysis, and response.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400">✓</span>
                  <span className="text-white">DoD 8570.01-M approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400">✓</span>
                  <span className="text-white">Hands-on threat analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400">✓</span>
                  <span className="text-white">SIEM and security tools focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400">✓</span>
                  <span className="text-white">Intermediate-level certification</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Exam Details - CS0-003</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">85 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">165 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice & PBQ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">750/900 points</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$392 USD</span>
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

      {/* 5 Domains */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CySA+ CS0-003 Domains</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">1. Security Operations (33%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Security monitoring and alerting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>SIEM configuration and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Log analysis and correlation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Network security monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Security orchestration and automation</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">2. Vulnerability Management (30%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Vulnerability identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Vulnerability analysis and prioritization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Vulnerability scanning and assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Vulnerability remediation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Validation and reporting</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">3. Incident Response and Management (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Incident response planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Incident detection and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Incident containment and eradication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Recovery and post-incident activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Forensics and evidence handling</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">4. Reporting and Communication (17%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Stakeholder communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Technical and executive reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Metrics and key performance indicators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Compliance reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Documentation and knowledge management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Recommendations</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">CompTIA Security+ or equivalent knowledge</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Minimum 4+ years of hands-on security experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Network and system administration knowledge</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Familiarity with security tools and SIEM</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">💡</span>
                  <span className="text-gray-300">Incident response experience helpful</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Target Audience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">Cybersecurity analysts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">SOC (Security Operations Center) analysts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">Vulnerability analysts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">Threat intelligence analysts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">Incident response team members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Analyst Premium</h3>
              <p className="text-gray-300">₹12-25 LPA for CySA+ professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">Analyst Roles</h3>
              <p className="text-gray-300">SOC Analyst, Cybersecurity Analyst, Threat Hunter</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-white mb-2">High Demand</h3>
              <p className="text-gray-300">Growing need for threat analysis skills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our CySA+ Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-gray-300 text-sm">SIEM and security tools practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">Real Scenarios</h3>
              <p className="text-gray-300 text-sm">Actual incident response cases</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">PBQ Mastery</h3>
              <p className="text-gray-300 text-sm">Performance-based question practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍💻</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-300 text-sm">Certified security analysts</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Threat Analysis!</h2>
          <p className="text-xl text-gray-300 mb-8">Become an expert cybersecurity analyst with CySA+</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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