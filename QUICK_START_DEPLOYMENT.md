# litcindore.com Deployment - Quick Start Guide

## 🚀 तीन आसान तरीके Deploy करने के लिए

### विकल्प 1: SSH से Direct Deployment (सबसे अच्छा - Full Node.js Support)

**Requirements:**
- SSH access
- Node.js support on hosting
- PM2 for process management

**Steps:**
```bash
# 1. SSH से login करें
ssh your_username@litcindore.com

# 2. Script download और run करें
cd ~/domains/litcindore.com/public_html
wget https://raw.githubusercontent.com/RaviYadav8225/amit_sir_website/main/deploy-directadmin.sh
chmod +x deploy-directadmin.sh
./deploy-directadmin.sh
```

**या फिर:**
```bash
# Repository clone करके script run करें
git clone https://github.com/RaviYadav8225/amit_sir_website.git
cd amit_sir_website
./deploy-directadmin.sh
```

---

### विकल्प 2: Static Build Upload (Node.js Support नहीं है तो)

**आपके local computer पर:**

```bash
# 1. Repository clone करें (अगर already नहीं है)
git clone https://github.com/RaviYadav8225/amit_sir_website.git
cd amit_sir_website

# 2. Static build script run करें
./build-static.sh
```

यह script एक deployment folder बनाएगा और ZIP file create करेगा।

**DirectAdmin में:**

1. **Login** करें DirectAdmin panel में
   - URL: `https://litcindore.com:2222` (या आपका panel URL)

2. **File Manager** open करें

3. **Navigate** करें: `domains/litcindore.com/public_html/`

4. **Backup** लें पुराने files का (अगर कोई हैं):
   - सभी files select करें
   - "Move" पर click करें
   - `backup_old/` folder में move करें

5. **Upload** करें:
   - **Option A:** ZIP file upload करें और extract करें
   - **Option B:** Deployment folder की सभी files drag & drop करें

6. **Important:** `.htaccess` file भी upload करें (hidden file है)

7. **Permissions** check करें:
   - Files: 644
   - Folders: 755

8. **Test** करें: https://litcindore.com

---

### विकल्प 3: FTP Upload

**FTP Client (FileZilla) use करके:**

1. **FileZilla** open करें

2. **Connection Details:**
   ```
   Host: ftp.litcindore.com
   Username: आपका FTP username
   Password: आपका FTP password
   Port: 21
   ```

3. **Navigate** करें right side में: `/domains/litcindore.com/public_html/`

4. **Upload** करें left side से deployment folder की files

5. **Include** hidden files (Show hidden files enable करें settings में)

---

## 📧 Email Configuration

### DirectAdmin में Email Account Setup:

1. **E-mail Manager** → **E-mail Accounts**

2. **Create** new account:
   ```
   Email: noreply@litcindore.com
   Password: [strong password]
   ```

3. **SMTP Details** note करें:
   ```
   SMTP Host: mail.litcindore.com
   SMTP Port: 465 (SSL) या 587 (TLS)
   SMTP User: noreply@litcindore.com
   SMTP Pass: your_password
   ```

4. **Environment Variables** में add करें (SSH deployment के लिए):
   ```bash
   nano .env.local
   ```
   
   Add:
   ```env
   SMTP_HOST=mail.litcindore.com
   SMTP_PORT=465
   SMTP_USER=noreply@litcindore.com
   SMTP_PASS=your_actual_password
   ```

### Static Export के लिए Email:

Static export में backend API routes काम नहीं करेंगे। Use करें:

**EmailJS (Recommended for static sites):**
1. SignUp at https://www.emailjs.com/
2. Create email service
3. Get API keys
4. Update करें components में

---

## 🔒 SSL Certificate Setup

1. **DirectAdmin** → **SSL Certificates**

2. **Select:** Let's Encrypt

3. **Enter Domains:**
   ```
   litcindore.com
   www.litcindore.com
   ```

4. **Click:** Create Certificate

5. **Auto-renewal** verify करें

---

## 🔧 Reverse Proxy Setup (Node.js Deployment के लिए)

### Apache Configuration:

**DirectAdmin** → **Custom HTTPD Configurations**

Add:
```apache
ProxyPreserveHost On
ProxyPass / http://localhost:3000/
ProxyPassReverse / http://localhost:3000/
```

### या Nginx Configuration:

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

---

## 📊 Monitoring (Node.js Deployment)

### PM2 Commands:

```bash
# Status check
pm2 status

# Logs देखें
pm2 logs litcindore-website

# Restart
pm2 restart litcindore-website

# Monitor
pm2 monit

# Stop
pm2 stop litcindore-website
```

---

## 🔄 Updates Deploy करना

### SSH Method:
```bash
cd ~/domains/litcindore.com/public_html
git pull origin main
npm install
npm run build
pm2 restart litcindore-website
```

### Static Method:
1. Local में `./build-static.sh` run करें
2. नई deployment files upload करें

---

## 🐛 Common Issues & Solutions

### Issue 1: "502 Bad Gateway"
**Solution:**
```bash
pm2 restart litcindore-website
# या
pm2 logs litcindore-website  # error देखें
```

### Issue 2: "Permission Denied"
**Solution:**
```bash
chmod -R 755 ~/domains/litcindore.com/public_html
```

### Issue 3: "404 on Page Refresh" (Static)
**Solution:** 
- `.htaccess` file properly upload हुई है check करें
- Rewrite rules सही हैं verify करें

### Issue 4: "Styles Not Loading"
**Solution:**
- `_next/static/` folder upload हुआ है check करें
- Browser cache clear करें (Ctrl + Shift + R)

### Issue 5: "Email Not Sending"
**Solution:**
- SMTP credentials सही हैं verify करें
- DirectAdmin में email account active है check करें
- Port 465 या 587 open है check करें

---

## 📝 Checklist

### Before Deployment:
- [ ] DirectAdmin panel access है
- [ ] Domain already configured है (litcindore.com)
- [ ] SSH access है (Node.js deployment के लिए)
- [ ] Node.js version check (18.x या higher)
- [ ] Git repository updated है

### After Deployment:
- [ ] Website load हो रही है
- [ ] All pages काम कर रहे हैं
- [ ] Images load हो रहे हैं
- [ ] Forms submit हो रहे हैं
- [ ] Email delivery test किया
- [ ] SSL certificate active है
- [ ] Mobile responsive है
- [ ] Performance check किया

---

## 🆘 Support

### Hosting Support:
- DirectAdmin panel से support ticket raise करें
- Email: support@your-hosting-provider.com
- Phone: आपके hosting provider का number

### Project Issues:
- GitHub: https://github.com/RaviYadav8225/amit_sir_website/issues

---

## 📚 Additional Resources

- **Full Guide:** [DIRECTADMIN_DEPLOYMENT_GUIDE.md](./DIRECTADMIN_DEPLOYMENT_GUIDE.md)
- **Static Build Script:** [build-static.sh](./build-static.sh)
- **SSH Deployment Script:** [deploy-directadmin.sh](./deploy-directadmin.sh)

---

**Last Updated:** December 12, 2025
**Project:** Amit Sir Website (litcindore.com)
**Deployment Target:** DirectAdmin Panel
