'use client';

import Link from 'next/link';

export default function CIPMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-violet-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            IAPP Certification
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CIPM - Certified Information Privacy Manager
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-violet-100">
            Master Privacy Program Management & Leadership
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-purple-200">Exam Code:</span> <strong>CIPM</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-purple-200">Duration:</span> <strong>2.5 Hours</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-purple-200">Questions:</span> <strong>90 Items</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Privacy Management Leadership
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-violet-500">
                <h3 className="text-xl font-semibold mb-4 text-violet-800">What is CIPM?</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Certified Information Privacy Manager (CIPM) focuses on privacy program management. 
                  It validates skills in operationalizing privacy protection within organizations, 
                  managing privacy programs, and translating privacy requirements into actionable policies 
                  and procedures.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Why Choose CIPM?</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Advanced privacy management skills
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Leadership in privacy programs
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Strategic privacy governance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIPM Domains */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            CIPM Five Domains
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-violet-600 mb-3">Domain 1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Privacy Program Governance
              </h3>
              <p className="text-gray-600 text-sm mb-4">25% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Privacy program strategy and objectives</li>
                <li>• Governance frameworks and structures</li>
                <li>• Privacy by design implementation</li>
                <li>• Stakeholder engagement and communication</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-purple-600 mb-3">Domain 2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Applicable Laws and Approaches
              </h3>
              <p className="text-gray-600 text-sm mb-4">12% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Multi-jurisdictional compliance</li>
                <li>• Cross-border data transfer requirements</li>
                <li>• Sector-specific regulations</li>
                <li>• Regulatory coordination strategies</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-violet-600 mb-3">Domain 3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Data Processing Ecosystem
              </h3>
              <p className="text-gray-600 text-sm mb-4">23% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Data inventory and mapping</li>
                <li>• Data lifecycle management</li>
                <li>• Third-party risk management</li>
                <li>• Vendor assessment and contracts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-purple-600 mb-3">Domain 4</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Privacy Program Operational Life Cycle
              </h3>
              <p className="text-gray-600 text-sm mb-4">25% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Privacy impact assessments</li>
                <li>• Data subject rights management</li>
                <li>• Incident response and breach management</li>
                <li>• Training and awareness programs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow lg:col-span-2">
              <div className="text-2xl font-bold text-violet-600 mb-3">Domain 5</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Privacy Program Metrics, Monitoring and Maintenance
              </h3>
              <p className="text-gray-600 text-sm mb-4">15% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Privacy program assessment and auditing</li>
                <li>• Key performance indicators and metrics</li>
                <li>• Continuous improvement processes</li>
                <li>• Program maturity models</li>
                <li>• Reporting and executive communication</li>
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
              Prerequisites & Recommendations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-violet-800">Recommended Background</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    CIPP certification or equivalent knowledge
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    2+ years privacy program experience
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Management or leadership experience
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Key Skills Areas</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Program management methodologies
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Risk assessment and management
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Business process understanding
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 bg-gradient-to-r from-violet-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Career Benefits & Opportunities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">$165,000</div>
              <div className="text-violet-200">Average Annual Salary</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">32%</div>
              <div className="text-violet-200">Job Growth Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">25,000+</div>
              <div className="text-violet-200">CIPM Certified Professionals</div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Chief Privacy Officer</h4>
              <p className="text-sm text-violet-200">Lead enterprise privacy strategy</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Privacy Program Manager</h4>
              <p className="text-sm text-violet-200">Manage privacy operations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Data Protection Officer</h4>
              <p className="text-sm text-violet-200">GDPR compliance leadership</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Privacy Consultant</h4>
              <p className="text-sm text-violet-200">Strategic privacy advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Comprehensive CIPM Training Program
            </h2>
            
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-violet-800">What You'll Get</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-violet-700 mb-3">📚 Comprehensive Study Materials</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Official IAPP CIPM study materials</li>
                    <li>• Privacy program management frameworks</li>
                    <li>• Practice exams with detailed explanations</li>
                    <li>• Real-world privacy management scenarios</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">👨‍🏫 Expert Instruction</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• CIPM certified instructors</li>
                    <li>• Interactive management workshops</li>
                    <li>• Privacy program case studies</li>
                    <li>• Leadership development sessions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-violet-700 mb-3">🔬 Practical Exercises</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Privacy program design workshops</li>
                    <li>• Metrics and KPI development</li>
                    <li>• Incident response planning</li>
                    <li>• Executive communication simulations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">🎯 Exam Preparation</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Multiple practice exams</li>
                    <li>• Management scenario analysis</li>
                    <li>• Knowledge assessment and remediation</li>
                    <li>• Final review and strategy sessions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-violet-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Training Duration & Format</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-violet-600 mb-2">5 Weeks</div>
                  <div className="text-gray-600">Management Program</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">35+ Hours</div>
                  <div className="text-gray-600">Instructor-Led Training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-violet-600 mb-2">24/7</div>
                  <div className="text-gray-600">Resource Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Lead Privacy Programs?
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive CIPM training program and advance to privacy management leadership roles. 
            Limited seats for executive-level training.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/register" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Enroll Now - CIPM Training
            </Link>
            <a href="/pdfs/cipm-syllabus.pdf" 
               download
               className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Download Syllabus
            </a>
          </div>
          <p className="text-violet-200 mt-4 text-sm">
            🎯 Next Batch Starts: February 5th, 2025 | 💯 100% Pass Guarantee | 🔄 Free Retake Policy
          </p>
        </div>
      </section>
    </div>
  );
}