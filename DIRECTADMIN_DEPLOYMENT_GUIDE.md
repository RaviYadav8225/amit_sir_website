# DirectAdmin Deployment Guide for litcindore.com

## विकल्प 1: Node.js Application (Recommended)

### Prerequisites
1. DirectAdmin panel में Node.js support होना चाहिए
2. SSH access होना चाहिए आपके hosting account का

### Deployment Steps:

#### Step 1: SSH से Server में Login करें
```bash
ssh username@litcindore.com
```

#### Step 2: Public_html Directory में जाएं
```bash
cd ~/domains/litcindore.com/public_html
```

#### Step 3: Repository Clone करें
```bash
# पुराने files backup करें (if any)
mkdir -p ~/backup_$(date +%Y%m%d)
mv * ~/backup_$(date +%Y%m%d)/ 2>/dev/null || true

# Repository clone करें
git clone https://github.com/RaviYadav8225/amit_sir_website.git .
```

#### Step 4: Dependencies Install करें
```bash
# Node.js version check करें (18.x या higher चाहिए)
node --version

# अगर Node.js नहीं है तो install करें (DirectAdmin से)
# या nvm use करें
nvm install 18
nvm use 18

# Dependencies install करें
npm install
```

#### Step 5: Environment Variables Setup करें
```bash
# .env.local file बनाएं
nano .env.local
```

निम्नलिखित variables add करें:
```env
# Email Configuration
RESEND_API_KEY=your_resend_api_key
SMTP_HOST=mail.litcindore.com
SMTP_PORT=465
SMTP_USER=your_email@litcindore.com
SMTP_PASS=your_email_password

# Next.js Configuration
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://litcindore.com
```

#### Step 6: Production Build बनाएं
```bash
npm run build
```

#### Step 7: PM2 से Application Start करें
```bash
# PM2 install करें (if not installed)
npm install -g pm2

# Application start करें
pm2 start npm --name "litcindore-website" -- start

# PM2 को auto-start पर set करें
pm2 startup
pm2 save
```

#### Step 8: Nginx/Apache Reverse Proxy Configure करें

**DirectAdmin File Manager में जाएं:**
1. `Custom HTTPD Configurations` open करें
2. निम्नलिखित configuration add करें:

**For Apache:**
```apache
<VirtualHost *:80>
    ServerName litcindore.com
    ServerAlias www.litcindore.com
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    ErrorLog /var/log/httpd/litcindore-error.log
    CustomLog /var/log/httpd/litcindore-access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerName litcindore.com
    ServerAlias www.litcindore.com
    
    SSLEngine on
    SSLCertificateFile /path/to/ssl/cert
    SSLCertificateKeyFile /path/to/ssl/key
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    ErrorLog /var/log/httpd/litcindore-ssl-error.log
    CustomLog /var/log/httpd/litcindore-ssl-access.log combined
</VirtualHost>
```

**For Nginx:**
```nginx
server {
    listen 80;
    server_name litcindore.com www.litcindore.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## विकल्प 2: Static Export (Node.js Support नहीं है तो)

अगर आपके hosting में Node.js support नहीं है, तो static export करें:

### Step 1: next.config.ts को Update करें
local में ये changes करें:

```typescript
const nextConfig: NextConfig = {
  output: 'export', // 'standalone' से बदलें
  images: {
    unoptimized: true, // static export के लिए
    // ... बाकी config same रहेगा
  },
  // ... बाकी config
};
```

### Step 2: Build और Export करें
```bash
npm run build
```

यह `out/` folder में static files generate करेगा।

### Step 3: DirectAdmin File Manager से Upload करें
1. DirectAdmin panel में login करें
2. File Manager open करें
3. `domains/litcindore.com/public_html` में जाएं
4. सभी पुराने files delete करें (backup के बाद)
5. `out/` folder की सभी files upload करें

### Step 4: .htaccess File बनाएं
`public_html/` में `.htaccess` file बनाएं:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js routing
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

---

## विकल्प 3: FTP Upload (Manual)

### Step 1: Local में Build करें
```bash
# Project directory में
npm install
npm run build
```

### Step 2: FTP Client से Upload करें
1. DirectAdmin panel में "FTP Management" से FTP account बनाएं
2. FileZilla या कोई FTP client open करें
3. Connection details:
   - Host: ftp.litcindore.com
   - Username: आपका FTP username
   - Password: आपका FTP password
   - Port: 21

4. Local से `out/` folder की files को `public_html/` में upload करें

---

## Email Configuration (DirectAdmin में)

### Step 1: Email Account बनाएं
1. DirectAdmin panel में "E-mail Accounts" पर click करें
2. नया email account बनाएं: `noreply@litcindore.com`
3. Strong password set करें

### Step 2: SMTP Details नोट करें
```
SMTP Host: mail.litcindore.com
SMTP Port: 465 (SSL) या 587 (TLS)
SMTP User: noreply@litcindore.com
SMTP Password: आपका email password
```

### Step 3: Environment Variables में Add करें
```env
SMTP_HOST=mail.litcindore.com
SMTP_PORT=465
SMTP_USER=noreply@litcindore.com
SMTP_PASS=your_password
```

---

## SSL Certificate Setup

1. DirectAdmin panel में "SSL Certificates" पर जाएं
2. "Let's Encrypt" select करें
3. Domain name enter करें: `litcindore.com` और `www.litcindore.com`
4. "Create Certificate" पर click करें

---

## Troubleshooting

### Issue 1: Port 3000 already in use
```bash
# Check process on port 3000
lsof -i :3000

# Kill process
kill -9 PID

# या different port use करें
PORT=3001 npm start
```

### Issue 2: Permission denied
```bash
# File permissions fix करें
chmod -R 755 ~/domains/litcindore.com/public_html
chown -R username:username ~/domains/litcindore.com/public_html
```

### Issue 3: Application crash होती है
```bash
# Logs check करें
pm2 logs litcindore-website

# Restart करें
pm2 restart litcindore-website
```

---

## Monitoring & Maintenance

### Application Status Check करें
```bash
pm2 status
pm2 monit
```

### Logs देखें
```bash
pm2 logs litcindore-website --lines 100
```

### Update Deployment
```bash
cd ~/domains/litcindore.com/public_html
git pull origin main
npm install
npm run build
pm2 restart litcindore-website
```

---

## Quick Commands Reference

```bash
# Start application
pm2 start npm --name "litcindore-website" -- start

# Stop application
pm2 stop litcindore-website

# Restart application
pm2 restart litcindore-website

# Delete application from PM2
pm2 delete litcindore-website

# View logs
pm2 logs litcindore-website

# Monitor all processes
pm2 monit
```

---

## Contact Support
अगर कोई issue आए तो:
1. DirectAdmin support से संपर्क करें
2. Hosting provider से Node.js support के बारे में पूछें
3. SSH access enable करवाएं (अगर disabled है)
