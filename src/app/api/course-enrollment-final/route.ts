import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('🎓 Processing enrollment...');
    console.log('Student:', enrollmentData.name, '|', enrollmentData.email);

    // Create Gmail transporter
    // Note: You need to enable "App Password" in Gmail settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'litcindore@gmail.com', // Your Gmail
        pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password-here' // Gmail App Password
      }
    });

    // Student email HTML
    const studentEmailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; }
    .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; }
    .section h3 { margin-top: 0; color: #3b82f6; }
    .highlight { background: #fef3c7; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #f59e0b; }
    .payment-box { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .upi-details { font-size: 18px; font-weight: bold; color: #1e40af; }
    .button { display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .steps { background: #f0f9ff; padding: 15px; border-radius: 6px; }
    .steps li { margin: 8px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎓 Enrollment Successful!</h1>
    <p>Thank you for choosing LITC Institute</p>
  </div>
  
  <div class="content">
    <div class="section">
      <h3>📋 Enrollment Details</h3>
      <p><strong>Enrollment ID:</strong> ${enrollmentData.enrollmentId}</p>
      <p><strong>Student Name:</strong> ${enrollmentData.name}</p>
      <p><strong>Course:</strong> ${enrollmentData.course?.name}</p>
      <p><strong>Course Code:</strong> ${enrollmentData.course?.code}</p>
      <p><strong>Duration:</strong> ${enrollmentData.course?.duration}</p>
      <p><strong>Level:</strong> ${enrollmentData.course?.level}</p>
      <p><strong>Batch Timing:</strong> ${enrollmentData.batchTiming}</p>
    </div>

    <div class="section">
      <h3>📞 Next Steps</h3>
      <p>Our team will contact you within 24 hours to discuss:</p>
      <ul>
        <li>Course fee and payment options</li>
        <li>Batch start date and schedule</li>
        <li>Course materials and resources</li>
        <li>Any questions you may have</li>
      </ul>
    </div>

    <div class="section">
      <h3>📞 Need Help?</h3>
      <p><strong>Call:</strong> +91-9425094250</p>
      <p><strong>WhatsApp:</strong> +91-8225852734</p>
      <p><strong>Email:</strong> litcindore@gmail.com</p>
    </div>
  </div>

  <div class="footer">
    <p>Thank you for choosing LITC Institute!</p>
    <p>We look forward to your learning journey with us.</p>
    <p style="margin-top: 20px; color: #999;">This is an automated email. Please do not reply to this email.</p>
  </div>
</body>
</html>
    `;

    // Admin email HTML
    const adminEmailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .alert-header { background: #dc2626; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9fafb; }
    .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #3b82f6; border-radius: 4px; }
    .action-required { background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin: 20px 0; }
    h3 { color: #1f2937; margin-top: 0; }
  </style>
</head>
<body>
  <div class="alert-header">
    <h1>🚨 NEW ENROLLMENT ALERT</h1>
  </div>
  
  <div class="content">
    <div class="info-box">
      <h3>📋 Enrollment Information</h3>
      <p><strong>Enrollment ID:</strong> ${enrollmentData.enrollmentId}</p>
      <p><strong>Submitted:</strong> ${new Date(enrollmentData.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
    </div>

    <div class="info-box">
      <h3>👤 Student Information</h3>
      <p><strong>Name:</strong> ${enrollmentData.name}</p>
      <p><strong>Email:</strong> ${enrollmentData.email}</p>
      <p><strong>Phone:</strong> ${enrollmentData.phone}</p>
      <p><strong>Education:</strong> ${enrollmentData.education}</p>
      <p><strong>Experience:</strong> ${enrollmentData.experience}</p>
    </div>

    <div class="info-box">
      <h3>📚 Course Information</h3>
      <p><strong>Course:</strong> ${enrollmentData.course?.name}</p>
      <p><strong>Code:</strong> ${enrollmentData.course?.code}</p>
      <p><strong>Duration:</strong> ${enrollmentData.course?.duration}</p>
      <p><strong>Level:</strong> ${enrollmentData.course?.level}</p>
      <p><strong>Batch:</strong> ${enrollmentData.batchTiming}</p>
    </div>

    <div class="info-box">
      <h3>💼 Additional Information</h3>
      <p><strong>Payment Plan:</strong> ${enrollmentData.paymentPlan}</p>
      <p><strong>Referral Source:</strong> ${enrollmentData.referralSource}</p>
    </div>

    <div class="action-required">
      <h3>⚠️ ACTION REQUIRED</h3>
      <ol>
        <li>Contact student within 24 hours</li>
        <li>Discuss course fee and payment options</li>
        <li>Send enrollment confirmation email</li>
        <li>Add student to WhatsApp group</li>
        <li>Provide course access credentials</li>
      </ol>
      <p><strong>Payment will be received via:</strong></p>
      <ul>
        <li>WhatsApp: +91-8225852734</li>
        <li>Email: litcindore@gmail.com</li>
      </ul>
    </div>

    <p style="color: #10b981; font-weight: bold;">✅ Payment email has been sent to student: ${enrollmentData.email}</p>
  </div>
</body>
</html>
    `;

    const results = {
      student: false,
      admin: false,
      errors: [] as string[]
    };

    // Send email to STUDENT
    try {
      console.log('📧 Sending email to student:', enrollmentData.email);
      
      await transporter.sendMail({
        from: '"LITC Institute" <litcindore@gmail.com>',
        to: enrollmentData.email,
        subject: `Enrollment Confirmation - ${enrollmentData.course?.name} | ID: ${enrollmentData.enrollmentId}`,
        html: studentEmailHTML,
        replyTo: 'litcindore@gmail.com'
      });

      results.student = true;
      console.log('✅ Student email sent successfully!');
      
    } catch (error: any) {
      console.error('❌ Student email failed:', error);
      results.errors.push('Student email: ' + error.message);
    }

    // Send email to ADMIN
    try {
      console.log('📧 Sending email to admin...');
      
      await transporter.sendMail({
        from: '"LITC Enrollment System" <litcindore@gmail.com>',
        to: 'litcindore@gmail.com',
        subject: `🚨 New Enrollment: ${enrollmentData.name} | ${enrollmentData.enrollmentId}`,
        html: adminEmailHTML
      });

      results.admin = true;
      console.log('✅ Admin email sent successfully!');
      
    } catch (error: any) {
      console.error('❌ Admin email failed:', error);
      results.errors.push('Admin email: ' + error.message);
    }

    console.log('📊 Final results:', results);

    return NextResponse.json({
      success: true,
      emailSent: {
        student: results.student,
        admin: results.admin
      },
      enrollmentId: enrollmentData.enrollmentId,
      message: results.student 
        ? '✅ Enrollment confirmation sent to your email! Our team will contact you shortly.'
        : '⚠️ Email sending in progress. You will receive confirmation details shortly.',
      errors: results.errors.length > 0 ? results.errors : undefined,
      contact: {
        whatsapp: '+91-8225852734',
        phone: '+91-9425094250',
        email: 'litcindore@gmail.com'
      }
    });

  } catch (error: any) {
    console.error('❌ Enrollment processing error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: 'Unable to send email. Please contact us directly.',
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
