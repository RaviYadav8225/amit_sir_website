"use client";
import Link from "next/link";

export default function OSCP() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-red-300 text-sm font-semibold">💀 Elite Professional</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            OSCP
            <span className="block text-red-300">Offensive Security</span>
            <span className="block text-orange-300">Certified Professional</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The Most Respected Hands-On Penetration Testing Certification
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
      <div className="py-16 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">OSCP Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-6">About OSCP</h3>
              <p className="text-gray-300 mb-6">
                The OSCP is a hands-on penetration testing certification that requires holders to successfully attack and penetrate various live machines in a safe lab environment. It is considered one of the most respected certifications in information security and requires a completely practical understanding of penetration testing methodology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✓</span>
                  <span className="text-white">100% hands-on practical exam</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✓</span>
                  <span className="text-white">No multiple choice questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✓</span>
                  <span className="text-white">Real penetration testing skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400">✓</span>
                  <span className="text-white">Industry's most respected pentest cert</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-300 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Practical Lab Exam</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">23 hours 45 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Report:</span>
                  <span className="text-white font-semibold">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Machines:</span>
                  <span className="text-white font-semibold">5-6 targets</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">70 points</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$1,499 USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PWK Course Modules */}
      <div className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">PWK Course Content</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">1. Penetration Testing Fundamentals</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Methodology and approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Legal and ethical considerations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Scoping and documentation</span>
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">2. Information Gathering</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Passive and active reconnaissance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">DNS enumeration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Port scanning techniques</span>
                </li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">3. Vulnerability Assessment</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Automated scanning tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Manual testing techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Vulnerability analysis</span>
                </li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">4. Web Application Attacks</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">OWASP Top 10 vulnerabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">SQL injection attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Cross-site scripting (XSS)</span>
                </li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">5. Client-Side Attacks</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Social engineering techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Client-side exploits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Physical attacks</span>
                </li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">6. Locating Public Exploits</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Exploit databases and resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Exploit modification techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Cross-compilation methods</span>
                </li>
              </ul>
            </div>

            {/* Module 7 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">7. Fixing Exploits</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Debugging and troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Exploit customization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Return address determination</span>
                </li>
              </ul>
            </div>

            {/* Module 8 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">8. File Transfers</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Non-interactive file transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Various transfer methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Firewall and AV evasion</span>
                </li>
              </ul>
            </div>

            {/* Module 9 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">9. Antivirus Evasion</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">AV detection mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Payload encoding and encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Custom payload creation</span>
                </li>
              </ul>
            </div>

            {/* Module 10 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">10. Privilege Escalation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Linux privilege escalation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Windows privilege escalation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Automated enumeration tools</span>
                </li>
              </ul>
            </div>

            {/* Module 11 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">11. Password Attacks</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Hash cracking techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Dictionary and brute force attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Password spraying</span>
                </li>
              </ul>
            </div>

            {/* Module 12 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">12. Port Redirection and Tunneling</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">SSH tunneling techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">HTTP tunneling methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Traffic redirection</span>
                </li>
              </ul>
            </div>

            {/* Module 13 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">13. Active Directory Attacks</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">AD enumeration techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Kerberos attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Lateral movement strategies</span>
                </li>
              </ul>
            </div>

            {/* Module 14 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">14. Metasploit Framework</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Framework fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Exploit and payload usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">▸</span>
                  <span className="text-sm">Post-exploitation modules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Recommendations</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-300">Strong Linux and Windows command line skills</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic scripting knowledge (Bash, PowerShell, Python)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-300">Networking fundamentals (TCP/IP, routing, etc.)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic web application security knowledge</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">💡</span>
                  <span className="text-gray-300">3-5 years of security experience strongly recommended</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Target Audience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">🎯</span>
                  <span className="text-gray-300">Experienced penetration testers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">🎯</span>
                  <span className="text-gray-300">Senior security professionals</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">🎯</span>
                  <span className="text-gray-300">Red team members</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security consultants</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">🎯</span>
                  <span className="text-gray-300">Advanced ethical hackers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Elite Salary</h3>
              <p className="text-gray-300">₹25-50+ LPA for OSCP professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-white mb-2">Elite Status</h3>
              <p className="text-gray-300">Senior Pentester, Red Team Lead, Security Architect</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💀</div>
              <h3 className="text-xl font-bold text-white mb-2">Ultimate Respect</h3>
              <p className="text-gray-300">Most respected hands-on security certification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-16 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our OSCP Preparation Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🥷</div>
              <h3 className="text-lg font-bold text-white mb-2">Intensive Labs</h3>
              <p className="text-gray-300 text-sm">PWK lab access and practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💀</div>
              <h3 className="text-lg font-bold text-white mb-2">Real Exploits</h3>
              <p className="text-gray-300 text-sm">Buffer overflows and privilege escalation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-white mb-2">Report Writing</h3>
              <p className="text-gray-300 text-sm">Professional penetration testing reports</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚔️</div>
              <h3 className="text-lg font-bold text-white mb-2">Try Harder</h3>
              <p className="text-gray-300 text-sm">OSCP methodology and mindset</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Try Harder - Achieve OSCP!</h2>
          <p className="text-xl text-gray-300 mb-8">Join the elite ranks of OSCP certified professionals</p>
          
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
