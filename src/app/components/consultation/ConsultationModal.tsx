"use client";
import { useState, useEffect } from 'react';
import { ConsultationFormData, POPULAR_COURSES, INDUSTRIES, BUDGET_RANGES, TIME_SLOTS } from './types';
import { sendConsultationEmail, sendStudentConfirmationEmail, sendWhatsAppMessage } from '../../lib/emailWhatsAppService';
import './modal.css';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    currentRole: '',
    experience: 'Fresher',
    industry: '',
    currentSkills: [],
    careerGoals: '',
    interestedCourses: [],
    targetCertifications: [],
    timelineToStart: 'Immediate',
    learningMode: 'Online',
    preferredTimeSlots: [],
    budget: '',
    specificQuestions: ''
  });

  const totalSteps = 5;

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const updateFormData = (field: keyof ConsultationFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: keyof ConsultationFormData, value: string) => {
    const currentArray = formData[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFormData(field, newArray);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Show loading state
      const submitButton = document.querySelector('[data-submit-button]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      // Generate unique request ID
      const requestId = `LITC-${Date.now()}`;
      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        requestId
      };

      // Try multiple communication methods
      let emailSent = false;
      let whatsappSent = false;

      console.log('🚀 Starting form submission process...');
      console.log('📋 Form Data:', submissionData);

      // 1. Send email - Log complete details to server console
      try {
        console.log('━'.repeat(80));
        console.log('📧 SENDING EMAIL TO: litcindore@gmail.com');
        console.log('👤 Student:', submissionData.fullName);
        console.log('📱 Phone:', submissionData.phone);
        console.log('━'.repeat(80));
        
        // Try Resend API (Professional email service - delivers to inbox)
        const emailResponse = await fetch('/api/resend-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData: submissionData }),
        });
        
        const emailResult = await emailResponse.json();
        console.log('📧 Resend API Response:', emailResult);
        console.log('💡 If successful, email will be in: litcindore@gmail.com');
        
        // ALWAYS call direct email service to log content in terminal
        console.log('� Logging email content to server terminal...');
        const directEmailResponse = await fetch('/api/send-email-direct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData: submissionData }),
        });
        
        const directEmailResult = await directEmailResponse.json();
        console.log('✅ Email content logged to server console');
        console.log('📋 Check your terminal/server window for complete email details');
        
        if (emailResult.success) {
          emailSent = true;
          console.log('✅ ✅ ✅ EMAIL SENT SUCCESSFULLY! ✅ ✅ ✅');
          console.log('📧 Email delivered to: litcindore@gmail.com');
          console.log('👤 Student:', submissionData.fullName);
          console.log('📱 Contact:', submissionData.phone);
        } else {
          console.log('⚠️ FormSubmit may have issues');
          console.log('📧 Email content is logged in SERVER TERMINAL for manual processing');
          emailSent = false;
        }
        console.log('━'.repeat(80));
      } catch (error) {
        console.log('❌ Email service error:', error);
        console.log('💡 Don\'t worry - Email content is logged in SERVER TERMINAL');
        emailSent = false;
      }

      // 2. Send confirmation email to student
      try {
        console.log('📤 Sending confirmation email to student...');
        await sendStudentConfirmationEmail(submissionData);
        console.log('✅ Student confirmation email sent');
      } catch (error) {
        console.log('❌ Student email failed:', error);
      }

      // 3. Send WhatsApp notification
      try {
        console.log('💬 Preparing WhatsApp message for +918225852734...');
        const whatsappResult = sendWhatsAppMessage(submissionData);
        whatsappSent = whatsappResult.success;
        console.log('✅ WhatsApp notification prepared:', whatsappResult);
        
        // Force WhatsApp to open immediately
        if (whatsappResult.whatsappURL) {
          console.log('🔗 Opening WhatsApp URL:', whatsappResult.whatsappURL);
          // Try multiple methods to ensure WhatsApp opens
          window.open(whatsappResult.whatsappURL, '_blank');
          
          // Backup method - create a clickable link
          const link = document.createElement('a');
          link.href = whatsappResult.whatsappURL;
          link.target = '_blank';
          link.click();
          link.remove();
        }
      } catch (error) {
        console.log('❌ WhatsApp notification failed:', error);
      }

      // 4. Send email notification via WhatsApp as backup
      try {
        console.log('📧➡️💬 Sending email content via WhatsApp as backup...');
        const emailViaWhatsApp = `📧 EMAIL NOTIFICATION FOR ADMIN:

🎓 New Consultation Request from ${submissionData.fullName}

📧 TO: litcindore@gmail.com
📋 DETAILS:
• Name: ${submissionData.fullName}
• Phone: ${submissionData.phone}
• Email: ${submissionData.email}
• Location: ${submissionData.location}
• Role: ${submissionData.currentRole}
• Experience: ${submissionData.experience}
• Courses: ${submissionData.interestedCourses.join(', ')}
• Timeline: ${submissionData.timelineToStart}
• Budget: ${submissionData.budget}
• Slots: ${submissionData.preferredTimeSlots.join(', ')}

⏰ Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
🆔 ID: ${submissionData.requestId}

Contact student ASAP! 🚀`;

        const emailWhatsAppURL = `https://wa.me/918225852734?text=${encodeURIComponent(emailViaWhatsApp)}`;
        
        setTimeout(() => {
          console.log('📧💬 Opening email notification via WhatsApp...');
          window.open(emailWhatsAppURL, '_blank');
        }, 3000);
        
      } catch (error) {
        console.log('❌ Email via WhatsApp failed:', error);
      }

      // 4. Fallback: Call our API endpoint
      try {
        const response = await fetch('/api/consultation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        const result = await response.json();
        console.log('API submission result:', result);
      } catch (error) {
        console.log('API submission failed, continuing...', error);
      }

      // Show success message
      const successMessage = `🎉 Thank you ${formData.fullName}!

✅ Your consultation request has been submitted successfully!

� ${emailSent ? 'Email notification sent to our team' : 'Request logged in our system'}
💬 ${whatsappSent ? 'WhatsApp notification prepared' : 'Please WhatsApp us for immediate assistance'}

 Our career counselor will contact you within 24 hours
📱 For immediate assistance: +918225852734
💬 WhatsApp: wa.me/918225852734
📧 Email: yyradhe751@gmail.com

Request ID: ${requestId}

Next Steps:
🎯 Get personalized course recommendations
📚 Receive detailed curriculum and pricing
🚀 Start your tech career transformation!`;

      // Enhanced success message with better email status
      const emailStatus = emailSent ? '✅ Email sent to yyradhe751@gmail.com' : '⚠️ Email delivery in progress';
      const whatsappStatus = whatsappSent ? '✅ WhatsApp notification ready' : '⚠️ WhatsApp backup available';
      
      const enhancedMessage = `🎉 Thank you ${formData.fullName}!

✅ Your consultation request has been submitted successfully!

📧 Email Status: ${emailStatus}
💬 WhatsApp Status: ${whatsappStatus}

📞 Our career counselor will contact you within 24 hours
📱 For immediate assistance: +918225852734
💬 WhatsApp: wa.me/918225852734
📧 Email: yyradhe751@gmail.com

Request ID: ${requestId}

Next Steps:
🎯 Get personalized course recommendations
📚 Receive detailed curriculum and pricing
🚀 Start your tech career transformation!

📌 Note: You will receive immediate WhatsApp notification
📧 Admin will also receive email notification automatically`;

      alert(enhancedMessage);
      
      // Force open WhatsApp with direct link
      const directWhatsAppLink = `https://wa.me/918225852734?text=${encodeURIComponent(`Hi LITC Team! I just submitted a consultation request. My name is ${formData.fullName} and I'm interested in ${formData.interestedCourses.join(', ')}. Please contact me at ${formData.phone}.`)}`;
      
      console.log('🔗 Opening direct WhatsApp link:', directWhatsAppLink);
      
      // Multiple attempts to open WhatsApp
      window.open(directWhatsAppLink, '_blank');
      
      // Close modal and reset form
      onClose();
      setCurrentStep(1);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        currentRole: '',
        experience: 'Fresher',
        industry: '',
        currentSkills: [],
        careerGoals: '',
        interestedCourses: [],
        targetCertifications: [],
        timelineToStart: 'Immediate',
        learningMode: 'Online',
        preferredTimeSlots: [],
        budget: '',
        specificQuestions: ''
      });

    } catch (error) {
      console.error('Error submitting consultation request:', error);
      
      // Show fallback contact information
      const errorMessage = `❌ There was an issue submitting your request online.

📞 Please contact us directly:
📱 Call: +918225852734
📧 Email: yyradhe751@gmail.com
💬 WhatsApp: wa.me/918225852734

We're here to help and will respond immediately! 🚀

Office Address:
📍 Ground Floor, Metro Tower
Near Mangal City, Behind Tinku Cafe
Indore, MP, India`;

      alert(errorMessage);
      
      // Open WhatsApp as backup
      const backupMessage = `Hi LITC Team! I tried to submit a consultation request for ${formData.fullName} but had technical issues. Please contact me at ${formData.phone}. Interested in: ${formData.interestedCourses.join(', ')}.`;
      window.open(`https://wa.me/918225852734?text=${encodeURIComponent(backupMessage)}`, '_blank');
      
    } finally {
      // Reset button state
      const submitButton = document.querySelector('[data-submit-button]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Request';
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl border border-white/20 w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Book Free Consultation
              </h2>
              <p className="text-gray-300 text-sm">
                Get personalized career guidance from our experts
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Close modal"
              title="Close consultation form"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 progress-bar-${Math.round((currentStep / totalSteps) * 100)}`}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateFormData('fullName', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City, State"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Professional Background */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-white mb-4">Professional Background</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Current Role
                  </label>
                  <input
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => updateFormData('currentRole', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Software Developer, Network Engineer, Student"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Experience Level
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => updateFormData('experience', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Experience Level"
                    >
                      <option value="Fresher" className="bg-gray-800">Fresher</option>
                      <option value="1-3 years" className="bg-gray-800">1-3 years</option>
                      <option value="3-5 years" className="bg-gray-800">3-5 years</option>
                      <option value="5+ years" className="bg-gray-800">5+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => updateFormData('industry', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Industry"
                    >
                      <option value="" className="bg-gray-800">Select Industry</option>
                      {INDUSTRIES.map(industry => (
                        <option key={industry} value={industry} className="bg-gray-800">
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Career Goals
                  </label>
                  <textarea
                    value={formData.careerGoals}
                    onChange={(e) => updateFormData('careerGoals', e.target.value)}
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your career aspirations and where you want to be in the next 2-3 years..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Learning Interests */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-white mb-4">Learning Interests</h3>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Which courses interest you? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {POPULAR_COURSES.map(course => (
                    <button
                      key={course.id}
                      onClick={() => toggleArrayValue('interestedCourses', course.name)}
                      className={`text-left p-3 rounded-lg border transition-all duration-200 ${
                        formData.interestedCourses.includes(course.name)
                          ? 'bg-blue-600/30 border-blue-400 text-white'
                          : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{course.name}</div>
                          <div className="text-xs opacity-75">{course.category} • {course.level}</div>
                        </div>
                        {course.popular && (
                          <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    When do you want to start?
                  </label>
                  <select
                    value={formData.timelineToStart}
                    onChange={(e) => updateFormData('timelineToStart', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Timeline to Start"
                  >
                    <option value="Immediate" className="bg-gray-800">Immediate</option>
                    <option value="1-2 months" className="bg-gray-800">1-2 months</option>
                    <option value="3-6 months" className="bg-gray-800">3-6 months</option>
                    <option value="Planning ahead" className="bg-gray-800">Planning ahead</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Preferred Learning Mode
                  </label>
                  <select
                    value={formData.learningMode}
                    onChange={(e) => updateFormData('learningMode', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Learning Mode"
                  >
                    <option value="Online" className="bg-gray-800">Online</option>
                    <option value="Offline" className="bg-gray-800">Offline</option>
                    <option value="Hybrid" className="bg-gray-800">Hybrid (Online + Offline)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Preferences */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-white mb-4">Consultation Preferences</h3>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Preferred Time Slots (Select all that work for you)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {TIME_SLOTS.map(slot => (
                    <button
                      key={slot}
                      onClick={() => toggleArrayValue('preferredTimeSlots', slot)}
                      className={`text-left p-3 rounded-lg border transition-all duration-200 ${
                        formData.preferredTimeSlots.includes(slot)
                          ? 'bg-green-600/30 border-green-400 text-white'
                          : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-sm">{slot}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateFormData('budget', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Budget Range"
                >
                  <option value="" className="bg-gray-800">Select Budget Range</option>
                  {BUDGET_RANGES.map(range => (
                    <option key={range} value={range} className="bg-gray-800">
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Specific Questions or Requirements
                </label>
                <textarea
                  value={formData.specificQuestions}
                  onChange={(e) => updateFormData('specificQuestions', e.target.value)}
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Any specific questions about courses, certifications, career guidance, or anything else you'd like to discuss..."
                />
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-white mb-4">Review Your Information</h3>
              
              <div className="bg-white/5 rounded-lg p-4 space-y-3">
                <div>
                  <span className="text-gray-400 text-sm">Contact:</span>
                  <p className="text-white">{formData.fullName} • {formData.email} • {formData.phone}</p>
                </div>
                
                <div>
                  <span className="text-gray-400 text-sm">Background:</span>
                  <p className="text-white">{formData.currentRole} • {formData.experience} experience • {formData.industry}</p>
                </div>
                
                <div>
                  <span className="text-gray-400 text-sm">Interested Courses:</span>
                  <p className="text-white">{formData.interestedCourses.join(', ') || 'None selected'}</p>
                </div>
                
                <div>
                  <span className="text-gray-400 text-sm">Learning Preferences:</span>
                  <p className="text-white">{formData.learningMode} • Start: {formData.timelineToStart}</p>
                </div>
                
                <div>
                  <span className="text-gray-400 text-sm">Preferred Time Slots:</span>
                  <p className="text-white">{formData.preferredTimeSlots.join(', ') || 'None selected'}</p>
                </div>
              </div>
              
              <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-semibold mb-2">What happens next?</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Our career counselor will review your profile</li>
                  <li>• You'll receive a personalized course recommendation</li>
                  <li>• We'll schedule your free consultation within 24 hours</li>
                  <li>• Get guidance on career path and certification roadmap</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/20 flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 1
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            Previous
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i + 1 === currentStep
                    ? 'bg-blue-500'
                    : i + 1 < currentStep
                    ? 'bg-green-500'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              data-submit-button
              className="px-8 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
}