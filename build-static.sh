#!/bin/bash

# Static Build Script for DirectAdmin Deployment
# This script creates a static build that can be uploaded via FTP/File Manager

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=== Static Build Generator for DirectAdmin ===${NC}"
echo ""

# Step 1: Update next.config.ts for static export
echo -e "${YELLOW}Step 1: Updating configuration for static export...${NC}"

# Backup original config
cp next.config.ts next.config.ts.backup

# Create new config for static export
cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  output: 'export', // Enable static export
  compress: true,
  poweredByHeader: false,
  reactStrictMode: false,
  trailingSlash: true, // Better for static hosting
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons', 'next/link', 'next/image'],
  },
};

export default nextConfig;
EOF

echo -e "${GREEN}✓ Configuration updated${NC}"

# Step 2: Install dependencies
echo -e "${YELLOW}Step 2: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"

# Step 3: Build the project
echo -e "${YELLOW}Step 3: Building static export...${NC}"
npm run build
echo -e "${GREEN}✓ Build completed${NC}"

# Step 4: Create deployment package
echo -e "${YELLOW}Step 4: Creating deployment package...${NC}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DEPLOY_DIR="deployment_$TIMESTAMP"
mkdir -p "$DEPLOY_DIR"

# Copy all files from out/ to deployment directory
cp -r out/* "$DEPLOY_DIR/"

# Create .htaccess file
cat > "$DEPLOY_DIR/.htaccess" << 'EOF'
# Force HTTPS
<IfModule mod_rewrite.c>
RewriteEngine On

# Redirect HTTP to HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js routing
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive On
    
    # Images
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/x-icon "access plus 1 year"
    
    # CSS and JavaScript
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"
    
    # Fonts
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
    
    # HTML
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css
    AddOutputFilterByType DEFLATE application/javascript text/javascript
    AddOutputFilterByType DEFLATE application/json
    AddOutputFilterByType DEFLATE application/xml
</IfModule>

# Disable directory browsing
Options -Indexes

# Custom error pages (optional)
ErrorDocument 404 /404.html
EOF

# Create robots.txt
cat > "$DEPLOY_DIR/robots.txt" << 'EOF'
# Robots.txt for litcindore.com
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://litcindore.com/sitemap.xml
EOF

echo -e "${GREEN}✓ Deployment package created${NC}"

# Step 5: Create ZIP file
echo -e "${YELLOW}Step 5: Creating ZIP archive...${NC}"
zip -r "${DEPLOY_DIR}.zip" "$DEPLOY_DIR"
echo -e "${GREEN}✓ ZIP file created: ${DEPLOY_DIR}.zip${NC}"

# Step 6: Create deployment instructions
cat > "${DEPLOY_DIR}/UPLOAD_INSTRUCTIONS.txt" << EOF
=== DirectAdmin Upload Instructions ===

1. Login to your DirectAdmin panel at: https://litcindore.com:2222
   (या जो भी आपका DirectAdmin URL है)

2. File Manager में जाएं

3. domains/litcindore.com/public_html/ directory में जाएं

4. पुराने सभी files को delete करें (या backup folder में move करें)

5. इस folder की सभी files को upload करें:
   - Upload करने के लिए drag & drop या upload button use करें
   - सभी files including hidden files (.htaccess) को upload करें

6. File permissions check करें:
   - सभी files: 644
   - सभी folders: 755

7. Browser में website test करें: https://litcindore.com

=== FTP Upload Instructions ===

अगर FTP से upload कर रहे हैं:

Host: ftp.litcindore.com
Port: 21
Username: आपका FTP username
Password: आपका FTP password
Directory: /domains/litcindore.com/public_html/

FTP Client settings:
- Transfer mode: Binary (automatic)
- Upload all files including hidden files
- Preserve file timestamps

=== Email Configuration ===

Static export में API routes काम नहीं करेंगे।
Email functionality के लिए:

Option 1: Use EmailJS (Client-side)
Option 2: Use external form service (Formspree, Form submit, etc.)
Option 3: Deploy API routes separately on Vercel/Netlify

=== SSL Certificate ===

1. DirectAdmin panel में "SSL Certificates" पर जाएं
2. "Let's Encrypt" select करें
3. Certificate generate करें

=== Troubleshooting ===

Problem: 404 errors on refresh
Solution: .htaccess file properly upload हुई है check करें

Problem: Images not loading
Solution: Images paths check करें, सभी images folders upload हुए हैं check करें

Problem: Styles not working
Solution: _next/static/ folder properly upload हुई है verify करें

=== Support ===

अगर कोई issue है तो hosting support से contact करें।
EOF

echo ""
echo -e "${GREEN}=== Build Complete! ===${NC}"
echo ""
echo "Deployment package location: $(pwd)/$DEPLOY_DIR"
echo "ZIP file location: $(pwd)/${DEPLOY_DIR}.zip"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. Open DirectAdmin panel: https://litcindore.com:2222"
echo "2. Go to File Manager"
echo "3. Navigate to: domains/litcindore.com/public_html/"
echo "4. Upload all files from: $DEPLOY_DIR/"
echo "5. या upload करें: ${DEPLOY_DIR}.zip और extract करें"
echo ""
echo -e "${YELLOW}Important:${NC}"
echo "- Upload .htaccess file भी (hidden file है)"
echo "- सभी _next/ folder की files upload करें"
echo "- File permissions check करें (644 for files, 755 for folders)"
echo ""
echo "Detailed instructions: $DEPLOY_DIR/UPLOAD_INSTRUCTIONS.txt"
echo ""

# Restore original config
echo -e "${YELLOW}Restoring original configuration...${NC}"
mv next.config.ts.backup next.config.ts
echo -e "${GREEN}✓ Original configuration restored${NC}"
echo ""
echo -e "${GREEN}All done! 🎉${NC}"
