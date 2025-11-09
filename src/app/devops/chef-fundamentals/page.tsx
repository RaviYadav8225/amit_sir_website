"use client";
import Link from "next/link";

export default function ChefFundamentals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-teal-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-green-300 text-sm font-semibold">👨‍🍳 Fundamentals Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Chef
            <span className="block text-green-300">Fundamentals</span>
            <span className="block text-3xl lg:text-4xl text-teal-300 font-bold mt-2">
              Certification
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Infrastructure Automation and Configuration Management
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-green-500/10 to-teal-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Chef Fundamentals Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6">What is Chef?</h3>
              <p className="text-gray-300 mb-6">
                Chef is a powerful configuration management and infrastructure automation tool that helps organizations manage and automate their infrastructure at scale using code.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">Infrastructure as Code (IaC)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">Configuration management automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">Multi-cloud and hybrid environments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">Compliance and security automation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6">Certification Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">120 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">60 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice & scenario</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$150 USD</span>
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

      {/* Core Concepts */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Chef Core Concepts</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Concept 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">1. Chef Architecture (25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Chef Server, Workstation, and Nodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Chef Client and convergence process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Knife command-line tool</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Chef Supermarket and community cookbooks</span>
                </li>
              </ul>
            </div>

            {/* Concept 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">2. Cookbooks and Recipes (25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Writing and structuring cookbooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Recipe development and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Attributes and data bags</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Templates and files management</span>
                </li>
              </ul>
            </div>

            {/* Concept 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">3. Resources and Providers (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Core Chef resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Custom resources and providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Resource notifications and subscriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Conditional execution and guards</span>
                </li>
              </ul>
            </div>

            {/* Concept 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">4. Node Management (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Node bootstrapping and registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Run lists and roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Environments and policy files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Search and data retrieval</span>
                </li>
              </ul>
            </div>

            {/* Concept 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">5. Testing and Compliance (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Test-driven development with ChefSpec</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Integration testing with Test Kitchen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>InSpec for compliance automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Continuous integration workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Technologies */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Chef Ecosystem Tools</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-white mb-2">Chef Infra</h3>
              <p className="text-gray-300 text-sm">Infrastructure automation and configuration</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2">Chef InSpec</h3>
              <p className="text-gray-300 text-sm">Compliance and security testing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="text-lg font-bold text-white mb-2">Chef Habitat</h3>
              <p className="text-gray-300 text-sm">Application automation and packaging</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Chef Automate</h3>
              <p className="text-gray-300 text-sm">Enterprise visibility and compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Salary</h3>
              <p className="text-gray-300">₹8-20 LPA for Chef specialists in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Opportunities</h3>
              <p className="text-gray-300">DevOps Engineer, Automation Engineer, Infrastructure Engineer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Adoption</h3>
              <p className="text-gray-300">Widely used in large enterprises globally</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-green-600/20 to-teal-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Infrastructure Automation!</h2>
          <p className="text-xl text-gray-300 mb-8">Become Chef certified and automate at enterprise scale</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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