'use client';

import Link from 'next/link';

export default function CloudPlusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CompTIA Certification
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CompTIA Cloud+ (CV0-004)
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100">
            Master Cloud Technologies & Infrastructure Security
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-blue-200">Exam Code:</span> <strong>CV0-004</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-blue-200">Duration:</span> <strong>165 Minutes</strong>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-blue-200">Questions:</span> <strong>90 Items</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Cloud Infrastructure Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-sky-500">
                <h3 className="text-xl font-semibold mb-4 text-sky-800">What is Cloud+?</h3>
                <p className="text-gray-600 leading-relaxed">
                  CompTIA Cloud+ validates the skills needed to deploy, secure, and maintain cloud 
                  infrastructure services. This intermediate-level certification covers cloud architecture, 
                  security, deployment, maintenance, management, and troubleshooting.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Choose Cloud+?</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Vendor-neutral cloud expertise
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Foundation for advanced cloud certifications
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    High-demand cloud computing skills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud+ Domains */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Cloud+ CV0-004 Exam Domains
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-sky-600 mb-3">Domain 1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Cloud Architecture and Design
              </h3>
              <p className="text-gray-600 text-sm mb-4">25% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cloud service models (IaaS, PaaS, SaaS)</li>
                <li>• Cloud deployment models</li>
                <li>• Cloud architecture components</li>
                <li>• Capacity planning and scaling</li>
                <li>• High availability and disaster recovery</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-3">Domain 2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Security in the Cloud
              </h3>
              <p className="text-gray-600 text-sm mb-4">25% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cloud security fundamentals</li>
                <li>• Identity and access management</li>
                <li>• Data protection and encryption</li>
                <li>• Network security in cloud</li>
                <li>• Compliance and governance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-sky-600 mb-3">Domain 3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Deployment and Maintenance
              </h3>
              <p className="text-gray-600 text-sm mb-4">25% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cloud deployment strategies</li>
                <li>• Migration planning and execution</li>
                <li>• Infrastructure as Code (IaC)</li>
                <li>• DevOps and automation</li>
                <li>• Version control and change management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-3">Domain 4</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Operations and Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">25% of exam</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Performance monitoring and optimization</li>
                <li>• Logging and alerting</li>
                <li>• Troubleshooting methodologies</li>
                <li>• Cost optimization</li>
                <li>• Backup and recovery operations</li>
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
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-sky-800">Recommended Experience</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    2-3 years of work experience in systems administration
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    6 months of experience with cloud services
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Networking and security fundamentals
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Suggested Prerequisites</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    CompTIA Network+ or equivalent knowledge
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    CompTIA Security+ recommended
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understanding of virtualization concepts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 bg-gradient-to-r from-sky-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Career Benefits & Opportunities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">$125,000</div>
              <div className="text-sky-200">Average Annual Salary</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">22%</div>
              <div className="text-sky-200">Job Growth Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">50,000+</div>
              <div className="text-sky-200">Cloud+ Certified Professionals</div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Cloud Engineer</h4>
              <p className="text-sm text-sky-200">Design and implement cloud solutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Cloud Administrator</h4>
              <p className="text-sm text-sky-200">Manage cloud infrastructure</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">DevOps Engineer</h4>
              <p className="text-sm text-sky-200">Automate cloud deployments</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Cloud Consultant</h4>
              <p className="text-sm text-sky-200">Guide cloud transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Comprehensive Cloud+ Training Program
            </h2>
            
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-sky-800">What You'll Get</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-sky-700 mb-3">📚 Comprehensive Study Materials</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Official CompTIA Cloud+ study guide</li>
                    <li>• Practice exams with detailed explanations</li>
                    <li>• Hands-on labs with AWS, Azure, and GCP</li>
                    <li>• Real-world cloud scenarios and case studies</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">👨‍🏫 Expert Instruction</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Cloud+ certified instructors</li>
                    <li>• Interactive virtual classroom sessions</li>
                    <li>• Domain-specific deep dives</li>
                    <li>• Q&A sessions and exam strategies</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sky-700 mb-3">🔬 Hands-on Labs</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Multi-cloud environment setup</li>
                    <li>• Infrastructure as Code exercises</li>
                    <li>• Security configuration labs</li>
                    <li>• Migration and deployment scenarios</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">🎯 Exam Preparation</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Performance-based question practice</li>
                    <li>• Exam simulation and timing</li>
                    <li>• Weakness identification and remediation</li>
                    <li>• Final review and confidence building</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-sky-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Training Duration & Format</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-sky-600 mb-2">6 Weeks</div>
                  <div className="text-gray-600">Comprehensive Program</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">40+ Hours</div>
                  <div className="text-gray-600">Instructor-Led Training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-600 mb-2">24/7</div>
                  <div className="text-gray-600">Cloud Lab Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Master Cloud Technologies?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive Cloud+ training program and advance your career in cloud computing. 
            Limited seats available for hands-on learning.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/register" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Enroll Now - Cloud+ Training
            </Link>
            <a href="/pdfs/cloud-plus-syllabus.pdf" 
               download
               className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Syllabus
            </a>
          </div>
          <p className="text-sky-200 mt-4 text-sm">
            🎯 Next Batch Starts: January 25th, 2025 | 💯 100% Pass Guarantee | 🔄 Free Retake Policy
          </p>
        </div>
      </section>
    </div>
  );
}