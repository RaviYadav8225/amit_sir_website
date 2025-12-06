'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WebHosting() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('business');

  const hostingPlans = [
    {
      id: 'basic',
      name: 'Starter',
      price: '₹299',
      period: '/month',
      originalPrice: '₹499',
      features: [
        '1 Website',
        '5GB SSD Storage',
        '50GB Bandwidth',
        '1 Email Account',
        'Free SSL Certificate',
        '24/7 Technical Support',
        '99.9% Uptime Guarantee',
        'WordPress Installation'
      ],
      popular: false,
      color: 'blue'
    },
    {
      id: 'business',
      name: 'Professional',
      price: '₹599',
      period: '/month',
      originalPrice: '₹999',
      features: [
        '5 Websites',
        '25GB SSD Storage',
        '200GB Bandwidth',
        '10 Email Accounts',
        'Free SSL Certificate',
        '24/7 Technical Support',
        '99.9% Uptime Guarantee',
        'WordPress Installation',
        'Website Builder',
        'Daily Backups',
        'Free Domain (1 Year)'
      ],
      popular: true,
      color: 'purple'
    },
    {
      id: 'premium',
      name: 'Enterprise',
      price: '₹1199',
      period: '/month',
      originalPrice: '₹1999',
      features: [
        'Unlimited Websites',
        '100GB SSD Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Free SSL Certificate',
        '24/7 Technical Support',
        '99.99% Uptime Guarantee',
        'WordPress Installation',
        'Website Builder',
        'Daily Backups',
        'Free Domain (1 Year)',
        'Dedicated IP',
        'Priority Support',
        'Advanced Security'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast Speed',
      description: 'SSD storage and optimized servers ensure your website loads quickly'
    },
    {
      icon: '🔒',
      title: 'Enhanced Security',
      description: 'Free SSL certificates and advanced security measures protect your data'
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'All hosting plans include mobile-responsive website templates'
    },
    {
      icon: '🔧',
      title: 'Easy Management',
      description: 'User-friendly control panel for effortless website management'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock technical support from our expert team'
    },
    {
      icon: '⚡',
      title: '99.9% Uptime',
      description: 'Reliable hosting infrastructure ensures maximum website availability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Web Hosting
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Reliable, fast, and secure web hosting solutions powered by cutting-edge technology. 
            Get your website online with 99.9% uptime guarantee and 24/7 expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              View Plans
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Why Choose Our Hosting?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing-section" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300">Affordable hosting solutions for every need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-400 bg-purple-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <div className="text-gray-400">
                      <div className="line-through text-sm">{plan.originalPrice}</div>
                      <div className="text-sm">{plan.period}</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-semibold">
                    Save {Math.round((1 - parseInt(plan.price.replace('₹', '')) / parseInt(plan.originalPrice.replace('₹', ''))) * 100)}%
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 font-bold rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Latest PHP</h3>
              <p className="text-gray-300">PHP 8.1+ Support</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗄️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">MySQL Database</h3>
              <p className="text-gray-300">MySQL 8.0+</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">CDN Integration</h3>
              <p className="text-gray-300">Global Content Delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Advanced Security</h3>
              <p className="text-gray-300">DDoS Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">24/7 Expert Support</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our technical support team is available round the clock to help you with any hosting-related queries. 
            Get assistance via phone, email, or live chat.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300">+91-9522220892</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-gray-300">info@litcindore.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who trust our hosting services. 
              Get your website online today with our reliable hosting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Start Your Website
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}