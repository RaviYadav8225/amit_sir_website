"use client";
import Link from "next/link";

export default function CISA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-teal-300 text-sm font-semibold">🔍 Audit Professional</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            CISA
            <span className="block text-teal-300">Certified Information</span>
            <span className="block text-blue-300">Systems Auditor</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The World's Premier Information Systems Audit Certification
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-teal-500/10 to-blue-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CISA Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-6">About CISA</h3>
              <p className="text-gray-300 mb-6">
                CISA is the world-renowned certification for IS audit, control, assurance and security professionals. It demonstrates proficiency in assessing vulnerabilities, reporting on compliance, and instituting controls within the enterprise. The certification has been awarded to more than 145,000 professionals worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-teal-400">✓</span>
                  <span className="text-white">Premier IS audit certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-400">✓</span>
                  <span className="text-white">ISACA globally recognized</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-400">✓</span>
                  <span className="text-white">Control and assurance focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-400">✓</span>
                  <span className="text-white">Risk and compliance expertise</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-6">Exam Details</h3>
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

      {/* 5 Domains */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CISA 5 Domains</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-teal-300 mb-4">1. Information Systems Auditing Process (11%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>IS audit standards and guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Risk-based audit planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Audit project management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Audit evidence collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Audit reporting and follow-up</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-teal-300 mb-4">2. IT Governance and Management (14%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>IT governance frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>IT strategy and policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>IT organizational structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>IT resource management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Business continuity management</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-teal-300 mb-4">3. Information Systems Acquisition, Development and Implementation (19%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Project governance and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Benefits realization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>System development methodologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>System integration and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Infrastructure implementation</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-teal-300 mb-4">4. Information Systems Operations and Business Resilience (33%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Information systems operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Information systems infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Information systems security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Business application systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Data management systems</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-teal-300 mb-4">5. Protection of Information Assets (23%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Information security policies and procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Information classification and handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Access controls and authorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Network and communications security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Encryption and key management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Experience Requirements</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Experience Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Minimum 5 years of professional IS audit, control, or security experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Experience in CISA job practice areas</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Bachelor's degree can substitute 1 year</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Master's degree can substitute 2 years</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">💡</span>
                  <span className="text-gray-300">Relevant certifications can substitute experience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Ideal Candidate Profile</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🎯</span>
                  <span className="text-gray-300">IS auditors and audit managers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🎯</span>
                  <span className="text-gray-300">IT consultants and advisors</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🎯</span>
                  <span className="text-gray-300">Compliance and risk professionals</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security professionals</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🎯</span>
                  <span className="text-gray-300">IT governance professionals</span>
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
              <h3 className="text-xl font-bold text-white mb-2">Audit Premium</h3>
              <p className="text-gray-300">₹18-40 LPA for CISA professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">Audit Leadership</h3>
              <p className="text-gray-300">Chief Audit Executive, IT Audit Manager roles</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Standard</h3>
              <p className="text-gray-300">Required by Big 4 and major consulting firms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4 bg-gradient-to-r from-teal-500/10 to-blue-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our CISA Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2">Audit Focus</h3>
              <p className="text-gray-300 text-sm">Comprehensive IS audit methodology</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">ISACA Materials</h3>
              <p className="text-gray-300 text-sm">Official review manual and database</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Tests</h3>
              <p className="text-gray-300 text-sm">Extensive question bank and simulations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Training</h3>
              <p className="text-gray-300 text-sm">CISA certified audit professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-teal-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master IS Auditing with CISA!</h2>
          <p className="text-xl text-gray-300 mb-8">Become a certified information systems audit professional</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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