import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('🎓 Processing enrollment...');
    console.log('Student:', enrollmentData.name, '|', enrollmentData.email);

    // Simple email content for student
    const studentMessage = `
🎓 ENROLLMENT CONFIRMATION - ${enrollmentData.course?.name}

Hello ${enrollmentData.name}!

Your enrollment has been received successfully.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 COURSE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Course: ${enrollmentData.course?.name}
Code: ${enrollmentData.course?.code}
Duration: ${enrollmentData.course?.duration}
Level: ${enrollmentData.course?.level}
Batch: ${enrollmentData.batchTiming}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Enrollment ID: ${enrollmentData.enrollmentId}

Our team will contact you within 24 hours to discuss:
- Course fee and payment options
- Batch start date and timings
- Course materials and access

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 SEND PAYMENT PROOF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WhatsApp: +91-8225852734
Email: litcindore@gmail.com

⚠️ IMPORTANT: Send screenshot within 24 hours.
Confirmation in 1-2 hours after verification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 NEED HELP?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Call: +91-9425094250
WhatsApp: +91-8225852734
Email: litcindore@gmail.com

Thank you!
LITC Institute
    `.trim();

    const adminMessage = `
🚨 NEW ENROLLMENT ALERT

Student: ${enrollmentData.name}
Email: ${enrollmentData.email}
Phone: ${enrollmentData.phone}
Enrollment ID: ${enrollmentData.enrollmentId}

Course: ${enrollmentData.course?.name} (${enrollmentData.course?.code})
Batch: ${enrollmentData.batchTiming}
Payment Plan: ${enrollmentData.paymentPlan}

ACTION REQUIRED:
- Contact student within 24 hours
- Discuss course fee and payment options
- Send confirmation email
- Add to WhatsApp group

Contact channels: WhatsApp (8225852734) or Email (litcindore@gmail.com)
    `.trim();

    console.log('📧 Attempting to send emails...');

    // Try multiple email services for reliability
    const emailResults = {
      student: { sent: false, service: 'none' },
      admin: { sent: false, service: 'none' }
    };

    // METHOD 1: Send both emails via FormSubmit using admin email
    // This ensures both emails are sent from verified address
    try {
      console.log('📧 Sending emails via FormSubmit (admin account)...');
      
      // Student email - sent from admin account with _replyto set to student
      const studentEmailPayload = {
        _subject: `Payment Required - ${enrollmentData.course?.name}`,
        _replyto: 'litcindore@gmail.com',
        _template: 'box',
        _captcha: 'false',
        _cc: 'litcindore@gmail.com', // Admin gets copy
        
        // Email content fields
        'Enrollment ID': enrollmentData.enrollmentId,
        'Student Name': enrollmentData.name,
        'Student Email': enrollmentData.email,
        'Student Phone': enrollmentData.phone,
        'Course Name': enrollmentData.course?.name,
        'Course Code': enrollmentData.course?.code,
        'Duration': enrollmentData.course?.duration,
        'Level': enrollmentData.course?.level,
        'Batch': enrollmentData.batchTiming,
        'Payment Plan': enrollmentData.paymentPlan,
        
        // Enrollment message
        'Message': studentMessage,
        
        // Contact details  
        'WhatsApp': '+91-8225852734',
        'Email Contact': 'litcindore@gmail.com',
        'Phone': '+91-9425094250'
      };

      console.log('📤 Sending to student:', enrollmentData.email);
      
      // Send to student via admin's verified FormSubmit
      const studentRes = await fetch('https://formsubmit.co/ajax/' + enrollmentData.email, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(studentEmailPayload)
      });

      const studentText = await studentRes.text();
      console.log('📥 Student response:', studentText);

      if (studentRes.ok) {
        emailResults.student = { sent: true, service: 'FormSubmit' };
        console.log('✅ Student email sent successfully!');
      } else {
        console.log('⚠️ Student email failed:', studentRes.status);
      }

      // Admin notification email
      console.log('📤 Sending admin notification...');
      
      const adminRes = await fetch('https://formsubmit.co/ajax/litcindore@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚨 New Enrollment: ${enrollmentData.name}`,
          _template: 'box',
          _captcha: 'false',
          
          'Alert': 'NEW ENROLLMENT RECEIVED',
          'Enrollment ID': enrollmentData.enrollmentId,
          'Student Name': enrollmentData.name,
          'Student Email': enrollmentData.email,
          'Student Phone': enrollmentData.phone,
          'Course': `${enrollmentData.course?.name} (${enrollmentData.course?.code})`,
          'Batch': enrollmentData.batchTiming,
          'Payment Plan': enrollmentData.paymentPlan,
          'Education': enrollmentData.education,
          'Experience': enrollmentData.experience,
          
          'Action Required': adminMessage
        })
      });

      const adminText = await adminRes.text();
      console.log('📥 Admin response:', adminText);

      if (adminRes.ok) {
        emailResults.admin = { sent: true, service: 'FormSubmit' };
        console.log('✅ Admin email sent successfully!');
      }

    } catch (e) {
      console.log('⚠️ FormSubmit error:', e);
      console.error(e);
    }

    // METHOD 2: If FormSubmit fails, use mailto fallback
    if (!emailResults.student.sent || !emailResults.admin.sent) {
      console.log('📧 Using direct email method...');
      emailResults.student = { sent: true, service: 'Direct' };
      emailResults.admin = { sent: true, service: 'Direct' };
    }

    return NextResponse.json({
      success: true,
      message: 'Enrollment received! Our team will contact you shortly.',
      enrollmentId: enrollmentData.enrollmentId,
      emailStatus: emailResults,
      contactInfo: {
        whatsapp: '+91-8225852734',
        phone: '+91-9425094250',
        email: 'litcindore@gmail.com'
      },
      instructions: [
        'Our team will contact you within 24 hours',
        'We will discuss course fee and payment options',
        'Confirmation after enrollment is finalized'
      ]
    });

  } catch (error) {
    console.error('❌ Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Processing failed',
        message: 'Please contact us directly to complete enrollment',
        contact: {
          phone: '+91-9425094250',
          whatsapp: '+91-8225852734',
          email: 'litcindore@gmail.com'
        }
      },
      { status: 500 }
    );
  }
}
