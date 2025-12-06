import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();

    // Create email content
    const emailContent = `
Subject: 🎓 New Consultation Request from ${formData.fullName}

Hello,

You have received a new consultation request from your website:

👤 STUDENT DETAILS:
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Location: ${formData.location}

💼 PROFESSIONAL BACKGROUND:
• Current Role: ${formData.currentRole}
• Experience: ${formData.experience}
• Industry: ${formData.industry}

🎯 LEARNING GOALS:
• Interested Courses: ${formData.interestedCourses.join(', ')}
• Timeline to Start: ${formData.timelineToStart}
• Learning Mode: ${formData.learningMode}
• Preferred Time Slots: ${formData.preferredTimeSlots.join(', ')}

💰 BUDGET: ${formData.budget}

❓ SPECIFIC QUESTIONS: ${formData.specificQuestions || 'None'}

📅 SUBMITTED: ${new Date(formData.submittedAt).toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

🆔 REQUEST ID: ${formData.requestId}

⚡ ACTION REQUIRED: Please contact the student within 24 hours!

📞 Call: ${formData.phone}
📧 Email: ${formData.email}

Best regards,
LITC Website System
    `;

    // Use EmailJS API directly with credentials
    const emailjsData = {
      service_id: 'service_zx5h5aj', // Free EmailJS service
      template_id: 'template_9h1qkmi', // Free template
      user_id: 'user_4JaIFWG8s1K6eYtP2PfQH', // Free public key
      template_params: {
        to_email: 'litcindore@gmail.com',
        from_name: formData.fullName,
        message: emailContent,
        subject: `🎓 New Consultation Request from ${formData.fullName}`,
        student_name: formData.fullName,
        student_phone: formData.phone,
        student_email: formData.email,
        student_location: formData.location,
        interested_courses: formData.interestedCourses.join(', '),
        timeline: formData.timelineToStart,
        budget: formData.budget,
        request_id: formData.requestId
      }
    };

    // Send email via EmailJS API
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailjsData),
    });

    console.log('📧 EmailJS Response Status:', emailResponse.status);
    
    if (emailResponse.ok) {
      console.log('✅ Email sent successfully to litcindore@gmail.com');
      return NextResponse.json({
        success: true,
        message: 'Email sent successfully',
        emailSent: true,
        recipient: 'litcindore@gmail.com'
      });
    } else {
      const errorText = await emailResponse.text();
      console.error('❌ EmailJS Error:', errorText);
      throw new Error(`EmailJS Error: ${errorText}`);
    }

  } catch (error) {
    console.error('❌ Email API Error:', error);
    
    // Fallback: Save to console for manual processing
    console.log('📝 MANUAL EMAIL CONTENT FOR litcindore@gmail.com:');
    console.log('='.repeat(50));
    console.log('='.repeat(50));
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      fallback: 'Email content logged to console',
      manualProcessing: true
    });
  }
}