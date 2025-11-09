"use client";
import Link from "next/link";

export default function CEH() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-green-300 text-sm font-semibold">🎭 Ethical Hacker</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            CEH v12
            <span className="block text-green-300">Certified Ethical</span>
            <span className="block text-emerald-300">Hacker</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The World&apos;s Most Desired Ethical Hacking Certification
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-16 px-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CEH v12 Certification Overview</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6">About CEH v12</h3>
              <p className="text-gray-300 mb-6">
                The Certified Ethical Hacker (CEH) v12 is the most advanced ethical hacking program that covers the latest attack vectors and techniques used by hackers and information security threats that organizations face today. CEH v12 will train you on the latest commercial-grade hacking tools, techniques, and methodologies used by hackers and information security professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">EC-Council&apos;s flagship certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">Globally recognized ethical hacking standard</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">Latest attack vectors and tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-white">Hands-on practical methodology</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-6">Exam Details - CEH v12</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Questions:</span>
                  <span className="text-white font-semibold">125 questions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white font-semibold">4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Format:</span>
                  <span className="text-white font-semibold">Multiple choice</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Passing Score:</span>
                  <span className="text-white font-semibold">70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost:</span>
                  <span className="text-white font-semibold">$1,199 USD</span>
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

      {/* 20 Modules */}
      <div className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">CEH v12 Course Modules</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Module 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">1. Introduction to Ethical Hacking</h3>
              <p className="text-gray-300 text-sm">Ethical hacking concepts, types of attacks, and hacking phases</p>
            </div>

            {/* Module 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">2. Footprinting and Reconnaissance</h3>
              <p className="text-gray-300 text-sm">Information gathering techniques and OSINT methodologies</p>
            </div>

            {/* Module 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">3. Scanning Networks</h3>
              <p className="text-gray-300 text-sm">Network discovery, port scanning, and vulnerability detection</p>
            </div>

            {/* Module 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">4. Enumeration</h3>
              <p className="text-gray-300 text-sm">Service enumeration and information extraction techniques</p>
            </div>

            {/* Module 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">5. Vulnerability Analysis</h3>
              <p className="text-gray-300 text-sm">Vulnerability assessment tools and methodologies</p>
            </div>

            {/* Module 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">6. System Hacking</h3>
              <p className="text-gray-300 text-sm">Password attacks, privilege escalation, and steganography</p>
            </div>

            {/* Module 7 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">7. Malware Threats</h3>
              <p className="text-gray-300 text-sm">Trojans, viruses, ransomware, and malware analysis</p>
            </div>

            {/* Module 8 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">8. Sniffing</h3>
              <p className="text-gray-300 text-sm">Network sniffing techniques and packet analysis</p>
            </div>

            {/* Module 9 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">9. Social Engineering</h3>
              <p className="text-gray-300 text-sm">Human-based attacks and psychological manipulation</p>
            </div>

            {/* Module 10 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">10. Denial-of-Service</h3>
              <p className="text-gray-300 text-sm">DoS and DDoS attack techniques and countermeasures</p>
            </div>

            {/* Module 11 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">11. Session Hijacking</h3>
              <p className="text-gray-300 text-sm">Session management attacks and prevention</p>
            </div>

            {/* Module 12 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">12. Evading IDS, Firewalls, and Honeypots</h3>
              <p className="text-gray-300 text-sm">Security evasion techniques and bypassing controls</p>
            </div>

            {/* Module 13 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">13. Hacking Web Servers</h3>
              <p className="text-gray-300 text-sm">Web server vulnerabilities and attack vectors</p>
            </div>

            {/* Module 14 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">14. Hacking Web Applications</h3>
              <p className="text-gray-300 text-sm">OWASP Top 10 and web application security testing</p>
            </div>

            {/* Module 15 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">15. SQL Injection</h3>
              <p className="text-gray-300 text-sm">Database attack techniques and exploitation</p>
            </div>

            {/* Module 16 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">16. Hacking Wireless Networks</h3>
              <p className="text-gray-300 text-sm">WiFi security, WEP/WPA cracking, and wireless attacks</p>
            </div>

            {/* Module 17 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">17. Hacking Mobile Platforms</h3>
              <p className="text-gray-300 text-sm">Mobile security, Android/iOS vulnerabilities</p>
            </div>

            {/* Module 18 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">18. IoT and OT Hacking</h3>
              <p className="text-gray-300 text-sm">Internet of Things and operational technology security</p>
            </div>

            {/* Module 19 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">19. Cloud Computing</h3>
              <p className="text-gray-300 text-sm">Cloud security, container attacks, and serverless</p>
            </div>

            {/* Module 20 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">20. Cryptography</h3>
              <p className="text-gray-300 text-sm">Encryption algorithms, PKI, and cryptographic attacks</p>
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
              <h3 className="text-2xl font-bold text-emerald-300 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic understanding of networking concepts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-gray-300">Fundamental knowledge of operating systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-gray-300">Basic security awareness</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-emerald-400 mt-1">💡</span>
                  <span className="text-gray-300">2+ years IT experience recommended</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">💡</span>
                  <span className="text-gray-300">Security+ or equivalent helpful</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-300 mb-6">Target Audience</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security professionals and consultants</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🎯</span>
                  <span className="text-gray-300">Penetration testers and ethical hackers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🎯</span>
                  <span className="text-gray-300">Network and system administrators</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🎯</span>
                  <span className="text-gray-300">Security analysts and auditors</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">🎯</span>
                  <span className="text-gray-300">IT professionals seeking security expertise</span>
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
              <h3 className="text-xl font-bold text-white mb-2">Ethical Hacker Salary</h3>
              <p className="text-gray-300">₹10-30 LPA for CEH professionals in India</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-white mb-2">Hacking Roles</h3>
              <p className="text-gray-300">Ethical Hacker, Security Consultant, Red Team</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Global Recognition</h3>
              <p className="text-gray-300">Most recognized ethical hacking credential</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Program */}
      <div className="py-16 px-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Our CEH v12 Training Program</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
              <p className="text-gray-300 text-sm">Real hacking tools and environments</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-white mb-2">EC-Council Materials</h3>
              <p className="text-gray-300 text-sm">Official courseware and iLabs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚔️</div>
              <h3 className="text-lg font-bold text-white mb-2">Attack Scenarios</h3>
              <p className="text-gray-300 text-sm">Latest hacking techniques</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-lg font-bold text-white mb-2">Ethical Mindset</h3>
              <p className="text-gray-300 text-sm">Professional ethical hacking approach</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Become a Certified Ethical Hacker!</h2>
          <p className="text-xl text-gray-300 mb-8">Master the art of ethical hacking with CEH v12</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
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
