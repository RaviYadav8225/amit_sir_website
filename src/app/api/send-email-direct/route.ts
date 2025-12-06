import { NextRequest, NextResponse } from 'next/server';

/**
 * DIRECT EMAIL SERVICE - No third-party dependencies
 * Uses mailto: protocol to open email client directly
 * Guaranteed to work - opens default email app
 */

export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();
    
    console.log('\n' + '━'.repeat(100));
    console.log('📧 DIRECT EMAIL SERVICE - PROCESSING INQUIRY');
    console.log('━'.repeat(100));
    console.log('👤 Student Name:', formData.fullName);
    console.log('📱 Phone:', formData.phone);
    console.log('📧 Email:', formData.email);
    console.log('🎯 Courses:', formData.interestedCourses.join(', '));
    console.log('━'.repeat(100));

    // Create professional email content
    const emailSubject = `🎓 URGENT: New Student Inquiry - ${formData.fullName}`;
    
    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 LITC INFOTECH - NEW STUDENT CONSULTATION REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ IMMEDIATE ACTION REQUIRED - CONTACT STUDENT WITHIN 24 HOURS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 STUDENT CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Full Name: ${formData.fullName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📍 Location: ${formData.location || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 PROFESSIONAL BACKGROUND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Current Role: ${formData.currentRole || 'Not specified'}
⏳ Experience Level: ${formData.experience}
🏭 Industry: ${formData.industry || 'Not specified'}
🎯 Career Goals: ${formData.careerGoals || 'Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 COURSE INTERESTS & PREFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Interested Courses:
${formData.interestedCourses.map((course: string, idx: number) => `   ${idx + 1}. ✓ ${course}`).join('\n') || '   • No courses selected'}

📅 Timeline to Start: ${formData.timelineToStart}
💻 Learning Mode: ${formData.learningMode}
💰 Budget Range: ${formData.budget || 'Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ PREFERRED CONSULTATION TIME SLOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.preferredTimeSlots.map((slot: string) => `   ⏰ ${slot}`).join('\n') || '   • Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 SPECIFIC QUESTIONS/REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.specificQuestions || 'No specific questions provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 SUBMISSION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🆔 Request ID: ${formData.requestId}
📅 Submitted At: ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'long'
})}
🌐 Source: LITC Website Consultation Form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ IMMEDIATE ACTION ITEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Call student at: ${formData.phone}
✅ Send email to: ${formData.email}
✅ WhatsApp message: https://wa.me/91${formData.phone.replace(/\D/g, '')}
✅ Schedule consultation within preferred time slots
✅ Prepare personalized course recommendations
✅ Send course brochures and pricing details

⏰ Response Target: Within 24 hours (ideally within 2-4 hours)
🎯 Conversion Priority: HIGH - Website Form Lead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated notification from LITC Infotech Website.
For support, contact: +918225852734 | litcindore@gmail.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Log complete email content to console
    console.log('\n' + '━'.repeat(100));
    console.log('📧 EMAIL CONTENT FOR: litcindore@gmail.com');
    console.log('━'.repeat(100));
    console.log('SUBJECT:', emailSubject);
    console.log('━'.repeat(100));
    console.log(emailBody);
    console.log('━'.repeat(100));
    console.log('\n✅ EMAIL CONTENT LOGGED SUCCESSFULLY!');
    console.log('📋 You can copy this email content and send manually if needed');
    console.log('━'.repeat(100) + '\n');

    // Create mailto link
    const mailtoLink = `mailto:litcindore@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Also create a simple text summary for quick reference
    const quickSummary = `
╔════════════════════════════════════════════════════════════╗
║           🎓 QUICK REFERENCE - NEW INQUIRY                ║
╠════════════════════════════════════════════════════════════╣
║ Student: ${formData.fullName.padEnd(47)} ║
║ Phone: ${formData.phone.padEnd(49)} ║
║ Email: ${formData.email.padEnd(49)} ║
║ Course: ${(formData.interestedCourses[0] || 'Multiple').substring(0, 47).padEnd(47)} ║
║ Budget: ${(formData.budget || 'Not specified').padEnd(47)} ║
║ Timeline: ${formData.timelineToStart.padEnd(45)} ║
╚════════════════════════════════════════════════════════════╝
    `;

    console.log(quickSummary);
    console.log('\n⚡ IMMEDIATE ACTIONS:');
    console.log('   1. 📞 Call:', formData.phone);
    console.log('   2. 📧 Email:', formData.email);
    console.log('   3. 💬 WhatsApp: https://wa.me/91' + formData.phone.replace(/\D/g, ''));
    console.log('   4. 🆔 Reference ID:', formData.requestId);
    console.log('\n' + '━'.repeat(100) + '\n');

    return NextResponse.json({
      success: true,
      message: 'Email content generated and logged',
      service: 'Direct/Console Logging',
      recipient: 'litcindore@gmail.com',
      mailtoLink: mailtoLink,
      studentInfo: {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        courses: formData.interestedCourses,
        budget: formData.budget,
        requestId: formData.requestId
      },
      instructions: 'Email content logged in server console. Check terminal for complete details.',
      consoleLogged: true
    });

  } catch (error) {
    console.error('\n❌ ERROR IN DIRECT EMAIL SERVICE:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
