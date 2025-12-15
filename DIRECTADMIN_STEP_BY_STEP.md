# 🚀 DirectAdmin में Next.js Project Deploy करने की Complete Guide

## 📋 Overview
यह guide आपको बताएगी कि कैसे आप अपने Next.js project को litcindore.com domain पर DirectAdmin panel में deploy करें।

---

## ⚠️ Important Note
**DirectAdmin standard shared hosting में Node.js applications directly run नहीं होते।** हमें Next.js को **Static HTML/CSS/JS** में convert करना होगा।

---

## 🎯 STEP-BY-STEP DEPLOYMENT PROCESS

### **STEP 1: अपने Local Machine/Server पर Project Build करें**

#### 1.1 Repository Clone करें (अगर पहले से नहीं है)
```bash
git clone https://github.com/RaviYadav8225/amit_sir_website.git
cd amit_sir_website
```

#### 1.2 Dependencies Install करें
```bash
npm install
```

#### 1.3 Environment Variables Set करें
```bash
# .env.local file बनाएं
cp .env.example .env.local

# इसमें अपनी email settings डालें:
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@litcindore.com
SMTP_PASS=your-password
```

#### 1.4 Static Export के लिए Build करें
```bash
# next.config.ts में output: 'export' set करें
npm run build
```

या automated script चलाएं:
```bash
chmod +x build-static.sh
./build-static.sh
```

यह script automatically:
- ✅ Next.js config update करेगी
- ✅ Static files build करेगी
- ✅ `deployment-files.zip` बनाएगी
- ✅ Upload के लिए ready करेगी

---

### **STEP 2: DirectAdmin Panel में Login करें**

1. **Browser में जाएं:** `https://litcindore.com:2222` या आपका DA panel URL
2. **Username और Password डालें**
3. **Login करें**

---

### **STEP 3: File Manager खोलें**

आपके screenshot के अनुसार:

1. **Dashboard** से **"SYSTEM INFO & FILES"** section में जाएं
2. **"File Manager"** पर क्लिक करें
3. आप **My Files** section में होंगे (आपके screenshot जैसा)

---

### **STEP 4: public_html Folder में जाएं**

1. Left sidebar में **`public_html`** folder पर क्लिक करें
   - यह आपकी main website directory है
   - यहां जो files होंगी, वो `litcindore.com` पर show होंगी

2. **Current Files को Backup लें:**
   - सभी existing files select करें
   - **"Archive"** button क्लिक करें
   - Backup name: `backup-old-site-12dec2024.zip`
   - Download कर लें

3. **Old Files Delete करें:**
   - सभी existing files/folders select करें
   - **"Remove"** button क्लिक करें
   - Confirm करें

---

### **STEP 5: New Files Upload करें**

#### Method 1: ZIP File Upload (Recommended ⭐)

1. **Upload Button क्लिक करें** (top toolbar में)

2. **File Select करें:**
   - अपने computer से `deployment-files.zip` या `out` folder को zip करके select करें

3. **Upload होने दें** (size के अनुसार time लगेगा)

4. **Extract करें:**
   - Upload हुई `.zip` file पर right-click करें
   - या file select करके **"Extract"** button क्लिक करें
   - Files extract हो जाएंगी

5. **Zip File Delete करें:**
   - Extract के बाद `.zip` file को delete कर दें (space बचाने के लिए)

#### Method 2: FTP Upload (Large Files के लिए)

अगर file बहुत बड़ी है, तो FTP use करें:

1. **FileZilla या अन्य FTP client download करें**

2. **FTP Details:**
   ```
   Host: litcindore.com (या ftp.litcindore.com)
   Port: 21
   Username: आपका DirectAdmin username
   Password: आपका DirectAdmin password
   ```

3. **Connect करें और files upload करें:**
   - Local site में: अपनी `out` folder खोलें
   - Remote site में: `/domains/litcindore.com/public_html` में जाएं
   - सभी files drag & drop करें

---

### **STEP 6: File Structure Verify करें**

Upload के बाद `public_html` में यह structure होना चाहिए:

```
public_html/
├── index.html              # Main homepage
├── _next/                  # Next.js static assets
│   ├── static/
│   └── ...
├── about.html              # About page
├── contact.html            # Contact page
├── explore-courses.html    # Courses page
├── images/                 # Images folder
├── pdfs/                   # PDF documents
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

---

### **STEP 7: Permissions Set करें**

1. **सभी folders select करें**
2. **"Permissions" button क्लिक करें**
3. **Set करें:**
   - Folders: `755` (drwxr-xr-x)
   - Files: `644` (drw-r--r--)

4. **या Terminal से:**
   DirectAdmin File Manager में **"Terminal"** option हो सकता है:
   ```bash
   cd /domains/litcindore.com/public_html
   find . -type d -exec chmod 755 {} \;
   find . -type f -exec chmod 644 {} \;
   ```

---

### **STEP 8: .htaccess File बनाएं**

DirectAdmin File Manager में:

1. **"New File" button क्लिक करें**
2. **Filename:** `.htaccess`
3. **Content paste करें:**

```apache
# Enable Rewrite Engine
RewriteEngine On

# HTTPS Redirect
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L,QSA]

# Remove trailing slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

# Custom Error Pages
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>
```

4. **Save करें**

---

### **STEP 9: Email Configuration (अगर forms हैं)**

#### Option A: PHP Mailer Script Upload करें

DirectAdmin में PHP support है, तो:

1. **`api` folder बनाएं** `public_html` में
2. **PHP email script upload करें** (जो मैंने पहले बनाई थी)

#### Option B: DirectAdmin Email Account Setup

1. **Dashboard → E-MAIL MANAGER → E-mail Accounts**
2. **New Email Create करें:**
   - Email: `noreply@litcindore.com`
   - Password: strong password
   - Quota: 100 MB

3. **SMTP Details note करें:**
   ```
   Host: litcindore.com या mail.litcindore.com
   Port: 587 (TLS) या 465 (SSL)
   Username: noreply@litcindore.com
   Password: [your-password]
   ```

---

### **STEP 10: DNS & Domain Verification**

1. **Dashboard → DNS Management**
2. **Verify A Record:**
   ```
   Type: A
   Name: @ (या litcindore.com)
   Value: [Server IP Address]
   ```

3. **Verify WWW Record:**
   ```
   Type: CNAME
   Name: www
   Value: litcindore.com
   ```

---

### **STEP 11: SSL Certificate Setup**

1. **Dashboard → SSL Certificates**
2. **Free SSL (Let's Encrypt) enable करें:**
   - Domain select करें: `litcindore.com`
   - **"Install Certificate"** क्लिक करें
   - Auto-renewal enable करें

3. **या Manually:**
   - **"Free & automatic certificate from Let's Encrypt"** option चुनें
   - Install होने में 2-5 minutes लगेंगे

---

### **STEP 12: Testing & Verification**

#### 12.1 Website Access Test
```bash
# Browser में खोलें:
https://litcindore.com
https://www.litcindore.com
```

#### 12.2 All Pages Test करें:
- ✅ Home: `https://litcindore.com`
- ✅ About: `https://litcindore.com/about`
- ✅ Contact: `https://litcindore.com/contact`
- ✅ Courses: `https://litcindore.com/explore-courses`

#### 12.3 Forms Test करें:
- Contact form submit करें
- Enrollment form test करें
- Email receive हो रहा है verify करें

#### 12.4 Performance Check:
- Google PageSpeed Insights: `https://pagespeed.web.dev/`
- GTmetrix: `https://gtmetrix.com/`

---

## 🔧 TROUBLESHOOTING

### Problem 1: "404 Not Found" Errors

**Solution:**
```apache
# .htaccess में add करें:
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

### Problem 2: Images Load नहीं हो रहे

**Check करें:**
1. Image paths relative हैं (`/images/...`)
2. File permissions: `644`
3. Folder permissions: `755`

### Problem 3: CSS/JS Load नहीं हो रहे

**Solution:**
1. `_next` folder properly upload हुआ है verify करें
2. Browser cache clear करें
3. `.htaccess` में compression enable करें

### Problem 4: Forms काम नहीं कर रहे

**Check करें:**
1. PHP version (Dashboard → PHP Selector में PHP 8.1+ select करें)
2. Email account properly setup है
3. SMTP credentials correct हैं

### Problem 5: SSL Certificate Error

**Solution:**
1. 2-5 minutes wait करें installation के बाद
2. Browser cache clear करें
3. Certificate re-install करें

---

## 📊 POST-DEPLOYMENT CHECKLIST

- [ ] Website https://litcindore.com पर accessible है
- [ ] All pages properly load हो रहे हैं
- [ ] Images और media files show हो रहे हैं
- [ ] CSS styling apply हो रही है
- [ ] Contact forms काम कर रहे हैं
- [ ] Email delivery test किया
- [ ] SSL certificate active है (🔒 green lock)
- [ ] Mobile responsive है
- [ ] Page speed acceptable है (>80 score)
- [ ] Google Analytics/Search Console setup किया
- [ ] Backup लिया original files का

---

## 🎓 NEXT STEPS

### 1. SEO Optimization
- Google Search Console में site submit करें
- Sitemap submit करें
- robots.txt verify करें

### 2. Performance Monitoring
- Google Analytics setup करें
- Uptime monitoring (UptimeRobot)
- Error tracking

### 3. Regular Maintenance
- Weekly backups
- Monthly security updates
- Performance monitoring

---

## 📞 SUPPORT

अगर कोई problem आए तो:

1. **DirectAdmin Support Ticket** raise करें
2. **Hosting Provider को contact** करें
3. **Error logs check** करें: Dashboard → Error Log Viewer

---

## ✅ SUMMARY

आपने successfully deploy कर लिया:
- ✨ Next.js application → Static HTML
- 🚀 DirectAdmin पर upload किया
- 🔒 SSL certificate setup किया
- 📧 Email forms configure किए
- 🎨 Full website live है `litcindore.com` पर

**Congratulations! 🎉 आपकी website live है!**
