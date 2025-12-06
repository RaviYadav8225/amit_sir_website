"use client";
import Link from "next/link";

export default function PowerPlatformPL900() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">📚 Fundamentals Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Microsoft Power Platform
            <span className="block text-purple-300">Fundamentals</span>
            <span className="block text-3xl lg:text-4xl text-pink-300 font-bold mt-2">
              (PL-900)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your Gateway to Low-Code/No-Code Application Development
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/pl-900-syllabus.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Syllabus
            </a>
          </div>
        </div>
      </div>

      {/* Power Platform Components */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Power Platform Components</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Power Apps */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Power Apps</h3>
                </div>
              </div>
              <p className="text-gray-300">Build custom apps without code</p>
            </div>

            {/* Power Automate */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Power Automate</h3>
                </div>
              </div>
              <p className="text-gray-300">Automate workflows and processes</p>
            </div>

            {/* Power BI */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/20 p-2 rounded-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Power BI</h3>
                </div>
              </div>
              <p className="text-gray-300">Business intelligence & analytics</p>
            </div>

            {/* Power Virtual Agents */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Power Virtual Agents</h3>
                </div>
              </div>
              <p className="text-gray-300">Create intelligent chatbots</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">PL-900: Power Platform Fundamentals</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You'll Learn */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">📖 What You'll Learn</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Describe the business value of Power Platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Identify core components of Power Platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Build basic canvas and model-driven apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Create automated workflows with Power Automate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Build basic Power BI dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Create chatbots with Power Virtual Agents</span>
                </li>
              </ul>
            </div>

            {/* Exam Domains */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">🎯 Exam Domains</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Business Value of Power Platform</span>
                    <span className="text-purple-300">20-25%</span>
                  </div>
                  <div className="bg-purple-500/30 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '22%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Core Components</span>
                    <span className="text-blue-300">25-30%</span>
                  </div>
                  <div className="bg-blue-500/30 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '27%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Power Apps Capabilities</span>
                    <span className="text-green-300">20-25%</span>
                  </div>
                  <div className="bg-green-500/30 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '22%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Power Automate & Other Tools</span>
                    <span className="text-pink-300">25-30%</span>
                  </div>
                  <div className="bg-pink-500/30 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{width: '27%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Why Learn Power Platform?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Development</h3>
              <p className="text-gray-300">Build solutions 5-10x faster than traditional coding</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-3">Business Impact</h3>
              <p className="text-gray-300">Solve real business problems without IT bottlenecks</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Career Growth</h3>
              <p className="text-gray-300">High demand for Power Platform professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites</h2>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Basic understanding of business processes</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Familiarity with Microsoft 365 applications</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>No prior coding experience required</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Basic computer skills and internet navigation</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Opportunities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">👨‍💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Citizen Developer</h3>
              <p className="text-gray-300 text-sm">Build apps for your organization</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold text-white mb-2">Power Platform Admin</h3>
              <p className="text-gray-300 text-sm">Manage and secure environments</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">Business Analyst</h3>
              <p className="text-gray-300 text-sm">Bridge business and technology</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Process Automation Specialist</h3>
              <p className="text-gray-300 text-sm">Streamline workflows</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-black text-white mb-6">
              Start Your Power Platform Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Empower yourself to build solutions that transform business processes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
                📞 Call Now: +91-9522220892
              </a>
              <Link href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
