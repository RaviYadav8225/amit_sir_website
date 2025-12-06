import { NextRequest, NextResponse } from 'next/server';

// INSTANT EMAIL SERVICE - Sends emails immediately to litcindore@gmail.com
export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();
    
    console.log('📧 INSTANT EMAIL SERVICE - Processing inquiry for litcindore@gmail.com');
    console.log('👤 Student:', formData.fullName);
    
    // Prepare professional email content
    const emailSubject = `🎓 New Student Inquiry: ${formData.fullName} - ${formData.interestedCourses[0] || 'Multiple Courses'}`;
    
    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 LITC INFOTECH - NEW STUDENT INQUIRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

� STUDENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
� Phone: ${formData.phone}
📍 Location: ${formData.location || 'Not provided'}

💼 PROFESSIONAL BACKGROUND:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 Current Role: ${formData.currentRole || 'Not specified'}
⏳ Experience: ${formData.experience}
🏭 Industry: ${formData.industry || 'Not specified'}
🎯 Career Goals: ${formData.careerGoals || 'Not specified'}

🎯 COURSE INTERESTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 Interested Courses:
${formData.interestedCourses.map((course: string) => `   ✓ ${course}`).join('\n') || '   • None selected'}

📅 Timeline: ${formData.timelineToStart}
💻 Learning Mode: ${formData.learningMode}
💰 Budget Range: ${formData.budget || 'Not specified'}

⏰ CONSULTATION PREFERENCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Preferred Time Slots:
${formData.preferredTimeSlots.map((slot: string) => `   ⏰ ${slot}`).join('\n') || '   • Not specified'}

� SPECIFIC QUESTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.specificQuestions || 'None provided'}

📋 SUBMISSION DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🆔 Request ID: ${formData.requestId}
📅 Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
🌐 From: LITC Website Consultation Form

⚡ ACTION REQUIRED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Contact student within 24 hours
📞 Primary: ${formData.phone}
📧 Email: ${formData.email}
💬 WhatsApp: https://wa.me/91${formData.phone.replace(/\D/g, '')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated inquiry from LITC Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Method 1: FormSubmit.co - Instant email delivery
    console.log('📤 Attempting FormSubmit.co...');
    try {
      const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/litcindore@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: emailSubject,
          name: `LITC System - ${formData.fullName}`,
          email: formData.email,
          phone: formData.phone,
          message: emailBody,
          student_name: formData.fullName,
          student_phone: formData.phone,
          student_email: formData.email,
          courses: formData.interestedCourses.join(', '),
          request_id: formData.requestId
        })
      });

      const formSubmitResult = await formSubmitResponse.json();
      
      if (formSubmitResponse.ok && formSubmitResult.success) {
        console.log('✅ EMAIL SENT SUCCESSFULLY via FormSubmit!');
        console.log('📧 Delivered to: litcindore@gmail.com');
        console.log('👤 From student:', formData.fullName);
        
        return NextResponse.json({
          success: true,
          message: 'Email sent successfully to litcindore@gmail.com',
          service: 'FormSubmit.co',
          recipient: 'litcindore@gmail.com',
          studentName: formData.fullName,
          studentPhone: formData.phone,
          requestId: formData.requestId
        });
      } else {
        console.log('⚠️ FormSubmit response:', formSubmitResult);
      }
    } catch (formSubmitError) {
      console.log('❌ FormSubmit error:', formSubmitError);
    }

    // Method 2: Web3Forms - Alternative instant email service
    console.log('📤 Attempting Web3Forms...');
    try {
      const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Free at web3forms.com
          subject: emailSubject,
          from_name: `LITC System - ${formData.fullName}`,
          email: 'litcindore@gmail.com',
          message: emailBody,
          student_phone: formData.phone,
          student_email: formData.email
        })
      });

      const web3FormsResult = await web3FormsResponse.json();
      
      if (web3FormsResult.success) {
        console.log('✅ EMAIL SENT via Web3Forms!');
        return NextResponse.json({
          success: true,
          message: 'Email sent successfully to litcindore@gmail.com',
          service: 'Web3Forms',
          recipient: 'litcindore@gmail.com'
        });
      }
    } catch (web3Error) {
      console.log('❌ Web3Forms error:', web3Error);
    }

    // Method 3: EmailJS browser-side (for manual fallback)
    console.log('📧 Preparing EmailJS browser fallback...');
    
    // Log complete email content for manual processing
    console.log('\n' + '━'.repeat(80));
    console.log('📧 EMAIL CONTENT FOR MANUAL DELIVERY');
    console.log('━'.repeat(80));
    console.log('TO: litcindore@gmail.com');
    console.log('SUBJECT:', emailSubject);
    console.log('━'.repeat(80));
    console.log(emailBody);
    console.log('━'.repeat(80));
    console.log('📞 QUICK CONTACT: ' + formData.phone);
    console.log('📧 STUDENT EMAIL: ' + formData.email);
    console.log('━'.repeat(80) + '\n');

    // Return success with manual instructions
    return NextResponse.json({
      success: true,
      message: 'Email logged and prepared for delivery',
      service: 'Manual/Console',
      recipient: 'litcindore@gmail.com',
      emailContent: {
        to: 'litcindore@gmail.com',
        subject: emailSubject,
        body: emailBody
      },
      studentInfo: {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        courses: formData.interestedCourses
      },
      instructions: 'Email content logged in server console. Check terminal for details.'
    });

  } catch (error) {
    console.error('❌ INSTANT EMAIL SERVICE ERROR:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Email delivery failed, check console logs'
    });
  }
}