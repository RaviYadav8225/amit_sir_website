"use client";
import Link from "next/link";

export default function ContainerizationMicroservices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">📦 Advanced Course</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Containerization &
            <span className="block text-blue-300">Microservices</span>
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (DO180)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master Enterprise Container Solutions with Red Hat OpenShift
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
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
                This advanced course teaches containerization using Docker and Red Hat OpenShift, focusing on building and deploying microservices architectures. Learn enterprise-grade container orchestration and management.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Red Hat OpenShift mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Microservices architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Enterprise deployment strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Production-ready solutions</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Course Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">4-5 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Instructor-Led + Labs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Course Code:</span>
                  <span className="text-white font-semibold">DO180</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Prerequisites:</span>
                  <span className="text-white font-semibold">Docker basics, Linux</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Certification:</span>
                  <span className="text-white font-semibold">EX180 Exam Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Syllabus */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Official Red Hat Curriculum (DO180)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chapter 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">1. Container Technology</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Describe container technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Create containerized services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Manage containers and images</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Create custom container images</span>
                </li>
              </ul>
            </div>

            {/* Chapter 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">2. OpenShift Container Platform</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Deploy applications on OpenShift</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Design containerized applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Publish enterprise container images</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Build applications with Source-to-Image</span>
                </li>
              </ul>
            </div>

            {/* Chapter 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">3. Managing Application Deployments</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Create multi-container applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Implement health checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Manage application data persistence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Work with configuration maps and secrets</span>
                </li>
              </ul>
            </div>

            {/* Chapter 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">4. Implementing DevOps Workflows</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Create and manage builds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Customize builds and deployments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Implement CI/CD pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Troubleshoot containerized applications</span>
                </li>
              </ul>
            </div>

            {/* Chapter 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">5. Application Scaling & Performance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Scale applications automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Implement load balancing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Monitor application performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Optimize resource utilization</span>
                </li>
              </ul>
            </div>

            {/* Chapter 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">6. Security & Best Practices</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Implement container security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Manage user access and permissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Secure container images</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Production deployment strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Skills You'll Master</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-bold text-white mb-2">Microservices</h3>
              <p className="text-gray-300 text-sm">Design scalable microservice architectures</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔴</div>
              <h3 className="text-lg font-bold text-white mb-2">OpenShift</h3>
              <p className="text-gray-300 text-sm">Enterprise container platform mastery</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">DevOps</h3>
              <p className="text-gray-300 text-sm">CI/CD pipeline implementation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-white mb-2">Security</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade security practices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Impact */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Salary Range</h3>
              <p className="text-gray-300">₹8-15 LPA for OpenShift developers/architects</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">DevOps Engineer, Container Architect, Platform Engineer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-gray-300">High demand in enterprise & cloud-native companies</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Enterprise Container Solutions!</h2>
          <p className="text-xl text-gray-300 mb-8">Join the elite group of OpenShift certified professionals</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Detailed Syllabus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}