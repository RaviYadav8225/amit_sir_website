"use client";
import Link from "next/link";

export default function AzureDeveloper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">💻 Associate Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Microsoft Azure
            <span className="block text-blue-300">Developer Associate</span>
            <span className="block text-3xl lg:text-4xl text-purple-300 font-bold mt-2">
              (AZ-204)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build, Test, and Maintain Cloud Applications and Services on Azure
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Developer Guide
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
                The AZ-204 Azure Developer Associate certification validates the skills needed to design, build, test, and maintain cloud applications and services on Microsoft Azure. This hands-on certification focuses on implementing Azure compute solutions, storage, security, and monitoring.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Associate-level developer certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Cloud-native application development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">DevOps and CI/CD integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Serverless and microservices</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">150 Minutes</span>
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
                  <span className="text-white font-semibold">1-2 years development experience</span>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">AZ-204 Exam Domains (Microsoft Official)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">1. Develop Azure Compute Solutions (25-30%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement IaaS solutions (Azure VMs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Create Azure App Service Web Apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement Azure Functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Develop for Azure Container Instances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement containerized solutions</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">2. Develop for Azure Storage (10-15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Develop solutions that use Cosmos DB storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Develop solutions that use blob storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement Azure Storage security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Manage data using Azure Storage Explorer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement storage solutions for files and documents</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">3. Implement Azure Security (15-20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement user authentication and authorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement secure cloud solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement Azure Key Vault</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement Managed Identities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Secure app configuration data</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">4. Monitor, Troubleshoot, and Optimize Azure Solutions (10-15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Integrate caching and content delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Instrument solutions to support monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Optimize Azure solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Troubleshoot solutions by using metrics and log data</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">5. Connect to and Consume Azure Services and Third-party Services (25-30%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Develop an App Service Logic App</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement API Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Develop event-based solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Develop message-based solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Configure Azure Service Bus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>Implement Azure Event Grid and Event Hubs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Azure Developer Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Serverless Computing</h4>
              <p className="text-gray-300 text-sm">Azure Functions, Logic Apps</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🗄️</div>
              <h4 className="text-lg font-bold text-white mb-2">Data Storage</h4>
              <p className="text-gray-300 text-sm">Cosmos DB, Blob Storage, SQL</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="text-lg font-bold text-white mb-2">Security Implementation</h4>
              <p className="text-gray-300 text-sm">Azure AD, Key Vault, Managed Identity</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">Monitoring & Optimization</h4>
              <p className="text-gray-300 text-sm">Application Insights, Performance tuning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programming Languages */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Supported Programming Languages</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔵</div>
              <h4 className="text-lg font-bold text-white mb-2">C#</h4>
              <p className="text-gray-300 text-sm">.NET Core, ASP.NET</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🟨</div>
              <h4 className="text-lg font-bold text-white mb-2">JavaScript</h4>
              <p className="text-gray-300 text-sm">Node.js, React, Angular</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🐍</div>
              <h4 className="text-lg font-bold text-white mb-2">Python</h4>
              <p className="text-gray-300 text-sm">Flask, Django, FastAPI</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">☕</div>
              <h4 className="text-lg font-bold text-white mb-2">Java</h4>
              <p className="text-gray-300 text-sm">Spring Boot, Maven</p>
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
              <p className="text-gray-300">₹8-20 LPA for Azure Developers in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">Cloud Developer, Azure Architect, Full-Stack Developer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Growth Path</h3>
              <p className="text-gray-300">Gateway to Azure Solutions Architect Expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Become an Azure Developer!</h2>
          <p className="text-xl text-gray-300 mb-8">Build modern cloud applications with Azure services</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Curriculum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}