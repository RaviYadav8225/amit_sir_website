import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Create transporter for Gmail using existing credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'litcindore@gmail.com',
        pass: (process.env.GMAIL_APP_PASSWORD || 'uqtswthkutaxskmg').replace(/\s/g, '')
      }
    });

    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'litcindore@gmail.com';

    // Email content for admin
    const adminMailOptions = {
      from: adminEmail,
      to: adminEmail, // Admin email
      subject: `🤖 New ChatBot Enquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 12px; }
            .badge { display: inline-block; background: #4CAF50; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🤖 LITC Siri ChatBot</h1>
              <p style="margin: 10px 0 0 0;">New Student Enquiry Received!</p>
            </div>
            
            <div class="content">
              <div style="text-align: center; margin-bottom: 20px;">
                <span class="badge">NEW LEAD</span>
              </div>
              
              <div class="info-box">
                <p><span class="label">👤 Student Name:</span><br/>${name}</p>
              </div>
              
              <div class="info-box">
                <p><span class="label">📧 Email Address:</span><br/>${email}</p>
              </div>
              
              <div class="info-box">
                <p><span class="label">🕐 Enquiry Time:</span><br/>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
              
              <div class="info-box">
                <p><span class="label">📱 Source:</span><br/>LITC Siri ChatBot - Website</p>
              </div>
              
              <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #ffc107;">
                <p style="margin: 0;"><strong>⚡ Action Required:</strong></p>
                <p style="margin: 5px 0 0 0;">Please follow up with this student as soon as possible via email or phone call.</p>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>LITC INFOTECH</strong></p>
              <p>Ground Floor, Metro Tower, Near Mangal City, Indore, MP</p>
              <p>📞 +91-9522220892 | ✉️ info@litcindore.com</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    // Optional: Send welcome email to student
    const studentMailOptions = {
      from: adminEmail,
      to: email,
      subject: '👋 Welcome to LITC INFOTECH - Your Career Journey Starts Here!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin: 10px 0; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Welcome to LITC INFOTECH!</h1>
            </div>
            
            <div class="content">
              <h2>Hi ${name}! 👋</h2>
              
              <p>Thank you for connecting with us through LITC Siri! We're excited to help you transform your career with our industry-leading IT training programs.</p>
              
              <h3>🚀 What's Next?</h3>
              <ul>
                <li>Our team will contact you within 24 hours</li>
                <li>We'll understand your career goals</li>
                <li>Recommend the best courses for you</li>
                <li>Provide detailed information about certifications</li>
              </ul>
              
              <h3>📚 Popular Courses:</h3>
              <ul>
                <li>RHCSA/RHCE (Red Hat Linux)</li>
                <li>AWS Cloud Computing</li>
                <li>Docker & Kubernetes</li>
                <li>Python Full Stack Development</li>
                <li>CCNA Networking</li>
                <li>DevOps with Ansible</li>
              </ul>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://litcindore.com/explore-courses" class="button">Explore All Courses</a>
              </div>
              
              <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 0;"><strong>📞 Need Immediate Help?</strong></p>
                <p style="margin: 5px 0 0 0;">Call us at: +91-9522220892</p>
                <p style="margin: 5px 0 0 0;">WhatsApp: +91-9522220892</p>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>LITC INFOTECH</strong></p>
              <p>Ground Floor, Metro Tower, Near Mangal City, Indore, MP</p>
              <p>📞 +91-9522220892 | ✉️ info@litcindore.com</p>
              <p style="margin-top: 15px; color: #999;">
                This is an automated email. Please do not reply directly to this email.
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send welcome email to student
    await transporter.sendMail(studentMailOptions);

    console.log('✅ ChatBot Enquiry Emails Sent:', { name, email });

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully'
    });

  } catch (error) {
    console.error('❌ ChatBot Enquiry API Error:', error);
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
