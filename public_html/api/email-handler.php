<?php
/**
 * =============================================
 * LITC Infotech - Main API Handler
 * DirectAdmin Shared Hosting ke liye
 * =============================================
 * Yeh file sab form submissions handle karta hai
 * Routes:
 *   POST /api/contact-message
 *   POST /api/course-enrollment-final
 *   POST /api/chatbot-enquiry
 *   POST /api/course-enquiry
 *   POST /api/consultation
 *   POST /api/campus-visit
 *   POST /api/send-email
 *   POST /api/send-email-direct
 *   POST /api/resend-email
 */

// CORS headers - frontend se requests allow karo
header('Access-Control-Allow-Origin: https://litcindore.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=UTF-8');

// OPTIONS preflight request handle karo
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// POST request check
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

// Mailer include
require_once __DIR__ . '/mailer.php';
require_once __DIR__ . '/config.php';

// Request body JSON parse karo
$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody, true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON body']);
    exit();
}

// URL se route determine karo
$uri = $_SERVER['REQUEST_URI'];
$uri = strtok($uri, '?'); // query string remove

// Route to correct handler
if (strpos($uri, 'contact-message') !== false) {
    handleContactMessage($data);
} elseif (strpos($uri, 'course-enrollment') !== false) {
    handleEnrollment($data);
} elseif (strpos($uri, 'chatbot-enquiry') !== false) {
    handleChatbotEnquiry($data);
} elseif (strpos($uri, 'course-enquiry') !== false) {
    handleCourseEnquiry($data);
} elseif (strpos($uri, 'consultation') !== false) {
    handleConsultation($data);
} elseif (strpos($uri, 'campus-visit') !== false) {
    handleCampusVisit($data);
} elseif (strpos($uri, 'send-email') !== false || strpos($uri, 'resend-email') !== false) {
    handleSendEmail($data);
} else {
    http_response_code(404);
    echo json_encode(['success' => false, 'error' => 'API route not found: ' . $uri]);
}

// =============================================
// HANDLER FUNCTIONS
// =============================================

/**
 * 1. Contact Form Message
 */
function handleContactMessage($data) {
    $name    = htmlspecialchars($data['name'] ?? 'Unknown');
    $email   = htmlspecialchars($data['email'] ?? '');
    $phone   = htmlspecialchars($data['phone'] ?? '');
    $subject = htmlspecialchars($data['subject'] ?? 'New Contact Message');
    $message = nl2br(htmlspecialchars($data['message'] ?? ''));
    $service = htmlspecialchars($data['service'] ?? '');

    $adminHtml = "
<html><body style='font-family:Arial,sans-serif;'>
<div style='max-width:700px;margin:0 auto;'>
  <div style='background:linear-gradient(135deg,#0891b2,#3b82f6);color:white;padding:30px;border-radius:10px 10px 0 0;'>
    <h1 style='margin:0;'>&#128231; New Contact Form Message</h1>
    <p style='margin:10px 0 0;'>LITC Infotech Website</p>
  </div>
  <div style='background:#f9f9f9;padding:30px;border:1px solid #ddd;'>
    <div style='background:white;padding:20px;margin-bottom:20px;border-left:4px solid #0891b2;border-radius:4px;'>
      <h2 style='color:#0891b2;margin-top:0;'>&#128203; Contact Details</h2>
      <p><strong>Name:</strong> {$name}</p>
      <p><strong>Email:</strong> {$email}</p>
      <p><strong>Phone:</strong> {$phone}</p>
      <p><strong>Subject:</strong> {$subject}</p>
      <p><strong>Service:</strong> {$service}</p>
    </div>
    <div style='background:#f0f9ff;padding:20px;border:1px solid #0891b2;border-radius:8px;'>
      <h2 style='color:#0891b2;'>&#128172; Message</h2>
      <p>{$message}</p>
    </div>
    <div style='background:#f0fdf4;padding:20px;margin-top:20px;border-left:4px solid #22c55e;border-radius:4px;'>
      <p>&#128222; <a href='tel:{$phone}'>{$phone}</a></p>
      <p>&#128231; <a href='mailto:{$email}'>{$email}</a></p>
      <p>&#128172; <a href='https://wa.me/91" . preg_replace('/\D/', '', $phone) . "'>WhatsApp</a></p>
    </div>
  </div>
  <div style='background:#333;color:white;padding:15px;text-align:center;border-radius:0 0 10px 10px;'>
    <p style='margin:5px 0;'>LITC Infotech | litcindore@gmail.com | +91-9522220892</p>
  </div>
</div></body></html>";

    $result = sendEmail(ADMIN_EMAIL, ADMIN_NAME, "&#128231; Contact: {$subject} - {$name}", $adminHtml, $email);

    if ($result['success']) {
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Email sending failed: ' . ($result['error'] ?? 'unknown')]);
    }
}

/**
 * 2. Course Enrollment
 */
function handleEnrollment($data) {
    $name      = htmlspecialchars($data['name'] ?? 'Unknown');
    $email     = htmlspecialchars($data['email'] ?? '');
    $phone     = htmlspecialchars($data['phone'] ?? '');
    $course    = htmlspecialchars($data['course']['name'] ?? $data['courseName'] ?? 'Not specified');
    $education = htmlspecialchars($data['education'] ?? '');
    $enrollId  = htmlspecialchars($data['enrollmentId'] ?? 'ENR-' . strtoupper(substr(md5(time()), 0, 8)));
    $batch     = htmlspecialchars($data['batchTiming'] ?? '');

    // Admin email
    $adminHtml = "
<html><body style='font-family:Arial,sans-serif;'>
<div style='max-width:700px;margin:0 auto;'>
  <div style='background:linear-gradient(135deg,#7c3aed,#4f46e5);color:white;padding:30px;border-radius:10px 10px 0 0;'>
    <h1 style='margin:0;'>&#127979; New Course Enrollment!</h1>
    <p style='margin:10px 0 0;'>Enrollment ID: <strong>{$enrollId}</strong></p>
  </div>
  <div style='background:#f9f9f9;padding:30px;border:1px solid #ddd;'>
    <div style='background:white;padding:20px;margin-bottom:15px;border-left:4px solid #7c3aed;border-radius:4px;'>
      <h2 style='color:#7c3aed;margin-top:0;'>&#128100; Student Details</h2>
      <p><strong>Name:</strong> {$name}</p>
      <p><strong>Email:</strong> {$email}</p>
      <p><strong>Phone:</strong> {$phone}</p>
      <p><strong>Education:</strong> {$education}</p>
    </div>
    <div style='background:white;padding:20px;margin-bottom:15px;border-left:4px solid #0891b2;border-radius:4px;'>
      <h2 style='color:#0891b2;margin-top:0;'>&#128218; Course Details</h2>
      <p><strong>Course:</strong> {$course}</p>
      <p><strong>Batch Timing:</strong> {$batch}</p>
    </div>
    <div style='background:#fffbeb;padding:20px;border:2px solid #f59e0b;border-radius:8px;'>
      <h2 style='color:#d97706;margin-top:0;'>&#9888;&#65039; Action Required</h2>
      <p>1. Send payment details to student: <strong>{$email}</strong></p>
      <p>2. UPI ID: <strong>yravi8804@axl</strong></p>
      <p>3. After payment: Add to WhatsApp group</p>
      <p>4. &#128172; <a href='https://wa.me/91" . preg_replace('/\D/', '', $phone) . "'>WhatsApp Student</a></p>
    </div>
  </div>
  <div style='background:#333;color:white;padding:15px;text-align:center;border-radius:0 0 10px 10px;'>
    <p style='margin:0;'>LITC Infotech | litcindore@gmail.com | +91-9522220892</p>
  </div>
</div></body></html>";

    $adminResult = sendEmail(ADMIN_EMAIL, ADMIN_NAME, "&#127979; NEW ENROLLMENT: {$course} - {$name}", $adminHtml, $email);

    // Student confirmation email
    if (!empty($email)) {
        $studentHtml = "
<html><body style='font-family:Arial,sans-serif;'>
<div style='max-width:700px;margin:0 auto;'>
  <div style='background:linear-gradient(135deg,#16a34a,#0d9488);color:white;padding:30px;border-radius:10px 10px 0 0;'>
    <h1 style='margin:0;'>&#127881; Enrollment Confirmed!</h1>
    <p style='margin:10px 0 0;'>Welcome to LITC Infotech, {$name}!</p>
  </div>
  <div style='background:#f9f9f9;padding:30px;border:1px solid #ddd;'>
    <p>Dear {$name},</p>
    <p>Thank you for enrolling in <strong>{$course}</strong> at LITC Infotech!</p>
    <div style='background:white;padding:20px;border-left:4px solid #16a34a;border-radius:4px;'>
      <p>&#127979; <strong>Course:</strong> {$course}</p>
      <p>&#128203; <strong>Enrollment ID:</strong> {$enrollId}</p>
      <p>&#128336; <strong>Batch:</strong> {$batch}</p>
    </div>
    <div style='background:#fffbeb;padding:20px;margin-top:20px;border-radius:8px;'>
      <h3 style='color:#d97706;'>&#128176; Next Steps - Payment</h3>
      <p>UPI ID: <strong>yravi8804@axl</strong></p>
      <p>After payment, send screenshot to WhatsApp: <a href='https://wa.me/919522220892'>+91-9522220892</a></p>
    </div>
    <p style='margin-top:20px;'>Questions? Contact us: <a href='tel:9522220892'>9522220892</a></p>
  </div>
  <div style='background:#333;color:white;padding:15px;text-align:center;border-radius:0 0 10px 10px;'>
    <p style='margin:0;'>LITC Infotech | litcindore.com</p>
  </div>
</div></body></html>";
        sendEmail($email, $name, "&#127881; Welcome to {$course} - LITC Infotech", $studentHtml);
    }

    if ($adminResult['success']) {
        echo json_encode(['success' => true, 'message' => 'Enrollment submitted successfully', 'enrollmentId' => $enrollId]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Email error: ' . ($adminResult['error'] ?? 'unknown')]);
    }
}

/**
 * 3. Chatbot Enquiry
 */
function handleChatbotEnquiry($data) {
    $name    = htmlspecialchars($data['name'] ?? 'Unknown');
    $email   = htmlspecialchars($data['email'] ?? '');
    $phone   = htmlspecialchars($data['phone'] ?? '');
    $message = nl2br(htmlspecialchars($data['message'] ?? ''));
    $course  = htmlspecialchars($data['interestedCourse'] ?? $data['course'] ?? '');

    $html = "
<html><body style='font-family:Arial,sans-serif;'>
<div style='max-width:700px;margin:0 auto;'>
  <div style='background:linear-gradient(135deg,#7c3aed,#ec4899);color:white;padding:25px;border-radius:10px 10px 0 0;'>
    <h1 style='margin:0;'>&#129302; Chatbot Enquiry</h1>
  </div>
  <div style='background:#f9f9f9;padding:25px;border:1px solid #ddd;'>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> <a href='tel:{$phone}'>{$phone}</a></p>
    <p><strong>Course:</strong> {$course}</p>
    <div style='background:#f0f9ff;padding:15px;border-radius:8px;'>
      <strong>Message:</strong><br>{$message}
    </div>
    <p><a href='https://wa.me/91" . preg_replace('/\D/', '', $phone) . "' style='background:#25d366;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;'>WhatsApp Now</a></p>
  </div>
</div></body></html>";

    $result = sendEmail(ADMIN_EMAIL, ADMIN_NAME, "&#129302; Chatbot Enquiry - {$name} ({$course})", $html, $email);
    echo json_encode(['success' => $result['success'], 'message' => $result['success'] ? 'Enquiry sent' : $result['error']]);
}

/**
 * 4. Course Enquiry
 */
function handleCourseEnquiry($data) {
    $name   = htmlspecialchars($data['name'] ?? 'Unknown');
    $email  = htmlspecialchars($data['email'] ?? '');
    $phone  = htmlspecialchars($data['phone'] ?? '');
    $course = htmlspecialchars($data['courseName'] ?? $data['course'] ?? '');
    $msg    = nl2br(htmlspecialchars($data['message'] ?? ''));

    $html = "
<html><body style='font-family:Arial,sans-serif;'>
<div style='max-width:700px;margin:0 auto;'>
  <div style='background:linear-gradient(135deg,#0891b2,#0d9488);color:white;padding:25px;border-radius:10px 10px 0 0;'>
    <h1 style='margin:0;'>&#128218; Course Enquiry</h1>
    <p style='margin:5px 0 0;'>{$course}</p>
  </div>
  <div style='padding:25px;background:#f9f9f9;border:1px solid #ddd;'>
    <p><strong>Student:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> <a href='tel:{$phone}'>{$phone}</a></p>
    <p><strong>Course:</strong> {$course}</p>
    <div style='background:#f0f9ff;padding:15px;margin-top:15px;border-radius:8px;'>{$msg}</div>
    <p><a href='https://wa.me/91" . preg_replace('/\D/', '', $phone) . "' style='background:#25d366;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;display:inline-block;margin-top:10px;'>WhatsApp</a></p>
  </div>
</div></body></html>";

    $result = sendEmail(ADMIN_EMAIL, ADMIN_NAME, "&#128218; Course Enquiry: {$course} - {$name}", $html, $email);
    echo json_encode(['success' => $result['success'], 'message' => $result['success'] ? 'Enquiry received' : $result['error']]);
}

/**
 * 5. Consultation Booking
 */
function handleConsultation($data) {
    $name = htmlspecialchars($data['name'] ?? 'Unknown');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? '');
    $date = htmlspecialchars($data['preferredDate'] ?? $data['date'] ?? '');
    $time = htmlspecialchars($data['preferredTime'] ?? $data['time'] ?? '');
    $topic = htmlspecialchars($data['topic'] ?? $data['message'] ?? '');

    $html = "
<html><body style='font-family:Arial,sans-serif;'>
<div style='max-width:700px;margin:0 auto;'>
  <div style='background:linear-gradient(135deg,#0891b2,#7c3aed);color:white;padding:25px;border-radius:10px 10px 0 0;'>
    <h1 style='margin:0;'>&#128222; Consultation Booking</h1>
  </div>
  <div style='padding:25px;background:#f9f9f9;border:1px solid #ddd;'>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> <a href='tel:{$phone}'>{$phone}</a></p>
    <p><strong>Preferred Date:</strong> {$date}</p>
    <p><strong>Preferred Time:</strong> {$time}</p>
    <p><strong>Topic:</strong> {$topic}</p>
    <p><a href='https://wa.me/91" . preg_replace('/\D/', '', $phone) . "' style='background:#25d366;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;display:inline-block;margin-top:10px;'>WhatsApp</a></p>
  </div>
</div></body></html>";

    $result = sendEmail(ADMIN_EMAIL, ADMIN_NAME, "&#128222; Consultation Request - {$name} ({$date} {$time})", $html, $email);
    echo json_encode(['success' => $result['success'], 'message' => $result['success'] ? 'Consultation booked' : $result['error']]);
}

/**
 * 6. Campus Visit
 */
function handleCampusVisit($data) {
    $name    = htmlspecialchars($data['name'] ?? 'Unknown');
    $email   = htmlspecialchars($data['email'] ?? '');
    $phone   = htmlspecialchars($data['phone'] ?? '');
    $date    = htmlspecialchars($data['visitDate'] ?? $data['date'] ?? '');
    $time    = htmlspecialchars($data['visitTime'] ?? $data['time'] ?? '');
    $purpose = htmlspecialchars($data['purpose'] ?? '');

    $html = "
<html><body style='font-family:Arial,sans-serif;'>
<div style='max-width:700px;margin:0 auto;'>
  <div style='background:linear-gradient(135deg,#16a34a,#0891b2);color:white;padding:25px;border-radius:10px 10px 0 0;'>
    <h1 style='margin:0;'>&#127979; Campus Visit Request</h1>
  </div>
  <div style='padding:25px;background:#f9f9f9;border:1px solid #ddd;'>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> <a href='tel:{$phone}'>{$phone}</a></p>
    <p><strong>Visit Date:</strong> {$date}</p>
    <p><strong>Visit Time:</strong> {$time}</p>
    <p><strong>Purpose:</strong> {$purpose}</p>
    <p><a href='https://wa.me/91" . preg_replace('/\D/', '', $phone) . "' style='background:#25d366;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;display:inline-block;margin-top:10px;'>Confirm via WhatsApp</a></p>
  </div>
</div></body></html>";

    $result = sendEmail(ADMIN_EMAIL, ADMIN_NAME, "&#127979; Campus Visit: {$name} on {$date}", $html, $email);
    echo json_encode(['success' => $result['success'], 'message' => $result['success'] ? 'Visit request submitted' : $result['error']]);
}

/**
 * 7. Generic Email Sender (send-email, send-email-direct, resend-email)
 */
function handleSendEmail($data) {
    $to      = htmlspecialchars($data['to'] ?? ADMIN_EMAIL);
    $toName  = htmlspecialchars($data['toName'] ?? 'LITC Admin');
    $subject = htmlspecialchars($data['subject'] ?? 'New Message from Website');
    $body    = $data['html'] ?? nl2br(htmlspecialchars($data['text'] ?? $data['body'] ?? ''));
    $from    = htmlspecialchars($data['from'] ?? $data['replyTo'] ?? '');

    $result = sendEmail($to, $toName, $subject, $body, $from);
    echo json_encode(['success' => $result['success'], 'message' => $result['success'] ? 'Email sent' : ($result['error'] ?? 'failed')]);
}
