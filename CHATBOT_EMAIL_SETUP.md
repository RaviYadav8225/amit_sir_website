# ChatBot Email Notification Setup Guide

## Overview
When a student enters their email in LITC Siri ChatBot, the system automatically:
1. ✅ Validates the email format
2. 📧 Sends an enquiry notification to admin
3. 🎉 Sends a welcome email to the student
4. 💾 Stores the information for follow-up

## Setup Instructions

### Step 1: Install Dependencies (Already Done)
```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

### Step 2: Configure Email Credentials

1. Copy the example environment file:
```bash
copy .env.example .env.local
```

2. Get Gmail App Password:
   - Go to https://myaccount.google.com
   - Select **Security** → **2-Step Verification**
   - Scroll down and select **App passwords**
   - Select **Mail** and your device
   - Generate and copy the 16-character password

3. Edit `.env.local` file:
```env
EMAIL_USER=info@litcindore.com
EMAIL_PASSWORD=your-16-char-app-password-here
ADMIN_EMAIL=info@litcindore.com
```

### Step 3: Test the ChatBot

1. Start the development server:
```bash
npm run dev
```

2. Open the website and click on LITC Siri chatbot

3. Enter test details:
   - Name: Test Student
   - Email: youremail@gmail.com

4. Check your inbox for:
   - **Admin Email**: New enquiry notification
   - **Student Email**: Welcome message

## Email Templates

### Admin Email Includes:
- 👤 Student Name
- 📧 Email Address
- 🕐 Enquiry Timestamp
- 📱 Source (ChatBot)
- ⚡ Follow-up reminder

### Student Email Includes:
- 🎉 Welcome message
- 📚 Popular courses list
- 📞 Contact information
- 🔗 Link to explore courses

## Troubleshooting

### Email Not Sending?
1. Check `.env.local` file exists and has correct values
2. Verify Gmail App Password is correct (16 characters)
3. Ensure 2-Step Verification is enabled on Gmail
4. Check console for error messages

### Still Not Working?
- Check your Gmail "Less secure app access" settings
- Try using a different email service (SendGrid, Mailgun)
- Contact developer for support

## Alternative Email Services

### Using SendGrid:
```typescript
// In route.ts, replace nodemailer with SendGrid SDK
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

### Using Resend (Recommended):
```typescript
// Already set up in your project!
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
```

## Production Deployment

Before deploying to production:

1. Add environment variables to your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment

2. Use a professional email service:
   - Resend (recommended)
   - SendGrid
   - Mailgun
   - Amazon SES

3. Set up email authentication:
   - SPF records
   - DKIM signatures
   - DMARC policies

## Features

✅ **Automatic Lead Capture**: Every chatbot interaction becomes a lead
✅ **Instant Notifications**: Admin gets notified immediately
✅ **Professional Welcome**: Student receives welcome email
✅ **Email Validation**: Ensures correct email format
✅ **Error Handling**: Graceful fallback if email fails
✅ **Beautiful Templates**: HTML emails with branding

## Next Steps

Consider adding:
- 💾 Database storage for leads
- 📊 Analytics and tracking
- 📱 WhatsApp notifications
- 🔔 SMS alerts
- 📈 CRM integration

---

**Need Help?**
Contact: info@litcindore.com
Phone: +91-9522220892
