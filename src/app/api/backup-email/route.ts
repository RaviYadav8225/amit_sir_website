import { NextRequest, NextResponse } from 'next/server';

// Backup email service using a different method
export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();
    
    console.log('📧 Backup Email Service: Processing request for', formData.fullName);

    // Prepare email data for different email services
    const emailData = {
      to: 'litcindore@gmail.com',
      subject: `🎓 URGENT: New Consultation Request from ${formData.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background: #4F46E5; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .section { margin: 20px 0; padding: 15px; border-left: 4px solid #4F46E5; background: #f8f9fa; }
                .highlight { background: #fef3c7; padding: 2px 5px; }
                .urgent { color: #dc2626; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🎓 New Consultation Request</h1>
                <p>LITC Infotech - Immediate Action Required</p>
            </div>
            
            <div class="content">
                <p class="urgent">⚡ URGENT: Please contact this student within 24 hours!</p>
                
                <div class="section">
                    <h3>👤 Student Information</h3>
                    <p><strong>Name:</strong> ${formData.fullName}</p>
                    <p><strong>Phone:</strong> <span class="highlight">${formData.phone}</span></p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Location:</strong> ${formData.location}</p>
                </div>
                
                <div class="section">
                    <h3>💼 Professional Background</h3>
                    <p><strong>Current Role:</strong> ${formData.currentRole}</p>
                    <p><strong>Experience:</strong> ${formData.experience}</p>
                    <p><strong>Industry:</strong> ${formData.industry}</p>
                </div>
                
                <div class="section">
                    <h3>🎯 Learning Goals</h3>
                    <p><strong>Interested Courses:</strong> <span class="highlight">${formData.interestedCourses.join(', ')}</span></p>
                    <p><strong>Timeline:</strong> ${formData.timelineToStart}</p>
                    <p><strong>Learning Mode:</strong> ${formData.learningMode}</p>
                    <p><strong>Preferred Slots:</strong> ${formData.preferredTimeSlots.join(', ')}</p>
                </div>
                
                <div class="section">
                    <h3>💰 Budget & Questions</h3>
                    <p><strong>Budget Range:</strong> ${formData.budget}</p>
                    <p><strong>Questions:</strong> ${formData.specificQuestions || 'None'}</p>
                </div>
                
                <div class="section">
                    <h3>📅 Submission Details</h3>
                    <p><strong>Submitted At:</strong> ${new Date(formData.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                    <p><strong>Request ID:</strong> ${formData.requestId}</p>
                </div>
                
                <div style="background: #dc2626; color: white; padding: 15px; text-align: center; margin: 20px 0;">
                    <h3>⚡ IMMEDIATE ACTION REQUIRED</h3>
                    <p>📞 Call: ${formData.phone} | 📧 Email: ${formData.email}</p>
                </div>
            </div>
        </body>
        </html>
      `,
      text: `
🎓 New Consultation Request from ${formData.fullName}

URGENT: Please contact within 24 hours!

Student Details:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Location: ${formData.location}

Professional Background:
- Role: ${formData.currentRole}
- Experience: ${formData.experience}
- Industry: ${formData.industry}

Learning Goals:
- Courses: ${formData.interestedCourses.join(', ')}
- Timeline: ${formData.timelineToStart}
- Mode: ${formData.learningMode}
- Slots: ${formData.preferredTimeSlots.join(', ')}

Budget: ${formData.budget}
Questions: ${formData.specificQuestions || 'None'}

Submitted: ${new Date(formData.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Request ID: ${formData.requestId}

Contact: ${formData.phone} | ${formData.email}
      `
    };

    // Try multiple email services
    const emailServices = [
      // Service 1: EmailJS
      async () => {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: 'service_zx5h5aj',
            template_id: 'template_9h1qkmi', 
            user_id: 'user_4JaIFWG8s1K6eYtP2PfQH',
            template_params: {
              to_email: 'litcindore@gmail.com',
              from_name: formData.fullName,
              message: emailData.html,
              subject: emailData.subject
            }
          })
        });
        return { success: response.ok, service: 'EmailJS', status: response.status };
      },
      
      // Service 2: Formsubmit.co (Backup)
      async () => {
        const formData = new FormData();
        formData.append('email', 'litcindore@gmail.com');
        formData.append('subject', emailData.subject);
        formData.append('message', emailData.text);
        
        const response = await fetch('https://formsubmit.co/litcindore@gmail.com', {
          method: 'POST',
          body: formData
        });
        return { success: response.ok, service: 'FormSubmit', status: response.status };
      }
    ];

    // Try each service
    for (const service of emailServices) {
      try {
        const result = await service();
        if (result.success) {
          console.log(`✅ Email sent successfully via ${result.service}`);
          return NextResponse.json({
            success: true,
            service: result.service,
            message: 'Email sent successfully',
            recipient: 'litcindore@gmail.com'
          });
        }
      } catch (error) {
        console.log(`❌ Email service failed:`, error);
        continue;
      }
    }

    // If all services fail, log for manual processing
    console.log('📧 ALL EMAIL SERVICES FAILED - MANUAL PROCESSING REQUIRED');
    console.log('='.repeat(60));
    console.log('TO:', emailData.to);
    console.log('SUBJECT:', emailData.subject);
    console.log('CONTENT:', emailData.text);
    console.log('='.repeat(60));

    return NextResponse.json({
      success: false,
      message: 'All email services failed, content logged for manual processing',
      recipient: 'litcindore@gmail.com',
      manualProcessing: true
    });

  } catch (error) {
    console.error('❌ Backup Email Service Error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      service: 'backup'
    });
  }
}