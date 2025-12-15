#!/bin/bash

# DirectAdmin Deployment Script for litcindore.com
# Author: Deployment Automation
# Date: December 12, 2025

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="litcindore.com"
APP_NAME="litcindore-website"
PORT=3000

echo -e "${GREEN}=== DirectAdmin Deployment Script ===${NC}"
echo ""

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then 
    print_error "Please do not run as root"
    exit 1
fi

# Step 1: Check Node.js version
print_info "Checking Node.js version..."
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed!"
    print_info "Please install Node.js 18.x or higher"
    exit 1
fi

NODE_VERSION=$(node -v)
print_success "Node.js version: $NODE_VERSION"

# Step 2: Check npm
print_info "Checking npm..."
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed!"
    exit 1
fi
print_success "npm is available"

# Step 3: Navigate to project directory
print_info "Navigating to project directory..."
PROJECT_DIR="$HOME/domains/$DOMAIN/public_html"

if [ ! -d "$PROJECT_DIR" ]; then
    print_info "Creating project directory..."
    mkdir -p "$PROJECT_DIR"
fi

cd "$PROJECT_DIR"
print_success "Current directory: $(pwd)"

# Step 4: Backup existing files (if any)
if [ "$(ls -A $PROJECT_DIR 2>/dev/null)" ]; then
    print_info "Creating backup of existing files..."
    BACKUP_DIR="$HOME/backup_$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$BACKUP_DIR"
    cp -r ./* "$BACKUP_DIR/" 2>/dev/null || true
    print_success "Backup created at: $BACKUP_DIR"
fi

# Step 5: Clone or update repository
print_info "Setting up repository..."
if [ -d ".git" ]; then
    print_info "Repository exists, pulling latest changes..."
    git pull origin main
    print_success "Repository updated"
else
    print_info "Cloning repository..."
    read -p "Enter your GitHub username (default: RaviYadav8225): " GITHUB_USER
    GITHUB_USER=${GITHUB_USER:-RaviYadav8225}
    git clone https://github.com/$GITHUB_USER/amit_sir_website.git temp_repo
    mv temp_repo/* temp_repo/.* . 2>/dev/null || true
    rm -rf temp_repo
    print_success "Repository cloned"
fi

# Step 6: Install dependencies
print_info "Installing dependencies (this may take a few minutes)..."
npm install --production
print_success "Dependencies installed"

# Step 7: Setup environment variables
print_info "Setting up environment variables..."
if [ ! -f ".env.local" ]; then
    cat > .env.local << EOF
# Production Environment Variables
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://$DOMAIN

# Email Configuration (Update these)
SMTP_HOST=mail.$DOMAIN
SMTP_PORT=465
SMTP_USER=noreply@$DOMAIN
SMTP_PASS=YOUR_EMAIL_PASSWORD_HERE

# Resend API (if using)
RESEND_API_KEY=YOUR_RESEND_API_KEY_HERE
EOF
    print_success "Environment file created at .env.local"
    print_info "⚠️  Please edit .env.local and add your credentials!"
    read -p "Press Enter to edit .env.local now, or Ctrl+C to skip..."
    ${EDITOR:-nano} .env.local
else
    print_success "Environment file already exists"
fi

# Step 8: Build the application
print_info "Building application for production..."
npm run build
print_success "Build completed successfully"

# Step 9: Install and configure PM2
print_info "Setting up PM2 process manager..."
if ! command -v pm2 &> /dev/null; then
    print_info "Installing PM2..."
    npm install -g pm2
    print_success "PM2 installed"
else
    print_success "PM2 already installed"
fi

# Step 10: Start/Restart application with PM2
print_info "Managing application with PM2..."

# Check if app is already running
if pm2 list | grep -q "$APP_NAME"; then
    print_info "Restarting existing application..."
    pm2 restart "$APP_NAME"
    print_success "Application restarted"
else
    print_info "Starting new application..."
    pm2 start npm --name "$APP_NAME" -- start
    print_success "Application started"
fi

# Save PM2 configuration
pm2 save

# Setup PM2 startup script (if not already done)
print_info "Setting up PM2 auto-start..."
pm2 startup 2>/dev/null || print_info "PM2 startup already configured (or needs manual setup)"

# Step 11: Display application status
echo ""
print_success "=== Deployment Complete! ==="
echo ""
pm2 status
echo ""

# Step 12: Show important information
print_info "Application Details:"
echo "  - Name: $APP_NAME"
echo "  - Port: $PORT"
echo "  - URL: http://localhost:$PORT"
echo "  - Domain: https://$DOMAIN"
echo ""

print_info "Next Steps:"
echo "  1. Configure reverse proxy in DirectAdmin"
echo "  2. Setup SSL certificate (Let's Encrypt)"
echo "  3. Update DNS if needed"
echo "  4. Test your website at https://$DOMAIN"
echo ""

print_info "Useful Commands:"
echo "  - View logs: pm2 logs $APP_NAME"
echo "  - Restart app: pm2 restart $APP_NAME"
echo "  - Stop app: pm2 stop $APP_NAME"
echo "  - Monitor: pm2 monit"
echo ""

# Step 13: Test if application is responding
print_info "Testing application..."
sleep 3
if curl -f http://localhost:$PORT > /dev/null 2>&1; then
    print_success "Application is responding on port $PORT"
else
    print_error "Application might not be responding. Check logs with: pm2 logs $APP_NAME"
fi

echo ""
print_success "Deployment script completed!"
print_info "Check the full deployment guide: DIRECTADMIN_DEPLOYMENT_GUIDE.md"
