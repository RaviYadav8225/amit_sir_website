"use client";
import Link from "next/link";

export default function AzureDataEngineer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-teal-300 text-sm font-semibold">🔧 Associate Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Microsoft Azure
            <span className="block text-teal-300">Data Engineer Associate</span>
            <span className="block text-3xl lg:text-4xl text-blue-300 font-bold mt-2">
              (DP-203)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Design and Implement Data Solutions on Microsoft Azure
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Data Engineering Guide
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
                The DP-203 Azure Data Engineer Associate certification validates the skills needed to integrate, transform, and consolidate data from various data systems into data structures suitable for building analytics solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-white font-semibold">Associate-level data engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-white font-semibold">Big data and analytics pipelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-white font-semibold">Data transformation and integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-white font-semibold">High-demand data role</span>
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
                  <span className="text-white font-semibold">DP-900 + Data experience</span>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">DP-203 Exam Domains (Microsoft Official)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-4">1. Design and Implement Data Storage (40-45%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Design a data storage structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Design a partition strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Design the serving layer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Implement physical data storage structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Implement logical data structures</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-4">2. Develop Data Processing (25-30%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Ingest and transform data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Develop a batch processing solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Develop a stream processing solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Manage batches and pipelines</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-4">3. Design and Develop Data Processing (25-30%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Design and implement incremental data loads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Design and develop slowly changing dimensions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Design and develop logical folder structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Design and develop a data stream processing solution</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-4">4. Monitor and Optimize Data Solutions (10-15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Monitor data storage and data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Optimize and troubleshoot data storage and data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span>Monitor and update pipelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Azure Data Technologies */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Azure Data Engineering Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">Azure Synapse Analytics</h4>
              <p className="text-gray-300 text-sm">Enterprise data warehouse and big data analytics</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="text-lg font-bold text-white mb-2">Azure Data Factory</h4>
              <p className="text-gray-300 text-sm">Data integration and ETL/ELT pipelines</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-lg font-bold text-white mb-2">Azure Stream Analytics</h4>
              <p className="text-gray-300 text-sm">Real-time data stream processing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🌊</div>
              <h4 className="text-lg font-bold text-white mb-2">Azure Data Lake</h4>
              <p className="text-gray-300 text-sm">Massively scalable data lake solution</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Azure Databricks</h4>
              <p className="text-gray-300 text-sm">Apache Spark-based analytics platform</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="text-lg font-bold text-white mb-2">Azure Event Hubs</h4>
              <p className="text-gray-300 text-sm">Big data streaming platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Data Engineering Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">High Salary</h3>
              <p className="text-gray-300">₹12-25 LPA for Data Engineers in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">Data Engineer, Big Data Architect, Analytics Engineer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">High Demand</h3>
              <p className="text-gray-300">Critical role in data-driven organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programming Skills */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">Technical Skills Required</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🐍</div>
              <h4 className="text-lg font-bold text-white mb-2">Python/Scala</h4>
              <p className="text-gray-300 text-sm">Data processing and transformations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🗃️</div>
              <h4 className="text-lg font-bold text-white mb-2">SQL</h4>
              <p className="text-gray-300 text-sm">Data querying and manipulation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Apache Spark</h4>
              <p className="text-gray-300 text-sm">Big data processing framework</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">📜</div>
              <h4 className="text-lg font-bold text-white mb-2">JSON/Parquet</h4>
              <p className="text-gray-300 text-sm">Data formats and serialization</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-teal-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Become a Data Engineer!</h2>
          <p className="text-xl text-gray-300 mb-8">Build scalable data solutions with Azure technologies</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Engineering Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}