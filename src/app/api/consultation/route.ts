// API route for handling consultation form submissions
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Here you can integrate with your preferred service:
    
    // Option 1: Send to your email using EmailJS (client-side)
    // Option 2: Send to a database (like Supabase, MongoDB)
    // Option 3: Send to a webhook/Zapier
    // Option 4: Send to a CRM system

    // For now, let's log and save to a simple storage
    console.log('Consultation Request Received:', {
      timestamp: new Date().toISOString(),
      ...formData
    });

    // You can save to database here
    // await saveToDatabase(formData);
    
    // Send email notification (implement based on your email service)
    // await sendEmailNotification(formData);

    // Send WhatsApp notification (if you have WhatsApp Business API)
    // await sendWhatsAppNotification(formData);

    return NextResponse.json({ 
      success: true, 
      message: 'Consultation request submitted successfully',
      data: {
        submittedAt: new Date().toISOString(),
        requestId: `LITC-${Date.now()}` // Generate unique ID
      }
    });

  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}

// Example integration functions you can implement:

/*
// Database integration example (Supabase)
async function saveToDatabase(formData: any) {
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );
  
  const { data, error } = await supabase
    .from('consultation_requests')
    .insert([{
      ...formData,
      created_at: new Date().toISOString(),
      status: 'pending'
    }]);
    
  if (error) throw error;
  return data;
}

// Email notification example (using Resend)
async function sendEmailNotification(formData: any) {
  const { Resend } = require('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: 'noreply@litcindore.com',
    to: 'info@litcindore.com',
    subject: `New Consultation Request - ${formData.fullName}`,
    html: generateEmailTemplate(formData)
  });
}

// WhatsApp notification example
async function sendWhatsAppNotification(formData: any) {
  const message = `🎓 New Consultation Request
  
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Courses: ${formData.interestedCourses.join(', ')}
Timeline: ${formData.timelineToStart}

Please contact within 24 hours!`;

  // Send to your WhatsApp Business API or Twilio
  // Implementation depends on your WhatsApp service provider
}
*/