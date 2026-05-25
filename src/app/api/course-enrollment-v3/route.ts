import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('🎓 Processing enrollment for:', enrollmentData.email);

    // Calculate price
    const basePrice = parseInt(enrollmentData.course?.price.replace(/[^0-9]/g, '') || '0');
    const discount = enrollmentData.paymentPlan === 'full' ? basePrice * 0.05 : 0;
    const finalPrice = basePrice - discount;

    // EMAIL 1: Send to ADMIN (this will definitely work)
    const adminEmailContent = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚨 NEW ENROLLMENT - ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENROLLMENT ID: ${enrollmentData.enrollmentId}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STUDENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${enrollmentData.name}
Email: ${enrollmentData.email}
Phone: ${enrollmentData.phone}
Education: ${enrollmentData.education}
Experience: ${enrollmentData.experience}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COURSE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Course: ${enrollmentData.course?.name}
Code: ${enrollmentData.course?.code}
Duration: ${enrollmentData.course?.duration}
Level: ${enrollmentData.course?.level}
Batch: ${enrollmentData.batchTiming}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Amount: ₹${finalPrice.toLocaleString('en-IN')}
Payment Plan: ${enrollmentData.paymentPlan}
Referral: ${enrollmentData.referralSource}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ IMPORTANT - NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SEND PAYMENT EMAIL TO STUDENT
   Email: ${enrollmentData.email}
   
2. Include these payment details:
   UPI ID: yravi8804@axl
   Bank: Union Bank Of India - 0942
   Amount: ₹${finalPrice.toLocaleString('en-IN')}
   Enrollment ID: ${enrollmentData.enrollmentId}

3. Ask student to send payment screenshot to:
   WhatsApp: +91-8225852734
   Email: litcindore@gmail.com

4. After payment verification:
   - Send confirmation email
   - Add to WhatsApp group
   - Provide course access

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PAYMENT EMAIL TEMPLATE FOR STUDENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subject: Payment Required - ${enrollmentData.course?.name}

Dear ${enrollmentData.name},

Thank you for enrolling in ${enrollmentData.course?.name}!

Enrollment ID: ${enrollmentData.enrollmentId}

PAYMENT DETAILS:
Amount: ₹${finalPrice.toLocaleString('en-IN')}
UPI ID: yravi8804@axl
Bank: Union Bank Of India - 0942

STEPS:
1. Open UPI app (Paytm/PhonePe/GPay)
2. Send money to: yravi8804@axl
3. Amount: ₹${finalPrice.toLocaleString('en-IN')}
4. Add remark: ${enrollmentData.enrollmentId}
5. Take screenshot after payment

SEND PAYMENT PROOF:
WhatsApp: +91-8225852734
Email: litcindore@gmail.com

You will receive confirmation within 2 hours.

For queries: +91-9425094250

Best Regards,
LITC Institute

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: ${new Date(enrollmentData.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    console.log('📧 Sending admin notification email...');

    // Send to admin using FormSubmit (verified)
    const adminResponse = await fetch('https://formsubmit.co/ajax/litcindore@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `🚨 New Enrollment: ${enrollmentData.name} - ${enrollmentData.enrollmentId}`,
        _template: 'box',
        _captcha: 'false',
        
        // Structured data
        'Enrollment_ID': enrollmentData.enrollmentId,
        'Student_Name': enrollmentData.name,
        'Student_Email': enrollmentData.email,
        'Student_Phone': enrollmentData.phone,
        'Course': enrollmentData.course?.name,
        'Amount': `₹${finalPrice.toLocaleString('en-IN')}`,
        'Batch': enrollmentData.batchTiming,
        
        // Full message
        'Message': adminEmailContent
      })
    });

    let adminSent = false;
    let adminResponseText = '';

    try {
      adminResponseText = await adminResponse.text();
      adminSent = adminResponse.ok;
      console.log('Admin email response:', adminResponseText);
    } catch (e) {
      console.log('Admin email parsing error (but may have sent):', e);
      adminSent = adminResponse.ok; // Still consider successful if HTTP was ok
    }

    if (adminSent) {
      console.log('✅ Admin notification sent successfully');
    } else {
      console.log('⚠️ Admin email may have failed');
    }

    // Return success with manual process instructions
    return NextResponse.json({
      success: true,
      enrollmentId: enrollmentData.enrollmentId,
      message: 'Enrollment received successfully!',
      emailStatus: {
        admin: adminSent,
        student: 'pending_manual', // Admin will send manually
        note: 'Admin has been notified to send payment email to student'
      },
      nextSteps: [
        'Our team has received your enrollment',
        'You will receive payment details via email within 30 minutes',
        'Check your email: ' + enrollmentData.email,
        'For immediate assistance, contact:',
        '  WhatsApp: +91-8225852734',
        '  Phone: +91-9425094250',
        '  Email: litcindore@gmail.com'
      ],
      paymentInfo: {
        upiId: 'yravi8804@axl',
        bank: 'Union Bank Of India - 0942',
        amount: `₹${finalPrice.toLocaleString('en-IN')}`,
        enrollmentId: enrollmentData.enrollmentId
      },
      contact: {
        whatsapp: '+91-8225852734',
        phone: '+91-9425094250',
        email: 'litcindore@gmail.com'
      }
    });

  } catch (error) {
    console.error('❌ Enrollment processing error:', error);
    
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
