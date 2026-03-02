import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    console.log('\n' + '━'.repeat(100));
    console.log('📧 CONTACT FORM MESSAGE - Sending to: litcindore@gmail.com');
    console.log('━'.repeat(100));
    console.log('👤 Name:', formData.name);
    console.log('📱 Phone:', formData.phone);
    console.log('📧 Email:', formData.email);
    console.log('📝 Subject:', formData.subject);
    console.log('🏷️ Type:', formData.service);
    console.log('━'.repeat(100));

    // Create HTML email
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 800px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0891b2 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #0891b2; }
    .label { font-weight: bold; color: #0891b2; display: inline-block; width: 150px; }
    .value { color: #333; }
    .message-box { background: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #0891b2; margin: 20px 0; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
    .badge { background: #0891b2; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">📧 New Contact Form Message</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">LITC Infotech Website - Contact Us Form</p>
    </div>
    
    <div class="content">
      <div class="section">
        <h2 style="color: #0891b2; margin-top: 0;">
          <span class="badge">${formData.service.toUpperCase().replace(/-/g, ' ')}</span>
        </h2>
        <h3 style="color: #333; margin: 10px 0;">Subject: ${formData.subject}</h3>
      </div>

      <div class="section">
        <h2 style="color: #0891b2; margin-top: 0;">📌 Contact Details</h2>
        <p><span class="label">👤 Name:</span> <span class="value"><strong>${formData.name}</strong></span></p>
        <p><span class="label">📧 Email:</span> <span class="value">${formData.email}</span></p>
        <p><span class="label">📱 Phone:</span> <span class="value"><strong>${formData.phone}</strong></span></p>
      </div>

      <div class="section">
        <h2 style="color: #0891b2; margin-top: 0;">💬 Message</h2>
        <div class="message-box">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
      </div>

      <div class="section" style="background: #f0fdf4; border-left-color: #22c55e;">
        <h2 style="color: #22c55e; margin-top: 0;">⚡ Quick Actions</h2>
        <p style="margin: 10px 0;">
          📞 <a href="tel:${formData.phone}" style="color: #22c55e; text-decoration: none; font-weight: bold;">Call ${formData.phone}</a>
        </p>
        <p style="margin: 10px 0;">
          📧 <a href="mailto:${formData.email}" style="color: #22c55e; text-decoration: none; font-weight: bold;">Reply to ${formData.email}</a>
        </p>
        <p style="margin: 10px 0;">
          💬 <a href="https://wa.me/91${formData.phone.replace(/\D/g, '')}" style="color: #22c55e; text-decoration: none; font-weight: bold;">WhatsApp Message</a>
        </p>
      </div>

      <div class="section">
        <p><span class="label">🆔 Reference ID:</span> <span class="value">${formData.requestId}</span></p>
        <p><span class="label">📅 Submitted:</span> <span class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span></p>
        <p><span class="label">📱 Source:</span> <span class="value">Website Contact Form</span></p>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 5px 0;">Automated message from LITC Infotech Website</p>
      <p style="margin: 5px 0; opacity: 0.8;">📧 litcindore@gmail.com | 📱 +919522220892</p>
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version
    const emailText = `
📧 NEW CONTACT FORM MESSAGE - LITC INFOTECH

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INQUIRY TYPE: ${formData.service.toUpperCase().replace(/-/g, ' ')}
SUBJECT: ${formData.subject}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ QUICK ACTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Call: ${formData.phone}
📧 Email: ${formData.email}
💬 WhatsApp: https://wa.me/91${formData.phone.replace(/\D/g, '')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 SUBMISSION INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🆔 Reference ID: ${formData.requestId}
📅 Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
🌐 Source: Website Contact Form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    try {
      const data = await resend.emails.send({
        from: 'LITC Infotech Contact <onboarding@resend.dev>',
        to: ['litcindore@gmail.com'],
        subject: `📧 ${formData.service.replace(/-/g, ' ').toUpperCase()}: ${formData.subject} - ${formData.name}`,
        html: emailHtml,
        text: emailText,
      });

      console.log('✅ ✅ ✅ CONTACT MESSAGE SENT TO INBOX! ✅ ✅ ✅');
      console.log('📧 Email Data:', data);
      console.log('📮 Delivered to: litcindore@gmail.com');
      console.log('👤 From:', formData.name);
      console.log('📱 Contact:', formData.phone);
      console.log('━'.repeat(100) + '\n');

      return NextResponse.json({
        success: true,
        message: 'Contact message sent successfully',
        service: 'Resend',
        recipient: 'litcindore@gmail.com',
        requestId: formData.requestId
      });

    } catch (emailError: any) {
      console.error('❌ Resend API Error:', emailError);
      
      // Log content as backup
      console.log('\n📧 CONTACT MESSAGE CONTENT (Backup):');
      console.log('━'.repeat(100));
      console.log(emailText);
      console.log('━'.repeat(100) + '\n');

      return NextResponse.json({
        success: false,
        error: 'Email delivery failed: ' + emailError.message,
        fallback: 'Message content logged to console'
      });
    }

  } catch (error) {
    console.error('\n❌ ERROR IN CONTACT MESSAGE SERVICE:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
