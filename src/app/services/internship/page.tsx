'use client';
import { useState } from 'react';

export default function InternshipPrograms() {
  const [selectedTrack, setSelectedTrack] = useState('fullstack');

  const internshipTracks = [
    {
      id: 'fullstack',
      name: 'Full Stack Development',
      duration: '6 Months',
      stipend: '₹8,000 - ₹15,000',
      icon: '💻',
      description: 'Master frontend and backend development with modern technologies',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
      projects: [
        'E-commerce Web Application',
        'Real-time Chat Application',
        'Portfolio Website',
        'REST API Development'
      ],
      requirements: [
        'Basic programming knowledge',
        'Understanding of web fundamentals',
        'Commitment to 6-month program'
      ],
      color: 'blue'
    },
    {
      id: 'devops',
      name: 'DevOps Engineering',
      duration: '6 Months',
      stipend: '₹10,000 - ₹18,000',
      icon: '⚙️',
      description: 'Learn CI/CD, containerization, and cloud infrastructure management',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Linux'],
      projects: [
        'Automated CI/CD Pipeline',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging Setup'
      ],
      requirements: [
        'Basic Linux knowledge',
        'Understanding of software development',
        'Interest in automation'
      ],
      color: 'green'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Analyst',
      duration: '6 Months',
      stipend: '₹9,000 - ₹16,000',
      icon: '🔒',
      description: 'Develop skills in ethical hacking, security analysis, and threat detection',
      technologies: ['Kali Linux', 'Nmap', 'Wireshark', 'Metasploit', 'Python', 'SIEM Tools'],
      projects: [
        'Vulnerability Assessment',
        'Penetration Testing Report',
        'Security Monitoring Dashboard',
        'Incident Response Plan'
      ],
      requirements: [
        'Basic networking knowledge',
        'Interest in cybersecurity',
        'Ethical mindset'
      ],
      color: 'red'
    },
    {
      id: 'dataScience',
      name: 'Data Science & AI',
      duration: '6 Months',
      stipend: '₹12,000 - ₹20,000',
      icon: '📊',
      description: 'Master data analysis, machine learning, and artificial intelligence',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'SQL'],
      projects: [
        'Predictive Analytics Model',
        'Data Visualization Dashboard',
        'Machine Learning Pipeline',
        'AI Chatbot Development'
      ],
      requirements: [
        'Basic programming skills',
        'Mathematical aptitude',
        'Analytical mindset'
      ],
      color: 'purple'
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Paid Internship',
      description: 'Earn while you learn with competitive stipends ranging from ₹8,000 to ₹20,000'
    },
    {
      icon: '🎓',
      title: 'Industry Certification',
      description: 'Receive recognized certifications upon successful completion of the program'
    },
    {
      icon: '👨‍💼',
      title: 'Mentorship',
      description: 'Get guidance from experienced industry professionals and senior developers'
    },
    {
      icon: '🚀',
      title: 'Job Placement',
      description: '90% placement rate with our extensive network of partner companies'
    },
    {
      icon: '💼',
      title: 'Real Projects',
      description: 'Work on live projects and build a portfolio that showcases your skills'
    },
    {
      icon: '🌐',
      title: 'Remote/Hybrid',
      description: 'Flexible working arrangements with both remote and on-site opportunities'
    }
  ];

  const companies = [
    { name: 'TCS', logo: '🏢' },
    { name: 'Infosys', logo: '💼' },
    { name: 'Wipro', logo: '🌟' },
    { name: 'Tech Mahindra', logo: '⚡' },
    { name: 'Accenture', logo: '🔷' },
    { name: 'Cognizant', logo: '🎯' }
  ];

  const applicationProcess = [
    {
      step: '01',
      title: 'Online Application',
      description: 'Submit your application with resume and cover letter'
    },
    {
      step: '02',
      title: 'Technical Assessment',
      description: 'Complete online coding/technical assessment'
    },
    {
      step: '03',
      title: 'Interview',
      description: 'Technical and HR interview rounds'
    },
    {
      step: '04',
      title: 'Onboarding',
      description: 'Program orientation and mentor assignment'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Internship
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Programs
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Launch your tech career with our comprehensive internship programs. 
            Gain hands-on experience, earn while you learn, and get guaranteed job placement assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Apply Now
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Why Choose Our Internship?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Tracks */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Choose Your Track</h2>
            <p className="text-xl text-gray-300">Specialized internship programs in high-demand tech domains</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {internshipTracks.map((track) => (
              <div
                key={track.id}
                className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                  selectedTrack === track.id 
                    ? 'border-indigo-400 bg-indigo-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{track.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{track.name}</h3>
                    <p className="text-gray-300 mb-4">{track.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                        📅 {track.duration}
                      </span>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                        💰 {track.stipend}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies You'll Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Projects You'll Build</h4>
                    <ul className="space-y-2">
                      {track.projects.map((project, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {track.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all"
                  onClick={() => setSelectedTrack(track.id)}
                >
                  Apply for {track.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Application Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">
            Our Hiring Partners
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get placed in top companies after successful completion of your internship
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-4xl mb-2">{company.logo}</div>
                <p className="text-white font-semibold">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-black text-indigo-400 mb-2">500+</div>
              <p className="text-white font-semibold">Successful Interns</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-black text-purple-400 mb-2">90%</div>
              <p className="text-white font-semibold">Placement Rate</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-black text-green-400 mb-2">50+</div>
              <p className="text-white font-semibold">Partner Companies</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-black text-blue-400 mb-2">₹15K</div>
              <p className="text-white font-semibold">Average Stipend</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Start Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our internship program and get the practical experience you need to succeed in the tech industry. 
              Limited seats available - apply now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Apply for Internship
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                Talk to Counselor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}