# 📧 Gmail SMTP Configuration for Direct Email Delivery

## 🎯 Goal
Send consultation inquiries directly to yyradhe751@gmail.com without any verification

## 🔧 Setup Steps (5 minutes)

### Option 1: Using Gmail App Password (Recommended)

#### Step 1: Enable 2-Factor Authentication
1. Go to: https://myaccount.google.com/security
2. Find "2-Step Verification"
3. Click "Get Started" and follow steps
4. Complete verification

#### Step 2: Create App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select app: "Mail"
3. Select device: "Other (Custom name)"
4. Name it: "LITC Website"
5. Click "Generate"
6. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

#### Step 3: Add to .env.local
Open `d:\amit_sir_website\.env.local` and add:

```env
# Gmail SMTP Configuration
GMAIL_USER=yyradhe751@gmail.com
GMAIL_APP_PASSWORD=your_16_character_password_here
ADMIN_EMAIL=yyradhe751@gmail.com
```

#### Step 4: Install nodemailer
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

---

### Option 2: Using SendGrid (Free Alternative)

#### Step 1: Create SendGrid Account
1. Go to: https://signup.sendgrid.com/
2. Sign up (free tier: 100 emails/day)
3. Verify your email

#### Step 2: Create API Key
1. Go to Settings → API Keys
2. Click "Create API Key"
3. Name: "LITC Website"
4. Permissions: "Full Access"
5. Copy the API key

#### Step 3: Verify Sender
1. Go to Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Enter: yyradhe751@gmail.com
4. Fill form and verify email

#### Step 4: Add to .env.local
```env
# SendGrid Configuration
SENDGRID_API_KEY=your_api_key_here
SENDGRID_FROM_EMAIL=yyradhe751@gmail.com
ADMIN_EMAIL=yyradhe751@gmail.com
```

#### Step 5: Install SendGrid
```bash
npm install @sendgrid/mail
```

---

## 🚀 Quick Start (Choose One)

### For Gmail SMTP:
1. Enable 2FA on Google Account
2. Generate App Password
3. Add to .env.local
4. Run: `npm install nodemailer`
5. Restart server: `npm run dev`

### For SendGrid:
1. Sign up at SendGrid
2. Create API Key
3. Verify sender email
4. Add to .env.local
5. Run: `npm install @sendgrid/mail`
6. Restart server: `npm run dev`

---

## ⚡ Which to Choose?

| Feature | Gmail SMTP | SendGrid |
|---------|------------|----------|
| **Cost** | Free ✅ | Free (100/day) ✅ |
| **Setup Time** | 3 minutes | 5 minutes |
| **Reliability** | High | Very High |
| **Delivery Speed** | Instant | Instant |
| **Daily Limit** | 500 emails | 100 emails (free) |
| **Best For** | Small volume | Professional |

**Recommendation:** Start with **Gmail SMTP** (easier setup)

---

## 📝 After Setup

Once configured:
- Form submit होते ही email भेज देगा
- Direct yyradhe751@gmail.com inbox में आएगा
- No verification needed
- Professional formatted email
- Instant delivery (within seconds)

---

## 🔍 Troubleshooting

**Gmail SMTP not working?**
- Check 2FA is enabled
- Verify app password is correct (no spaces)
- Make sure "Less secure app access" is OFF (use app password instead)

**SendGrid not working?**
- Verify sender email is confirmed
- Check API key is active
- Ensure you're within free tier limit

---

**Choose your preferred method and I'll help you set it up!**
