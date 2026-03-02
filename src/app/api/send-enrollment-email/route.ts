import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('📧 Sending enrollment emails...');
    console.log('Student:', enrollmentData.name, '|', enrollmentData.email);

    // Calculate price
    const basePrice = parseInt(enrollmentData.course?.price.replace(/[^0-9]/g, '') || '0');
    const discount = enrollmentData.paymentPlan === 'full' ? basePrice * 0.05 : 0;
    const finalPrice = basePrice - discount;

    // Student email content (plain text for better deliverability)
    const studentEmailBody = `
Dear ${enrollmentData.name},

Thank you for enrolling with LITC Institute! 🎓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENROLLMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Enrollment ID: ${enrollmentData.enrollmentId}
Course: ${enrollmentData.course?.name}
Course Code: ${enrollmentData.course?.code}
Duration: ${enrollmentData.course?.duration}
Level: ${enrollmentData.course?.level}
Batch Timing: ${enrollmentData.batchTiming}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAYMENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Amount: ₹${finalPrice.toLocaleString('en-IN')}
${enrollmentData.paymentPlan === 'full' ? '(5% discount applied for full payment)' : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UPI PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

UPI ID: yravi8804@axl
Bank Name: Union Bank Of India
Account: 0942

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAYMENT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open any UPI app (Paytm/PhonePe/Google Pay)
2. Select "Send Money to UPI ID"
3. Enter UPI ID: yravi8804@axl
4. Enter Amount: ₹${finalPrice.toLocaleString('en-IN')}
5. Add Remark: ${enrollmentData.enrollmentId}
6. Complete payment
7. Take screenshot of payment confirmation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEND PAYMENT PROOF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After payment, send screenshot to:

📱 WhatsApp: +91-9522220892
   (Click to send: https://wa.me/919522220892)

📧 Email: litcindore@gmail.com

⚠️ IMPORTANT:
- Send payment proof within 24 hours
- Include Enrollment ID: ${enrollmentData.enrollmentId}
- You will receive confirmation within 2 hours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEED HELP?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Call: +91-9425094250
📱 WhatsApp: +91-9522220892
📧 Email: litcindore@gmail.com

Thank you for choosing LITC Institute!
We look forward to your learning journey with us.

Best Regards,
LITC Institute Team
    `.trim();

    const adminEmailBody = `
NEW ENROLLMENT ALERT! 🚨

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STUDENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${enrollmentData.name}
Email: ${enrollmentData.email}
Phone: ${enrollmentData.phone}
Education: ${enrollmentData.education}
Experience: ${enrollmentData.experience}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENROLLMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Enrollment ID: ${enrollmentData.enrollmentId}
Course: ${enrollmentData.course?.name}
Course Code: ${enrollmentData.course?.code}
Duration: ${enrollmentData.course?.duration}
Batch Timing: ${enrollmentData.batchTiming}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Amount: ₹${finalPrice.toLocaleString('en-IN')}
Payment Plan: ${enrollmentData.paymentPlan}
Referral Source: ${enrollmentData.referralSource}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Wait for payment screenshot from student
2. Verify payment in UPI (yravi8804@axl)
3. Send enrollment confirmation email
4. Add student to WhatsApp group
5. Provide course access credentials

Payment will be received via:
- WhatsApp: +91-9522220892
- Email: litcindore@gmail.com

Submitted at: ${new Date(enrollmentData.submittedAt).toLocaleString('en-IN')}
    `.trim();

    // Use fetch to send emails via multiple services
    const results = {
      student: false,
      admin: false,
      method: 'none'
    };

    try {
      // Try sending via Formspree (free, no verification needed)
      console.log('📧 Method 1: Trying Formspree...');
      
      // Student email via Formspree
      const studentFormspree = await fetch('https://formspree.io/f/xanyqvbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: enrollmentData.email,
          subject: `Payment Required - ${enrollmentData.course?.name} | Enrollment ID: ${enrollmentData.enrollmentId}`,
          message: studentEmailBody,
          _replyto: 'litcindore@gmail.com',
          enrollmentId: enrollmentData.enrollmentId
        })
      });

      if (studentFormspree.ok) {
        results.student = true;
        results.method = 'Formspree';
        console.log('✅ Student email sent via Formspree');
      }

      // Admin email
      const adminFormspree = await fetch('https://formspree.io/f/xanyqvbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'litcindore@gmail.com',
          subject: `🚨 New Enrollment: ${enrollmentData.name} | ${enrollmentData.enrollmentId}`,
          message: adminEmailBody,
          enrollmentId: enrollmentData.enrollmentId
        })
      });

      if (adminFormspree.ok) {
        results.admin = true;
        console.log('✅ Admin email sent via Formspree');
      }

    } catch (formspreeError) {
      console.log('⚠️ Formspree failed:', formspreeError);
    }

    // If Formspree fails, try FormSubmit to admin only
    if (!results.admin) {
      try {
        console.log('📧 Method 2: Trying FormSubmit for admin...');
        
        const adminFormSubmit = await fetch('https://formsubmit.co/ajax/litcindore@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `🚨 New Enrollment: ${enrollmentData.name}`,
            _template: 'box',
            _captcha: 'false',
            message: adminEmailBody,
            studentEmail: enrollmentData.email,
            enrollmentId: enrollmentData.enrollmentId
          })
        });

        if (adminFormSubmit.ok) {
          results.admin = true;
          console.log('✅ Admin email sent via FormSubmit');
        }
      } catch (formsubmitError) {
        console.log('⚠️ FormSubmit failed:', formsubmitError);
      }
    }

    console.log('📊 Email results:', results);

    return NextResponse.json({
      success: true,
      emailSent: {
        student: results.student,
        admin: results.admin,
        method: results.method
      },
      enrollmentId: enrollmentData.enrollmentId,
      message: results.student 
        ? 'Payment instructions sent to your email!'
        : 'Enrollment received! Check your email or contact us directly.',
      paymentInfo: {
        upiId: 'yravi8804@axl',
        bank: 'Union Bank Of India - 0942',
        amount: `₹${finalPrice.toLocaleString('en-IN')}`,
        whatsapp: '+91-9522220892',
        email: 'litcindore@gmail.com',
        phone: '+91-9425094250'
      }
    });

  } catch (error) {
    console.error('❌ Error processing enrollment email:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Email sending failed',
        message: 'Please contact us directly',
        contact: {
          phone: '+91-9425094250',
          whatsapp: '+91-9522220892',
          email: 'litcindore@gmail.com'
        }
      },
      { status: 500 }
    );
  }
}
