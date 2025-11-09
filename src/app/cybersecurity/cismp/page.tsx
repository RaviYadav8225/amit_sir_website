"use client";
import Link from "next/link";

export default function CISMP() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">🏛️ Management Professional</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            CISMP
            <span className="block text-blue-300">Certificate in Information</span>
            <span className="block text-cyan-300">Security Management</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            BCS Foundation Certificate in Information Security Management
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CISMP Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">About CISMP</h3>
              <p className="text-gray-300 mb-6">
                The BCS Certificate in Information Security Management Principles (CISMP) is designed for senior managers and business executives who need to understand information security from a strategic and business perspective. It covers the fundamental principles of information security management without requiring deep technical knowledge.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-white">BCS (British Computer Society) certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-white">Business-focused security management</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-white">Foundation-level certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-white">Non-technical approach</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">100 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">£350 GBP</span>
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

      {/* Course Modules */}
      <div className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CISMP Course Modules</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-300 mb-4">1. Information Security Management Fundamentals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Information security principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Business context and drivers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Security governance frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Legal and regulatory requirements</span>
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-300 mb-4">2. Risk Management</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Risk assessment methodologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Risk treatment strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Business impact analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Risk monitoring and reporting</span>
                </li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-300 mb-4">3. Information Security Controls</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Access control mechanisms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Cryptographic controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Physical and environmental security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Network and communications security</span>
                </li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-300 mb-4">4. Business Continuity Management</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Business continuity planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Disaster recovery strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Crisis management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Testing and maintenance</span>
                </li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-300 mb-4">5. Human Resources Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Security awareness and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Personnel security procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Terms and conditions of employment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Disciplinary processes</span>
                </li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-300 mb-4">6. Compliance and Legal Issues</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Compliance with legal requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Intellectual property rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Protection of personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Information security reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Target Audience</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-gray-300">No formal prerequisites required</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic understanding of business operations</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-gray-300">General awareness of IT and security concepts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">💡</span>
                  <span className="text-gray-300">Foundation-level certification</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">💡</span>
                  <span className="text-gray-300">Suitable for non-technical professionals</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Target Audience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">🎯</span>
                  <span className="text-gray-300">Senior managers and executives</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">🎯</span>
                  <span className="text-gray-300">Business analysts and consultants</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">🎯</span>
                  <span className="text-gray-300">Risk and compliance professionals</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">🎯</span>
                  <span className="text-gray-300">Project managers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">🎯</span>
                  <span className="text-gray-300">Anyone requiring security management knowledge</span>
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
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Management Focus</h3>
              <p className="text-gray-300">₹8-20 LPA for CISMP professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Strategic Roles</h3>
              <p className="text-gray-300">Risk Manager, Compliance Officer, Business Analyst</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-bold text-white mb-2">UK Recognition</h3>
              <p className="text-gray-300">BCS qualification recognized in UK/EU</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our CISMP Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">BCS Materials</h3>
              <p className="text-gray-300 text-sm">Official BCS courseware and resources</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Business Focus</h3>
              <p className="text-gray-300 text-sm">Strategic security management approach</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Tests</h3>
              <p className="text-gray-300 text-sm">Sample questions and mock exams</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-300 text-sm">BCS qualified instructors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Security Management!</h2>
          <p className="text-xl text-gray-300 mb-8">Build strategic information security management skills</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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
