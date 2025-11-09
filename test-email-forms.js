#!/usr/bin/env node

/**
 * 🧪 EMAIL SYSTEM TEST - Quick Test for Both Forms
 * Tests Resend API integration for consultation and contact forms
 */

const RESEND_API_KEY = 're_dBnvs37R_HW2Uni99NifhZkjy7zuNFwja';

async function testEmailSystem() {
  console.log('\n' + '━'.repeat(100));
  console.log('🧪 TESTING EMAIL SYSTEM - RESEND API');
  console.log('━'.repeat(100));
  console.log('📧 Recipient: yyradhe751@gmail.com');
  console.log('🔑 API Key:', RESEND_API_KEY.substring(0, 15) + '...');
  console.log('━'.repeat(100) + '\n');

  // Test 1: Consultation Form
  console.log('📝 TEST 1: Consultation Form Email...\n');
  
  const consultationData = {
    fullName: 'Test Student (System Check)',
    email: 'test@example.com',
    phone: '+91 98765 43210',
    location: 'Indore',
    currentRole: 'Developer',
    experience: 'Fresher',
    industry: 'IT',
    interestedCourses: ['AWS Solutions Architect'],
    timelineToStart: 'Immediate',
    learningMode: 'Online',
    preferredTimeSlots: ['Morning (9 AM - 12 PM)'],
    budget: '₹20,000 - ₹50,000',
    requestId: `TEST-CONSULT-${Date.now()}`,
    submittedAt: new Date().toISOString()
  };

  try {
    const response1 = await fetch('http://localhost:3000/api/resend-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formData: consultationData })
    });

    const result1 = await response1.json();
    
    if (result1.success) {
      console.log('✅ CONSULTATION FORM EMAIL: SUCCESS!');
      console.log('📧 Email sent to: yyradhe751@gmail.com');
      console.log('📋 Check your Gmail inbox!');
    } else {
      console.log('❌ CONSULTATION FORM EMAIL: FAILED');
      console.log('Error:', result1.error || result1.message);
    }
  } catch (error) {
    console.log('❌ CONSULTATION FORM TEST ERROR:', error.message);
  }

  console.log('\n' + '━'.repeat(100) + '\n');

  // Test 2: Contact Form
  console.log('📝 TEST 2: Contact Form Email...\n');
  
  const contactData = {
    name: 'Test User (System Check)',
    email: 'test@example.com',
    phone: '+91 98765 43210',
    subject: 'Testing Contact Form',
    service: 'general',
    message: 'This is a test message from the email system test script. If you receive this, the contact form email integration is working perfectly!',
    requestId: `TEST-CONTACT-${Date.now()}`,
    submittedAt: new Date().toISOString()
  };

  try {
    const response2 = await fetch('http://localhost:3000/api/contact-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    });

    const result2 = await response2.json();
    
    if (result2.success) {
      console.log('✅ CONTACT FORM EMAIL: SUCCESS!');
      console.log('📧 Email sent to: yyradhe751@gmail.com');
      console.log('📋 Check your Gmail inbox!');
    } else {
      console.log('❌ CONTACT FORM EMAIL: FAILED');
      console.log('Error:', result2.error || result2.message);
    }
  } catch (error) {
    console.log('❌ CONTACT FORM TEST ERROR:', error.message);
  }

  console.log('\n' + '━'.repeat(100));
  console.log('🏁 TEST COMPLETE!');
  console.log('━'.repeat(100));
  console.log('\n📧 CHECK YOUR EMAIL: yyradhe751@gmail.com');
  console.log('⏰ Emails should arrive within 10-30 seconds');
  console.log('📂 Check spam folder if not in inbox\n');
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
