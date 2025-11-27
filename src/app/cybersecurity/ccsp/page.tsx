'use client';

import Link from 'next/link';

export default function CCSPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            (ISC)² Certification
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CCSP - Certified Cloud Security Professional
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Master Cloud Security Architecture & Governance
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-cyan-200">Exam Code:</span> <strong>CCSP</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-cyan-200">Duration:</span> <strong>4 Hours</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-cyan-200">Questions:</span> <strong>125 Items</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Cloud Security Leadership Certification
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">What is CCSP?</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Certified Cloud Security Professional (CCSP) is the premier cloud security certification 
                  that validates your expertise in securing cloud environments. Jointly developed by (ISC)² and 
                  Cloud Security Alliance (CSA), it covers cloud architecture, governance, compliance, and operations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-cyan-500">
                <h3 className="text-xl font-semibold mb-4 text-cyan-800">Why Choose CCSP?</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Industry-recognized cloud security expertise
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Comprehensive cloud security knowledge
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    High-demand certification in growing field
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CCSP Domains */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            CCSP Six Domains
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-3">Domain 1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Cloud Concepts, Architecture and Design
              </h3>
              <p className="text-gray-600 text-sm mb-4">17% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cloud computing concepts</li>
                <li>• Cloud reference architecture</li>
                <li>• Security concepts in cloud computing</li>
                <li>• Design principles of secure cloud computing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-cyan-600 mb-3">Domain 2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Cloud Data Security
              </h3>
              <p className="text-gray-600 text-sm mb-4">19% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cloud data concepts</li>
                <li>• Data classification</li>
                <li>• Data location and jurisdiction</li>
                <li>• Data retention and disposal</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-3">Domain 3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Cloud Platform & Infrastructure Security
              </h3>
              <p className="text-gray-600 text-sm mb-4">17% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Physical security controls</li>
                <li>• System hardening</li>
                <li>• Virtualization security</li>
                <li>• Network security</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-cyan-600 mb-3">Domain 4</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Cloud Application Security
              </h3>
              <p className="text-gray-600 text-sm mb-4">17% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Application security fundamentals</li>
                <li>• Secure SDLC</li>
                <li>• Application security testing</li>
                <li>• Identity and access management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-3">Domain 5</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Cloud Security Operations
              </h3>
              <p className="text-gray-600 text-sm mb-4">16% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Security operations center</li>
                <li>• Incident response</li>
                <li>• Forensics</li>
                <li>• Disaster recovery and business continuity</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-cyan-600 mb-3">Domain 6</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Legal, Risk and Compliance
              </h3>
              <p className="text-gray-600 text-sm mb-4">14% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Legal requirements and compliance</li>
                <li>• Privacy</li>
                <li>• Audit processes</li>
                <li>• Risk assessment and mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites & Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Prerequisites & Experience Requirements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Experience Requirements</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    5 years cumulative paid work experience in IT
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    3 years in information security
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    1 year in one or more CCSP domains
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-cyan-800">Education Substitution</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Bachelor&apos;s degree = 1 year experience
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Master&apos;s degree = 2 years experience
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Approved certifications = up to 1 year
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Career Benefits & Opportunities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">$165,000</div>
              <div className="text-blue-200">Average Annual Salary</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">40%</div>
              <div className="text-blue-200">Job Growth Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">15,000+</div>
              <div className="text-blue-200">CCSP Certified Professionals</div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Cloud Security Architect</h4>
              <p className="text-sm text-blue-200">Design secure cloud solutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Cloud Security Engineer</h4>
              <p className="text-sm text-blue-200">Implement cloud security controls</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Cloud Compliance Manager</h4>
              <p className="text-sm text-blue-200">Ensure regulatory compliance</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Cloud Risk Analyst</h4>
              <p className="text-sm text-blue-200">Assess cloud security risks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Comprehensive CCSP Training Program
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">What You&apos;ll Get</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">📚 Comprehensive Study Materials</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Official (ISC)² CCSP study guide and materials</li>
                    <li>• Practice exams with detailed explanations</li>
                    <li>• Cloud security case studies and scenarios</li>
                    <li>• Hands-on labs with AWS, Azure, and GCP</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-cyan-700 mb-3">👨‍🏫 Expert Instruction</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Certified instructors with real-world experience</li>
                    <li>• Interactive virtual classroom sessions</li>
                    <li>• Domain-specific deep dives and workshops</li>
                    <li>• Q&A sessions and exam strategy guidance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">🔬 Practical Labs</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Cloud security architecture exercises</li>
                    <li>• Data protection and encryption labs</li>
                    <li>• Identity and access management scenarios</li>
                    <li>• Incident response simulations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-cyan-700 mb-3">🎯 Exam Preparation</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Multiple practice exams and assessments</li>
                    <li>• Exam-taking strategies and time management</li>
                    <li>• Weakness identification and remediation</li>
                    <li>• Final review sessions before exam</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Training Duration & Format</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">8 Weeks</div>
                  <div className="text-gray-600">Comprehensive Program</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">40+ Hours</div>
                  <div className="text-gray-600">Instructor-Led Training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Lab Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Become a Cloud Security Expert?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive CCSP training program and advance your career in cloud security. 
            Limited seats available for personalized attention.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/register" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Enroll Now - CCSP Training
            </Link>
            <a href="/pdfs/ccsp-syllabus.pdf" 
               download
               className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Syllabus
            </a>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            🎯 Next Batch Starts: January 15th, 2025 | 💯 100% Pass Guarantee | 🔄 Free Retake Policy
          </p>
        </div>
      </section>
    </div>
  );
}