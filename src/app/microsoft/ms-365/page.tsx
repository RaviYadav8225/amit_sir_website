"use client";
import Link from "next/link";

export default function Microsoft365() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">📚 Fundamentals Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Microsoft 365
            <span className="block text-blue-300">Fundamentals</span>
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (MS-900)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your Gateway to Microsoft 365 Cloud Services
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/ms-900-syllabus.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Syllabus
            </a>
          </div>
        </div>
      </div>

      {/* Key Microsoft 365 Certifications */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Microsoft 365 Certification Paths</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MS-900 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MS-900</h3>
                  <p className="text-gray-300 text-sm">Fundamentals</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Microsoft 365 Fundamentals</p>
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3">
                <span className="text-green-300 text-sm font-semibold">Entry Level</span>
              </div>
            </div>

            {/* MS-102 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MS-102</h3>
                  <p className="text-gray-300 text-sm">Administrator</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Microsoft 365 Administrator</p>
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3">
                <span className="text-blue-300 text-sm font-semibold">Associate Level</span>
              </div>
            </div>

            {/* MD-102 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MD-102</h3>
                  <p className="text-gray-300 text-sm">Modern Desktop</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Endpoint Administrator</p>
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-3">
                <span className="text-purple-300 text-sm font-semibold">Associate Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MS-900 Course Overview */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">MS-900: Microsoft 365 Fundamentals</h2>
          <p className="text-center text-gray-400 mb-12">Foundation knowledge of cloud services and Microsoft 365</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills Measured */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Skills Measured</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Describe cloud concepts (10-15%)</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Cloud computing and its benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Cloud service types (IaaS, PaaS, SaaS)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Describe Microsoft 365 apps (45-50%)</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Microsoft 365 productivity solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Collaboration capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Endpoint modernization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Additional Domains</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Describe security and compliance (25-30%)</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Identity and access management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Threat protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Compliance management</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Describe pricing and support (10-15%)</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Microsoft 365 pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Support offerings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Technologies */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Key Technologies Covered</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🖥️</div>
              <h3 className="text-lg font-bold text-white mb-2">Windows 11</h3>
              <p className="text-gray-300 text-sm">Modern desktop deployment and management</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold text-white mb-2">Microsoft Intune</h3>
              <p className="text-gray-300 text-sm">Mobile device and application management</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-bold text-white mb-2">Azure AD</h3>
              <p className="text-gray-300 text-sm">Identity and access management</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold text-white mb-2">Configuration Manager</h3>
              <p className="text-gray-300 text-sm">Enterprise device management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Information */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">MD-102 Exam Details</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Exam Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">120 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">40-60 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">700/1000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$165 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Language:</span>
                  <span className="text-white font-semibold">English</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Strong understanding of Windows client operating systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Experience with Microsoft 365 services</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Familiarity with Microsoft Intune</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic PowerShell knowledge</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">💡</span>
                  <span className="text-gray-300">Recommended: MS-900 completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Opportunities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Salary Range</h3>
              <p className="text-gray-300">₹6-15 LPA for M365 Administrators in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">Desktop Administrator, Endpoint Administrator, IT Support Specialist</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Demand</h3>
              <p className="text-gray-300">High demand in enterprises adopting Microsoft 365</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Highlights */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-gray-300 text-sm">Real Microsoft 365 environment practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">Official Curriculum</h3>
              <p className="text-gray-300 text-sm">Microsoft Learning Partner content</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Tests</h3>
              <p className="text-gray-300 text-sm">Extensive exam simulation and preparation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Instruction</h3>
              <p className="text-gray-300 text-sm">Industry-experienced certified trainers</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Start Your Microsoft 365 Journey!</h2>
          <p className="text-xl text-gray-300 mb-8">Build your foundation in Microsoft 365 cloud services</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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