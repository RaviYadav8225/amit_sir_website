"use client";
import Link from "next/link";

export default function CCSTCybersecurity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-red-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">🌟 Entry Level Certification</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            CCST Cybersecurity
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (100-150)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Cisco Certified Support Technician - Your Gateway to Cybersecurity Career
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/Cisco-Cybersecurity-OD-0123 -CCST.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Syllabus
            </a>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Course Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The CCST Cybersecurity certification validates foundational knowledge and skills in cybersecurity concepts, security principles, network security, endpoint security, vulnerability assessment, and incident handling.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Entry-level cybersecurity certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Foundation for security career</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Industry-recognized credential</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">No prerequisites required</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Exam Details</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-semibold">Exam Code:</span>
                  <span>100-150</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-semibold">Duration:</span>
                  <span>60 minutes</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-semibold">Questions:</span>
                  <span>50-60</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Format:</span>
                  <span>Multiple choice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Topics */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Essential Security Principles</h3>
              <p className="text-gray-300">CIA triad, authentication, authorization, and basic security concepts</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">Network Security</h3>
              <p className="text-gray-300">Firewalls, VPNs, network segmentation, and access control</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-3">Endpoint Security</h3>
              <p className="text-gray-300">Antivirus, anti-malware, host-based security controls</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Vulnerability Assessment</h3>
              <p className="text-gray-300">Identifying and evaluating security weaknesses</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-white mb-3">Incident Handling</h3>
              <p className="text-gray-300">Detection, response, and recovery from security incidents</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Security Operations</h3>
              <p className="text-gray-300">Monitoring, logging, and security best practices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Opportunities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">👨‍💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Security Analyst</h3>
              <p className="text-gray-300 text-sm">Monitor and analyze security threats</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-white mb-2">SOC Technician</h3>
              <p className="text-gray-300 text-sm">Security Operations Center support</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-white mb-2">IT Support Specialist</h3>
              <p className="text-gray-300 text-sm">Technical support with security focus</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Junior Security Engineer</h3>
              <p className="text-gray-300 text-sm">Entry-level security engineering role</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites</h2>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>No formal prerequisites required</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Basic understanding of computer fundamentals recommended</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Familiarity with internet and basic networking concepts helpful</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Interest in cybersecurity and information security</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Path */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Your Certification Journey</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Entry Level</h3>
              <p className="text-purple-300 font-semibold mb-2">CCST Cybersecurity</p>
              <p className="text-gray-300 text-sm">Start your security journey</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Associate Level</h3>
              <p className="text-blue-300 font-semibold mb-2">CCNA CyberOps</p>
              <p className="text-gray-300 text-sm">Advanced security operations</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Professional Level</h3>
              <p className="text-red-300 font-semibold mb-2">CCNP Security</p>
              <p className="text-gray-300 text-sm">Expert security specialist</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-red-500/20 backdrop-blur-md border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-black text-white mb-6">
              Begin Your Cybersecurity Career Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get industry-recognized certification and start protecting digital assets
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
                📞 Call Now: +91-9522220892
              </a>
              <Link href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
