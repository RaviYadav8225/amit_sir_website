# 📧 Gmail SMTP Setup for Automatic Email Delivery

## ✅ Complete Setup Guide

### 🔐 Step 1: Enable 2-Step Verification

1. Go to Google Account Security:
   ```
   https://myaccount.google.com/security
   ```

2. Find **"2-Step Verification"** section

3. Click **"Get Started"** or **"Turn On"**

4. Follow the prompts to set up (usually phone number verification)

5. **✅ Verify it's enabled** - you should see "2-Step Verification is on"

---

### 🔑 Step 2: Generate App Password

1. Go to App Passwords page:
   ```
   https://myaccount.google.com/apppasswords
   ```
   
   OR:
   - Go to: https://myaccount.google.com/security
   - Scroll to "2-Step Verification"
   - Scroll down and click "App passwords"

2. **Select app:** Choose "Mail"

3. **Select device:** Choose "Windows Computer" or "Other (Custom name)"
   - Type: "LITC Website Nodemailer"

4. Click **"Generate"**

5. **COPY THE 16-CHARACTER PASSWORD**
   - It will look like: `abcd efgh ijkl mnop`
   - You can only see this ONCE!

---

### ⚙️ Step 3: Add to Environment Variables

1. Open file: `.env.local` in project root

2. Find line:
   ```
   GMAIL_APP_PASSWORD=your-app-password-here
   ```

3. Replace with your actual password (remove spaces):
   ```
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

4. **Save the file**

---

### 🚀 Step 4: Restart Development Server

**IMPORTANT:** Must restart to load new environment variables!

```powershell
# Stop current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

---

### 🧪 Step 5: Test Email System

**Option 1: Testing Page**
```
http://localhost:3000/enrollment-test.html
```

**Option 2: Live Site**
1. Go to any course page
2. Click "Enroll Now"
3. Fill form with test email
4. Submit

---

### ✅ Expected Results

**Student Email:**
- ✅ Sent to: student's email address
- ✅ Subject: "Payment Required - [Course Name]"
- ✅ Contains: UPI QR code, payment instructions, WhatsApp links
- ✅ Beautiful HTML email with buttons

**Admin Email:**
- ✅ Sent to: yyradhe751@gmail.com
- ✅ Subject: "🚨 New Enrollment: [Student Name]"
- ✅ Contains: All enrollment details, action required steps

---

### 🔍 Troubleshooting

#### ❌ Error: "Invalid login"
**Solution:** 
- Make sure 2-Step Verification is enabled
- Generate new App Password
- Copy password correctly (no spaces)
- Restart dev server after updating .env.local

#### ❌ Error: "Username and Password not accepted"
**Solution:**
- Don't use regular Gmail password
- Must use App Password (16 characters)
- Check if you copied full password

#### ❌ Email not received
**Solution:**
- Check spam/junk folder
- Check "Promotions" tab in Gmail
- Wait 2-3 minutes
- Verify email address is correct

#### ❌ Error: "Missing credentials"
**Solution:**
- Ensure `.env.local` file exists
- Check `GMAIL_APP_PASSWORD` is set
- Restart development server
- Run: `npm run dev` again

---

### 🔒 Security Notes

1. **Never commit** `.env.local` to Git
   - Already in `.gitignore`
   - Contains sensitive credentials

2. **App Password is SAFE**
   - Only works for SMTP
   - Can be revoked anytime
   - Doesn't give full account access

3. **Revoke App Password** (if needed):
   - Go to: https://myaccount.google.com/apppasswords
   - Find "LITC Website Nodemailer"
   - Click "Revoke"

---

### 📝 Quick Setup Checklist

- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated (16 characters)
- [ ] Password added to `.env.local`
- [ ] Spaces removed from password
- [ ] Development server restarted
- [ ] Test email sent successfully
- [ ] Student receives email
- [ ] Admin receives notification

---

### 💡 Alternative (If Gmail doesn't work)

If Gmail setup is too complex, we can use:

1. **SendGrid** (Free 100 emails/day)
2. **Mailgun** (Free 5000 emails/month)
3. **Postmark** (Free 100 emails/month)

Let me know if you need help with alternatives!

---

### 📞 Support

If you face any issues:
- WhatsApp: +91-8225852734
- Email: yyradhe751@gmail.com
- Phone: +91-9425094250
