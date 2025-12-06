import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const enquiryData = await request.json();
    const { name, email, phone, message, course, courseDuration, coursePrice } = enquiryData;

    console.log('📧 Processing course enquiry...');
    console.log('Student:', name);
    console.log('Course:', course);

    // Admin notification email
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 15px 15px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .course-card { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-left: 4px solid #667eea; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; color: #667eea; }
            .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 15px 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🎓 New Course Enquiry</h1>
              <p style="margin: 10px 0 0 0;">Student interested in ${course}</p>
            </div>
            
            <div class="content">
              <h2 style="color: #667eea; margin-top: 0;">Student Details</h2>
              
              <div class="course-card">
                <div class="detail-row">
                  <span class="label">👤 Student Name:</span><br/>
                  <strong style="font-size: 18px;">${name}</strong>
                </div>
                
                <div class="detail-row">
                  <span class="label">📧 Email:</span><br/>
                  <a href="mailto:${email}" style="color: #667eea;">${email}</a>
                </div>
                
                <div class="detail-row">
                  <span class="label">📱 Phone:</span><br/>
                  <a href="tel:${phone}" style="color: #667eea; font-size: 18px; font-weight: bold;">${phone}</a>
                </div>
                
                ${message ? `
                <div class="detail-row">
                  <span class="label">💬 Message:</span><br/>
                  <p style="margin: 5px 0; padding: 10px; background: #f0f0f0; border-radius: 5px;">${message}</p>
                </div>
                ` : ''}
              </div>

              <h3 style="color: #667eea;">Course Information</h3>
              <div class="course-card">
                <div class="detail-row">
                  <span class="label">📚 Course:</span><br/>
                  <strong style="font-size: 16px; color: #764ba2;">${course}</strong>
                </div>
                
                <div class="detail-row">
                  <span class="label">⏱️ Duration:</span><br/>
                  ${courseDuration}
                </div>
              </div>

              <div style="background: #fff3cd; padding: 20px; border-radius: 10px; text-align: center; margin-top: 20px;">
                <strong>📞 Action Required:</strong> Contact student within 24 hours for best conversion!
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                <p style="margin: 0;"><strong>🕐 Enquiry Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 5px 0; font-size: 18px; font-weight: bold;">LITC - Learners IT Consultancy</p>
              <p style="margin: 5px 0; font-size: 14px;">Leading IT Training & Certification Institute</p>
              <p style="margin: 5px 0; font-size: 12px;">📞 +91-9522220892 | 📧 litcindore@gmail.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Student confirmation email
    const studentEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 15px 15px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 15px 15px; }
            .button { background: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">✅ Enquiry Received!</h1>
              <p style="margin: 10px 0 0 0;">Thank you for your interest</p>
            </div>
            
            <div class="content">
              <h2 style="color: #667eea;">Dear ${name},</h2>
              
              <p>Thank you for showing interest in our <strong>${course}</strong> course!</p>
              
              <p>We have received your enquiry and our admission team will contact you within <strong>24 hours</strong> to discuss:</p>
              
              <ul style="background: white; padding: 20px 20px 20px 40px; border-radius: 10px; margin: 20px 0;">
                <li>Course details and curriculum</li>
                <li>Batch timings and schedule</li>
                <li>Course fee and payment options</li>
                <li>Certification and placement assistance</li>
              </ul>

              <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #667eea;">Your Enquiry Details</h3>
                <p style="margin: 5px 0;"><strong>Course:</strong> ${course}</p>
                <p style="margin: 5px 0;"><strong>Duration:</strong> ${courseDuration}</p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="tel:+919522220892" class="button">📞 Call Us: +91-9522220892</a>
              </div>

              <p style="color: #666; font-size: 14px; margin-top: 20px;">
                <strong>Note:</strong> If you have any immediate questions, feel free to reach out to us at +91-9522220892 or reply to this email.
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 5px 0; font-size: 18px; font-weight: bold;">LITC - Learners IT Consultancy</p>
              <p style="margin: 5px 0; font-size: 14px;">Your Gateway to IT Excellence Since 2010</p>
              <p style="margin: 5px 0; font-size: 12px;">📍 Indore, Madhya Pradesh</p>
              <p style="margin: 5px 0; font-size: 12px;">📞 +91-9522220892 | 📧 litcindore@gmail.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send admin notification
    const adminEmail = await resend.emails.send({
      from: 'LITC Institute <onboarding@resend.dev>',
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'litcindore@gmail.com',
      subject: `🎓 New Course Enquiry: ${course} - ${name}`,
      html: adminEmailHtml,
    });

    console.log('✅ Admin notification sent:', adminEmail.data?.id);

    // Send student confirmation
    const studentEmail = await resend.emails.send({
      from: 'LITC Institute <onboarding@resend.dev>',
      to: email,
      subject: `Thank you for your interest in ${course}`,
      html: studentEmailHtml,
    });

    console.log('✅ Student confirmation sent:', studentEmail.data?.id);

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully',
      adminEmailId: adminEmail.data?.id,
      studentEmailId: studentEmail.data?.id
    });

  } catch (error) {
    console.error('❌ Course Enquiry API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit enquiry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
