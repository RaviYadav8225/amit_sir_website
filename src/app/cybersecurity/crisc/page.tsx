'use client';

import Link from 'next/link';

export default function CRISCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ISACA Certification
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CRISC - Certified in Risk and Information Systems Control
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Master IT Risk Management & Control Assessment
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-indigo-200">Exam Code:</span> <strong>CRISC</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-indigo-200">Duration:</span> <strong>4 Hours</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-indigo-200">Questions:</span> <strong>150 Items</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              IT Risk Management Excellence
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">What is CRISC?</h3>
                <p className="text-gray-600 leading-relaxed">
                  CRISC (Certified in Risk and Information Systems Control) is designed for IT professionals 
                  who identify and manage vulnerabilities, report on compliance, and implement controls. 
                  This certification validates expertise in IT risk identification, assessment, evaluation, 
                  and response.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-500">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">Why Choose CRISC?</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Global recognition in risk management
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    High-demand skill set across industries
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Bridge between IT and business risk
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRISC Domains */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            CRISC Four Domains
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-purple-600 mb-3">Domain 1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                IT Risk Identification
              </h3>
              <p className="text-gray-600 text-sm mb-4">25% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• IT risk identification methodologies</li>
                <li>• Business impact analysis</li>
                <li>• Threat and vulnerability assessments</li>
                <li>• Risk scenario development</li>
                <li>• Risk register maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-indigo-600 mb-3">Domain 2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                IT Risk Assessment and Evaluation
              </h3>
              <p className="text-gray-600 text-sm mb-4">20% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Risk analysis methodologies</li>
                <li>• Quantitative and qualitative analysis</li>
                <li>• Risk likelihood and impact assessment</li>
                <li>• Risk evaluation criteria</li>
                <li>• Risk appetite and tolerance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-purple-600 mb-3">Domain 3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Risk Response and Mitigation
              </h3>
              <p className="text-gray-600 text-sm mb-4">32% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Risk response strategies</li>
                <li>• Control design and implementation</li>
                <li>• Risk treatment options</li>
                <li>• Risk mitigation planning</li>
                <li>• Residual risk management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-indigo-600 mb-3">Domain 4</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Risk and Control Monitoring and Reporting
              </h3>
              <p className="text-gray-600 text-sm mb-4">23% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Risk monitoring methodologies</li>
                <li>• Key risk indicators (KRIs)</li>
                <li>• Control effectiveness monitoring</li>
                <li>• Risk reporting and communication</li>
                <li>• Continuous improvement processes</li>
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
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Experience Requirements</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    3 years of cumulative work experience in IT risk management
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Experience in at least 2 of the 4 CRISC domains
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Hands-on experience with risk assessment
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800">Education Substitution</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Master's degree = 1 year experience
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    ISACA certifications = up to 1 year
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Training courses = partial substitution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Career Benefits & Opportunities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-300 mb-2">$155,000</div>
              <div className="text-purple-200">Average Annual Salary</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-300 mb-2">35%</div>
              <div className="text-purple-200">Job Growth Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-300 mb-2">25,000+</div>
              <div className="text-purple-200">CRISC Certified Professionals</div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">IT Risk Manager</h4>
              <p className="text-sm text-purple-200">Lead enterprise risk programs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Risk Analyst</h4>
              <p className="text-sm text-purple-200">Assess and evaluate IT risks</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Compliance Manager</h4>
              <p className="text-sm text-purple-200">Ensure regulatory compliance</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">GRC Consultant</h4>
              <p className="text-sm text-purple-200">Governance, risk, and compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Comprehensive CRISC Training Program
            </h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-800">What You'll Get</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">📚 Comprehensive Study Materials</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Official ISACA CRISC review manual</li>
                    <li>• Practice questions with detailed explanations</li>
                    <li>• Risk management case studies</li>
                    <li>• Industry-specific risk scenarios</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-3">👨‍🏫 Expert Instruction</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• CRISC certified instructors</li>
                    <li>• Interactive classroom sessions</li>
                    <li>• Domain-specific workshops</li>
                    <li>• Real-world risk assessment exercises</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">🔬 Practical Labs</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Risk assessment methodologies</li>
                    <li>• Control design workshops</li>
                    <li>• Risk register development</li>
                    <li>• KRI development exercises</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-3">🎯 Exam Preparation</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Mock exams and assessments</li>
                    <li>• Exam-taking strategies</li>
                    <li>• Weakness identification</li>
                    <li>• Final review sessions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Training Duration & Format</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">6 Weeks</div>
                  <div className="text-gray-600">Intensive Program</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">35+ Hours</div>
                  <div className="text-gray-600">Instructor-Led Training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Study Resource Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Master IT Risk Management?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive CRISC training program and become a certified IT risk professional. 
            Limited seats available for personalized attention.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/register" 
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Enroll Now - CRISC Training
            </Link>
            <a href="/pdfs/crisc-syllabus.pdf" 
               download
               className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Download Syllabus
            </a>
          </div>
          <p className="text-purple-200 mt-4 text-sm">
            🎯 Next Batch Starts: January 20th, 2025 | 💯 100% Pass Guarantee | 🔄 Free Retake Policy
          </p>
        </div>
      </section>
    </div>
  );
}