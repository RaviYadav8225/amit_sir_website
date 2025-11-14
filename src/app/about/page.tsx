"use client";

import { useEffect, useRef } from "react";

const icons = {
  training: (
    <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 2.485-2.239 4.5-5 4.5s-5-2.015-5-4.5c0-.638.12-1.247.34-1.822L12 14z" /></svg>
  ),
  instructor: (
    <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.304.534 6.121 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  job: (
    <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>
  ),
  placement: (
    <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4.13a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
  ),
};

function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const el = ref.current;
    if (!el) return;
    el.textContent = "0";
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toString();
        clearInterval(timer);
      } else {
        el.textContent = current.toString();
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return ref;
}

export default function AboutPage() {
  const studentsRef = useCountUp(10000);
  const coursesRef = useCountUp(50);
  const yearsRef = useCountUp(15);
  const partnersRef = useCountUp(100);
  const placementRef = useCountUp(95);
  const instructorsRef = useCountUp(25);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About LITC Institute
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Transforming careers through industry-leading IT training and certifications. 
              Your gateway to success in Cloud Computing, Cybersecurity, DevOps, and Microsoft Technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                LITC Institute is Indore's premier IT training destination, specializing in cutting-edge technology certifications. 
                We bridge the gap between academic learning and industry requirements through hands-on, practical training methodologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="text-2xl font-bold text-blue-200">100%</div>
                  <div className="text-sm text-blue-100">Practical Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="text-2xl font-bold text-blue-200">24/7</div>
                  <div className="text-sm text-blue-100">Lab Access</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="LITC Institute Training" 
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose LITC Institute?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our unique approach to IT education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-3xl">📚</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">100% Practical Training</h3>
              <p className="text-gray-600">Hands-on learning with real-world projects and live lab environments. No theoretical mumbo-jumbo.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-3xl">👨‍🏫</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Industry Experts</h3>
              <p className="text-gray-600">Learn from certified professionals with years of industry experience and real-world expertise.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-3xl">🏆</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Global Certifications</h3>
              <p className="text-gray-600">Prepare for internationally recognized certifications from AWS, Microsoft, Red Hat, and more.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-3xl">💼</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Career Support</h3>
              <p className="text-gray-600">Comprehensive placement assistance with resume building, interview preparation, and job referrals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Transforming careers and building futures across India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <span ref={studentsRef} className="text-4xl font-bold text-blue-600 block" />
              <span className="text-gray-600 mt-2 block text-sm">Students Trained</span>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <span ref={coursesRef} className="text-4xl font-bold text-emerald-600 block" />
              <span className="text-gray-600 mt-2 block text-sm">Courses Offered</span>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <span ref={placementRef} className="text-4xl font-bold text-purple-600 block" />
              <span className="text-gray-600 mt-2 block text-sm">% Placement Rate</span>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <span ref={partnersRef} className="text-4xl font-bold text-orange-600 block" />
              <span className="text-gray-600 mt-2 block text-sm">Industry Partners</span>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <span ref={instructorsRef} className="text-4xl font-bold text-red-600 block" />
              <span className="text-gray-600 mt-2 block text-sm">Expert Instructors</span>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <span ref={yearsRef} className="text-4xl font-bold text-indigo-600 block" />
              <span className="text-gray-600 mt-2 block text-sm">Years Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Domains Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Training Domains</h2>
            <p className="text-xl text-blue-200">Comprehensive coverage of modern IT technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">☁️</div>
                <h3 className="text-xl font-bold">Cloud Computing</h3>
              </div>
              <p className="text-blue-100 mb-4">AWS, Microsoft Azure, Google Cloud Platform certifications and training.</p>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>• AWS Solutions Architect</li>
                <li>• Azure Administrator</li>
                <li>• Cloud Security</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🔒</div>
                <h3 className="text-xl font-bold">Cybersecurity</h3>
              </div>
              <p className="text-blue-100 mb-4">Comprehensive security training and ethical hacking programs.</p>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>• CCST Networking</li>
                <li>• Certified Ethical Hacker</li>
                <li>• Security Best Practices</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">⚙️</div>
                <h3 className="text-xl font-bold">DevOps & Automation</h3>
              </div>
              <p className="text-blue-100 mb-4">Modern DevOps practices, CI/CD, and infrastructure automation.</p>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>• Jenkins & GitLab</li>
                <li>• Docker & Kubernetes</li>
                <li>• Terraform & Ansible</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">💻</div>
                <h3 className="text-xl font-bold">Microsoft Technologies</h3>
              </div>
              <p className="text-blue-100 mb-4">Complete Microsoft ecosystem training and certifications.</p>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>• Azure Fundamentals</li>
                <li>• Microsoft 365</li>
                <li>• Teams Administration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission & Vision</h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">🎯 Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower individuals and organizations with cutting-edge IT skills through practical, 
                    industry-relevant training that bridges the gap between education and employment.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">🚀 Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be India's leading IT training institute, recognized for excellence in education, 
                    innovation in teaching methodologies, and success in career transformation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" 
                alt="LITC Vision" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful professionals who started their journey with LITC Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/explore-courses" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-block">
              Explore Courses
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
