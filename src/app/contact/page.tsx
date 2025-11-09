'use client';
import { useState } from 'react';
import CampusVisitModal from '../components/CampusVisitModal';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCampusVisitModalOpen, setIsCampusVisitModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // If user selects "campus-visit", open the modal
    if (name === 'service' && value === 'campus-visit') {
      setIsCampusVisitModalOpen(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('📧 Sending contact form message to yyradhe751@gmail.com...');
      
      // Send to Resend API
      const response = await fetch('/api/contact-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          requestId: `CONTACT-${Date.now()}`
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('✅ Message sent successfully to yyradhe751@gmail.com');
        alert(`✅ Thank you ${formData.name}! Your message has been sent successfully.\n\n📧 We've received your ${formData.service} inquiry and will respond within 24 hours.\n\n📱 For urgent matters, call: +91-9425094250`);
      } else {
        console.log('⚠️ Message delivery issue:', result);
        alert(`⚠️ There was an issue sending your message.\n\n📞 Please call us directly: +91-9425094250\n📧 Or email: yyradhe751@gmail.com`);
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'general'
      });
      
    } catch (error) {
      console.error('❌ Contact form error:', error);
      alert(`❌ Unable to send message online.\n\n📞 Please contact us directly:\nPhone: +91-9425094250\nEmail: yyradhe751@gmail.com`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Campus',
      details: [
        'LITC Institute',
        'P13-14, Ground Floor, Metro Tower',
        'Vijay Nagar, Indore, MP - 452010'
      ],
      color: 'blue'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: [
        '+91-9425094250',
        '+91-731-4567890',
        'Mon-Sat: 9:00 AM - 7:00 PM'
      ],
      color: 'green'
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: [
        'info@litcinstitute.com',
        'admissions@litcinstitute.com',
        'support@litcinstitute.com'
      ],
      color: 'purple'
    },
    {
      icon: '🌐',
      title: 'Follow Us',
      details: [
        'Facebook: /LITCInstitute',
        'LinkedIn: /company/litc',
        'Instagram: @litc_institute'
      ],
      color: 'orange'
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      phone: '+91-9425094250',
      email: 'admissions@litcinstitute.com',
      timing: '9:00 AM - 6:00 PM',
      icon: '🎓'
    },
    {
      name: 'Technical Support',
      phone: '+91-731-4567891',
      email: 'support@litcinstitute.com',
      timing: '24/7 Available',
      icon: '🔧'
    },
    {
      name: 'Career Counseling',
      phone: '+91-731-4567892',
      email: 'counselor@litcinstitute.com',
      timing: '10:00 AM - 5:00 PM',
      icon: '💼'
    },
    {
      name: 'Corporate Training',
      phone: '+91-731-4567893',
      email: 'corporate@litcinstitute.com',
      timing: '9:00 AM - 6:00 PM',
      icon: '🏢'
    }
  ];

  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Basic computer knowledge and 12th pass certificate. Specific requirements vary by course.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we have a dedicated placement cell with 90%+ placement rate and partnerships with 200+ companies.'
    },
    {
      question: 'Are online classes available?',
      answer: 'Yes, we offer hybrid learning with both online and offline class options for most courses.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fees vary by course. We offer flexible payment options and scholarship programs for deserving students.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Contact
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with us for admissions, course information, career guidance, 
            or any other queries. We're here to help you start your tech journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsCampusVisitModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Schedule Campus Visit
            </button>
            <a 
              href="tel:+919425094250"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-center"
            >
              Call Now: +91-9425094250
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-black text-white mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Inquiry Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      title="Select inquiry type"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-all [&>option]:bg-slate-800 [&>option]:text-white [&>option]:py-2"
                    >
                      <option value="general" className="bg-slate-800 text-white py-2">General Inquiry</option>
                      <option value="course-info" className="bg-slate-800 text-white py-2">Course Information</option>
                      <option value="admission" className="bg-slate-800 text-white py-2">Admission Process</option>
                      <option value="fees" className="bg-slate-800 text-white py-2">Fee Structure</option>
                      <option value="placement" className="bg-slate-800 text-white py-2">Job Placement</option>
                      <option value="internship" className="bg-slate-800 text-white py-2">Internship Programs</option>
                      <option value="corporate" className="bg-slate-800 text-white py-2">Corporate Training</option>
                      <option value="web-hosting" className="bg-slate-800 text-white py-2">Web Hosting Services</option>
                      <option value="web-development" className="bg-slate-800 text-white py-2">Web Development Services</option>
                      <option value="counseling" className="bg-slate-800 text-white py-2">Career Counseling</option>
                      <option value="campus-visit" className="bg-slate-800 text-white py-2">Campus Visit</option>
                      <option value="technical-support" className="bg-slate-800 text-white py-2">Technical Support</option>
                      <option value="other" className="bg-slate-800 text-white py-2">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map & Location */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-black text-white mb-6">Visit Our Campus</h3>
              
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl h-64 mb-6 flex items-center justify-center border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8837446!2d75.8946308!3d22.753419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303e173f89509%3A0x718ea945f76a48d0!2sInsta%20Dot%20Analytics!5e0!3m2!1sen!2sin!4v1697702400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0 rounded-2xl"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LITC Institute Location - P13-14, Ground Floor, Metro Tower, Vijay Nagar, Indore, MP"
                ></iframe>
                {/* Fallback content if map doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-white font-semibold">LITC Institute</p>
                    <p className="text-gray-300 text-sm">Metro Tower, near Mangal City</p>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-xl">📍</div>
                  <div>
                    <h4 className="text-white font-semibold">Address</h4>
                    <p className="text-gray-300 text-sm">
                      LITC Institute<br />
                      P13-14, Ground Floor, Metro Tower<br />
                      Vijay Nagar, Scheme No 54<br />
                      Indore, Madhya Pradesh - 452010
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-xl">🚗</div>
                  <div>
                    <h4 className="text-white font-semibold">Directions</h4>
                    <p className="text-gray-300 text-sm">
                      Located at P13-14, Ground Floor, Metro Tower in Vijay Nagar, Scheme No 54. Easily accessible by public transport and taxi services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-xl">🅿️</div>
                  <div>
                    <h4 className="text-white font-semibold">Parking</h4>
                    <p className="text-gray-300 text-sm">
                      Free parking available for students and visitors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const url = 'https://www.google.com/maps/dir//P13-14,+Ground+Floor,+Insta+Dot+Analytics,+Metro+Tower,+Vijay+Nagar,+Scheme+No+54,+Indore,+Madhya+Pradesh+452010/@22.753419,75.8946308,17z/data=!3m1!5s0x396302aaf1322bd9:0xd965efb8f19eb536!4m16!1m7!3m6!1s0x396303e173f89509:0x718ea945f76a48d0!2sInsta+Dot+Analytics!8m2!3d22.7534141!4d75.8972057!16s%2Fg%2F11rn3sxbtd!4m7!1m0!1m5!1m1!1s0x396303e173f89509:0x718ea945f76a48d0!2m2!1d75.8972057!2d22.7534141?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D';
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                  className="relative z-20 w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all cursor-pointer touch-manipulation active:scale-95"
                >
                  Get Directions on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Department Contacts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{dept.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{dept.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">📞</span>
                        <span className="text-gray-300">{dept.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400">📧</span>
                        <span className="text-gray-300">{dept.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">⏰</span>
                        <span className="text-gray-300">{dept.timing}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">❓ {faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait! Contact us today to discuss your career goals and find the perfect course for you. 
              Our admission counselors are ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all transform hover:scale-105">
                Book Free Counseling
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Visit Modal */}
      <CampusVisitModal 
        isOpen={isCampusVisitModalOpen} 
        onClose={() => setIsCampusVisitModalOpen(false)} 
      />
    </div>
  );
}