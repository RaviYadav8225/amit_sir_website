import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    console.log('🧪 Testing email to:', email);
    console.log('📧 Resend API Key exists:', !!process.env.RESEND_API_KEY);

    const testEmail = await resend.emails.send({
      from: 'LITC Institute <onboarding@resend.dev>',
      to: email,
      subject: 'Test Email from LITC Institute',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 30px; border-radius: 10px; }
              h1 { color: #4CAF50; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Test Email Successful!</h1>
              <p>If you received this email, the email system is working correctly.</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN')}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('Email ID:', testEmail.data?.id);
    console.log('Response:', testEmail);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      emailId: testEmail.data?.id,
      data: testEmail
    });

  } catch (error) {
    console.error('❌ Test email failed:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send test email',
        details: error instanceof Error ? error.message : 'Unknown error',
        errorObject: JSON.stringify(error, null, 2)
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Use POST method with { "email": "test@example.com" } to test email sending'
  });
}
