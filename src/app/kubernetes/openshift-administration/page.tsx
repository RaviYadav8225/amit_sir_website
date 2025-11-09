"use client";
import Link from "next/link";

export default function OpenShiftAdministration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-red-300 text-sm font-semibold">🚀 Enterprise Course</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            OpenShift Administration
            <span className="block text-red-300">for Kubernetes</span>
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (DO280)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master Red Hat OpenShift Container Platform Administration
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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
                This comprehensive course teaches you to install, configure, and manage Red Hat OpenShift Container Platform. Learn enterprise-grade Kubernetes management with advanced features for production environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">OpenShift cluster management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">Enterprise security features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">Advanced networking and storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">EX280 exam preparation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Course Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">5 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Instructor-Led + Labs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Course Code:</span>
                  <span className="text-white font-semibold">DO280</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Prerequisites:</span>
                  <span className="text-white font-semibold">RHCSA + Kubernetes basics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Certification:</span>
                  <span className="text-white font-semibold">EX280 Exam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Syllabus */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Official Red Hat Curriculum (DO280)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chapter 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">1. Introduction to OpenShift</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Describe the Red Hat OpenShift Container Platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Install OpenShift Container Platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Describe and explore OpenShift networking concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Execute commands using the command-line interface</span>
                </li>
              </ul>
            </div>

            {/* Chapter 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">2. Deploy and Manage Applications</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Deploy applications on OpenShift</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Describe deployment methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Manage projects and permissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Scale applications automatically</span>
                </li>
              </ul>
            </div>

            {/* Chapter 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">3. Authentication and Authorization</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Configure identity providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Create and manage user accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Control access with RBAC</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Define security contexts and policies</span>
                </li>
              </ul>
            </div>

            {/* Chapter 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">4. Configure Application Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Create security contexts for applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Restrict application permissions using SCC</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Control application access to sensitive resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Configure trusted TLS certificates</span>
                </li>
              </ul>
            </div>

            {/* Chapter 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">5. Configure OpenShift Networking</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Troubleshoot software defined networking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Configure cluster network ingress</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Create and edit external routes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Control cluster network traffic</span>
                </li>
              </ul>
            </div>

            {/* Chapter 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">6. Configure Pod Scheduling</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Control pod placement across cluster nodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Limit resource usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Scale the number of nodes in a cluster</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Control pod placement using node selectors</span>
                </li>
              </ul>
            </div>

            {/* Chapter 7 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">7. Configure Cluster Scaling</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Manually scale cluster nodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Automatically scale cluster nodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Control cluster resource usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Configure cluster monitoring</span>
                </li>
              </ul>
            </div>

            {/* Chapter 8 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">8. Perform Cluster Maintenance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Perform cluster upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Troubleshoot cluster operator degradation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Perform cluster backups and restores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Monitor cluster performance and resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* EX280 Exam Info */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">EX280 Certification Exam</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Exam Code:</span>
                  <span className="text-white font-semibold">EX280</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Performance-based</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">210/300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Valid for:</span>
                  <span className="text-white font-semibold">3 years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Skills Measured</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Manage OpenShift Container Platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Manage users and policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Control access to resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Configure networking components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Configure pod scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Configure cluster scaling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Career Impact */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">High Salary</h3>
              <p className="text-gray-300">₹12-25 LPA for OpenShift specialists</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Roles</h3>
              <p className="text-gray-300">Platform Engineer, Cloud Architect, DevOps Lead</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Global Demand</h3>
              <p className="text-gray-300">High demand in Fortune 500 companies worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Become an OpenShift Expert!</h2>
          <p className="text-xl text-gray-300 mb-8">Master enterprise container platform administration</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Official Syllabus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}