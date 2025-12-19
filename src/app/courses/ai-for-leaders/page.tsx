"use client";
import Link from "next/link";

export default function AIForLeaders() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-indigo-300 text-sm font-semibold">🎯 Executive Program</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            AI for
            <span className="block text-indigo-300">Leaders</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Strategic AI Leadership Training for Decision-Makers & Executives
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/AI for Leader.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Program Overview
            </a>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Program Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Transform your leadership with our comprehensive AI for Leaders program. Designed specifically for executives, managers, and decision-makers, this course provides strategic insights into AI adoption, ethical implementation, and organizational transformation in the age of artificial intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Strategic AI decision-making framework</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">AI transformation roadmaps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Ethics & responsible AI governance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">ROI measurement & business impact</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <div className="font-semibold text-white">Duration</div>
                    <div className="text-gray-300">4-6 Weeks (Executive Schedule)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <div className="font-semibold text-white">Level</div>
                    <div className="text-gray-300">Executive / Leadership</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="font-semibold text-white">Certification</div>
                    <div className="text-gray-300">AI Leadership Certificate</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="font-semibold text-white">Mode</div>
                    <div className="text-gray-300">Hybrid (Online + In-Person)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Program Curriculum</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Strategy */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">AI Strategy & Vision</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>AI landscape & emerging trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Building AI-first organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Strategic AI adoption frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Competitive advantage through AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Digital transformation roadmaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span>Innovation & disruption strategies</span>
                </li>
              </ul>
            </div>

            {/* Business Impact */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Business Impact & ROI</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>AI use cases across industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Measuring AI ROI & business value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Cost-benefit analysis for AI projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Performance metrics & KPIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Risk assessment & mitigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Building the business case for AI</span>
                </li>
              </ul>
            </div>

            {/* Leadership & Change */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Leadership & Change Management</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Leading AI transformation initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Building AI-ready teams & culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Change management strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Talent acquisition & upskilling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Stakeholder communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Overcoming organizational resistance</span>
                </li>
              </ul>
            </div>

            {/* Ethics & Governance */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Ethics & Governance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Responsible AI principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>AI ethics & bias mitigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Data privacy & security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Regulatory compliance & standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>AI governance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Building trust & transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Who Should Attend */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Who Should Attend</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-xl font-bold text-white mb-2">C-Level Executives</h3>
              <p className="text-gray-300 text-sm">CEOs, CTOs, CIOs leading digital transformation</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Business Leaders</h3>
              <p className="text-gray-300 text-sm">Department heads & senior managers</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy Directors</h3>
              <p className="text-gray-300 text-sm">Strategic planning & innovation leaders</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Product Managers</h3>
              <p className="text-gray-300 text-sm">Leading AI-powered product development</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Entrepreneurs</h3>
              <p className="text-gray-300 text-sm">Startup founders & business owners</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Consultants</h3>
              <p className="text-gray-300 text-sm">Management & technology consultants</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-indigo-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Transform Your Leadership with AI!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading executives in mastering AI strategy and driving organizational transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Program Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
