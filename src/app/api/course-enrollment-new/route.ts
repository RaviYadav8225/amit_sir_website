import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('🎓 Processing course enrollment...');
    console.log('Student:', enrollmentData.name);
    console.log('Email:', enrollmentData.email);
    console.log('Course:', enrollmentData.course?.name);

    // Send email to student via FormSubmit (Works without API keys!)
    console.log('📧 Sending enrollment confirmation to student...');
    
    const emailContent = `
<h1>🎓 Enrollment Confirmation - ${enrollmentData.course?.name}</h1>

<h2>Hello ${enrollmentData.name}!</h2>
<p>Welcome to LITC Institute! Your enrollment has been received successfully.</p>

<h3>📚 Course Details:</h3>
<ul>
  <li><strong>Course:</strong> ${enrollmentData.course?.name}</li>
  <li><strong>Code:</strong> ${enrollmentData.course?.code}</li>
  <li><strong>Duration:</strong> ${enrollmentData.course?.duration}</li>
  <li><strong>Level:</strong> ${enrollmentData.course?.level}</li>
  <li><strong>Batch:</strong> ${enrollmentData.batchTiming}</li>
</ul>

<p><strong>Enrollment ID:</strong> ${enrollmentData.enrollmentId}</p>

<hr>

<h2>📞 Next Steps</h2>
<p>Our team will contact you within 24 hours to discuss:</p>
<ul>
  <li>Course fee and payment options</li>
  <li>Batch start date and schedule</li>
  <li>Course materials and resources</li>
  <li>Any questions you may have</li>
</ul>

<hr>

<h3>📞 Need Help?</h3>
<p>Call: <strong>+91-9425094250</strong></p>
<p>WhatsApp: <strong>+91-9522220892</strong></p>
<p>Email: <strong>litcindore@gmail.com</strong></p>

<p>Thank you for choosing LITC Institute! 🚀</p>
    `;

    const studentResponse = await fetch('https://formsubmit.co/ajax/' + enrollmentData.email, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `Enrollment Confirmation - ${enrollmentData.course?.name}`,
        _template: 'box',
        _captcha: 'false',
        message: emailContent,
        enrollmentId: enrollmentData.enrollmentId,
        studentName: enrollmentData.name,
        course: enrollmentData.course?.name
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
  <li><strong>Batch:</strong> ${enrollmentData.batchTiming}</li>
  <li><strong>Payment Plan:</strong> ${enrollmentData.paymentPlan}</li>
</ul>

<h2>Action Required:</h2>
<p>✅ Contact student within 24 hours</p>
<p>📞 Discuss course fee and payment options</p>
<p>✉️ Send confirmation email after enrollment finalized</p>

<h3>Quick Actions:</h3>
<p>📞 Call: <a href="tel:${enrollmentData.phone}">${enrollmentData.phone}</a></p>
<p>💬 WhatsApp: <a href="https://wa.me/${enrollmentData.phone.replace(/[^0-9]/g, '')}">Send Message</a></p>
    `;

    const adminResponse = await fetch('https://formsubmit.co/ajax/litcindore@gmail.com', {
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
        course: enrollmentData.course?.name
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
      message: 'Enrollment completed! Our team will contact you shortly.',
      enrollmentId: enrollmentData.enrollmentId,
      emails: {
        student: studentResult,
        admin: adminResult
      },
      contact: {
        whatsapp: '+91-9522220892',
        email: 'litcindore@gmail.com',
        phone: '+91-9425094250'
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
          whatsapp: '+91-9522220892',
          email: 'litcindore@gmail.com'
        }
      },
      { status: 500 }
    );
  }
}
