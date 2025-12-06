"use client";
import Link from "next/link";

export default function CertifiedKubernetesApplicationDeveloper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-green-300 text-sm font-semibold">💻 Developer Certification</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Certified Kubernetes
            <span className="block text-green-300">Application Developer</span>
            <span className="block text-3xl lg:text-4xl text-blue-300 font-bold mt-2">
              (CKAD)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master Kubernetes Application Development with CNCF's Developer-Focused Certification
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/ckad-syllabus.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
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
              <h2 className="text-4xl font-black text-white mb-6">Certification Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The Certified Kubernetes Application Developer (CKAD) exam certifies that users can design, build, configure, and expose cloud native applications for Kubernetes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white font-semibold">Developer-focused certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white font-semibold">Application lifecycle management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white font-semibold">Cloud-native application design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white font-semibold">CNCF industry recognition</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">2 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Performance-based</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">66%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Prerequisites:</span>
                  <span className="text-white font-semibold">Kubernetes & container basics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Valid for:</span>
                  <span className="text-white font-semibold">3 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$395 USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Exam Domains */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CKAD Exam Domains (CNCF Official)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">1. Application Design and Build (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Define, build and modify container images</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understand Jobs and CronJobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understand multi-container Pod design patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Utilize persistent and ephemeral volumes</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">2. Application Deployment (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Use Kubernetes primitives to implement common deployment strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understand Deployments and how to perform rolling updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Use the Helm package manager to deploy existing packages</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">3. Application Observability and Maintenance (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understand API deprecations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Implement probes and health checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Use provided tools to monitor Kubernetes applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Utilize container logs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Debug in Kubernetes</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">4. Application Environment, Configuration and Security (25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Discover and use resources that extend Kubernetes (CRD)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understand authentication, authorization and admission control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understanding and defining resource requirements, limits and quotas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understand ConfigMaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Create & consume Secrets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understand ServiceAccounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Understand SecurityContexts</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">5. Services and Networking (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Demonstrate basic understanding of NetworkPolicies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Provide and troubleshoot access to applications via services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Use Ingress rules to expose applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our CKAD Training Program</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-2">Application Design</h3>
              <p className="text-gray-300">Master container image building and multi-container patterns</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Deployment Strategies</h3>
              <p className="text-gray-300">Learn rolling updates, blue-green, and canary deployments</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-2">Observability</h3>
              <p className="text-gray-300">Implement monitoring, logging, and debugging techniques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Skills */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Key Skills You'll Master</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🐳</div>
              <h4 className="text-lg font-bold text-white mb-2">Container Images</h4>
              <p className="text-gray-300 text-sm">Dockerfile optimization and multi-stage builds</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-lg font-bold text-white mb-2">Pod Patterns</h4>
              <p className="text-gray-300 text-sm">Sidecar, adapter, and ambassador patterns</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="text-lg font-bold text-white mb-2">Configuration</h4>
              <p className="text-gray-300 text-sm">ConfigMaps, Secrets, and environment variables</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="text-lg font-bold text-white mb-2">Networking</h4>
              <p className="text-gray-300 text-sm">Services, Ingress, and NetworkPolicies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Developer Salary</h3>
              <p className="text-gray-300">₹8-18 LPA for CKAD certified developers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">Kubernetes Developer, DevOps Engineer, Platform Engineer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Demand</h3>
              <p className="text-gray-300">High demand for cloud-native application developers</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Become a Kubernetes Application Developer!</h2>
          <p className="text-xl text-gray-300 mb-8">Master cloud-native application development with CKAD certification</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Exam Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}