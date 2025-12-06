import { NextRequest, NextResponse } from 'next/server';

/**
 * FORMSUBMIT EMAIL SERVICE
 * Direct integration with FormSubmit.co for guaranteed email delivery
 * Sends to: litcindore@gmail.com
 */

export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();
    
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 FORMSUBMIT EMAIL SERVICE ACTIVATED');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('👤 Student:', formData.fullName);
    console.log('📱 Phone:', formData.phone);
    console.log('📧 Sending to: litcindore@gmail.com');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Prepare email content
    const emailSubject = `🎓 LITC Inquiry: ${formData.fullName} - ${formData.interestedCourses[0] || 'Course Interest'}`;
    
    const emailMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 NEW STUDENT CONSULTATION REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 STUDENT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📍 Location: ${formData.location || 'Not provided'}

💼 PROFESSIONAL DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 Role: ${formData.currentRole || 'Not specified'}
⏳ Experience: ${formData.experience}
🏭 Industry: ${formData.industry || 'Not specified'}

🎯 COURSE INTERESTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.interestedCourses.map((c: string) => `✓ ${c}`).join('\n') || '• No courses selected'}

📅 Timeline: ${formData.timelineToStart}
💻 Mode: ${formData.learningMode}
💰 Budget: ${formData.budget || 'Not specified'}

⏰ PREFERRED TIME SLOTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.preferredTimeSlots.map((s: string) => `⏰ ${s}`).join('\n') || '• Not specified'}

💬 QUESTIONS/NOTES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.specificQuestions || 'None provided'}

📋 SUBMISSION INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🆔 Request ID: ${formData.requestId}
📅 Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

⚡ IMMEDIATE ACTION REQUIRED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 Call: ${formData.phone}
📧 Email: ${formData.email}
💬 WhatsApp: https://wa.me/91${formData.phone.replace(/\D/g, '')}

Contact within 24 hours for best conversion!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    console.log('📤 Sending email via FormSubmit.co...\n');

    // Send via FormSubmit.co - Direct POST (no AJAX)
    const formSubmitResponse = await fetch('https://formsubmit.co/litcindore@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: `LITC Inquiry - ${formData.fullName}`,
        email: formData.email || 'noreply@litcinfotech.com',
        phone: formData.phone,
        subject: emailSubject,
        message: emailMessage,
        student_name: formData.fullName,
        student_phone: formData.phone,
        student_email: formData.email,
        courses: formData.interestedCourses.join(', '),
        request_id: formData.requestId,
        _template: 'table',
        _captcha: 'false',
        _autoresponse: 'Thank you! We received your consultation request.'
      })
    });

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 FORMSUBMIT RESPONSE STATUS:', formSubmitResponse.status);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    let result: any = {};
    try {
      result = await formSubmitResponse.json();
      console.log('📧 Response Body:', JSON.stringify(result, null, 2));
    } catch (e) {
      console.log('⚠️ Could not parse JSON response');
    }

    // FormSubmit returns 200 status on success
    if (formSubmitResponse.ok || formSubmitResponse.status === 200) {
      console.log('\n✅ ✅ ✅ EMAIL SENT SUCCESSFULLY! ✅ ✅ ✅');
      console.log('📧 Delivered to: litcindore@gmail.com');
      console.log('👤 From student:', formData.fullName);
      console.log('📱 Contact:', formData.phone);
      console.log('🆔 Request ID:', formData.requestId);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      // Also log complete email content as backup
      console.log('\n📧 EMAIL CONTENT SENT:');
      console.log('━'.repeat(80));
      console.log('TO:', 'litcindore@gmail.com');
      console.log('SUBJECT:', emailSubject);
      console.log('━'.repeat(80));
      console.log(emailMessage);
      console.log('━'.repeat(80) + '\n');

      return NextResponse.json({
        success: true,
        message: 'Email sent successfully via FormSubmit',
        service: 'FormSubmit.co',
        recipient: 'litcindore@gmail.com',
        studentName: formData.fullName,
        studentPhone: formData.phone,
        studentEmail: formData.email,
        requestId: formData.requestId,
        emailSentAt: new Date().toISOString()
      });
    } else {
      console.log('⚠️ FormSubmit returned non-200 status');
      console.log('Status:', formSubmitResponse.status);
      console.log('Response:', result);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      
      // Still log email content for manual processing
      console.log('📧 EMAIL CONTENT (For Manual Processing):');
      console.log('━'.repeat(80));
      console.log('TO:', 'litcindore@gmail.com');
      console.log('FROM:', formData.email);
      console.log('PHONE:', formData.phone);
      console.log('━'.repeat(80));
      console.log(emailMessage);
      console.log('━'.repeat(80) + '\n');
      
      return NextResponse.json({
        success: false,
        message: 'FormSubmit service issue - but email content logged',
        details: result,
        emailContentLogged: true,
        checkConsole: true
      });
    }

  } catch (error) {
    console.error('\n❌ ERROR IN FORMSUBMIT EMAIL SERVICE:');
    console.error(error);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to send email'
    });
  }
}
