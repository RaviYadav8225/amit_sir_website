#!/usr/bin/env node

/**
 * 🧪 EMAIL SYSTEM TEST SCRIPT
 * Tests if emails are being sent to yyradhe751@gmail.com
 * 
 * Usage: node test-email-system.js
 */

const testFormData = {
  fullName: "Test Student (Demo)",
  email: "test.student@example.com",
  phone: "+91 98765 43210",
  location: "Indore, MP",
  currentRole: "Software Developer",
  experience: "1-3 years",
  industry: "IT Services",
  currentSkills: ["JavaScript", "React"],
  careerGoals: "Want to become AWS Certified Solutions Architect",
  interestedCourses: ["AWS Solutions Architect", "Kubernetes Administrator"],
  targetCertifications: ["AWS SAA-C03"],
  timelineToStart: "Immediate",
  learningMode: "Online",
  preferredTimeSlots: ["Weekday Morning (9 AM - 12 PM)", "Evening (5 PM - 8 PM)"],
  budget: "₹20,000 - ₹50,000",
  specificQuestions: "This is a test inquiry to verify email delivery to yyradhe751@gmail.com",
  submittedAt: new Date().toISOString(),
  requestId: `TEST-${Date.now()}`
};

async function testEmailSystem() {
  console.log('\n🧪 STARTING EMAIL SYSTEM TEST\n');
  console.log('━'.repeat(80));
  console.log('📧 Target Email: yyradhe751@gmail.com');
  console.log('👤 Test Student:', testFormData.fullName);
  console.log('🆔 Request ID:', testFormData.requestId);
  console.log('━'.repeat(80));

  try {
    console.log('\n📤 Sending test inquiry to API...\n');
    
    const response = await fetch('http://localhost:3000/api/instant-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData: testFormData })
    });

    const result = await response.json();

    console.log('━'.repeat(80));
    console.log('📋 API RESPONSE:');
    console.log('━'.repeat(80));
    console.log(JSON.stringify(result, null, 2));
    console.log('━'.repeat(80));

    if (result.success) {
      console.log('\n✅ SUCCESS! Email system is working!\n');
      console.log('📧 Check your email: yyradhe751@gmail.com');
      console.log('⏰ Email should arrive within 1-2 minutes');
      console.log('📂 Check spam folder if not in inbox');
      console.log('🔍 Service used:', result.service);
    } else {
      console.log('\n⚠️ WARNING: Email may not have been sent');
      console.log('📋 Check console logs for details');
      console.log('💬 WhatsApp backup should still work');
    }

    console.log('\n━'.repeat(80));
    console.log('🔍 WHAT TO CHECK:');
    console.log('━'.repeat(80));
    console.log('1. ✉️  Inbox at yyradhe751@gmail.com');
    console.log('2. 📂 Spam/Junk folder');
    console.log('3. 🔄 Verify FormSubmit email (first time only)');
    console.log('4. 💻 Server console logs');
    console.log('━'.repeat(80) + '\n');

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.log('\n🔧 TROUBLESHOOTING:');
    console.log('1. Make sure server is running: npm run dev');
    console.log('2. Check if server is on port 3000');
    console.log('3. Look at server terminal for error messages');
    console.log('━'.repeat(80) + '\n');
  }
}

// Check if server is running
async function checkServer() {
  try {
    const response = await fetch('http://localhost:3000');
    return response.ok;
  } catch {
    return false;
  }
}

// Main execution
(async () => {
  console.log('🔍 Checking if server is running...');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('\n❌ Server is not running on http://localhost:3000');
    console.log('\n📌 Please start the server first:');
    console.log('   cd d:\\amit_sir_website');
    console.log('   npm run dev');
    console.log('\nThen run this test again.\n');
    process.exit(1);
  }

  console.log('✅ Server is running!\n');
  await testEmailSystem();
})();
