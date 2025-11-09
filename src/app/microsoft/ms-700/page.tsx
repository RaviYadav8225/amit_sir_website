"use client";
import Link from "next/link";

export default function MicrosoftTeams() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">👥 Associate Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Managing
            <span className="block text-purple-300">Microsoft Teams</span>
            <span className="block text-3xl lg:text-4xl text-blue-300 font-bold mt-2">
              (MS-700)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Plan, Deploy, Configure, and Manage Microsoft Teams
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Teams Guide
            </Link>
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
                The MS-700 Managing Microsoft Teams certification validates the skills needed to plan, deploy, configure, and manage Microsoft Teams to focus on efficient and effective collaboration and communication in a Microsoft 365 environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Associate-level Teams administration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Collaboration platform management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Communication solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Essential for modern workplaces</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">120 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">40-60 Questions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">700/1000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$165 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Prerequisites:</span>
                  <span className="text-white font-semibold">Microsoft 365 experience</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Renewal:</span>
                  <span className="text-white font-semibold">Annual (Free)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Exam Domains */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">MS-700 Exam Domains (Microsoft Official)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">1. Plan and Configure a Microsoft Teams Environment (45-50%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Plan and configure team settings and policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Plan and configure meeting settings and policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Plan and configure messaging policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage Teams and collaboration with external users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Configure and manage Teams apps</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">2. Manage Chat, Calling, and Meetings (30-35%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage chat and collaboration experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage meeting experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Configure and manage Live Events and webinars</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage Phone System</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage Teams Phone</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">3. Manage Teams and App Policies (20-25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage team creation and templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage membership in teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Configure dynamic membership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage app policies and settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Manage custom app uploads and approval</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Teams Features */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Microsoft Teams Management Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="text-lg font-bold text-white mb-2">Team Management</h4>
              <p className="text-gray-300 text-sm">Teams creation, policies, governance</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📹</div>
              <h4 className="text-lg font-bold text-white mb-2">Meetings & Calling</h4>
              <p className="text-gray-300 text-sm">Video conferencing, Phone System</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="text-lg font-bold text-white mb-2">Chat & Messaging</h4>
              <p className="text-gray-300 text-sm">Communication policies, channels</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔌</div>
              <h4 className="text-lg font-bold text-white mb-2">Apps & Integration</h4>
              <p className="text-gray-300 text-sm">Third-party apps, custom solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Teams Administration Tools */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Administration Tools</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">🏢 Teams Admin Center</h4>
              <p className="text-gray-300 text-sm">Central management console for Teams</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">⚡ PowerShell</h4>
              <p className="text-gray-300 text-sm">Command-line management and automation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">📊 Microsoft 365 Admin Center</h4>
              <p className="text-gray-300 text-sm">User and license management</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">🔍 Call Quality Dashboard</h4>
              <p className="text-gray-300 text-sm">Monitor call and meeting quality</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">📈 Usage Analytics</h4>
              <p className="text-gray-300 text-sm">Teams adoption and usage reports</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">🛡️ Security & Compliance</h4>
              <p className="text-gray-300 text-sm">Data loss prevention, retention policies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Salary Range</h3>
              <p className="text-gray-300">₹6-15 LPA for Teams Administrators in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">Teams Administrator, Collaboration Specialist, IT Support</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">High Demand</h3>
              <p className="text-gray-300">Essential for hybrid and remote work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">Real-World Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🏠</div>
              <h4 className="text-lg font-bold text-white mb-2">Remote Work</h4>
              <p className="text-gray-300 text-sm">Enable distributed teams collaboration</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-lg font-bold text-white mb-2">Education</h4>
              <p className="text-gray-300 text-sm">Virtual classrooms and online learning</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg font-bold text-white mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm">Telemedicine and patient consultations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="text-lg font-bold text-white mb-2">Enterprise</h4>
              <p className="text-gray-300 text-sm">Large-scale corporate communication</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Microsoft Teams!</h2>
          <p className="text-xl text-gray-300 mb-8">Become an expert in modern workplace collaboration</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Teams Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}