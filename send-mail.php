<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $to = "adenubijethro@yahoo.com";

  $name = htmlspecialchars($_POST["name"]);
  $phone = htmlspecialchars($_POST["phone"]);
  $email = htmlspecialchars($_POST["email"]);
  $subject = htmlspecialchars($_POST["subject"]);
  $message = htmlspecialchars($_POST["message"]);

  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $body = "Name: $name\n";
  $body .= "Phone: $phone\n";
  $body .= "Email: $email\n";
  $body .= "Subject: $subject\n\n";
  $body .= "Message:\n$message";

  if (mail($to, "New Contact Form Message", $body, $headers)) {
    echo " Message sent successfully!";
  } else {
    echo " Message failed to send. Server mail not configured.";
  }
}
?>
