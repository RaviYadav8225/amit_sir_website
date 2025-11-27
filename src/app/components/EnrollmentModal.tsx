'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseData?: {
    name: string;
    code: string;
    price: string;
    originalPrice: string;
    duration: string;
    level: string;
    discount: string;
  };
}

interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  batchTiming: string;
  paymentPlan: string;
  referralSource: string;
}

export default function EnrollmentModal({ isOpen, onClose, courseData }: EnrollmentModalProps) {
  const [enrollmentStep, setEnrollmentStep] = useState<'options' | 'form'>('options');
  const [formData, setFormData] = useState<EnrollmentFormData>({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: 'fresher',
    batchTiming: 'weekday-morning',
    paymentPlan: 'full',
    referralSource: 'google'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickEnroll = () => {
    setEnrollmentStep('form');
  };

  const handleWhatsAppEnroll = () => {
    const message = `Hi! I want to enroll in *${courseData?.name || 'Course'}*

📚 Course Code: ${courseData?.code || 'N/A'}
💰 Price: ${courseData?.price || 'N/A'} (${courseData?.discount || 'N/A'} discount)
⏰ Duration: ${courseData?.duration || 'N/A'}

Please guide me with the enrollment process and payment options.

Thank you! 🙏`;

    const whatsappUrl = `https://wa.me/918225852734?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleCallEnroll = () => {
    window.location.href = 'tel:+919522220892';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('🎓 Processing enrollment...');

      const response = await fetch('/api/course-enrollment-final', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          course: courseData,
          submittedAt: new Date().toISOString(),
          enrollmentId: `ENR-${Date.now()}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('✅ Enrollment successful!');
        alert(`🎉 Enrollment Request Received Successfully!

✅ Payment Email Sent!

📧 Check your email: ${formData.email}

� Payment Instructions:
1. Open the email we just sent you
2. Scan the UPI QR code
3. Pay ₹${courseData?.price || 'Course Fee'}
4. Take screenshot of payment confirmation
5. Send screenshot via:
   📱 WhatsApp: 8225852734
   📧 Email: yyradhe751@gmail.com

⏰ Confirmation:
You will receive enrollment confirmation within 2 hours after payment verification.

📞 Need help?
Call: +91-9522220892

Thank you for choosing LITC Institute! 🎓`);
        
        // Reset and close
        setFormData({
          name: '',
          email: '',
          phone: '',
          education: '',
          experience: 'fresher',
          batchTiming: 'weekday-morning',
          paymentPlan: 'full',
          referralSource: 'google'
        });
        setEnrollmentStep('options');
        onClose();
      } else {
        console.error('❌ Enrollment failed:', result);
        alert(`⚠️ Unable to process enrollment online.\n\n📞 Please contact us directly:\nPhone: +91-9522220892\nWhatsApp: +91-8225852734\nEmail: yyradhe751@gmail.com`);
      }
    } catch (error) {
      console.error('❌ Enrollment error:', error);
      alert(`❌ Enrollment failed.\n\n📞 Please reach out to us:\nPhone: +91-9522220892\nWhatsApp: +91-8225852734`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] flex items-start justify-center pt-4 sm:pt-6 md:pt-8 pb-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      style={{ paddingLeft: 'max(1rem, env(safe-area-inset-left))', paddingRight: 'max(1rem, env(safe-area-inset-right))' }}
      onClick={() => {
        setEnrollmentStep('options');
        onClose();
      }}
    >
      <div 
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl shadow-2xl w-full max-w-3xl mx-auto mb-4 border border-blue-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setEnrollmentStep('options');
            onClose();
          }}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all"
        >
          <span className="text-white text-2xl">×</span>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-8 border-b border-white/10">
          <div className="text-5xl mb-4 text-center">🎓</div>
          <h2 className="text-3xl font-black text-white text-center mb-2">
            Enroll in Course
          </h2>
          {courseData && (
            <div className="text-center">
              <p className="text-xl text-white font-bold mb-2">{courseData.name}</p>
              <p className="text-gray-400 mt-2">⏰ {courseData.duration} • 📊 {courseData.level}</p>
            </div>
          )}
        </div>

        {/* Content */}
        {enrollmentStep === 'options' ? (
          // Enrollment Options
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Choose Your Enrollment Method
            </h3>
            <p className="text-gray-300 text-center mb-8">
              Select the most convenient way to enroll in this course
            </p>

            <div className="space-y-4">
              {/* Option 1: Quick Online Enrollment */}
              <button
                onClick={handleQuickEnroll}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-6 rounded-2xl text-left transition-all transform hover:scale-[1.02] border-2 border-transparent hover:border-blue-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎓</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Quick Enroll Online</h4>
                    <p className="text-gray-200 text-sm mb-3">
                      Fill a quick form and get instant enrollment confirmation with payment link via email
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">⚡ Instant</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">📧 Email Confirmation</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">💳 Payment Link</span>
                    </div>
                  </div>
                  <div className="text-white text-2xl">→</div>
                </div>
              </button>

              {/* Option 2: WhatsApp Enrollment */}
              <button
                onClick={handleWhatsAppEnroll}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 p-6 rounded-2xl text-left transition-all transform hover:scale-[1.02] border-2 border-transparent hover:border-green-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💬</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Enroll via WhatsApp</h4>
                    <p className="text-gray-200 text-sm mb-3">
                      Chat with our admission counselor for personalized guidance and instant support
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">💬 Personal Touch</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">🤝 Live Support</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">⚡ Quick Response</span>
                    </div>
                  </div>
                  <div className="text-white text-2xl">→</div>
                </div>
              </button>

              {/* Option 3: Call to Enroll */}
              <button
                onClick={handleCallEnroll}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 p-6 rounded-2xl text-left transition-all transform hover:scale-[1.02] border-2 border-transparent hover:border-orange-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📞</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Call to Enroll</h4>
                    <p className="text-gray-200 text-sm mb-3">
                      Speak directly with our admission team for detailed information and assistance
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">📞 +91-9522220892</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">🕒 Mon-Sat 9AM-7PM</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white">🎯 Direct Support</span>
                    </div>
                  </div>
                  <div className="text-white text-2xl">→</div>
                </div>
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <span>💡</span> Why Choose LITC Institute?
              </h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Expert trainers with industry experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Hands-on practical training</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Job placement assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Flexible batch timings</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Quick Enrollment Form
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="text-center mb-6">
              <button
                type="button"
                onClick={() => setEnrollmentStep('options')}
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2 mx-auto"
              >
                <span>←</span> Back to enrollment options
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Quick Enrollment Form</h3>

            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>👤</span> Personal Information
              </h4>

              <div>
                <label className="block text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Current Education/Job *</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., B.Tech CSE, Software Developer, etc."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>

            {/* Course Preferences */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>⚙️</span> Course Preferences
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    title="Select experience level"
                    className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer hover:border-blue-400"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="fresher" className="bg-slate-800 text-white py-2">Fresher / Beginner</option>
                    <option value="intermediate" className="bg-slate-800 text-white py-2">Intermediate (1-3 years)</option>
                    <option value="experienced" className="bg-slate-800 text-white py-2">Experienced (3+ years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Preferred Batch Timing</label>
                  <select
                    name="batchTiming"
                    value={formData.batchTiming}
                    onChange={handleInputChange}
                    title="Select preferred batch timing"
                    className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer hover:border-blue-400"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="weekday-morning" className="bg-slate-800 text-white py-2">Weekday Morning (9 AM - 12 PM)</option>
                    <option value="weekday-afternoon" className="bg-slate-800 text-white py-2">Weekday Afternoon (2 PM - 5 PM)</option>
                    <option value="weekday-evening" className="bg-slate-800 text-white py-2">Weekday Evening (6 PM - 9 PM)</option>
                    <option value="weekend" className="bg-slate-800 text-white py-2">Weekend (Sat-Sun)</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Payment Plan</label>
                  <select
                    name="paymentPlan"
                    value={formData.paymentPlan}
                    onChange={handleInputChange}
                    title="Select payment plan"
                    className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer hover:border-blue-400"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="full" className="bg-slate-800 text-white py-2">Full Payment (Extra 5% discount)</option>
                    <option value="installment-2" className="bg-slate-800 text-white py-2">2 Installments</option>
                    <option value="installment-3" className="bg-slate-800 text-white py-2">3 Installments</option>
                    <option value="emi" className="bg-slate-800 text-white py-2">EMI Available</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">How did you hear about us?</label>
                  <select
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleInputChange}
                    title="Select referral source"
                    className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer hover:border-blue-400"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="google" className="bg-slate-800 text-white py-2">Google Search</option>
                    <option value="social-media" className="bg-slate-800 text-white py-2">Social Media</option>
                    <option value="friend" className="bg-slate-800 text-white py-2">Friend/Family Referral</option>
                    <option value="advertisement" className="bg-slate-800 text-white py-2">Advertisement</option>
                    <option value="other" className="bg-slate-800 text-white py-2">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-400">📌 Note:</strong> After submitting, you'll receive a confirmation email with a secure payment link. Complete the payment to confirm your enrollment.
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setEnrollmentStep('options');
                }}
                className="flex-1 px-6 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>🎓</span>
                    <span>Complete Enrollment</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
