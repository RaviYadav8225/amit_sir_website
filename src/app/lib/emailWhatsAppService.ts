import emailjs from '@emailjs/browser';

// EmailJS Configuration - For now using fallback, you can update with real keys later
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_litc';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_consultation';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS (call this once in your app)
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send consultation email
export const sendConsultationEmail = async (formData: any) => {
  try {
    // Check if EmailJS is properly configured
    if (EMAILJS_PUBLIC_KEY === 'your_public_key') {
      console.log('EmailJS not configured, using API fallback');
      return await sendEmailViaAPI(formData);
    }

    // Initialize EmailJS if configured
    initEmailJS();

    // Template parameters for EmailJS
    const templateParams = {
      to_email: 'litcindore@gmail.com',
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
    console.error('EmailJS failed, trying API fallback:', error);
    // Fallback to API method
    return await sendEmailViaAPI(formData);
  }
};

// Fallback email method using your API
const sendEmailViaAPI = async (formData: any) => {
  try {
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

Please contact the student within 24 hours! 🚀
    `;

    // This will be sent to your API endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'litcindore@gmail.com',
        subject: `🎓 New Consultation Request from ${formData.fullName}`,
        content: emailContent,
        formData: formData
      }),
    });

    if (response.ok) {
      return { success: true, method: 'api', message: 'Email queued for sending' };
    } else {
      throw new Error('API email failed');
    }
  } catch (error) {
    console.error('API email also failed:', error);
    return { success: false, error, method: 'failed' };
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
      contact_phone: '+919522220892',
      contact_email: 'litcindore@gmail.com',
      whatsapp_link: 'https://wa.me/919522220892'
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
  const whatsappURL = `https://wa.me/919522220892?text=${encodeURIComponent(message)}`;
  
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

  const adminWhatsApp = `https://wa.me/919522220892?text=${encodeURIComponent(adminMessage)}`;
  
  // You can integrate with WhatsApp Business API here
  // For now, we'll just prepare the URL
  return adminWhatsApp;
};