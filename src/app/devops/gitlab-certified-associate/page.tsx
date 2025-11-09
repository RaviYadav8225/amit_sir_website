"use client";
import Link from "next/link";

export default function GitLabCertifiedAssociate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-300 text-sm font-semibold">🦊 Associate Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            GitLab
            <span className="block text-orange-300">Certified Associate</span>
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (GCA)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Complete DevOps Platform Certification - Git to Production
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">GitLab Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">What is GitLab?</h3>
              <p className="text-gray-300 mb-6">
                GitLab is a complete DevOps platform that provides Git repository management, CI/CD pipelines, issue tracking, and deployment automation in a single application.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Complete DevOps lifecycle management</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Built-in CI/CD capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Security and compliance features</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Auto DevOps and GitOps support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Certification Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">90 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">75 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$650 USD</span>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">GitLab Certification Domains</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">1. GitLab Fundamentals (25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>GitLab architecture and components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>GitLab tiers and licensing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>GitLab.com vs self-managed GitLab</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>User interface navigation</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">2. Git and Version Control (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Git fundamentals and workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Repository management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Branching strategies and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Merge requests and code review</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">3. GitLab CI/CD (30%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>CI/CD pipeline configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>.gitlab-ci.yml file structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>GitLab Runners and executors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Pipeline optimization and best practices</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">4. Project Management (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Issue tracking and project boards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Milestone and roadmap management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Wiki and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>User and group management</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">5. Security and Compliance (10%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>GitLab security features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>SAST, DAST, and dependency scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Container security scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Compliance dashboards and reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Technologies */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">GitLab Platform Components</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-bold text-white mb-2">Source Code Management</h3>
              <p className="text-gray-300 text-sm">Git repositories with advanced features</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">CI/CD Pipelines</h3>
              <p className="text-gray-300 text-sm">Built-in continuous integration and deployment</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-white mb-2">Security Scanning</h3>
              <p className="text-gray-300 text-sm">SAST, DAST, and vulnerability management</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">Project Management</h3>
              <p className="text-gray-300 text-sm">Issues, boards, and agile planning</p>
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
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic understanding of Git version control</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Software development experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic understanding of CI/CD concepts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="text-gray-300">Command line interface experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">💡</span>
                  <span className="text-gray-300">3+ months GitLab experience recommended</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Skills Gained</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">GitLab platform administration</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">Advanced Git workflows and strategies</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">CI/CD pipeline design and optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security integration and DevSecOps</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span className="text-gray-300">Project management and collaboration</span>
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
              <h3 className="text-xl font-bold text-white mb-2">Salary Range</h3>
              <p className="text-gray-300">₹8-20 LPA for GitLab specialists in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">DevOps Engineer, Platform Engineer, CI/CD Specialist</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Market Demand</h3>
              <p className="text-gray-300">Growing adoption across enterprise organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Highlights */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our GitLab Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Practice</h3>
              <p className="text-gray-300 text-sm">Real GitLab environment access</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">Official Content</h3>
              <p className="text-gray-300 text-sm">GitLab authorized training materials</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Exams</h3>
              <p className="text-gray-300 text-sm">GCA exam simulation and preparation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Training</h3>
              <p className="text-gray-300 text-sm">GitLab certified instructors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Become GitLab Certified!</h2>
          <p className="text-xl text-gray-300 mb-8">Master the complete DevOps platform and boost your career</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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