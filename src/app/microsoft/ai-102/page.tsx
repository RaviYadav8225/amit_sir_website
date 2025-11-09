"use client";
import Link from "next/link";

export default function AzureAIEngineer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-indigo-300 text-sm font-semibold">🤖 Associate Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Microsoft Azure
            <span className="block text-indigo-300">AI Engineer Associate</span>
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (AI-102)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Design and Implement AI Solutions using Azure Cognitive Services
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get AI Engineering Guide
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
                The AI-102 Azure AI Engineer Associate certification validates the skills needed to use Cognitive Services, Machine Learning, and Knowledge Mining to architect and implement Microsoft AI solutions involving natural language processing, speech, computer vision, and conversational AI.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Associate-level AI engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Cognitive Services integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">AI solution architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-white font-semibold">Production AI deployment</span>
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
                  <span className="text-white font-semibold">AI-900 + Programming experience</span>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">AI-102 Exam Domains (Microsoft Official)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">1. Plan and Manage an Azure Cognitive Services Solution (15-20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Select the appropriate Cognitive Services resource</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Plan and configure security for Cognitive Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Plan and implement Cognitive Services containers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Monitor Cognitive Services</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">2. Implement Decision Support Solutions (15-20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Create a QnA Maker knowledge base</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Implement multi-turn conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Create and deploy QnA Maker bots</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Implement Azure Cognitive Search solutions</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">3. Implement Computer Vision Solutions (20-25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Analyze images by using Computer Vision API</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Extract text from images and documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Implement image classification and object detection solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Implement Custom Vision solutions</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">4. Implement Natural Language Processing Solutions (20-25%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Analyze text by using Text Analytics API</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Process speech by using Speech Services API</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Translate text and speech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Create and deploy Language Understanding models</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">5. Implement Conversational AI Solutions (15-20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Create a bot by using Bot Framework SDK</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Create a bot by using Bot Framework Composer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">▸</span>
                  <span>Integrate bots with Azure services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AI Technologies */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Azure AI Engineering Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">👁️</div>
              <h4 className="text-lg font-bold text-white mb-2">Computer Vision</h4>
              <p className="text-gray-300 text-sm">Image analysis, OCR, object detection</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🗣️</div>
              <h4 className="text-lg font-bold text-white mb-2">Speech Services</h4>
              <p className="text-gray-300 text-sm">Speech-to-text, text-to-speech, translation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="text-lg font-bold text-white mb-2">Language Understanding</h4>
              <p className="text-gray-300 text-sm">LUIS, Text Analytics, Translator</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="text-lg font-bold text-white mb-2">Bot Framework</h4>
              <p className="text-gray-300 text-sm">Conversational AI development</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-lg font-bold text-white mb-2">Cognitive Search</h4>
              <p className="text-gray-300 text-sm">AI-powered search and knowledge mining</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">❓</div>
              <h4 className="text-lg font-bold text-white mb-2">QnA Maker</h4>
              <p className="text-gray-300 text-sm">Question and answer knowledge base</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programming Skills */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">Programming Skills Required</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🔵</div>
              <h4 className="text-lg font-bold text-white mb-2">C#</h4>
              <p className="text-gray-300 text-sm">.NET development for AI solutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🐍</div>
              <h4 className="text-lg font-bold text-white mb-2">Python</h4>
              <p className="text-gray-300 text-sm">AI/ML development and data processing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">📡</div>
              <h4 className="text-lg font-bold text-white mb-2">REST APIs</h4>
              <p className="text-gray-300 text-sm">Cognitive Services integration</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg font-bold text-white mb-2">JSON</h4>
              <p className="text-gray-300 text-sm">Data format and API responses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">AI Engineering Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">High Salary</h3>
              <p className="text-gray-300">₹10-22 LPA for AI Engineers in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">AI Engineer, ML Engineer, Cognitive Developer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Future-Ready</h3>
              <p className="text-gray-300">Leading edge of technology innovation</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Become an AI Engineer!</h2>
          <p className="text-xl text-gray-300 mb-8">Build intelligent applications with Azure AI services</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download AI Engineering Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}