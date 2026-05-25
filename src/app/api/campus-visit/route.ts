import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const visitData = await request.json();

    console.log('📅 Processing campus visit booking...');
    console.log('Visitor:', visitData.name);
    console.log('Date:', visitData.visitDate);
    console.log('Time:', visitData.timeSlot);

    // Create email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
            .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #eee; }
            .detail-label { font-weight: bold; width: 180px; color: #667eea; }
            .detail-value { flex: 1; color: #333; }
            .campus-info { background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 10px 5px; }
            .icon { font-size: 48px; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="icon">🏫</div>
              <h1 style="margin: 0;">Campus Visit Booking Confirmed!</h1>
              <p style="margin: 10px 0 0 0;">LITC Institute, Indore</p>
            </div>

            <div class="content">
              <h2 style="color: #667eea;">Hello ${visitData.name}! 👋</h2>
              
              <p>Thank you for scheduling a campus visit with us! We're excited to show you our world-class facilities and help you explore your learning opportunities.</p>

              <div class="booking-details">
                <h3 style="color: #667eea; margin-top: 0;">📅 Booking Details</h3>
                
                <div class="detail-row">
                  <div class="detail-label">Booking ID:</div>
                  <div class="detail-value"><strong>${visitData.bookingId}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">Visitor Name:</div>
                  <div class="detail-value">${visitData.name}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">Email:</div>
                  <div class="detail-value">${visitData.email}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">Phone:</div>
                  <div class="detail-value"><a href="tel:${visitData.phone}">${visitData.phone}</a></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📅 Visit Date:</div>
                  <div class="detail-value"><strong>${visitData.visitDate}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">⏰ Time Slot:</div>
                  <div class="detail-value"><strong>${visitData.timeSlot}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">👥 Number of Visitors:</div>
                  <div class="detail-value">${visitData.numberOfVisitors}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">🎯 Purpose:</div>
                  <div class="detail-value">${visitData.purpose.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</div>
                </div>

                ${visitData.specialRequirements ? `
                <div class="detail-row">
                  <div class="detail-label">📝 Special Requirements:</div>
                  <div class="detail-value">${visitData.specialRequirements}</div>
                </div>
                ` : ''}

                <div class="detail-row" style="border-bottom: none;">
                  <div class="detail-label">Booked On:</div>
                  <div class="detail-value">${new Date(visitData.submittedAt).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</div>
                </div>
              </div>

              <div class="campus-info">
                <h3 style="color: #1976d2; margin-top: 0;">📍 Campus Locations</h3>
                <p><strong>Main Office:</strong><br>
                LITC Institute, P13-14, Ground Floor, Metro Tower<br>
                Vijay Nagar, Indore, Madhya Pradesh - 452010</p>
                
                <p><strong>Second Office:</strong><br>
                G5, 10/102, Shri Balaji Center Building<br>
                Station Road, Shastri Ward, Ward Number-11<br>
                Rau, Indore, MP - 453331</p>
                
                <p><strong>🕒 Working Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM<br>
                <strong>🅿️ Parking:</strong> Free parking available<br>
                <strong>☕ Amenities:</strong> Refreshments will be provided</p>

                <a href="https://maps.google.com/?q=LITC+Institute+Vijay+Nagar+Indore" class="button" style="background: #1976d2;">📍 Get Directions</a>
              </div>

              <h3 style="color: #667eea;">What to Expect During Your Visit:</h3>
              <ul>
                <li>✅ Comprehensive campus tour</li>
                <li>✅ Interaction with experienced faculty</li>
                <li>✅ Live demo of training labs and facilities</li>
                <li>✅ Course curriculum and career guidance</li>
                <li>✅ Discussion on admission process and fees</li>
                <li>✅ Q&A session for all your queries</li>
              </ul>

              <p><strong>📱 Need to Reschedule?</strong><br>
              No problem! Just call us at <a href="tel:+919425094250" style="color: #667eea;">+91-9425094250</a> or reply to this email.</p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="tel:+919425094250" class="button">📞 Call Us</a>
                <a href="https://wa.me/918225852734" class="button" style="background: #25D366;">💬 WhatsApp</a>
              </div>
            </div>

            <div class="footer">
              <p style="margin: 0 0 10px 0;"><strong>LITC Institute - Leading IT Training Center</strong></p>
              <p style="margin: 0; font-size: 14px;">📞 +91-9425094250 | 📧 info@litcinstitute.com</p>
              <p style="margin: 10px 0 0 0; font-size: 12px; color: #aaa;">We look forward to meeting you!</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Admin notification email
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .alert { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0; border-radius: 5px; }
            .booking-card { background: white; padding: 25px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .detail-row { padding: 12px 0; border-bottom: 1px solid #eee; display: flex; }
            .detail-label { font-weight: bold; width: 200px; color: #f5576c; }
            .detail-value { flex: 1; }
            .action-buttons { text-align: center; margin: 30px 0; }
            .button { display: inline-block; padding: 15px 30px; margin: 5px; text-decoration: none; border-radius: 8px; font-weight: bold; }
            .btn-call { background: #4CAF50; color: white; }
            .btn-whatsapp { background: #25D366; color: white; }
            .btn-email { background: #2196F3; color: white; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🚨 New Campus Visit Booking!</h1>
              <p style="margin: 10px 0 0 0;">Immediate Action Required</p>
            </div>

            <div class="content">
              <div class="alert">
                <strong>⚠️ New Booking Alert!</strong><br>
                A visitor has scheduled a campus visit. Please review the details and prepare accordingly.
              </div>

              <div class="booking-card">
                <h2 style="color: #f5576c; margin-top: 0;">📋 Booking Information</h2>

                <div class="detail-row">
                  <div class="detail-label">🆔 Booking ID:</div>
                  <div class="detail-value"><strong>${visitData.bookingId}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">👤 Visitor Name:</div>
                  <div class="detail-value"><strong style="font-size: 18px;">${visitData.name}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📧 Email:</div>
                  <div class="detail-value"><a href="mailto:${visitData.email}">${visitData.email}</a></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📱 Phone:</div>
                  <div class="detail-value">
                    <a href="tel:${visitData.phone}" style="font-size: 18px; color: #4CAF50;"><strong>${visitData.phone}</strong></a>
                  </div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📅 Visit Date:</div>
                  <div class="detail-value"><strong style="font-size: 18px; color: #f5576c;">${visitData.visitDate}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">⏰ Time Slot:</div>
                  <div class="detail-value"><strong style="font-size: 18px; color: #f5576c;">${visitData.timeSlot}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">👥 Number of Visitors:</div>
                  <div class="detail-value">${visitData.numberOfVisitors}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">🎯 Purpose of Visit:</div>
                  <div class="detail-value"><strong>${visitData.purpose.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</strong></div>
                </div>

                ${visitData.specialRequirements ? `
                <div class="detail-row">
                  <div class="detail-label">📝 Special Requirements:</div>
                  <div class="detail-value" style="background: #fff3cd; padding: 10px; border-radius: 5px;">${visitData.specialRequirements}</div>
                </div>
                ` : ''}

                <div class="detail-row" style="border-bottom: none;">
                  <div class="detail-label">🕒 Booked On:</div>
                  <div class="detail-value">${new Date(visitData.submittedAt).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</div>
                </div>
              </div>

              <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1976d2; margin-top: 0;">✅ Action Items:</h3>
                <ul style="margin: 10px 0;">
                  <li>Call visitor to confirm booking</li>
                  <li>Prepare demo labs and presentation materials</li>
                  <li>Arrange faculty/counselor availability</li>
                  <li>Keep course brochures and admission forms ready</li>
                  <li>Ensure refreshments are available</li>
                </ul>
              </div>

              <div class="action-buttons">
                <h3 style="color: #333;">Quick Actions:</h3>
                <a href="tel:${visitData.phone}" class="button btn-call">📞 Call Visitor</a>
                <a href="https://wa.me/${visitData.phone.replace(/[^0-9]/g, '')}" class="button btn-whatsapp">💬 WhatsApp</a>
                <a href="mailto:${visitData.email}" class="button btn-email">📧 Send Email</a>
              </div>

              <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
                <strong>⏰ Reminder:</strong> Set up a calendar reminder for this visit!
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send confirmation email to visitor
    const visitorEmail = await resend.emails.send({
      from: 'LITC Institute <onboarding@resend.dev>',
      to: visitData.email,
      subject: `✅ Campus Visit Confirmed - ${visitData.visitDate}`,
      html: emailHtml,
    });

    console.log('✅ Visitor confirmation email sent:', visitorEmail.data?.id);

    // Send notification to admin
    const adminEmail = await resend.emails.send({
      from: 'LITC Booking System <onboarding@resend.dev>',
      to: 'litcindore@gmail.com',
      subject: `🚨 New Campus Visit: ${visitData.name} - ${visitData.visitDate}`,
      html: adminEmailHtml,
    });

    console.log('✅ Admin notification email sent:', adminEmail.data?.id);

    return NextResponse.json({
      success: true,
      message: 'Campus visit booked successfully',
      bookingId: visitData.bookingId,
      visitorEmailId: visitorEmail.data?.id,
      adminEmailId: adminEmail.data?.id
    });

  } catch (error) {
    console.error('❌ Campus visit booking error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to book campus visit',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
