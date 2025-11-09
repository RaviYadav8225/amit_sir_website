"use client";
import Link from "next/link";

export default function SecurityPlus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-300 text-sm font-semibold">🛡️ Foundation Professional</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            CompTIA Security+
            <span className="block text-orange-300">SY0-701</span>
            <span className="block text-red-300">Foundation Certification</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The Global Baseline for IT Security Skills and Knowledge
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Security+ SY0-701 Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">About Security+</h3>
              <p className="text-gray-300 mb-6">
                CompTIA Security+ is the first security certification IT professionals should earn. It establishes the core knowledge required of any cybersecurity role and provides a springboard to intermediate-level cybersecurity jobs. Security+ is compliant with ISO 17024 standards and approved by the US DoD to meet directive 8570.01-M requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">DoD 8570.01-M approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Global cybersecurity baseline</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Vendor-neutral certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Entry-level security foundation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Exam Details - SY0-701</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">90 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">90 minutes</span>
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
                  <span className="text-white font-semibold">$370 USD</span>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">Security+ SY0-701 Domains</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-orange-300 mb-4">1. General Security Concepts (12%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Security controls and frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Fundamental security principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Zero trust architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Physical security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Deception and disruption technologies</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-orange-300 mb-4">2. Threats, Vulnerabilities and Mitigations (22%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Threat actors and attack vectors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Vulnerability assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Application security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Network security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Indicators of compromise</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-orange-300 mb-4">3. Security Architecture (18%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Enterprise architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Network infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Cloud security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Embedded systems security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Virtualization security</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-orange-300 mb-4">4. Security Operations (28%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Security monitoring and SIEM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Incident response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Digital forensics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Vulnerability management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Backup and recovery</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-orange-300 mb-4">5. Security Program Management and Oversight (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Security governance and compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Risk management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Data classification and handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Privacy and data protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Security awareness and training</span>
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
              <h3 className="text-2xl font-bold text-red-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✓</span>
                  <span className="text-gray-300">No formal prerequisites required</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✓</span>
                  <span className="text-gray-300">Recommended: 2+ years IT experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic networking knowledge helpful</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✓</span>
                  <span className="text-gray-300">CompTIA A+ or Network+ beneficial</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">💡</span>
                  <span className="text-gray-300">Entry-level friendly certification</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-6">Target Audience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🎯</span>
                  <span className="text-gray-300">IT professionals new to security</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🎯</span>
                  <span className="text-gray-300">Network and systems administrators</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🎯</span>
                  <span className="text-gray-300">Junior security analysts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security specialists</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🎯</span>
                  <span className="text-gray-300">Government and military personnel</span>
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
              <h3 className="text-xl font-bold text-white mb-2">Entry Advantage</h3>
              <p className="text-gray-300">₹6-15 LPA for Security+ professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Career Foundation</h3>
              <p className="text-gray-300">Security Analyst, SOC Analyst, IT Specialist</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="text-xl font-bold text-white mb-2">Government Ready</h3>
              <p className="text-gray-300">DoD 8570 compliance for federal jobs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our Security+ Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">SY0-701 Focused</h3>
              <p className="text-gray-300 text-sm">Latest exam objectives coverage</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-gray-300 text-sm">Performance-based questions practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Exams</h3>
              <p className="text-gray-300 text-sm">CompTIA-style questions and PBQs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-bold text-white mb-2">Certified Instructors</h3>
              <p className="text-gray-300 text-sm">Security+ and advanced cert holders</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Start Your Security Career!</h2>
          <p className="text-xl text-gray-300 mb-8">Get Security+ certified and open cybersecurity doors</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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