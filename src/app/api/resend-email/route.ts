import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * RESEND EMAIL SERVICE
 * Professional email delivery service - works immediately after API key setup
 * Get free API key at: https://resend.com
 */

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();
    
    console.log('\n' + '━'.repeat(100));
    console.log('📧 RESEND EMAIL SERVICE - SENDING TO: litcindore@gmail.com');
    console.log('━'.repeat(100));
    console.log('👤 Student:', formData.fullName);
    console.log('📱 Phone:', formData.phone);
    console.log('📧 Email:', formData.email);
    console.log('━'.repeat(100));

    // Create HTML email content
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 800px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #667eea; }
    .label { font-weight: bold; color: #667eea; display: inline-block; width: 180px; }
    .value { color: #333; }
    .urgent { background: #ff6b6b; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🎓 New Student Consultation Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">LITC Infotech - Immediate Action Required</p>
    </div>
    
    <div class="content">
      <div class="urgent">
        <strong>⚡ URGENT:</strong> New student inquiry received. Contact within 24 hours for best conversion!
      </div>

      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">📌 Student Contact Information</h2>
        <p><span class="label">👤 Full Name:</span> <span class="value">${formData.fullName}</span></p>
        <p><span class="label">📱 Phone:</span> <span class="value"><strong>${formData.phone}</strong></span></p>
        <p><span class="label">📧 Email:</span> <span class="value">${formData.email}</span></p>
        <p><span class="label">📍 Location:</span> <span class="value">${formData.location || 'Not provided'}</span></p>
      </div>

      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">💼 Professional Background</h2>
        <p><span class="label">🏢 Current Role:</span> <span class="value">${formData.currentRole || 'Not specified'}</span></p>
        <p><span class="label">⏳ Experience:</span> <span class="value">${formData.experience}</span></p>
        <p><span class="label">🏭 Industry:</span> <span class="value">${formData.industry || 'Not specified'}</span></p>
        <p><span class="label">🎯 Career Goals:</span> <span class="value">${formData.careerGoals || 'Not specified'}</span></p>
      </div>

      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">🎓 Course Interests</h2>
        <p><strong>Interested Courses:</strong></p>
        <ul style="background: #f0f0f0; padding: 15px 30px; border-radius: 5px;">
          ${formData.interestedCourses.map((course: string) => `<li style="margin: 8px 0;"><strong>✓</strong> ${course}</li>`).join('') || '<li>No courses selected</li>'}
        </ul>
        <p><span class="label">📅 Timeline:</span> <span class="value">${formData.timelineToStart}</span></p>
        <p><span class="label">💻 Learning Mode:</span> <span class="value">${formData.learningMode}</span></p>
        <p><span class="label">💰 Budget:</span> <span class="value">${formData.budget || 'Not specified'}</span></p>
      </div>

      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">⏰ Consultation Preferences</h2>
        <p><strong>Preferred Time Slots:</strong></p>
        <ul style="background: #f0f0f0; padding: 15px 30px; border-radius: 5px;">
          ${formData.preferredTimeSlots.map((slot: string) => `<li style="margin: 8px 0;">⏰ ${slot}</li>`).join('') || '<li>Not specified</li>'}
        </ul>
      </div>

      ${formData.specificQuestions ? `
      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">💬 Questions/Requirements</h2>
        <p style="background: #f0f0f0; padding: 15px; border-radius: 5px;">${formData.specificQuestions}</p>
      </div>
      ` : ''}

      <div class="section" style="background: #e8f5e9; border-left-color: #4caf50;">
        <h2 style="color: #4caf50; margin-top: 0;">⚡ Quick Action Links</h2>
        <p style="margin: 10px 0;">
          📞 <a href="tel:${formData.phone}" style="color: #4caf50; text-decoration: none; font-weight: bold;">Call ${formData.phone}</a>
        </p>
        <p style="margin: 10px 0;">
          📧 <a href="mailto:${formData.email}" style="color: #4caf50; text-decoration: none; font-weight: bold;">Email ${formData.email}</a>
        </p>
        <p style="margin: 10px 0;">
          💬 <a href="https://wa.me/91${formData.phone.replace(/\D/g, '')}" style="color: #4caf50; text-decoration: none; font-weight: bold;">WhatsApp Message</a>
        </p>
      </div>

      <div class="section">
        <p><span class="label">🆔 Request ID:</span> <span class="value">${formData.requestId}</span></p>
        <p><span class="label">📅 Submitted:</span> <span class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span></p>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 5px 0;">Automated notification from LITC Infotech Website</p>
      <p style="margin: 5px 0; opacity: 0.8;">📧 litcindore@gmail.com | 📱 +918225852734</p>
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version
    const emailText = `
🎓 NEW STUDENT CONSULTATION REQUEST - LITC INFOTECH

⚡ URGENT: Contact student within 24 hours!

📌 STUDENT CONTACT:
👤 Name: ${formData.fullName}
📱 Phone: ${formData.phone}
📧 Email: ${formData.email}
📍 Location: ${formData.location || 'Not provided'}

💼 PROFESSIONAL BACKGROUND:
🏢 Role: ${formData.currentRole || 'Not specified'}
⏳ Experience: ${formData.experience}
🏭 Industry: ${formData.industry || 'Not specified'}

🎓 COURSE INTERESTS:
${formData.interestedCourses.map((course: string) => `✓ ${course}`).join('\n') || '• No courses selected'}

📅 Timeline: ${formData.timelineToStart}
💻 Mode: ${formData.learningMode}
💰 Budget: ${formData.budget || 'Not specified'}

⏰ PREFERRED TIME SLOTS:
${formData.preferredTimeSlots.map((slot: string) => `⏰ ${slot}`).join('\n') || '• Not specified'}

💬 QUESTIONS: ${formData.specificQuestions || 'None'}

📋 SUBMISSION INFO:
🆔 Request ID: ${formData.requestId}
📅 Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

⚡ QUICK ACTIONS:
📞 Call: ${formData.phone}
📧 Email: ${formData.email}
💬 WhatsApp: https://wa.me/91${formData.phone.replace(/\D/g, '')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Automated notification from LITC Infotech Website
    `;

    try {
      const data = await resend.emails.send({
        from: 'LITC Infotech <onboarding@resend.dev>', // Temporary - will change after domain verification
        to: ['litcindore@gmail.com'],
        subject: `🎓 New Inquiry: ${formData.fullName} - ${formData.interestedCourses[0] || 'Course Interest'}`,
        html: emailHtml,
        text: emailText,
      });

      console.log('✅ ✅ ✅ EMAIL SENT SUCCESSFULLY VIA RESEND! ✅ ✅ ✅');
      console.log('📧 Email Data:', data);
      console.log('📮 Delivered to: litcindore@gmail.com');
      console.log('👤 Student:', formData.fullName);
      console.log('📱 Contact:', formData.phone);
      console.log('━'.repeat(100) + '\n');

      return NextResponse.json({
        success: true,
        message: 'Email sent successfully to litcindore@gmail.com',
        service: 'Resend',
        emailData: data,
        recipient: 'litcindore@gmail.com',
        studentInfo: {
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          courses: formData.interestedCourses
        }
      });

    } catch (emailError: any) {
      console.error('❌ Resend API Error:', emailError);
      
      // Log email content as backup
      console.log('\n📧 EMAIL CONTENT (For Manual Processing):');
      console.log('━'.repeat(100));
      console.log('TO: litcindore@gmail.com');
      console.log('SUBJECT:', `New Inquiry: ${formData.fullName}`);
      console.log('━'.repeat(100));
      console.log(emailText);
      console.log('━'.repeat(100) + '\n');

      return NextResponse.json({
        success: false,
        error: 'Resend API error: ' + emailError.message,
        fallback: 'Email content logged to console',
        studentInfo: {
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email
        }
      });
    }

  } catch (error) {
    console.error('\n❌ ERROR IN RESEND EMAIL SERVICE:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
