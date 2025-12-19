"use client";
import Link from "next/link";

export default function AgenticAI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">🤖 Advanced AI Course</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Agentic AI
            <span className="block text-purple-300">Course</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master the Future of Artificial Intelligence - Build Autonomous AI Agents
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/Agentic AI new course catalog.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Course Catalog
            </a>
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
                Dive into the cutting-edge world of Agentic AI and learn to build autonomous AI systems that can reason, plan, and execute complex tasks. This comprehensive course covers the latest advancements in AI agent development, multi-agent systems, and intelligent automation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Build autonomous AI agents from scratch</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Master multi-agent collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Real-world AI automation projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-semibold">Industry-ready skills & certification</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Course Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <div className="font-semibold text-white">Duration</div>
                    <div className="text-gray-300">8-12 Weeks (Flexible)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <div className="font-semibold text-white">Level</div>
                    <div className="text-gray-300">Intermediate to Advanced</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="font-semibold text-white">Certification</div>
                    <div className="text-gray-300">Agentic AI Specialist Certificate</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="font-semibold text-white">Mode</div>
                    <div className="text-gray-300">Online & Classroom</div>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">Course Curriculum</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Fundamentals */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">AI Agent Fundamentals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Introduction to Agentic AI concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>AI agent architecture & design patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Reasoning & decision-making systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Goal-oriented behavior modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Agent perception & environment interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Memory systems & state management</span>
                </li>
              </ul>
            </div>

            {/* LLM Integration */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pink-300 mb-4">LLM Integration</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Large Language Model fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Prompt engineering for agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Function calling & tool use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Chain-of-thought reasoning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>Agent orchestration frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span>API integration & deployment</span>
                </li>
              </ul>
            </div>

            {/* Multi-Agent Systems */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Multi-Agent Systems</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Multi-agent collaboration strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Agent communication protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Task delegation & coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Swarm intelligence concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Consensus & conflict resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Distributed problem solving</span>
                </li>
              </ul>
            </div>

            {/* Advanced Topics */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Advanced Topics & Projects</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Reinforcement learning for agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Self-improving agent systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Safety & alignment strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Real-world automation projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Production deployment best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Capstone project & portfolio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Opportunities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Engineer</h3>
              <p className="text-gray-300 text-sm">Build and deploy AI agent systems</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">ML Researcher</h3>
              <p className="text-gray-300 text-sm">Research advanced AI agent architectures</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-2">Automation Specialist</h3>
              <p className="text-gray-300 text-sm">Implement intelligent automation solutions</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Solutions Architect</h3>
              <p className="text-gray-300 text-sm">Design enterprise AI systems</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Product Manager</h3>
              <p className="text-gray-300 text-sm">Lead AI product development teams</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Startup Founder</h3>
              <p className="text-gray-300 text-sm">Build your own AI-powered business</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Start Your Agentic AI Journey Today!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of AI and master the skills to build autonomous intelligent systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
