import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const enrollmentData = await request.json();

    console.log('🎓 Processing course enrollment...');
    console.log('Student:', enrollmentData.name);
    console.log('Course:', enrollmentData.course?.name);

    // Calculate final price based on payment plan
    const basePrice = parseInt(enrollmentData.course?.price.replace(/[^0-9]/g, '') || '0');
    const fullPaymentDiscount = enrollmentData.paymentPlan === 'full' ? basePrice * 0.05 : 0;
    const finalPrice = basePrice - fullPaymentDiscount;

    // Student confirmation email
    const studentEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 650px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; border-radius: 15px 15px 0 0; }
            .content { background: #f9f9f9; padding: 40px; border: 1px solid #ddd; }
            .success-badge { background: #4CAF50; color: white; display: inline-block; padding: 10px 20px; border-radius: 25px; font-weight: bold; margin: 20px 0; }
            .course-card { background: white; padding: 25px; border-radius: 12px; margin: 25px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #667eea; }
            .detail-row { padding: 12px 0; border-bottom: 1px solid #eee; display: flex; }
            .detail-label { font-weight: bold; width: 180px; color: #667eea; }
            .detail-value { flex: 1; color: #333; }
            .price-box { background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; padding: 25px; border-radius: 12px; text-align: center; margin: 25px 0; }
            .payment-btn { display: inline-block; background: #FF5722; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 10px; }
            .next-steps { background: #e3f2fd; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #2196F3; }
            .footer { background: #333; color: white; padding: 30px; text-align: center; border-radius: 0 0 15px 15px; }
            .icon { font-size: 60px; margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="icon">🎉</div>
              <h1 style="margin: 0; font-size: 32px;">Enrollment Successful!</h1>
              <p style="margin: 15px 0 0 0; font-size: 18px;">Welcome to LITC Institute</p>
              <div class="success-badge">✓ ENROLLMENT CONFIRMED</div>
            </div>

            <div class="content">
              <h2 style="color: #667eea;">Hello ${enrollmentData.name}! 👋</h2>
              
              <p style="font-size: 16px;">Congratulations on taking the first step towards advancing your tech career! We're thrilled to have you join our learning community.</p>

              <div class="course-card">
                <h3 style="color: #667eea; margin-top: 0; font-size: 24px;">📚 Course Details</h3>
                
                <div class="detail-row">
                  <div class="detail-label">Course Name:</div>
                  <div class="detail-value"><strong style="font-size: 18px;">${enrollmentData.course?.name}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">Course Code:</div>
                  <div class="detail-value">${enrollmentData.course?.code}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">Duration:</div>
                  <div class="detail-value">${enrollmentData.course?.duration}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">Level:</div>
                  <div class="detail-value">${enrollmentData.course?.level}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">Batch Timing:</div>
                  <div class="detail-value">${enrollmentData.batchTiming.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</div>
                </div>

                <div class="detail-row" style="border-bottom: none;">
                  <div class="detail-label">Payment Plan:</div>
                  <div class="detail-value">${enrollmentData.paymentPlan.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</div>
                </div>
              </div>

              <div class="price-box">
                <h3 style="margin: 0 0 10px 0; font-size: 18px;">💰 Course Fee</h3>
                <div style="font-size: 36px; font-weight: bold; margin: 15px 0;">₹${finalPrice.toLocaleString('en-IN')}</div>
                ${fullPaymentDiscount > 0 ? `
                <div style="font-size: 14px; opacity: 0.9;">
                  <span style="text-decoration: line-through;">₹${basePrice.toLocaleString('en-IN')}</span>
                  <span style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 5px; margin-left: 10px;">
                    Extra ₹${fullPaymentDiscount.toLocaleString('en-IN')} saved with full payment!
                  </span>
                </div>
                ` : ''}
                <p style="margin: 15px 0 0 0; font-size: 14px;">Discount: ${enrollmentData.course?.discount}</p>
              </div>

              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 15px; margin: 30px 0; color: white; text-align: center;">
                <h2 style="color: white; margin: 0 0 20px 0;">💳 Complete Your Payment</h2>
                
                <div style="background: white; padding: 30px; border-radius: 12px; margin: 20px auto; max-width: 500px;">
                  <h3 style="color: #333; margin: 0 0 20px 0;">� Scan QR Code to Pay</h3>
                  
                  <!-- UPI QR Code -->
                  <div style="background: #f9f9f9; padding: 25px; border-radius: 15px; margin: 20px 0; border: 3px solid #667eea;">
                    <img src="https://i.ibb.co/YpGqKZQ/upi-qr-union-bank.png" 
                         alt="UPI Payment QR Code - Union Bank Of India" 
                         style="width: 300px; height: 300px; margin: 0 auto; display: block; border-radius: 10px;" />
                    
                    <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 10px; border: 2px dashed #667eea;">
                      <p style="color: #667eea; margin: 5px 0; font-weight: bold; font-size: 16px;">
                        📱 UPI ID: <span style="color: #333; font-family: monospace;">yravi8804@axl</span>
                      </p>
                      <p style="color: #666; margin: 5px 0; font-size: 13px;">🏦 Union Bank Of India - 0942</p>
                    </div>
                  </div>

                  <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h4 style="color: #2e7d32; margin: 0 0 15px 0;">💰 Payment Amount</h4>
                    <div style="font-size: 36px; color: #4CAF50; font-weight: bold; margin: 10px 0;">₹${finalPrice.toLocaleString('en-IN')}</div>
                    <p style="color: #2e7d32; margin: 10px 0; font-size: 14px;">
                      Enrollment ID: <strong>${enrollmentData.enrollmentId}</strong>
                    </p>
                  </div>

                  <div style="background: #fff3cd; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: left;">
                    <h4 style="color: #856404; margin: 0 0 15px 0;">📋 Payment Instructions</h4>
                    <ol style="color: #856404; padding-left: 20px; margin: 0; line-height: 1.8;">
                      <li style="margin: 8px 0;">Open any UPI app (Paytm, PhonePe, Google Pay, BHIM, etc.)</li>
                      <li style="margin: 8px 0;">Scan the QR code above OR use UPI ID: <strong>yravi8804@axl</strong></li>
                      <li style="margin: 8px 0;">Enter amount: <strong>₹${finalPrice.toLocaleString('en-IN')}</strong></li>
                      <li style="margin: 8px 0;">Add remark: <strong>${enrollmentData.enrollmentId}</strong></li>
                      <li style="margin: 8px 0;">Complete the payment</li>
                      <li style="margin: 8px 0;"><strong style="color: #d32f2f;">✓ Take screenshot of payment confirmation</strong></li>
                    </ol>
                  </div>

                  <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: left;">
                    <h4 style="color: #1976d2; margin: 0 0 15px 0;">📤 Send Payment Proof</h4>
                    <p style="color: #1976d2; margin: 10px 0;"><strong>After payment, send screenshot via:</strong></p>
                    
                    <div style="margin: 15px 0;">
                      <a href="https://wa.me/918225852734?text=Payment%20Done%20for%20${encodeURIComponent(enrollmentData.course?.name || '')}%20-%20Enrollment%20ID:%20${enrollmentData.enrollmentId}" 
                         style="display: inline-block; background: #25D366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; margin: 5px; font-weight: bold;">
                        💬 WhatsApp: 8225852734
                      </a>
                    </div>

                    <div style="margin: 15px 0;">
                      <a href="mailto:yyradhe751@gmail.com?subject=Payment%20Proof%20-%20${enrollmentData.enrollmentId}&body=Hi,%0A%0AI%20have%20completed%20the%20payment%20for%20${encodeURIComponent(enrollmentData.course?.name || '')}.%0A%0AEnrollment%20ID:%20${enrollmentData.enrollmentId}%0AName:%20${enrollmentData.name}%0AAmount:%20₹${finalPrice.toLocaleString('en-IN')}%0A%0APlease%20find%20the%20payment%20screenshot%20attached.%0A%0AThank%20you!" 
                         style="display: inline-block; background: #FF5722; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; margin: 5px; font-weight: bold;">
                        � Email: yyradhe751@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style="background: #ffebee; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #f44336;">
                    <p style="color: #c62828; margin: 0; font-size: 14px;">
                      <strong>⚠️ Important:</strong> Your enrollment will be confirmed within 2 hours after payment verification.
                    </p>
                  </div>
                </div>

                <div style="margin-top: 30px;">
                  <p style="color: white; font-size: 16px; margin: 10px 0;">💡 <strong>Alternative Payment Methods:</strong></p>
                  <p style="color: white; opacity: 0.9; font-size: 14px;">Contact us for bank transfer or other payment options</p>
                  <div style="margin-top: 15px;">
                    <a href="tel:+919425094250" style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; margin: 5px; border: 2px solid white;">
                      📞 Call: 9425094250
                    </a>
                  </div>
                </div>
              </div>

              <div class="next-steps">
                <h3 style="color: #2196F3; margin-top: 0;">📋 Next Steps</h3>
                <ol style="margin: 15px 0; padding-left: 20px;">
                  <li style="margin: 10px 0;"><strong>Complete Payment:</strong> Scan the UPI QR code above and complete your payment</li>
                  <li style="margin: 10px 0;"><strong>Send Payment Proof:</strong> Take screenshot and send via WhatsApp (8225852734) or Email (yyradhe751@gmail.com)</li>
                  <li style="margin: 10px 0;"><strong>Get Confirmation:</strong> You'll receive enrollment confirmation within 2 hours after payment verification</li>
                  <li style="margin: 10px 0;"><strong>Join WhatsApp Group:</strong> Get updates, notes, and connect with batchmates</li>
                  <li style="margin: 10px 0;"><strong>Attend Orientation:</strong> Meet your trainer and learn about the course structure</li>
                  <li style="margin: 10px 0;"><strong>Start Learning:</strong> Begin your journey to becoming a tech expert!</li>
                </ol>
              </div>

              <div style="background: #fff3cd; padding: 20px; border-radius: 10px; border-left: 4px solid #ffc107; margin: 25px 0;">
                <h4 style="margin: 0 0 10px 0; color: #856404;">📌 Your Enrollment Details</h4>
                <p style="margin: 5px 0; color: #856404;"><strong>Enrollment ID:</strong> ${enrollmentData.enrollmentId}</p>
                <p style="margin: 5px 0; color: #856404;"><strong>Email:</strong> ${enrollmentData.email}</p>
                <p style="margin: 5px 0; color: #856404;"><strong>Phone:</strong> ${enrollmentData.phone}</p>
                <p style="margin: 5px 0; color: #856404;"><strong>Enrolled On:</strong> ${new Date(enrollmentData.submittedAt).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <h3>📞 Need Help?</h3>
                <p style="color: #666; margin: 10px 0;">Our admission team is here to assist you</p>
                <div>
                  <a href="tel:+919425094250" style="display: inline-block; background: #4CAF50; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; margin: 5px;">📞 Call Us</a>
                  <a href="https://wa.me/918225852734" style="display: inline-block; background: #25D366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; margin: 5px;">💬 WhatsApp</a>
                </div>
              </div>

              <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <h4 style="color: #2e7d32; margin: 0 0 15px 0;">✨ What You'll Get:</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; color: #2e7d32;">
                  <div>✓ Expert-led live training</div>
                  <div>✓ Hands-on practical labs</div>
                  <div>✓ Real-world projects</div>
                  <div>✓ Course completion certificate</div>
                  <div>✓ Lifetime course access</div>
                  <div>✓ Job placement assistance</div>
                  <div>✓ Interview preparation</div>
                  <div>✓ Community support</div>
                </div>
              </div>
            </div>

            <div class="footer">
              <h3 style="margin: 0 0 15px 0;">🎓 LITC Institute</h3>
              <p style="margin: 5px 0; font-size: 14px;">Leading IT Training & Certification Center</p>
              <p style="margin: 15px 0 5px 0; font-size: 14px;">📍 P13-14, Metro Tower, Vijay Nagar, Indore, MP - 452010</p>
              <p style="margin: 5px 0; font-size: 14px;">📞 +91-9425094250 | 📧 info@litcinstitute.com</p>
              <p style="margin: 20px 0 0 0; font-size: 12px; color: #aaa;">Thank you for choosing LITC Institute. Let's build your future together! 🚀</p>
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
            .container { max-width: 650px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 35px; text-align: center; border-radius: 15px 15px 0 0; }
            .content { background: #f9f9f9; padding: 35px; border: 1px solid #ddd; }
            .alert { background: #fff3cd; padding: 20px; border-left: 5px solid #ffc107; margin: 20px 0; border-radius: 8px; }
            .enrollment-card { background: white; padding: 30px; border-radius: 12px; margin: 25px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
            .detail-row { padding: 12px 0; border-bottom: 1px solid #eee; display: flex; }
            .detail-label { font-weight: bold; width: 200px; color: #f5576c; }
            .detail-value { flex: 1; }
            .action-buttons { text-align: center; margin: 30px 0; }
            .button { display: inline-block; padding: 15px 30px; margin: 5px; text-decoration: none; border-radius: 10px; font-weight: bold; }
            .btn-call { background: #4CAF50; color: white; }
            .btn-whatsapp { background: #25D366; color: white; }
            .price-highlight { background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; font-size: 24px; font-weight: bold; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 32px;">🚨 New Course Enrollment!</h1>
              <p style="margin: 15px 0 0 0; font-size: 18px;">Immediate Action Required</p>
            </div>

            <div class="content">
              <div class="alert">
                <strong>⚠️ New Student Enrollment Alert!</strong><br>
                A student has enrolled in a course. Please review and follow up for payment confirmation.
              </div>

              <div class="enrollment-card">
                <h2 style="color: #f5576c; margin-top: 0;">📋 Enrollment Information</h2>

                <div class="detail-row">
                  <div class="detail-label">🆔 Enrollment ID:</div>
                  <div class="detail-value"><strong>${enrollmentData.enrollmentId}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">👤 Student Name:</div>
                  <div class="detail-value"><strong style="font-size: 20px;">${enrollmentData.name}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📧 Email:</div>
                  <div class="detail-value"><a href="mailto:${enrollmentData.email}">${enrollmentData.email}</a></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📱 Phone:</div>
                  <div class="detail-value">
                    <a href="tel:${enrollmentData.phone}" style="font-size: 18px; color: #4CAF50;"><strong>${enrollmentData.phone}</strong></a>
                  </div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📚 Course:</div>
                  <div class="detail-value"><strong style="font-size: 18px;">${enrollmentData.course?.name}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">🎯 Course Code:</div>
                  <div class="detail-value">${enrollmentData.course?.code}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">⏰ Duration:</div>
                  <div class="detail-value">${enrollmentData.course?.duration}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📊 Level:</div>
                  <div class="detail-value">${enrollmentData.course?.level}</div>
                </div>

                <div class="price-highlight">
                  💰 Course Fee: ₹${finalPrice.toLocaleString('en-IN')}
                  ${fullPaymentDiscount > 0 ? `<div style="font-size: 14px; margin-top: 10px;">Full payment discount applied: -₹${fullPaymentDiscount.toLocaleString('en-IN')}</div>` : ''}
                </div>

                <div class="detail-row">
                  <div class="detail-label">🎓 Education/Job:</div>
                  <div class="detail-value">${enrollmentData.education}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">💼 Experience:</div>
                  <div class="detail-value">${enrollmentData.experience.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">🕒 Batch Timing:</div>
                  <div class="detail-value"><strong>${enrollmentData.batchTiming.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">💳 Payment Plan:</div>
                  <div class="detail-value"><strong>${enrollmentData.paymentPlan.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</strong></div>
                </div>

                <div class="detail-row">
                  <div class="detail-label">📢 Referral Source:</div>
                  <div class="detail-value">${enrollmentData.referralSource.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</div>
                </div>

                <div class="detail-row" style="border-bottom: none;">
                  <div class="detail-label">🕒 Enrolled On:</div>
                  <div class="detail-value">${new Date(enrollmentData.submittedAt).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</div>
                </div>
              </div>

              <div style="background: #e3f2fd; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #1976d2; margin-top: 0;">✅ Action Items:</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li style="margin: 8px 0;"><strong>Wait for Payment Screenshot:</strong> Student will send payment proof via WhatsApp (8225852734) or Email (yyradhe751@gmail.com)</li>
                  <li style="margin: 8px 0;"><strong>Verify Payment:</strong> Check UPI transaction details and amount (₹${finalPrice.toLocaleString('en-IN')})</li>
                  <li style="margin: 8px 0;"><strong>Send Confirmation:</strong> After verification, send confirmation email to student</li>
                  <li style="margin: 8px 0;"><strong>Add to WhatsApp Group:</strong> Add student to batch WhatsApp group</li>
                  <li style="margin: 8px 0;"><strong>Schedule Batch:</strong> Inform about batch timing (${enrollmentData.batchTiming.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())})</li>
                  <li style="margin: 8px 0;"><strong>Send Course Materials:</strong> Share orientation details and initial course materials</li>
                  <li style="margin: 8px 0;"><strong>Update Records:</strong> Add to student management system</li>
                </ul>
              </div>

              <div style="background: #fff3cd; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #ff9800;">
                <h3 style="color: #f57c00; margin-top: 0;">💳 Payment Details Sent to Student:</h3>
                <ul style="margin: 10px 0; padding-left: 20px; color: #856404;">
                  <li style="margin: 8px 0;">✅ UPI QR Code sent in email (Union Bank Of India)</li>
                  <li style="margin: 8px 0;">💰 Payment Amount: ₹${finalPrice.toLocaleString('en-IN')}</li>
                  <li style="margin: 8px 0;">📱 UPI ID: <strong>yravi8804@axl</strong></li>
                  <li style="margin: 8px 0;">🏦 Bank: Union Bank Of India - 0942</li>
                  <li style="margin: 8px 0;">📤 Student instructed to send payment screenshot</li>
                  <li style="margin: 8px 0;">💬 WhatsApp: +91 8225852734</li>
                  <li style="margin: 8px 0;">📧 Email: yyradhe751@gmail.com</li>
                </ul>
              </div>

              <div class="action-buttons">
                <h3 style="color: #333;">Quick Actions:</h3>
                <a href="tel:${enrollmentData.phone}" class="button btn-call">📞 Call Student</a>
                <a href="https://wa.me/${enrollmentData.phone.replace(/[^0-9]/g, '')}" class="button btn-whatsapp">💬 WhatsApp</a>
              </div>

              <div style="background: #fff3cd; padding: 20px; border-radius: 10px; text-align: center; margin: 25px 0;">
                <strong>⏰ Priority:</strong> Follow up within 2 hours for maximum conversion!
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send emails
    const studentEmail = await resend.emails.send({
      from: 'LITC Institute <onboarding@resend.dev>',
      to: enrollmentData.email,
      subject: `� Payment Required - Complete Your Enrollment for ${enrollmentData.course?.name}`,
      html: studentEmailHtml,
    });

    console.log('✅ Student payment email sent:', studentEmail.data?.id);

    const adminEmail = await resend.emails.send({
      from: 'LITC Enrollment System <onboarding@resend.dev>',
      to: 'yyradhe751@gmail.com',
      subject: `🚨 New Enrollment: ${enrollmentData.name} - ${enrollmentData.course?.name}`,
      html: adminEmailHtml,
    });

    console.log('✅ Admin notification email sent:', adminEmail.data?.id);

    return NextResponse.json({
      success: true,
      message: 'Enrollment completed successfully',
      enrollmentId: enrollmentData.enrollmentId,
      studentEmailId: studentEmail.data?.id,
      adminEmailId: adminEmail.data?.id
    });

  } catch (error) {
    console.error('❌ Course enrollment error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process enrollment',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
