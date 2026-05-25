<?php
/**
 * =============================================
 * LITC Infotech - Email Configuration
 * =============================================
 * DirectAdmin Deployment ke liye email settings
 * YE FILE UPLOAD KARNE SE PAHLE FILL KARO!
 */

// =============================================
// ADMIN EMAIL - Jahan sabhi forms ki copy jaegi
// =============================================
define('ADMIN_EMAIL', 'litcindore@gmail.com');
define('ADMIN_NAME', 'LITC Infotech - Amit Sir');
define('SITE_NAME', 'LITC Infotech');
define('SITE_URL', 'https://litcindore.com');

// =============================================
// GMAIL SMTP SETTINGS - Gmail App Password se
// =============================================
// Gmail > Settings > Security > App Passwords
// "App passwords" option tab tak pahuchne ke liye
// 2-Factor Authentication ON karna padega

define('SMTP_ENABLED', true);  // false karo agar hosting mail use karna ho
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'litcindore@gmail.com');  // <-- Apna Gmail dalo
define('SMTP_PASSWORD', 'YOUR_GMAIL_APP_PASSWORD_HERE');  // <-- App Password dalo (space include karo jaise: abcd efgh ijkl mnop)
define('SMTP_FROM_EMAIL', 'litcindore@gmail.com');
define('SMTP_FROM_NAME', 'LITC Infotech');

// =============================================
// WhatsApp Number (notifications ke liye)
// =============================================
define('WHATSAPP_NUMBER', '+919522220892');
