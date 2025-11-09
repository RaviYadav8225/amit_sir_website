"use client";
import Link from "next/link";

export default function TerraformAssociate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">🏗️ Associate Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            HashiCorp Certified
            <span className="block text-purple-300">Terraform Associate</span>
            <span className="block text-3xl lg:text-4xl text-indigo-300 font-bold mt-2">
              (003)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Infrastructure as Code Mastery with Terraform
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Terraform Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">What is Terraform?</h3>
              <p className="text-gray-300 mb-6">
                Terraform is an open-source infrastructure as code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently across multiple cloud providers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Infrastructure as Code (IaC)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Multi-cloud support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Declarative configuration language</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">State management and planning</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">60 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">57 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$70.50 USD</span>
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

      {/* Exam Objectives */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Exam Objectives (Version 003)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Objective 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">1. Understand Infrastructure as Code (IaC) concepts (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Explain what IaC is</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe advantages of IaC patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Differentiate between declarative and imperative approaches</span>
                </li>
              </ul>
            </div>

            {/* Objective 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">2. Understand Terraform's purpose (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Explain multi-cloud and provider-agnostic benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Explain the benefits of state</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Understand Terraform vs other IaC tools</span>
                </li>
              </ul>
            </div>

            {/* Objective 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">3. Understand Terraform basics (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Install and version Terraform providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe plugin-based architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Write Terraform configuration using multiple providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe how Terraform finds and fetches providers</span>
                </li>
              </ul>
            </div>

            {/* Objective 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">4. Use Terraform outside core workflow (8%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe when to use terraform import</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Use terraform state subcommands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe when to enable verbose logging</span>
                </li>
              </ul>
            </div>

            {/* Objective 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">5. Interact with Terraform modules (12%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Contrast and use different module source options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Interact with module inputs and outputs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe variable scope within modules/child modules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Set module version</span>
                </li>
              </ul>
            </div>

            {/* Objective 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">6. Use core Terraform workflow (10%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe Terraform workflow (Write → Plan → Create)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Initialize a Terraform working directory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Validate a Terraform configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Generate and review an execution plan</span>
                </li>
              </ul>
            </div>

            {/* Objective 7 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">7. Implement and maintain state (9%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe default local backend</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe state locking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Handle backend and cloud integration authentication methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Differentiate remote state back end options</span>
                </li>
              </ul>
            </div>

            {/* Objective 8 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">8. Read, generate, and modify configuration (11%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Demonstrate use of variables and outputs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Describe secure secret injection best practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Understand the use of collection and structural types</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Create and differentiate resource and data configuration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Terraform Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-white mb-2">Multi-Cloud</h3>
              <p className="text-gray-300 text-sm">AWS, Azure, GCP, and 1000+ providers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-white mb-2">HCL Language</h3>
              <p className="text-gray-300 text-sm">HashiCorp Configuration Language</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🗃️</div>
              <h3 className="text-lg font-bold text-white mb-2">State Management</h3>
              <p className="text-gray-300 text-sm">Track and manage infrastructure state</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-white mb-2">Execution Plan</h3>
              <p className="text-gray-300 text-sm">Preview changes before applying</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Learning Path</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic understanding of cloud concepts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Command line interface experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Understanding of infrastructure components</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic networking knowledge</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">💡</span>
                  <span className="text-gray-300">6+ months Terraform experience recommended</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Skills Gained</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">Infrastructure as Code expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">Multi-cloud resource management</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">Terraform configuration and modules</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">State management and backends</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">🎯</span>
                  <span className="text-gray-300">Infrastructure automation and CI/CD integration</span>
                </div>
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
              <h3 className="text-xl font-bold text-white mb-2">High Demand Salary</h3>
              <p className="text-gray-300">₹12-30 LPA for Terraform specialists in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Opportunities</h3>
              <p className="text-gray-300">Cloud Engineer, Infrastructure Engineer, DevOps Engineer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Standard</h3>
              <p className="text-gray-300">Most popular IaC tool globally</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our Terraform Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-gray-300 text-sm">Real-world infrastructure projects</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">Official Content</h3>
              <p className="text-gray-300 text-sm">HashiCorp authorized curriculum</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Exams</h3>
              <p className="text-gray-300 text-sm">Terraform Associate exam simulation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Training</h3>
              <p className="text-gray-300 text-sm">HashiCorp certified instructors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Infrastructure as Code!</h2>
          <p className="text-xl text-gray-300 mb-8">Become HashiCorp Terraform certified and automate your infrastructure</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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