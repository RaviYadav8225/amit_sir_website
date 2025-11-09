"use client";
import Link from "next/link";

export default function PrometheusCertifiedAssociate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-red-300 text-sm font-semibold">📊 Associate Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Prometheus
            <span className="block text-red-300">Certified Associate</span>
            <span className="block text-3xl lg:text-4xl text-orange-300 font-bold mt-2">
              (PCA)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Cloud Native Monitoring and Alerting Mastery
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prometheus Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-6">What is Prometheus?</h3>
              <p className="text-gray-300 mb-6">
                Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability, widely adopted in cloud-native environments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✓</span>
                  <span className="text-white">Time series database and monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✓</span>
                  <span className="text-white">PromQL query language</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✓</span>
                  <span className="text-white">Service discovery and alerting</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✓</span>
                  <span className="text-white">Cloud Native Computing Foundation project</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-6">Certification Details</h3>
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
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice & performance</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$250 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Validity:</span>
                  <span className="text-white font-semibold">3 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Domains */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">PCA Exam Domains</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">1. Observability Concepts (18%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Metrics, logs, and traces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>The four golden signals of monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Understanding SLIs, SLOs, and error budgets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Monitoring anti-patterns</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">2. Prometheus Fundamentals (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Prometheus architecture and components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Metric types and naming conventions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Jobs and instances concept</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Prometheus configuration basics</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">3. PromQL (26%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>PromQL syntax and basic queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Selectors and matchers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Operators and functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Aggregation and recording rules</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">4. Instrumentation and Exporters (16%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Client libraries and instrumentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Exporters and service discovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Pushgateway usage and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Custom metrics and labels</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4">5. Alerting and Recording Rules (20%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Alerting rules configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Alertmanager setup and routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Notification channels and integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span>Recording rules for performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">High Demand Salary</h3>
              <p className="text-gray-300">₹10-25 LPA for Monitoring specialists in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Job Roles</h3>
              <p className="text-gray-300">SRE Engineer, Monitoring Engineer, DevOps Engineer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Growth</h3>
              <p className="text-gray-300">Fastest growing monitoring solution</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Cloud Native Monitoring!</h2>
          <p className="text-xl text-gray-300 mb-8">Become Prometheus certified and excel in observability</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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