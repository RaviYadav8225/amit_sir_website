<?php
/**
 * =============================================
 * Simple SMTP Mailer - No library needed!
 * LITC Infotech - DirectAdmin Deployment
 * =============================================
 */
class SimpleSMTP {
    private $host, $port, $username, $password;
    private $socket = null;
    private $debug = false;
    private $lastResponse = '';

    public function __construct($host, $port, $username, $password, $debug = false) {
        $this->host = $host;
        $this->port = $port;
        $this->username = $username;
        $this->password = $password;
        $this->debug = $debug;
    }

    private function sendCommand($command, $expectedCode) {
        if ($command) {
            fwrite($this->socket, $command . "\r\n");
        }
        $response = '';
        while ($line = fgets($this->socket, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        $this->lastResponse = $response;
        if ($this->debug) error_log("SMTP: " . $response);
        return substr($response, 0, 3) == $expectedCode;
    }

    public function sendMail($fromEmail, $fromName, $toEmail, $toName, $subject, $body, $isHTML = true, $replyTo = '') {
        try {
            // Connect to SMTP server
            $this->socket = fsockopen("ssl://{$this->host}", 465, $errno, $errstr, 30);
            if (!$this->socket) {
                // Try TLS on port 587
                $context = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
                $this->socket = stream_socket_client("tcp://{$this->host}:{$this->port}", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $context);
                if (!$this->socket) throw new Exception("Connection failed: $errstr ($errno)");
                stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
            }

            $this->sendCommand(null, '220'); // Greeting
            $this->sendCommand("EHLO " . gethostname(), '250');
            $this->sendCommand("AUTH LOGIN", '334');
            $this->sendCommand(base64_encode($this->username), '334');
            $this->sendCommand(base64_encode($this->password), '235');
            $this->sendCommand("MAIL FROM:<{$fromEmail}>", '250');
            $this->sendCommand("RCPT TO:<{$toEmail}>", '250');
            $this->sendCommand("DATA", '354');

            // Build email headers
            $contentType = $isHTML ? 'text/html; charset=UTF-8' : 'text/plain; charset=UTF-8';
            $replyToHeader = $replyTo ? "Reply-To: $replyTo\r\n" : "Reply-To: {$fromEmail}\r\n";
            $headers = "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <{$fromEmail}>\r\n"
                . "To: =?UTF-8?B?" . base64_encode($toName) . "?= <{$toEmail}>\r\n"
                . "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n"
                . "MIME-Version: 1.0\r\n"
                . "Content-Type: {$contentType}\r\n"
                . $replyToHeader
                . "Date: " . date('r') . "\r\n"
                . "Message-ID: <" . time() . rand(1000,9999) . "@litcindore.com>\r\n";

            $body = str_replace("\n.", "\n..", $body);
            $this->sendCommand($headers . "\r\n" . $body . "\r\n.", '250');
            $this->sendCommand("QUIT", '221');
            fclose($this->socket);
            return ['success' => true];
        } catch (Exception $e) {
            if ($this->socket) fclose($this->socket);
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}

/**
 * Send email using configured method (SMTP or mail())
 */
function sendEmail($toEmail, $toName, $subject, $htmlBody, $replyTo = '') {
    require_once __DIR__ . '/config.php';

    if (SMTP_ENABLED) {
        $mailer = new SimpleSMTP(SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD);
        return $mailer->sendMail(
            SMTP_FROM_EMAIL,
            SMTP_FROM_NAME,
            $toEmail,
            $toName,
            $subject,
            $htmlBody,
            true,
            $replyTo
        );
    } else {
        // Fallback: PHP mail() function (uses hosting's sendmail)
        $headers  = "From: " . SMTP_FROM_NAME . " <" . SMTP_FROM_EMAIL . ">\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        if ($replyTo) $headers .= "Reply-To: $replyTo\r\n";
        $result = mail($toEmail, $subject, $htmlBody, $headers);
        return ['success' => $result, 'error' => $result ? '' : 'mail() function failed'];
    }
}
