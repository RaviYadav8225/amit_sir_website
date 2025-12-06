"use client";
import Link from "next/link";

export default function CertifiedKubernetesSecuritySpecialist() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-red-300 text-sm font-semibold">🔒 Security Specialist</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Certified Kubernetes
            <span className="block text-red-300">Security Specialist</span>
            <span className="block text-3xl lg:text-4xl text-orange-300 font-bold mt-2">
              (CKS)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master Kubernetes Security with CNCF's Most Advanced Certification
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/cks-syllabus.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
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
                The Certified Kubernetes Security Specialist (CKS) program provides assurance that a CKS has the skills, knowledge, and competence on a broad range of best practices for securing container-based applications and Kubernetes platforms during build, deployment and runtime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">Advanced security certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">CKA prerequisite required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">Enterprise security focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white font-semibold">Highest earning potential</span>
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
                  <span className="text-white font-semibold">67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Prerequisites:</span>
                  <span className="text-white font-semibold">Valid CKA certification</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Valid for:</span>
                  <span className="text-white font-semibold">2 years</span>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">CKS Exam Domains (CNCF Official)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">1. Cluster Setup (10%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Use Network security policies to restrict cluster level access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Use CIS benchmark to review the security configuration of Kubernetes components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Properly set up Ingress objects with security control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Protect node metadata and endpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Minimize use of, and access to, GUI elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Verify platform binaries before deploying</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">2. Cluster Hardening (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Restrict access to Kubernetes API</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Use Role Based Access Controls to minimize exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Exercise caution in using service accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Update Kubernetes frequently</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">3. System Hardening (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Minimize host OS footprint (reduce attack surface)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Minimize IAM roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Minimize external access to the network</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Appropriately use kernel hardening tools such as AppArmor, seccomp</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">4. Minimize Microservice Vulnerabilities (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Setup appropriate OS level security domains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Manage Kubernetes secrets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Use container runtime sandboxes in multi-tenant environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Implement pod to pod encryption by use of mTLS</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">5. Supply Chain Security (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Minimize base image footprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Secure your supply chain: whitelist allowed registries, sign and validate images</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Use static analysis of user workloads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Scan images for known vulnerabilities</span>
                </li>
              </ul>
            </div>

            {/* Domain 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">6. Monitoring, Logging and Runtime Security (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Perform behavioral analytics of syscall process and file activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Detect threats within physical infrastructure, apps, networks, data, users and workloads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Detect all phases of attack regardless where it occurs and how it spreads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Perform deep analytical investigation and identification of bad actors within environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Ensure immutability of containers at runtime</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Use Audit Logs to monitor access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Security Tools & Technologies */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Security Tools You'll Master</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg font-bold text-white mb-2">Falco</h4>
              <p className="text-gray-300 text-sm">Runtime security monitoring</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-lg font-bold text-white mb-2">Trivy</h4>
              <p className="text-gray-300 text-sm">Vulnerability scanning</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="text-lg font-bold text-white mb-2">AppArmor</h4>
              <p className="text-gray-300 text-sm">Linux kernel security module</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">OPA Gatekeeper</h4>
              <p className="text-gray-300 text-sm">Policy enforcement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites</h2>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-red-300 mb-4">Important Requirements</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">✓</span>
                <span className="text-white font-semibold">Valid CKA (Certified Kubernetes Administrator) certification required</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">✓</span>
                <span className="text-white font-semibold">Strong understanding of Kubernetes architecture and administration</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">✓</span>
                <span className="text-white font-semibold">Linux security and system administration experience</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">✓</span>
                <span className="text-white font-semibold">Network security fundamentals knowledge</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">✓</span>
                <span className="text-white font-semibold">Container security best practices understanding</span>
              </div>
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
              <h3 className="text-xl font-bold text-white mb-2">Premium Salary</h3>
              <p className="text-gray-300">₹18-35 LPA for CKS certified security specialists</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Elite Roles</h3>
              <p className="text-gray-300">Security Architect, Platform Security Engineer, CISO</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Exclusive Expertise</h3>
              <p className="text-gray-300">Most advanced and sought-after Kubernetes certification</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Kubernetes Security!</h2>
          <p className="text-xl text-gray-300 mb-8">Achieve the most prestigious Kubernetes certification</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Security Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}