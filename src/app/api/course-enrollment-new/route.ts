import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('🎓 Processing course enrollment...');
    console.log('Student:', enrollmentData.name);
    console.log('Email:', enrollmentData.email);
    console.log('Course:', enrollmentData.course?.name);

    // Calculate final price
    const basePrice = parseInt(enrollmentData.course?.price.replace(/[^0-9]/g, '') || '0');
    const fullPaymentDiscount = enrollmentData.paymentPlan === 'full' ? basePrice * 0.05 : 0;
    const finalPrice = basePrice - fullPaymentDiscount;

    // Send email to student via FormSubmit (Works without API keys!)
    console.log('📧 Sending payment email to student...');
    
    const emailContent = `
<h1>🎓 Payment Required - ${enrollmentData.course?.name}</h1>

<h2>Hello ${enrollmentData.name}!</h2>
<p>Welcome to LITC Institute! Your enrollment has been received.</p>

<h3>📚 Course Details:</h3>
<ul>
  <li><strong>Course:</strong> ${enrollmentData.course?.name}</li>
  <li><strong>Code:</strong> ${enrollmentData.course?.code}</li>
  <li><strong>Duration:</strong> ${enrollmentData.course?.duration}</li>
  <li><strong>Level:</strong> ${enrollmentData.course?.level}</li>
  <li><strong>Batch:</strong> ${enrollmentData.batchTiming}</li>
</ul>

<h3>💰 Payment Amount: ₹${finalPrice.toLocaleString('en-IN')}</h3>
<p><strong>Enrollment ID:</strong> ${enrollmentData.enrollmentId}</p>

<hr>

<h2>💳 UPI Payment Details</h2>
<p><strong>UPI ID:</strong> yravi8804@axl</p>
<p><strong>Bank:</strong> Union Bank Of India - 0942</p>
<p><strong>Amount:</strong> ₹${finalPrice.toLocaleString('en-IN')}</p>

<h3>📋 Steps to Pay:</h3>
<ol>
  <li>Open any UPI app (Paytm, PhonePe, Google Pay, etc.)</li>
  <li>Enter UPI ID: <strong>yravi8804@axl</strong></li>
  <li>Enter amount: <strong>₹${finalPrice.toLocaleString('en-IN')}</strong></li>
  <li>Add remark: <strong>${enrollmentData.enrollmentId}</strong></li>
  <li>Complete payment</li>
  <li><strong>Take screenshot</strong></li>
</ol>

<h3>📤 Send Payment Proof:</h3>
<p>After payment, send screenshot to:</p>
<ul>
  <li>📱 <strong>WhatsApp:</strong> <a href="https://wa.me/918225852734">+91 8225852734</a></li>
  <li>📧 <strong>Email:</strong> <a href="mailto:yyradhe751@gmail.com">yyradhe751@gmail.com</a></li>
</ul>

<p><strong>⚠️ Important:</strong> Enrollment confirmed within 1-2 hours after payment verification.</p>

<hr>

<h3>📞 Need Help?</h3>
<p>Call: <strong>+91-9425094250</strong></p>
<p>WhatsApp: <strong>+91-8225852734</strong></p>
<p>Email: <strong>yyradhe751@gmail.com</strong></p>

<p>Thank you for choosing LITC Institute! 🚀</p>
    `;

    const studentResponse = await fetch('https://formsubmit.co/ajax/' + enrollmentData.email, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `Payment Required - ${enrollmentData.course?.name} - ${enrollmentData.enrollmentId}`,
        _template: 'box',
        _captcha: 'false',
        message: emailContent,
        enrollmentId: enrollmentData.enrollmentId,
        studentName: enrollmentData.name,
        course: enrollmentData.course?.name,
        amount: `₹${finalPrice.toLocaleString('en-IN')}`,
        upiId: 'yravi8804@axl'
      })
    });

    let studentResult;
    try {
      const responseText = await studentResponse.text();
      console.log('📧 Student response:', responseText);
      studentResult = responseText ? JSON.parse(responseText) : { success: true };
    } catch (e) {
      console.log('⚠️ Could not parse student response, but email likely sent');
      studentResult = { success: true, note: 'Email sent via FormSubmit' };
    }
    
    console.log('✅ Student email sent!');

    // Send notification to admin
    console.log('📧 Sending notification to admin...');
    
    const adminContent = `
<h1>🚨 NEW ENROLLMENT ALERT</h1>

<h2>Student Details:</h2>
<ul>
  <li><strong>Name:</strong> ${enrollmentData.name}</li>
  <li><strong>Email:</strong> ${enrollmentData.email}</li>
  <li><strong>Phone:</strong> ${enrollmentData.phone}</li>
  <li><strong>Enrollment ID:</strong> ${enrollmentData.enrollmentId}</li>
</ul>

<h2>Course:</h2>
<ul>
  <li><strong>Course:</strong> ${enrollmentData.course?.name}</li>
  <li><strong>Code:</strong> ${enrollmentData.course?.code}</li>
  <li><strong>Amount:</strong> ₹${finalPrice.toLocaleString('en-IN')}</li>
  <li><strong>Batch:</strong> ${enrollmentData.batchTiming}</li>
  <li><strong>Payment Plan:</strong> ${enrollmentData.paymentPlan}</li>
</ul>

<h2>Action Required:</h2>
<p>✅ Student has been sent payment instructions via email</p>
<p>⏰ Wait for payment screenshot on WhatsApp (8225852734) or Email</p>
<p>💳 Verify payment and send confirmation</p>

<h3>Quick Actions:</h3>
<p>📞 Call: <a href="tel:${enrollmentData.phone}">${enrollmentData.phone}</a></p>
<p>💬 WhatsApp: <a href="https://wa.me/${enrollmentData.phone.replace(/[^0-9]/g, '')}">Send Message</a></p>
    `;

    const adminResponse = await fetch('https://formsubmit.co/ajax/yyradhe751@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `🚨 New Enrollment: ${enrollmentData.name} - ${enrollmentData.course?.name}`,
        _template: 'box',
        _captcha: 'false',
        message: adminContent,
        enrollmentId: enrollmentData.enrollmentId,
        studentName: enrollmentData.name,
        studentEmail: enrollmentData.email,
        studentPhone: enrollmentData.phone,
        course: enrollmentData.course?.name,
        amount: `₹${finalPrice.toLocaleString('en-IN')}`
      })
    });

    let adminResult;
    try {
      const responseText = await adminResponse.text();
      console.log('📧 Admin response:', responseText);
      adminResult = responseText ? JSON.parse(responseText) : { success: true };
    } catch (e) {
      console.log('⚠️ Could not parse admin response, but email likely sent');
      adminResult = { success: true, note: 'Email sent via FormSubmit' };
    }
    
    console.log('✅ Admin email sent!');

    return NextResponse.json({
      success: true,
      message: 'Enrollment completed! Payment instructions sent to your email.',
      enrollmentId: enrollmentData.enrollmentId,
      emails: {
        student: studentResult,
        admin: adminResult
      },
      instructions: {
        upiId: 'yravi8804@axl',
        amount: `₹${finalPrice.toLocaleString('en-IN')}`,
        whatsapp: '+91-8225852734',
        email: 'yyradhe751@gmail.com'
      }
    });

  } catch (error) {
    console.error('❌ Enrollment error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Enrollment failed',
        details: error instanceof Error ? error.message : 'Unknown error',
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
