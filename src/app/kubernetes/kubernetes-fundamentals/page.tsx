"use client";
import Link from "next/link";

export default function KubernetesFundamentals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">⚙️ Foundation Course</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            Kubernetes
            <span className="block text-blue-300">Fundamentals</span>
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (DO180)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master Container Orchestration with Red Hat's Official Kubernetes Training
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
                This foundational course introduces Kubernetes container orchestration platform. Learn to deploy, manage, and scale containerized applications using Kubernetes, preparing you for advanced certifications like CKA, CKAD, and CKS.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Hands-on Kubernetes clusters</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Real-world scenarios</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Industry best practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Certification pathway</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Course Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">3-4 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Live + Hands-on Labs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Course Code:</span>
                  <span className="text-white font-semibold">DO180</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Prerequisites:</span>
                  <span className="text-white font-semibold">Docker knowledge</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Lab Environment:</span>
                  <span className="text-white font-semibold">Cloud-based clusters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Syllabus */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Course Curriculum (DO180)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Module 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">1. Kubernetes Architecture</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Understanding Kubernetes components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Master and Worker node architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Control plane components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Cluster networking fundamentals</span>
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">2. Kubernetes Objects</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Pods, ReplicaSets, and Deployments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Services and Ingress</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>ConfigMaps and Secrets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Namespaces and Labels</span>
                </li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">3. Application Deployment</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Deploying applications with YAML</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Rolling updates and rollbacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Health checks and probes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Resource limits and requests</span>
                </li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">4. Storage and Persistence</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Volumes and Persistent Volumes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Persistent Volume Claims</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Storage Classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>StatefulSets for stateful applications</span>
                </li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">5. Networking and Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Service types (ClusterIP, NodePort, LoadBalancer)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Ingress controllers and rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Network policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>DNS and service discovery</span>
                </li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">6. Monitoring and Troubleshooting</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>kubectl commands and debugging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Logs and metrics collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Resource monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Common troubleshooting scenarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">What You'll Master</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-2">Orchestration</h3>
              <p className="text-gray-300">Deploy and manage containerized applications at scale</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-2">Operations</h3>
              <p className="text-gray-300">Monitor, troubleshoot, and maintain Kubernetes clusters</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="text-xl font-bold text-white mb-2">Certification Ready</h3>
              <p className="text-gray-300">Solid foundation for CKA, CKAD, and CKS exams</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Path */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Certification Pathway</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center max-w-sm">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-2">DO180 Foundation</h3>
              <p className="text-gray-300 text-sm">Start here - Learn Kubernetes basics</p>
            </div>
            
            <div className="text-white text-2xl">→</div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center max-w-sm">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="text-xl font-bold text-white mb-2">CKA/CKAD</h3>
              <p className="text-gray-300 text-sm">Administrator & Developer certifications</p>
            </div>
            
            <div className="text-white text-2xl">→</div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center max-w-sm">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">CKS</h3>
              <p className="text-gray-300 text-sm">Security Specialist certification</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Begin Your Kubernetes Journey!</h2>
          <p className="text-xl text-gray-300 mb-8">Master the most in-demand container orchestration platform</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Curriculum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}