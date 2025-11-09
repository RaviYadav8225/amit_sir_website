"use client";
import Link from "next/link";

export default function GSEC() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-green-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-emerald-300 text-sm font-semibold">🌟 Foundation Professional</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            GSEC
            <span className="block text-emerald-300">GIAC Security</span>
            <span className="block text-green-300">Essentials</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The Gold Standard for Hands-On Information Security Skills
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-16 px-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">GSEC Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-300 mb-6">About GSEC</h3>
              <p className="text-gray-300 mb-6">
                The GIAC Security Essentials (GSEC) certification validates a practitioner's knowledge of information security beyond simple terminology and concepts. GSEC certification holders are demonstrably hands-on security professionals who have the skill to implement security systems and identify vulnerabilities in existing systems.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-white">GIAC flagship foundational certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-white">Hands-on security practitioner skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-white">SANS training foundation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-white">Broad security knowledge base</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-300 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">106 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">3 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">73%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$2,499 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Validity:</span>
                  <span className="text-white font-semibold">4 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules - SEC401 */}
      <div className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">SEC401: Security Essentials Bootcamp Style</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Day 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Day 1: Security Fundamentals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Information security principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Risk management fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Legal and regulatory issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Security frameworks and standards</span>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Day 2: Access Control and Password Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Access control models and methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Authentication mechanisms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Password policy and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Multi-factor authentication</span>
                </li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Day 3: Security Architecture and Design</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Network architecture and design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Secure communication protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Firewalls and intrusion detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Virtual private networks (VPNs)</span>
                </li>
              </ul>
            </div>

            {/* Day 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Day 4: Incident Response, Legal Issues, and Investigation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Incident response methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Digital forensics basics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Legal and ethical considerations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Evidence handling and chain of custody</span>
                </li>
              </ul>
            </div>

            {/* Day 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Day 5: Web Application and Wireless Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Web application vulnerabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>OWASP Top 10 security risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Wireless security protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Mobile device security</span>
                </li>
              </ul>
            </div>

            {/* Day 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Day 6: Cryptography and Windows/Linux Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Cryptographic concepts and algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Public key infrastructure (PKI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Windows security architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">▸</span>
                  <span>Linux/Unix security hardening</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Recommendations</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">2+ years of IT experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic understanding of networking concepts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Familiarity with Windows and/or Linux</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic security awareness</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">💡</span>
                  <span className="text-gray-300">Entry-level security certification friendly</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6">Target Audience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">New security professionals</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">IT professionals transitioning to security</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security analysts and administrators</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">Network and system administrators</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">Managers requiring security overview</span>
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
              <h3 className="text-xl font-bold text-white mb-2">Strong Foundation</h3>
              <p className="text-gray-300">₹8-22 LPA for GSEC professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Career Growth</h3>
              <p className="text-gray-300">Security Analyst, SOC Analyst, Security Specialist</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">GIAC Foundation</h3>
              <p className="text-gray-300">Pathway to advanced GIAC certifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-16 px-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our GSEC Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">SANS Materials</h3>
              <p className="text-gray-300 text-sm">Official SEC401 courseware and resources</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-gray-300 text-sm">Practical security exercises</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-300 text-sm">Broad security knowledge foundation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Training</h3>
              <p className="text-gray-300 text-sm">SANS certified instructors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-emerald-600/20 to-green-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Build Your Security Foundation!</h2>
          <p className="text-xl text-gray-300 mb-8">Start your security career with GSEC certification</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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
