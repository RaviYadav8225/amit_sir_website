"use client";
import Link from "next/link";

export default function AzureAIFundamentals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-indigo-300 text-sm font-semibold">🤖 Fundamentals</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Microsoft Azure
            <span className="block text-indigo-300">AI Fundamentals</span>
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (AI-900)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master Artificial Intelligence and Machine Learning Concepts on Azure
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get AI Guide
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
                The AI-900 Azure AI Fundamentals certification validates foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services. Perfect for anyone wanting to enter the AI field.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Entry-level AI certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Machine learning fundamentals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Azure AI services overview</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Gateway to AI career</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">45 Minutes</span>
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
                  <span className="text-white font-semibold">$99 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Prerequisites:</span>
                  <span className="text-white font-semibold">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Renewal:</span>
                  <span className="text-white font-semibold">No renewal required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Exam Domains */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">AI-900 Exam Domains (Microsoft Official)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">1. Describe Artificial Intelligence Workloads and Considerations (15-20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify features of common AI workloads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify guiding principles for responsible AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify considerations for AI engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify capabilities of conversational AI workloads</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">2. Describe Fundamental Principles of Machine Learning on Azure (20-25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify common machine learning types</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Describe core machine learning concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify core tasks in creating a machine learning solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Describe capabilities of no-code machine learning with Azure Machine Learning</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">3. Describe Features of Computer Vision Workloads on Azure (15-20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify common types of computer vision solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify Azure tools and services for computer vision tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Describe capabilities of the Computer Vision service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Describe capabilities of the Custom Vision service</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">4. Describe Features of Natural Language Processing (NLP) Workloads on Azure (15-20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify features of common NLP Workload Scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify Azure tools and services for NLP workloads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify capabilities of the Language service</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">5. Describe Features of Conversational AI Workloads on Azure (15-20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify common use cases for conversational AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify Azure services for conversational AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Identify capabilities of the Azure Bot Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Azure AI Services */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Azure AI Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h4 className="text-lg font-bold text-white mb-2">Azure Machine Learning</h4>
              <p className="text-gray-300 text-sm">End-to-end ML lifecycle platform</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">👁️</div>
              <h4 className="text-lg font-bold text-white mb-2">Computer Vision</h4>
              <p className="text-gray-300 text-sm">Image and video analysis</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🗣️</div>
              <h4 className="text-lg font-bold text-white mb-2">Speech Services</h4>
              <p className="text-gray-300 text-sm">Speech-to-text and text-to-speech</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="text-lg font-bold text-white mb-2">Language Understanding</h4>
              <p className="text-gray-300 text-sm">Natural language processing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="text-lg font-bold text-white mb-2">Bot Service</h4>
              <p className="text-gray-300 text-sm">Intelligent chatbot development</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Cognitive Search</h4>
              <p className="text-gray-300 text-sm">AI-powered search solution</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Career Path */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">AI Career Foundation</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Entry Salary</h3>
              <p className="text-gray-300">₹6-12 LPA for AI/ML roles in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Career Roles</h3>
              <p className="text-gray-300">AI Developer, ML Engineer, Data Scientist</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Next Steps</h3>
              <p className="text-gray-300">AI-102 AI Engineer Associate</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Concepts */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">Key AI Concepts You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">Machine Learning</h4>
              <p className="text-gray-300 text-sm">Supervised, unsupervised, reinforcement learning</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">👀</div>
              <h4 className="text-lg font-bold text-white mb-2">Computer Vision</h4>
              <p className="text-gray-300 text-sm">Image classification, object detection, OCR</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="text-lg font-bold text-white mb-2">Natural Language</h4>
              <p className="text-gray-300 text-sm">Text analysis, translation, sentiment</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">⚖️</div>
              <h4 className="text-lg font-bold text-white mb-2">Responsible AI</h4>
              <p className="text-gray-300 text-sm">Ethics, fairness, transparency, accountability</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Enter the AI Revolution!</h2>
          <p className="text-xl text-gray-300 mb-8">Build your foundation in artificial intelligence and machine learning</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download AI Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}