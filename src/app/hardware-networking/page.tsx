"use client";
import Link from "next/link";

export default function HardwareNetworking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 text-sm font-semibold">🖥️ Foundation Course</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Computer Hardware
            <span className="block text-blue-300">& Networking</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build Your Career in IT Infrastructure - Master Hardware & Networking Fundamentals
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Enroll Now: +91-9522220892
            </a>
            <a href="/pdfs/1) Computer Hardware & Networking x.pdf" download className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Syllabus
            </a>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Course Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our comprehensive Computer Hardware & Networking course provides hands-on training in computer assembly, troubleshooting, network configuration, and IT infrastructure management. Perfect for aspiring IT professionals and career changers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Practical hands-on training</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Industry-recognized certification preparation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Real-world troubleshooting scenarios</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-semibold">Network configuration & management</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Course Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <div className="font-semibold text-white">Duration</div>
                    <div className="text-gray-300">6-8 Weeks (Flexible)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <div className="font-semibold text-white">Level</div>
                    <div className="text-gray-300">Beginner to Intermediate</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="font-semibold text-white">Certification</div>
                    <div className="text-gray-300">Course Completion Certificate</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="font-semibold text-white">Mode</div>
                    <div className="text-gray-300">Online & Classroom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Course Curriculum</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hardware Module */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Computer Hardware</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Computer components & architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Motherboard, CPU, RAM, Storage devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Power supply & cooling systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>PC assembly & disassembly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>BIOS/UEFI configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Peripheral devices & interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Hardware troubleshooting techniques</span>
                </li>
              </ul>
            </div>

            {/* Networking Module */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Networking Fundamentals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Network basics & OSI model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>TCP/IP protocol suite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>IP addressing & subnetting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Network devices (Router, Switch, Hub)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>LAN, WAN, MAN configurations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Network cabling & wireless setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Network troubleshooting & diagnostics</span>
                </li>
              </ul>
            </div>

            {/* Operating Systems */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-300 mb-4">Operating Systems</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Windows installation & configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Linux basics & command line</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Driver installation & updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>System administration tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>User account management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>File system & permissions</span>
                </li>
              </ul>
            </div>

            {/* Security & Maintenance */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Security & Maintenance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>System security fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Antivirus & malware protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Data backup & recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>System performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Preventive maintenance procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Network security basics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Career Opportunities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-2">IT Support Technician</h3>
              <p className="text-gray-300 text-sm">Provide technical support and troubleshooting</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-2">Network Administrator</h3>
              <p className="text-gray-300 text-sm">Manage and maintain network infrastructure</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-2">Hardware Engineer</h3>
              <p className="text-gray-300 text-sm">Assemble, repair, and upgrade computer systems</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold text-white mb-2">System Administrator</h3>
              <p className="text-gray-300 text-sm">Manage servers and IT infrastructure</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Desktop Support Engineer</h3>
              <p className="text-gray-300 text-sm">Resolve end-user technical issues</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-2">Field Service Technician</h3>
              <p className="text-gray-300 text-sm">On-site hardware and network support</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">Start Your IT Career Today!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our comprehensive Hardware & Networking course and build a strong foundation for your IT career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9522220892" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              📞 Call Now: +91-9522220892
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Get Course Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
