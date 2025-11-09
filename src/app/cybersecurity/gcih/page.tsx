"use client";
import Link from "next/link";

export default function GCIH() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">🛡️ Incident Handler</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            GCIH
            <span className="block text-purple-300">GIAC Certified</span>
            <span className="block text-pink-300">Incident Handler</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Elite Incident Response and Digital Forensics Certification
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">GCIH Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">About GCIH</h3>
              <p className="text-gray-300 mb-6">
                The GIAC Certified Incident Handler (GCIH) certification validates the ability to detect, respond to, and resolve computer security incidents. GCIH certification holders have the knowledge, skills, and abilities to manage incidents using a systematic approach and will understand how to respond to, investigate, and analyze network and host-based attacks.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">GIAC (Global Information Assurance Certification)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Hands-on incident response skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">SANS training foundation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-white">Industry-leading practical approach</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Exam Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">106 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">3 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">74%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$2,499 USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Validity:</span>
                  <span className="text-white font-semibold">4 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules - SEC504 */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">SEC504: Hacker Tools, Techniques, and Incident Handling</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Day 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Day 1: Incident Response and Computer Crime Investigation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Incident response methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Computer crime and digital evidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Legal issues and evidence handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>First responder procedures</span>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Day 2: Recon, Scanning, and Enumeration</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Network reconnaissance techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Port scanning and OS fingerprinting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Service enumeration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Network mapping and vulnerability assessment</span>
                </li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Day 3: Password Attacks and Network Exploits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Password cracking techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Network-based attacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Man-in-the-middle attacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Session hijacking and sniffing</span>
                </li>
              </ul>
            </div>

            {/* Day 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Day 4: Public-Facing and Drive-by Attacks</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Web application attacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>SQL injection and XSS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Client-side attacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Exploit kits and malware delivery</span>
                </li>
              </ul>
            </div>

            {/* Day 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Day 5: Post-Exploitation Techniques</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Privilege escalation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Persistence mechanisms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Data exfiltration techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Anti-forensics and log evasion</span>
                </li>
              </ul>
            </div>

            {/* Day 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Day 6: Incident Handling and Forensics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Digital forensics fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Memory analysis and timeline creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Network forensics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Incident response capstone exercise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Prerequisites & Recommendations</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pink-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">3+ years of security or IT experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Understanding of TCP/IP networking</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic Windows and Linux administration</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">✓</span>
                  <span className="text-gray-300">Familiarity with security concepts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">💡</span>
                  <span className="text-gray-300">SANS SEC401 or equivalent experience recommended</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pink-300 mb-6">Target Audience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Incident response team members</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security analysts and investigators</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Digital forensics examiners</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">SOC analysts and managers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎯</span>
                  <span className="text-gray-300">Penetration testers and red team members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Benefits */}
      <div className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Salary</h3>
              <p className="text-gray-300">₹20-40 LPA for GCIH professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-white mb-2">IR Leadership</h3>
              <p className="text-gray-300">Incident Response Manager, SOC Manager, CSIRT Lead</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Elite Recognition</h3>
              <p className="text-gray-300">GIAC gold standard certification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our GCIH Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">SANS Materials</h3>
              <p className="text-gray-300 text-sm">Official SEC504 courseware and labs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-gray-300 text-sm">Real incident response scenarios</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2">Forensics Tools</h3>
              <p className="text-gray-300 text-sm">Industry-standard investigation tools</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Expert Training</h3>
              <p className="text-gray-300 text-sm">SANS certified instructors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Master Incident Response!</h2>
          <p className="text-xl text-gray-300 mb-8">Become an elite incident handler with GCIH</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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