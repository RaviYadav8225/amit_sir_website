# DirectAdmin Deployment Checklist for litcindore.com

## Pre-Deployment Checklist

### 1. DirectAdmin Panel Access
- [ ] DirectAdmin panel URL है: https://litcindore.com:2222 (या आपका custom URL)
- [ ] Username और password सही है
- [ ] Panel access verify किया

### 2. Domain Configuration
- [ ] Domain litcindore.com already configured है
- [ ] DNS properly pointing है
- [ ] WWW और non-WWW दोनों resolve हो रहे हैं

### 3. Hosting Requirements Check
- [ ] PHP version: 7.4+ (for email functionality)
- [ ] Disk space available: कम से कम 500MB
- [ ] Node.js available (optional - for full deployment)
- [ ] SSH access enabled (optional - for automated deployment)
- [ ] FTP access enabled (for manual upload)

### 4. Email Configuration
- [ ] Email account बनाया: noreply@litcindore.com
- [ ] SMTP credentials note किए:
  ```
  SMTP Host: mail.litcindore.com
  SMTP Port: 465 या 587
  SMTP User: noreply@litcindore.com
  SMTP Pass: ___________________
  ```
- [ ] Email account test किया (send/receive test)

### 5. SSL Certificate
- [ ] Let's Encrypt certificate installed है
- [ ] Certificate auto-renewal enabled है
- [ ] HTTPS redirect working है
- [ ] Mixed content warnings नहीं हैं

---

## Deployment Method Selection

### Choose Your Deployment Method:

**विकल्प A: SSH Deployment (Node.js)**
- [ ] SSH access available है
- [ ] Node.js 18+ installed है
- [ ] PM2 install करने की permission है
- [ ] Port 3000 available है
- [ ] Reverse proxy configure कर सकते हैं

**विकल्प B: Static Build Upload**
- [ ] Local machine पर Node.js installed है
- [ ] Build create कर सकते हैं
- [ ] File Manager या FTP से upload कर सकते हैं

**विकल्प C: FTP Upload**
- [ ] FTP credentials हैं
- [ ] FTP client (FileZilla) installed है
- [ ] Static build ready है

---

## During Deployment Checklist

### Method A: SSH Deployment

#### Step 1: Connect via SSH
- [ ] SSH connection successful
- [ ] Home directory में हैं: `cd ~`
- [ ] Project directory navigate किया: `cd domains/litcindore.com/public_html`

#### Step 2: Backup Existing Files
- [ ] Backup directory बनाई: `mkdir -p ~/backup_$(date +%Y%m%d)`
- [ ] Existing files backup किए

#### Step 3: Clone Repository
- [ ] Repository cloned: `git clone https://github.com/RaviYadav8225/amit_sir_website.git .`
- [ ] या: Deployment script downloaded और run किया

#### Step 4: Install Dependencies
- [ ] `npm install` successfully completed
- [ ] No critical errors in installation

#### Step 5: Configure Environment
- [ ] `.env.local` file created
- [ ] SMTP credentials added
- [ ] Environment variables verified
- [ ] API keys configured (if any)

#### Step 6: Build Application
- [ ] `npm run build` successfully completed
- [ ] Build output verified in `.next/` directory
- [ ] No build errors

#### Step 7: Start with PM2
- [ ] PM2 installed: `npm install -g pm2`
- [ ] Application started: `pm2 start npm --name "litcindore-website" -- start`
- [ ] PM2 status shows "online"
- [ ] PM2 saved: `pm2 save`
- [ ] PM2 startup configured

#### Step 8: Configure Reverse Proxy
- [ ] Apache/Nginx configuration updated
- [ ] Proxy pointing to localhost:3000
- [ ] Web server restarted
- [ ] Proxy working correctly

---

### Method B: Static Build Upload

#### Step 1: Create Build Locally
- [ ] Repository cloned locally
- [ ] Dependencies installed: `npm install`
- [ ] Static build script run: `./build-static.sh`
- [ ] Deployment package created
- [ ] ZIP file generated

#### Step 2: Access DirectAdmin
- [ ] DirectAdmin panel logged in
- [ ] File Manager opened
- [ ] Navigated to: `domains/litcindore.com/public_html/`

#### Step 3: Backup Old Files
- [ ] Old files selected
- [ ] Moved to backup folder: `backup_old/`
- [ ] या deleted (after backup)

#### Step 4: Upload New Files
- [ ] ZIP uploaded और extracted
  या
- [ ] All files drag & dropped
- [ ] Upload progress 100% complete
- [ ] All folders uploaded (_next, images, etc.)

#### Step 5: Upload .htaccess
- [ ] `.htaccess` file uploaded (hidden file)
- [ ] File content verified
- [ ] Rewrite rules correct हैं

#### Step 6: Set Permissions
- [ ] File permissions: 644
  ```bash
  find . -type f -exec chmod 644 {} \;
  ```
- [ ] Folder permissions: 755
  ```bash
  find . -type d -exec chmod 755 {} \;
  ```

---

### Method C: FTP Upload

#### Step 1: FTP Client Setup
- [ ] FileZilla opened
- [ ] Connection configured:
  - Host: ftp.litcindore.com
  - Port: 21
  - Username: _____________
  - Password: _____________
- [ ] Connected successfully

#### Step 2: Navigate Directories
- [ ] Local directory: deployment folder
- [ ] Remote directory: `/domains/litcindore.com/public_html/`

#### Step 3: Backup
- [ ] Remote files backed up
- [ ] या moved to backup folder

#### Step 4: Upload
- [ ] All files uploaded
- [ ] Hidden files uploaded (.htaccess)
- [ ] _next/ folder fully uploaded
- [ ] images/ folder fully uploaded
- [ ] public/ folder fully uploaded
- [ ] Upload errors check किए

#### Step 5: Verify Upload
- [ ] File count matches local
- [ ] File sizes correct हैं
- [ ] All folders present हैं

---

## Post-Deployment Checklist

### 1. Website Functionality
- [ ] Website load हो रही है: https://litcindore.com
- [ ] Homepage properly display हो रहा है
- [ ] No 404 errors
- [ ] No 500 errors
- [ ] Navigation working है
- [ ] All pages accessible हैं

### 2. Test All Pages
- [ ] Home page: https://litcindore.com
- [ ] About page
- [ ] Courses pages
- [ ] Contact page
- [ ] AWS courses
- [ ] RedHat courses
- [ ] Cisco courses
- [ ] Admin panel

### 3. Forms Testing
- [ ] Contact form submit होता है
- [ ] Course enquiry form working है
- [ ] Enrollment form working है
- [ ] Campus visit form working है
- [ ] Form validation working है

### 4. Email Testing
- [ ] Test email send किया
- [ ] Email received होता है (inbox check करें)
- [ ] Email format correct है
- [ ] Sender address correct है
- [ ] Reply-to working है
- [ ] Spam folder check किया

### 5. Images & Assets
- [ ] All images load हो रहे हैं
- [ ] Logo display हो रहा है
- [ ] Course images visible हैं
- [ ] Icons load हो रहे हैं
- [ ] No broken images

### 6. Styles & Layout
- [ ] CSS properly loaded है
- [ ] Layout correct है
- [ ] Colors सही हैं
- [ ] Fonts load हो रहे हैं
- [ ] Animations working हैं
- [ ] Responsive design working है

### 7. Mobile Responsiveness
- [ ] Mobile view test किया
- [ ] Tablet view test किया
- [ ] Desktop view test किया
- [ ] Menu toggle working है (mobile)
- [ ] Touch interactions working हैं

### 8. Browser Testing
- [ ] Chrome tested
- [ ] Firefox tested
- [ ] Safari tested (if available)
- [ ] Edge tested
- [ ] No console errors

### 9. Performance Check
- [ ] Page load speed: < 3 seconds
- [ ] Images optimized हैं
- [ ] GZIP compression working है
- [ ] Cache headers set हैं
- [ ] GTmetrix या PageSpeed Insights run किया

### 10. Security
- [ ] HTTPS working है
- [ ] HTTP to HTTPS redirect working है
- [ ] Security headers present हैं
- [ ] No mixed content warnings
- [ ] SSL certificate valid है

### 11. SEO Basics
- [ ] Page titles present हैं
- [ ] Meta descriptions set हैं
- [ ] robots.txt uploaded है
- [ ] sitemap.xml (if created)
- [ ] Favicon visible है

### 12. Monitoring Setup (Node.js only)
- [ ] PM2 monitoring enabled है
- [ ] Logs accessible हैं: `pm2 logs`
- [ ] Auto-restart working है
- [ ] Resource usage normal है

---

## Troubleshooting Done

### Common Issues Resolved:
- [ ] 404 errors - `.htaccess` check किया
- [ ] 502 errors - PM2 restart किया
- [ ] Styles not loading - cache clear किया
- [ ] Images not showing - paths verify किए
- [ ] Form not submitting - console errors check किए
- [ ] Email not sending - SMTP credentials verify किए

---

## Final Verification

### Stakeholder Testing
- [ ] Client/stakeholder को demo दिया
- [ ] Feedback collected
- [ ] Changes implemented (if needed)
- [ ] Final approval received

### Documentation
- [ ] Deployment notes documented
- [ ] Credentials saved securely
- [ ] Contact information updated
- [ ] Handover documentation prepared

### Backup & Recovery
- [ ] Final backup created
- [ ] Backup location documented
- [ ] Recovery procedure documented
- [ ] Rollback plan ready

---

## Monitoring Schedule

### Daily (First Week)
- [ ] Website uptime check
- [ ] Error logs check
- [ ] Email delivery check
- [ ] Performance monitoring

### Weekly
- [ ] Backup verification
- [ ] Security updates check
- [ ] SSL certificate expiry check
- [ ] Disk space check

### Monthly
- [ ] Full site audit
- [ ] SEO review
- [ ] Performance optimization
- [ ] Content updates

---

## Sign Off

**Deployment Completed By:** _______________________

**Date:** _______________________

**Time:** _______________________

**Deployment Method Used:** 
- [ ] SSH/Node.js
- [ ] Static Upload
- [ ] FTP Upload

**Issues Encountered:** 
_________________________________________________
_________________________________________________
_________________________________________________

**Resolution:**
_________________________________________________
_________________________________________________
_________________________________________________

**Final Status:** 
- [ ] ✅ Success - Production ready
- [ ] ⚠️  Success with minor issues
- [ ] ❌ Failed - needs attention

**Notes:**
_________________________________________________
_________________________________________________
_________________________________________________

---

## Support Contacts

**Hosting Provider:** _______________________
**Support Email:** _______________________
**Support Phone:** _______________________
**Emergency Contact:** _______________________

**GitHub Repository:** https://github.com/RaviYadav8225/amit_sir_website
**Domain:** https://litcindore.com
**DirectAdmin Panel:** https://litcindore.com:2222

---

**✅ Deployment Complete! Website Live at: https://litcindore.com**
