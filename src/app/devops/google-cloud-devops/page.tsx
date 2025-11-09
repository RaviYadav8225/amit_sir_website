"use client";
import Link from "next/link";

export default function GoogleCloudDevOps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-green-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">🌐 Professional Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Google Cloud
            <span className="block text-blue-300">Professional</span>
            <span className="block text-green-300">Cloud DevOps Engineer</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced DevOps Engineering on Google Cloud Platform
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-green-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Google Cloud DevOps Engineer</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Certification Overview</h3>
              <p className="text-gray-300 mb-6">
                The Professional Cloud DevOps Engineer certification validates your ability to build software delivery pipelines, deploy and monitor services, and manage and learn from incidents on Google Cloud.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-white">Site Reliability Engineering (SRE) practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-white">CI/CD pipeline optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-white">Service monitoring and observability</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span className="text-white">Incident management and postmortems</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">120 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">50-60 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice & scenarios</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$200 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Validity:</span>
                  <span className="text-white font-semibold">2 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Domains */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Exam Domains</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">1. Bootstrapping a Google Cloud organization for DevOps (10%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Creating and configuring Google Cloud projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing Google Cloud APIs and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Establishing organizational policies and governance</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">2. Building and implementing CI/CD pipelines (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Designing and managing CI/CD pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implementing automated testing strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing container images and deployments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implementing deployment strategies</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">3. Implementing service monitoring strategies (18%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Installing and configuring monitoring and logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing Cloud Monitoring dashboards and alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implementing Service Level Objectives (SLOs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Configuring alerting policies</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">4. Optimizing service performance (16%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Identifying service performance issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Debugging applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Optimizing applications for performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing and optimizing Google Cloud resources</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">5. Managing service incidents (12%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implementing incident response procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Coordinating incident response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Conducting postmortem analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing technical debt and continuous improvement</span>
                </li>
              </ul>
            </div>

            {/* Domain 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-3 mb-4">6. Configuring access and security (14%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing identity and access management (IAM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implementing security policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing secrets and sensitive data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implementing audit and compliance measures</span>
                </li>
              </ul>
            </div>

            {/* Domain 7 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">7. Managing platform and infrastructure (10%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Designing and implementing infrastructure as code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing Google Cloud resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Configuring network and connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Managing data and storage solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Google Cloud Services */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Key Google Cloud Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">CI/CD</h3>
              <p className="text-gray-300 text-sm">Cloud Build, Cloud Deploy, Artifact Registry</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">Monitoring</h3>
              <p className="text-gray-300 text-sm">Cloud Monitoring, Cloud Logging, Cloud Trace</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">☸️</div>
              <h3 className="text-lg font-bold text-white mb-2">Containers</h3>
              <p className="text-gray-300 text-sm">GKE, Cloud Run, Anthos</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-white mb-2">Security</h3>
              <p className="text-gray-300 text-sm">IAM, Secret Manager, Security Command Center</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Experience</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">3+ years of industry experience including 1+ years on Google Cloud</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Experience with CI/CD practices and tools</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Proficiency with monitoring and logging</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300">Understanding of SRE principles</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">💡</span>
                  <span className="text-gray-300">Associate Cloud Engineer certification recommended</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6">Skills Gained</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">Advanced Google Cloud DevOps practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">Site Reliability Engineering (SRE) expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">Service monitoring and observability</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">Incident management and postmortem analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span className="text-gray-300">CI/CD pipeline optimization and automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Opportunities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Salary</h3>
              <p className="text-gray-300">₹18-45 LPA for GCP DevOps Engineers in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Senior Roles</h3>
              <p className="text-gray-300">SRE Engineer, Cloud DevOps Architect, Platform Engineer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Demand</h3>
              <p className="text-gray-300">High demand for Google Cloud expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-green-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our Google Cloud DevOps Training</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">GCP Labs</h3>
              <p className="text-gray-300 text-sm">Real Google Cloud environment practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">Official Content</h3>
              <p className="text-gray-300 text-sm">Google Cloud authorized training materials</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Exams</h3>
              <p className="text-gray-300 text-sm">Professional level exam simulation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Training</h3>
              <p className="text-gray-300 text-sm">Google Cloud certified professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-green-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Google Cloud DevOps!</h2>
          <p className="text-xl text-gray-300 mb-8">Become a certified Google Cloud DevOps professional</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Training Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}