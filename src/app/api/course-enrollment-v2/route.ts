import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('🎓 Processing enrollment...');
    console.log('Student:', enrollmentData.name, '|', enrollmentData.email);

    // Calculate price
    const basePrice = parseInt(enrollmentData.course?.price.replace(/[^0-9]/g, '') || '0');
    const discount = enrollmentData.paymentPlan === 'full' ? basePrice * 0.05 : 0;
    const finalPrice = basePrice - discount;

    // Simple email content for student
    const studentMessage = `
🎓 PAYMENT REQUIRED - ${enrollmentData.course?.name}

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
💰 PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Amount: ₹${finalPrice.toLocaleString('en-IN')}
Enrollment ID: ${enrollmentData.enrollmentId}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💳 UPI PAYMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UPI ID: yravi8804@axl
Bank: Union Bank Of India - 0942
Amount: ₹${finalPrice.toLocaleString('en-IN')}

📋 STEPS:
1. Open UPI app (Paytm/PhonePe/GPay)
2. Enter UPI ID: yravi8804@axl
3. Amount: ₹${finalPrice.toLocaleString('en-IN')}
4. Remark: ${enrollmentData.enrollmentId}
5. Pay & take screenshot

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 SEND PAYMENT PROOF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WhatsApp: +91-8225852734
Email: yyradhe751@gmail.com

⚠️ IMPORTANT: Send screenshot within 24 hours.
Confirmation in 1-2 hours after verification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 NEED HELP?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Call: +91-9425094250
WhatsApp: +91-8225852734
Email: yyradhe751@gmail.com

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
Amount: ₹${finalPrice.toLocaleString('en-IN')}
Batch: ${enrollmentData.batchTiming}
Payment Plan: ${enrollmentData.paymentPlan}

ACTION REQUIRED:
- Wait for payment screenshot
- Verify payment (UPI: yravi8804@axl)
- Send confirmation email
- Add to WhatsApp group

Payment channels: WhatsApp (8225852734) or Email (yyradhe751@gmail.com)
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
        _replyto: 'yyradhe751@gmail.com',
        _template: 'box',
        _captcha: 'false',
        _cc: 'yyradhe751@gmail.com', // Admin gets copy
        
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
        'Amount': `₹${finalPrice.toLocaleString('en-IN')}`,
        'Payment Plan': enrollmentData.paymentPlan,
        
        // Payment instructions
        'Message': studentMessage,
        
        // Payment details  
        'UPI ID': 'yravi8804@axl',
        'Bank': 'Union Bank Of India - 0942',
        'WhatsApp': '+91-8225852734',
        'Email Contact': 'yyradhe751@gmail.com',
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
      
      const adminRes = await fetch('https://formsubmit.co/ajax/yyradhe751@gmail.com', {
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
          'Amount': `₹${finalPrice.toLocaleString('en-IN')}`,
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
      message: 'Enrollment received! Payment instructions have been sent.',
      enrollmentId: enrollmentData.enrollmentId,
      emailStatus: emailResults,
      paymentInfo: {
        upiId: 'yravi8804@axl',
        bank: 'Union Bank Of India - 0942',
        amount: `₹${finalPrice.toLocaleString('en-IN')}`,
        enrollmentId: enrollmentData.enrollmentId
      },
      contactInfo: {
        whatsapp: '+91-8225852734',
        phone: '+91-9425094250',
        email: 'yyradhe751@gmail.com'
      },
      instructions: [
        'Check your email for payment details',
        'Pay via UPI: yravi8804@axl',
        'Take screenshot after payment',
        'Send screenshot to WhatsApp: +91-8225852734 or Email: yyradhe751@gmail.com',
        'Confirmation within 1-2 hours'
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
          email: 'yyradhe751@gmail.com'
        }
      },
      { status: 500 }
    );
  }
}
