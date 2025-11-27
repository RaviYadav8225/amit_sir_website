'use client';

import Link from 'next/link';

export default function CIPPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            IAPP Certification
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CIPP - Certified Information Privacy Professional
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100">
            Master Global Privacy Laws & Data Protection
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-teal-200">Exam:</span> <strong>Multiple Regions</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-teal-200">Duration:</span> <strong>2.5 Hours</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-teal-200">Questions:</span> <strong>90 Items</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Privacy Professional Excellence
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-emerald-500">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">What is CIPP?</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Certified Information Privacy Professional (CIPP) is the foundational certification 
                  in privacy. It demonstrates comprehensive knowledge of privacy laws, regulations, and 
                  frameworks. Available in multiple regional specializations including US, Europe, Asia, 
                  and Canada.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Why Choose CIPP?</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Global standard for privacy professionals
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    High-demand compliance expertise
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Foundation for advanced privacy careers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIPP Specializations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            CIPP Regional Specializations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-emerald-600 mb-3">CIPP/US</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                United States Privacy Law
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Federal privacy laws and regulations</li>
                <li>• State privacy legislation (CCPA, CPRA)</li>
                <li>• Sectoral privacy frameworks</li>
                <li>• Healthcare privacy (HIPAA)</li>
                <li>• Financial privacy regulations</li>
                <li>• Children's privacy protection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-teal-600 mb-3">CIPP/E</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                European Privacy Law
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• General Data Protection Regulation (GDPR)</li>
                <li>• European data protection framework</li>
                <li>• Cross-border data transfers</li>
                <li>• Data subject rights and obligations</li>
                <li>• Privacy by design and by default</li>
                <li>• Enforcement and penalties</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-emerald-600 mb-3">CIPP/A</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Asia-Pacific Privacy Law
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Regional privacy frameworks</li>
                <li>• Cross-border data transfer mechanisms</li>
                <li>• Country-specific regulations</li>
                <li>• Data localization requirements</li>
                <li>• Cultural and business considerations</li>
                <li>• Emerging privacy trends</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-teal-600 mb-3">CIPP/C</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Canadian Privacy Law
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
                <li>• Provincial privacy legislation</li>
                <li>• Public and private sector requirements</li>
                <li>• Cross-border data transfers</li>
                <li>• Breach notification requirements</li>
                <li>• Enforcement and oversight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Knowledge Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Core Knowledge Areas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-emerald-800">Fundamental Concepts</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Privacy principles and frameworks
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Data classification and mapping
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Legal bases for processing
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Compliance Requirements</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Regulatory compliance frameworks
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Risk assessment methodologies
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Audit and enforcement procedures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Career Benefits & Opportunities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">$140,000</div>
              <div className="text-emerald-200">Average Annual Salary</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">28%</div>
              <div className="text-emerald-200">Job Growth Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">60,000+</div>
              <div className="text-emerald-200">CIPP Certified Professionals</div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Privacy Officer</h4>
              <p className="text-sm text-emerald-200">Lead organizational privacy programs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Compliance Manager</h4>
              <p className="text-sm text-emerald-200">Ensure regulatory compliance</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Data Protection Consultant</h4>
              <p className="text-sm text-emerald-200">Advise on privacy matters</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Legal Counsel</h4>
              <p className="text-sm text-emerald-200">Privacy law specialization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Comprehensive CIPP Training Program
            </h2>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-800">What You'll Get</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-3">📚 Comprehensive Study Materials</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Official IAPP study materials and textbooks</li>
                    <li>• Practice exams with detailed explanations</li>
                    <li>• Regional privacy law compendiums</li>
                    <li>• Real-world privacy scenarios and case studies</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-teal-700 mb-3">👨‍🏫 Expert Instruction</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• CIPP certified instructors</li>
                    <li>• Interactive classroom sessions</li>
                    <li>• Regional specialization focus</li>
                    <li>• Legal update sessions and trends</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-3">🔬 Practical Applications</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Privacy impact assessment exercises</li>
                    <li>• Policy development workshops</li>
                    <li>• Compliance audit simulations</li>
                    <li>• Cross-border transfer scenarios</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-teal-700 mb-3">🎯 Exam Preparation</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Multiple practice exams</li>
                    <li>• Exam-taking strategies</li>
                    <li>• Knowledge gap identification</li>
                    <li>• Final review and confidence building</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Training Duration & Format</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">5 Weeks</div>
                  <div className="text-gray-600">Intensive Program</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600 mb-2">30+ Hours</div>
                  <div className="text-gray-600">Instructor-Led Training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">Multiple</div>
                  <div className="text-gray-600">Regional Specializations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Become a Privacy Professional?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive CIPP training program and advance your career in privacy and data protection. 
            Choose your regional specialization.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/register" 
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Enroll Now - CIPP Training
            </Link>
            <a href="/pdfs/cipp-syllabus.pdf" 
               download
               className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Download Syllabus
            </a>
          </div>
          <p className="text-emerald-200 mt-4 text-sm">
            🎯 Next Batch Starts: February 1st, 2025 | 💯 100% Pass Guarantee | 🔄 Free Retake Policy
          </p>
        </div>
      </section>
    </div>
  );
}