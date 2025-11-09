'use client';
import { useState } from 'react';

export default function WebDevelopment() {
  const [selectedService, setSelectedService] = useState('custom');

  const webServices = [
    {
      id: 'custom',
      name: 'Custom Web Development',
      price: '₹25,000',
      timeline: '4-6 weeks',
      icon: '🎨',
      description: 'Fully customized websites built from scratch according to your specific requirements',
      features: [
        'Custom Design & UI/UX',
        'Responsive Development',
        'SEO Optimization',
        'Content Management System',
        'Contact Forms & Integration',
        'Social Media Integration',
        'Google Analytics Setup',
        'Mobile-First Approach',
        '3 Months Free Support',
        'Domain & Hosting Setup'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
      popular: true
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Development',
      price: '₹45,000',
      timeline: '6-8 weeks',
      icon: '🛒',
      description: 'Complete online store solutions with payment gateway and inventory management',
      features: [
        'Product Catalog Management',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Management System',
        'Customer Account Portal',
        'Admin Dashboard',
        'SEO & Marketing Tools',
        'Mobile Responsive Design',
        '6 Months Free Support'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'PayPal'],
      popular: false
    },
    {
      id: 'business',
      name: 'Business Website',
      price: '₹15,000',
      timeline: '2-3 weeks',
      icon: '💼',
      description: 'Professional business websites to establish your online presence',
      features: [
        'Professional Design',
        'About & Services Pages',
        'Contact Information',
        'Photo Gallery',
        'Testimonials Section',
        'Google Maps Integration',
        'Basic SEO Setup',
        'Mobile Responsive',
        '1 Month Free Support',
        'Social Media Links'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
      popular: false
    },
    {
      id: 'webapp',
      name: 'Web Application',
      price: '₹65,000',
      timeline: '8-12 weeks',
      icon: '⚡',
      description: 'Complex web applications with advanced functionality and database integration',
      features: [
        'Custom Functionality',
        'User Authentication',
        'Database Integration',
        'API Development',
        'Real-time Features',
        'Admin Panel',
        'Advanced Security',
        'Performance Optimization',
        'Cloud Deployment',
        '12 Months Free Support'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Socket.io'],
      popular: false
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'Understanding your business needs and project requirements',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Creating wireframes, mockups, and project timeline',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your website with clean, efficient code',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Quality assurance, testing, and deployment',
      icon: '🚀'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Modern frontend framework' },
    { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database' },
    { name: 'MySQL', icon: '🐬', description: 'Relational database' },
    { name: 'AWS', icon: '☁️', description: 'Cloud hosting' },
    { name: 'WordPress', icon: '📝', description: 'Content management' }
  ];

  const portfolioProjects = [
    {
      name: 'E-Learning Platform',
      type: 'Web Application',
      image: '🎓',
      description: 'Complete online learning management system with video streaming and progress tracking'
    },
    {
      name: 'Restaurant Website',
      type: 'Business Website',
      image: '🍽️',
      description: 'Modern restaurant website with online menu and reservation system'
    },
    {
      name: 'E-Commerce Store',
      type: 'Online Store',
      image: '🛍️',
      description: 'Full-featured online store with payment gateway and inventory management'
    },
    {
      name: 'Healthcare Portal',
      type: 'Web Application',
      image: '🏥',
      description: 'Patient management system with appointment booking and medical records'
    }
  ];

  const whyChooseUs = [
    {
      icon: '👨‍💻',
      title: 'Expert Developers',
      description: 'Experienced team with 5+ years in web development'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick turnaround time without compromising on quality'
    },
    {
      icon: '📱',
      title: 'Mobile-First',
      description: 'All websites are optimized for mobile devices'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with security best practices and reliable hosting'
    },
    {
      icon: '💬',
      title: 'Ongoing Support',
      description: 'Continuous support and maintenance after project completion'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive pricing with transparent cost structure'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Web
            <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your ideas into powerful web solutions. We create modern, responsive, 
            and user-friendly websites that drive business growth and engage your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all transform hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Why Choose Our Web Development Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-300">Choose the perfect solution for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {webServices.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                  service.popular 
                    ? 'border-emerald-400 bg-emerald-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">
                        💰 Starting {service.price}
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                        ⏱️ {service.timeline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  className="w-full mt-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all"
                  onClick={() => setSelectedService(service.id)}
                >
                  Get Started with {service.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{process.icon}</span>
                </div>
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Technologies We Use
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Our Recent Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-12">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-2">💼</div>
              <div className="text-2xl font-black text-white mb-1">₹15,000</div>
              <p className="text-gray-300">Business Website</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-2xl font-black text-white mb-1">₹25,000</div>
              <p className="text-gray-300">Custom Development</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-2">🛒</div>
              <div className="text-2xl font-black text-white mb-1">₹45,000</div>
              <p className="text-gray-300">E-Commerce Store</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-black text-white mb-1">₹65,000</div>
              <p className="text-gray-300">Web Application</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create a stunning web presence for your business. 
              Get a free consultation and project quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all transform hover:scale-105">
                Get Free Quote
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}