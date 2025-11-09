"use client";
import Link from "next/link";

export default function AWSDevOpsEngineer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-yellow-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-orange-300 text-sm font-semibold">☁️ Professional Level</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            AWS Certified
            <span className="block text-orange-300">DevOps Engineer</span>
            <span className="block text-3xl lg:text-4xl text-yellow-300 font-bold mt-2">
              Professional (DOP-C02)
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced AWS DevOps Automation and Optimization
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">AWS DevOps Engineer Professional</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Certification Overview</h3>
              <p className="text-gray-300 mb-6">
                The AWS DevOps Engineer Professional certification validates expertise in provisioning, operating, and managing distributed application systems on the AWS platform.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Advanced AWS DevOps practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Infrastructure as Code mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">CI/CD pipeline optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">✓</span>
                  <span className="text-white">Monitoring and logging strategies</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">180 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">75 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">750/1000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$300 USD</span>
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
          <h2 className="text-4xl font-black text-white mb-12 text-center">DOP-C02 Exam Domains</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Domain 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">1. SDLC Automation (22%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to automate a CI/CD pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine source control strategies and workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to automate and integrate testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to build and manage artifacts securely</span>
                </li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">2. Configuration Management and IaC (17%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine deployment services based on deployment needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine application and infrastructure deployment models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply cloud formation concepts required to provision infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine how to implement lifecycle hooks on a deployment</span>
                </li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">3. Resilient Cloud Solutions (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Implement autoscaling policies and health checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to implement blue/green and rolling deployments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine the right services based on availability and scalability requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to implement decoupling mechanisms</span>
                </li>
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">4. Monitoring and Logging (15%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine how to set up the aggregation, storage, and analysis of logs and metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to automate monitoring and event management of an environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to audit, log, and monitor operating systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine how to implement tagging and other metadata strategies</span>
                </li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">5. Incident and Event Response (14%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Troubleshoot issues and determine how to restore operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine how to automate event management and alerting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to implement automated healing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to set up event-driven automated actions</span>
                </li>
              </ul>
            </div>

            {/* Domain 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">6. Security and Compliance (17%)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to automate system and user access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to automate network and infrastructure security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Apply concepts required to implement compliance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Determine how to implement data and database security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AWS Services Covered */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Key AWS Services Covered</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">CI/CD Services</h3>
              <p className="text-gray-300 text-sm">CodeCommit, CodeBuild, CodeDeploy, CodePipeline</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-bold text-white mb-2">Infrastructure</h3>
              <p className="text-gray-300 text-sm">CloudFormation, CDK, Systems Manager</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">Monitoring</h3>
              <p className="text-gray-300 text-sm">CloudWatch, X-Ray, CloudTrail</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-white mb-2">Security</h3>
              <p className="text-gray-300 text-sm">IAM, Secrets Manager, Parameter Store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Experience</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">AWS Solutions Architect Associate or equivalent experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">2+ years hands-on experience with AWS</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">Experience with CI/CD tools and practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">Infrastructure as Code experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span className="text-gray-300">Programming/scripting skills (Python, PowerShell, etc.)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6">Skills Gained</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">🎯</span>
                  <span className="text-gray-300">Advanced AWS automation strategies</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">🎯</span>
                  <span className="text-gray-300">Enterprise-grade CI/CD pipeline design</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security and compliance automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">🎯</span>
                  <span className="text-gray-300">Monitoring and incident response optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">🎯</span>
                  <span className="text-gray-300">Blue/green and rolling deployment strategies</span>
                </div>
              </div>
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
              <h3 className="text-xl font-bold text-white mb-2">Premium Salary</h3>
              <p className="text-gray-300">₹20-50 LPA for AWS DevOps Professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Senior Roles</h3>
              <p className="text-gray-300">Senior DevOps Engineer, Cloud Architect, DevOps Manager</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Recognition</h3>
              <p className="text-gray-300">Top-tier AWS professional certification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our AWS DevOps Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Live AWS Labs</h3>
              <p className="text-gray-300 text-sm">Real AWS environment practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">Official Curriculum</h3>
              <p className="text-gray-300 text-sm">AWS authorized training content</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-white mb-2">Practice Tests</h3>
              <p className="text-gray-300 text-sm">DOP-C02 exam simulation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Mentorship</h3>
              <p className="text-gray-300 text-sm">AWS certified professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-orange-600/20 to-yellow-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Achieve AWS DevOps Professional!</h2>
          <p className="text-xl text-gray-300 mb-8">Master advanced AWS DevOps and accelerate your cloud career</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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