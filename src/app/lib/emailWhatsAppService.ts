import emailjs from '@emailjs/browser';

// EmailJS Configuration - For now using fallback, you can update with real keys later
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_litc';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_consultation';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS (call this once in your app)
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

const openExternalUrl = (url: string) => {
  if (typeof window === 'undefined') {
    return false;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
  return true;
};

const buildMailtoUrl = (to: string, subject: string, body: string) => {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString()}`;
};

// Send consultation email
export const sendConsultationEmail = async (formData: any) => {
  try {
    // Check if EmailJS is properly configured
    if (EMAILJS_PUBLIC_KEY === 'your_public_key') {
      console.log('EmailJS not configured, using static fallback');

      const emailContent = `
🎓 New Consultation Request - LITC Infotech

👤 Student Details:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}

💼 Professional Background:
Current Role: ${formData.currentRole}
Experience: ${formData.experience}
Industry: ${formData.industry}

🎯 Learning Goals:
Interested Courses: ${formData.interestedCourses.join(', ')}
Timeline: ${formData.timelineToStart}
Learning Mode: ${formData.learningMode}

⏰ Preferred Time Slots:
${formData.preferredTimeSlots.join(', ')}

💰 Budget Range: ${formData.budget}

❓ Questions: ${formData.specificQuestions}

📅 Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `.trim();

      openExternalUrl(buildMailtoUrl(
        'yyradhe751@gmail.com',
        `🎓 New Consultation Request from ${formData.fullName}`,
        emailContent
      ));
      openExternalUrl(`https://wa.me/918225852734?text=${encodeURIComponent(emailContent)}`);

      return { success: true, method: 'mailto-whatsapp' };
    }

    // Initialize EmailJS if configured
    initEmailJS();

    // Template parameters for EmailJS
    const templateParams = {
      to_email: 'yyradhe751@gmail.com',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      location: formData.location,
      current_role: formData.currentRole,
      experience: formData.experience,
      industry: formData.industry,
      career_goals: formData.careerGoals,
      interested_courses: formData.interestedCourses.join(', '),
      timeline: formData.timelineToStart,
      learning_mode: formData.learningMode,
      preferred_slots: formData.preferredTimeSlots.join(', '),
      budget: formData.budget,
      questions: formData.specificQuestions,
      submission_date: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS sent successfully:', response);
    return { success: true, data: response, method: 'emailjs' };

  } catch (error) {
    console.error('EmailJS failed, using static fallback:', error);

    const emailContent = `
🎓 New Consultation Request - LITC Infotech

👤 Student Details:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}

💼 Professional Background:
Current Role: ${formData.currentRole}
Experience: ${formData.experience}
Industry: ${formData.industry}

🎯 Learning Goals:
Interested Courses: ${formData.interestedCourses.join(', ')}
Timeline: ${formData.timelineToStart}
Learning Mode: ${formData.learningMode}

⏰ Preferred Time Slots:
${formData.preferredTimeSlots.join(', ')}

💰 Budget Range: ${formData.budget}

❓ Questions: ${formData.specificQuestions}

📅 Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    openExternalUrl(buildMailtoUrl(
      'yyradhe751@gmail.com',
      `🎓 New Consultation Request from ${formData.fullName}`,
      emailContent
    ));
    openExternalUrl(`https://wa.me/918225852734?text=${encodeURIComponent(emailContent)}`);

    return { success: true, method: 'mailto-whatsapp' };
  }
};

// Send confirmation email to student
export const sendStudentConfirmationEmail = async (formData: any) => {
  try {
    const templateParams = {
      to_email: formData.email,
      student_name: formData.fullName,
      interested_courses: formData.interestedCourses.join(', '),
      learning_mode: formData.learningMode,
      timeline: formData.timelineToStart,
      contact_phone: '+918225852734',
      contact_email: 'yyradhe751@gmail.com',
      whatsapp_link: 'https://wa.me/918225852734'
    };

    // Use a different template for student confirmation
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_student_confirmation', // Create this template in EmailJS
      templateParams
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Student confirmation email failed:', error);
    if (typeof window !== 'undefined') {
      openExternalUrl(buildMailtoUrl(
        formData.email,
        'Your consultation request at LITC Institute',
        `Hi ${formData.fullName},\n\nThank you for reaching out to LITC Institute. Our team has received your consultation request and will connect with you soon.\n\nWhatsApp: https://wa.me/918225852734\nPhone: +91-9522220892\nEmail: yyradhe751@gmail.com`
      ));
    }

    return { success: false, error };
  }
};

// WhatsApp integration
export const sendWhatsAppMessage = (formData: any) => {
  console.log('📱 Creating WhatsApp message for:', formData.fullName);
  
  const message = `🎓 *New Consultation Request - LITC Infotech*

👤 *Student Details:*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}

💼 *Professional Background:*
Current Role: ${formData.currentRole}
Experience: ${formData.experience}
Industry: ${formData.industry}

🎯 *Learning Goals:*
Interested Courses: ${formData.interestedCourses.join(', ')}
Timeline: ${formData.timelineToStart}
Learning Mode: ${formData.learningMode}

⏰ *Preferred Time Slots:*
${formData.preferredTimeSlots.join(', ')}

💰 *Budget Range:* ${formData.budget}

❓ *Questions:* ${formData.specificQuestions}

📅 *Submitted:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Please contact the student within 24 hours! 🚀`;

  // Create WhatsApp URL for your number
  const whatsappURL = `https://wa.me/918225852734?text=${encodeURIComponent(message)}`;
  
  console.log('💬 WhatsApp URL created:', whatsappURL);
  console.log('📝 Message content:', message);
  
  try {
    // Try to open WhatsApp
    console.log('🔗 Attempting to open WhatsApp...');
    const opened = window.open(whatsappURL, '_blank');
    
    if (opened) {
      console.log('✅ WhatsApp opened successfully');
      return { success: true, whatsappURL, opened: true };
    } else {
      console.log('⚠️ WhatsApp popup might be blocked');
      return { success: true, whatsappURL, opened: false, blocked: true };
    }
  } catch (error) {
    console.error('❌ Error opening WhatsApp:', error);
    return { success: false, error, whatsappURL };
  }
};

// Alternative: Send WhatsApp notification to admin
export const notifyAdminWhatsApp = (formData: any) => {
  const adminMessage = `🎓 New Consultation Request!

Student: ${formData.fullName}
Phone: ${formData.phone}
Courses: ${formData.interestedCourses.join(', ')}

Check email for full details.`;

  const adminWhatsApp = `https://wa.me/918225852734?text=${encodeURIComponent(adminMessage)}`;
  
  // You can integrate with WhatsApp Business API here
  // For now, we'll just prepare the URL
  return adminWhatsApp;
};