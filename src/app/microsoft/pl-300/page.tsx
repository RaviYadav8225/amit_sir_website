"use client";
import Link from "next/link";

export default function PowerBIPL300() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-orange-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-300 text-sm font-semibold">📊 Associate Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Microsoft Power BI
            <span className="block text-yellow-300">Data Analyst</span>
            <span className="block text-3xl lg:text-4xl text-orange-300 font-bold mt-2">
              (PL-300)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master Data Analytics and Visualization with Power BI
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/pl-300-syllabus.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Syllabus
            </a>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">PL-300: Power BI Data Analyst</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You'll Learn */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">📖 What You'll Learn</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Prepare and transform data for analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Model data for performance and scalability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Design and create stunning visualizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Implement DAX calculations and measures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Deploy and maintain Power BI assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Create interactive dashboards and reports</span>
                </li>
              </ul>
            </div>

            {/* Exam Domains */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">🎯 Exam Domains</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Prepare Data</span>
                    <span className="text-yellow-300">25-30%</span>
                  </div>
                  <div className="bg-yellow-500/30 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '27%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Model Data</span>
                    <span className="text-orange-300">25-30%</span>
                  </div>
                  <div className="bg-orange-500/30 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '27%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Visualize & Analyze Data</span>
                    <span className="text-red-300">25-30%</span>
                  </div>
                  <div className="bg-red-500/30 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '27%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">Deploy & Maintain Assets</span>
                    <span className="text-blue-300">10-15%</span>
                  </div>
                  <div className="bg-blue-500/30 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '12%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Topics */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Core Competencies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Data Transformation</h3>
              <p className="text-gray-300">Power Query, ETL processes, data cleansing and shaping</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-3">Data Modeling</h3>
              <p className="text-gray-300">Star schema, relationships, optimization techniques</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-bold text-white mb-3">DAX Formulas</h3>
              <p className="text-gray-300">Calculated columns, measures, time intelligence</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Visualizations</h3>
              <p className="text-gray-300">Charts, maps, custom visuals, best practices</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">Dashboard Design</h3>
              <p className="text-gray-300">Interactive reports, drill-through, bookmarks</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-3">Power BI Service</h3>
              <p className="text-gray-300">Publishing, sharing, workspace management, RLS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites</h2>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Basic understanding of data analysis concepts</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Familiarity with Excel or similar spreadsheet tools</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Understanding of relational databases (helpful but not required)</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Experience working with data in business context</span>
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
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">Power BI Developer</h3>
              <p className="text-gray-300 text-sm">Build BI solutions and dashboards</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-white mb-2">Data Analyst</h3>
              <p className="text-gray-300 text-sm">Analyze and visualize business data</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Business Intelligence Analyst</h3>
              <p className="text-gray-300 text-sm">Drive data-driven decisions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Analytics Consultant</h3>
              <p className="text-gray-300 text-sm">Provide BI consulting services</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-black text-white mb-6">
              Transform Data into Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Become a certified Power BI Data Analyst and unlock the power of data visualization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+91-9522220892" className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
                📞 Call Now: +91-9522220892
              </a>
              <Link href="/contact" className="bg-white text-orange-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
