import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('🎓 Processing enrollment...');
    console.log('Student:', enrollmentData.name, '|', enrollmentData.email);

    // Calculate price
    const basePrice = parseInt(enrollmentData.course?.price.replace(/[^0-9]/g, '') || '0');
    const discount = enrollmentData.paymentPlan === 'full' ? basePrice * 0.05 : 0;
    const finalPrice = basePrice - discount;

    // Create Gmail transporter
    // Note: You need to enable "App Password" in Gmail settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yyradhe751@gmail.com', // Your Gmail
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

    <div class="payment-box">
      <h3 style="margin-top: 0; color: #1e40af;">💰 Payment Information</h3>
      <p><strong>Total Amount:</strong> <span style="font-size: 24px; color: #059669;">₹${finalPrice.toLocaleString('en-IN')}</span></p>
      ${enrollmentData.paymentPlan === 'full' ? '<p style="color: #10b981;">✅ 5% discount applied for full payment!</p>' : ''}
      
      <div class="highlight">
        <p style="margin: 0; font-size: 16px;"><strong>⚠️ COMPLETE PAYMENT TO CONFIRM ENROLLMENT</strong></p>
      </div>
    </div>

    <div class="section">
      <h3>💳 UPI Payment Details</h3>
      <div class="upi-details">
        <p>UPI ID: <span style="color: #dc2626;">yravi8804@axl</span></p>
        <p>Bank: Union Bank Of India - 0942</p>
        <p>Amount: ₹${finalPrice.toLocaleString('en-IN')}</p>
      </div>
    </div>

    <div class="steps">
      <h3>📱 Payment Steps</h3>
      <ol>
        <li>Open any UPI app (Paytm / PhonePe / Google Pay)</li>
        <li>Select "Send Money to UPI ID"</li>
        <li>Enter UPI ID: <strong>yravi8804@axl</strong></li>
        <li>Enter Amount: <strong>₹${finalPrice.toLocaleString('en-IN')}</strong></li>
        <li>Add Remark: <strong>${enrollmentData.enrollmentId}</strong></li>
        <li>Complete payment & take screenshot</li>
      </ol>
    </div>

    <div class="section">
      <h3>📤 Send Payment Proof</h3>
      <p>After payment, send screenshot to:</p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="https://wa.me/918225852734?text=Payment%20Done%20-%20${enrollmentData.enrollmentId}" class="button" style="background: #25d366;">
          📱 WhatsApp: +91-8225852734
        </a>
        <a href="mailto:yyradhe751@gmail.com?subject=Payment%20Screenshot%20-%20${enrollmentData.enrollmentId}" class="button" style="background: #3b82f6;">
          📧 Email Payment Proof
        </a>
      </div>
      
      <div class="highlight">
        <p><strong>⏰ Important:</strong></p>
        <ul style="margin: 10px 0;">
          <li>Send payment proof within 24 hours</li>
          <li>Include Enrollment ID: ${enrollmentData.enrollmentId}</li>
          <li>Confirmation within 1-2 hours after verification</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h3>📞 Need Help?</h3>
      <p><strong>Call:</strong> +91-9425094250</p>
      <p><strong>WhatsApp:</strong> +91-8225852734</p>
      <p><strong>Email:</strong> yyradhe751@gmail.com</p>
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
      <h3>💰 Payment Information</h3>
      <p><strong>Amount:</strong> ₹${finalPrice.toLocaleString('en-IN')}</p>
      <p><strong>Payment Plan:</strong> ${enrollmentData.paymentPlan}</p>
      <p><strong>Referral Source:</strong> ${enrollmentData.referralSource}</p>
    </div>

    <div class="action-required">
      <h3>⚠️ ACTION REQUIRED</h3>
      <ol>
        <li>Wait for payment screenshot from student</li>
        <li>Verify payment in UPI: <strong>yravi8804@axl</strong></li>
        <li>Send enrollment confirmation email</li>
        <li>Add student to WhatsApp group</li>
        <li>Provide course access credentials</li>
      </ol>
      <p><strong>Payment will be received via:</strong></p>
      <ul>
        <li>WhatsApp: +91-8225852734</li>
        <li>Email: yyradhe751@gmail.com</li>
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
        from: '"LITC Institute" <yyradhe751@gmail.com>',
        to: enrollmentData.email,
        subject: `Payment Required - ${enrollmentData.course?.name} | ID: ${enrollmentData.enrollmentId}`,
        html: studentEmailHTML,
        replyTo: 'yyradhe751@gmail.com'
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
        from: '"LITC Enrollment System" <yyradhe751@gmail.com>',
        to: 'yyradhe751@gmail.com',
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
        ? '✅ Payment instructions sent to your email! Check inbox and spam folder.'
        : '⚠️ Email sending in progress. You will receive payment details shortly.',
      errors: results.errors.length > 0 ? results.errors : undefined,
      paymentInfo: {
        upiId: 'yravi8804@axl',
        bank: 'Union Bank Of India - 0942',
        amount: `₹${finalPrice.toLocaleString('en-IN')}`,
        enrollmentId: enrollmentData.enrollmentId
      },
      contact: {
        whatsapp: '+91-8225852734',
        phone: '+91-9425094250',
        email: 'yyradhe751@gmail.com'
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
          email: 'yyradhe751@gmail.com'
        }
      },
      { status: 500 }
    );
  }
}
