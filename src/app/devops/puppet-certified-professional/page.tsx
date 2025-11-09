"use client";
import Link from "next/link";

export default function PuppetCertifiedProfessional() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">🎭 Professional Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Puppet
            <span className="block text-purple-300">Certified Professional</span>
            <span className="block text-3xl lg:text-4xl text-pink-300 font-bold mt-2">
              (PCP)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Enterprise Configuration Management and Infrastructure Automation
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Puppet Professional Certification</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">What is Puppet?</h3>
              <p className="text-gray-300 mb-6">
                Puppet is an enterprise-grade configuration management and automation platform that helps IT teams manage infrastructure at scale with declarative code.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Declarative infrastructure automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Model-driven approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Enterprise security and compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Multi-platform support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Certification Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">90 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">60 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice & hands-on</span>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">PCP Exam Domains</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">1. Language Foundations (25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Puppet language syntax and structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Resources and resource types</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Classes and defined types</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Variables and data types</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">2. Modules and Classes (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Module structure and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Class parameters and validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Module composition and inheritance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Forge modules and community code</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">3. Data and Hiera (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Hiera hierarchy and configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Data lookup and interpolation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Automatic parameter lookup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Data separation and environments</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">4. Classification and Environments (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Node classification methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>External Node Classifiers (ENC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Environment configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Code promotion workflows</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">5. Roles and Profiles (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Roles and profiles pattern</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Business logic abstraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Component modules design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Node classification strategies</span>
                </li>
              </ul>
            </div>

            {/* Domain 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">6. Troubleshooting and Testing (10%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Puppet debugging techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Agent and master logs analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Code validation and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Technologies */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Puppet Platform Components</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-lg font-bold text-white mb-2">Puppet Server</h3>
              <p className="text-gray-300 text-sm">Central catalog compiler and certificate authority</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🖥️</div>
              <h3 className="text-lg font-bold text-white mb-2">Puppet Agent</h3>
              <p className="text-gray-300 text-sm">Node agent for configuration enforcement</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">PuppetDB</h3>
              <p className="text-gray-300 text-sm">Centralized data warehouse and reporting</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-white mb-2">Puppet Console</h3>
              <p className="text-gray-300 text-sm">Web-based GUI for management and reporting</p>
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
              <h3 className="text-2xl font-bold text-pink-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">6+ months hands-on Puppet experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Linux/Unix system administration</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic programming and scripting skills</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Understanding of configuration management concepts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">💡</span>
                  <span className="text-gray-300">Puppet Essentials certification recommended</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pink-300 mb-6">Skills Gained</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Advanced Puppet language mastery</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Enterprise-scale automation design</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Data management with Hiera</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Code organization and best practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Troubleshooting and performance optimization</span>
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
              <h3 className="text-xl font-bold text-white mb-2">Professional Salary</h3>
              <p className="text-gray-300">₹10-25 LPA for Puppet professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Senior Roles</h3>
              <p className="text-gray-300">Automation Architect, Configuration Manager, DevOps Lead</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Focus</h3>
              <p className="text-gray-300">Leading enterprise automation platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our Puppet Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-gray-300 text-sm">Real Puppet environment practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">Official Content</h3>
              <p className="text-gray-300 text-sm">Puppet authorized training materials</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Exams</h3>
              <p className="text-gray-300 text-sm">PCP exam simulation and preparation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Training</h3>
              <p className="text-gray-300 text-sm">Puppet certified professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Become Puppet Certified!</h2>
          <p className="text-xl text-gray-300 mb-8">Master enterprise configuration management with Puppet</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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