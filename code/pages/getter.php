<?php

$name = $_GET["name"];
$email = $_GET["email"];
$message = $_GET["message"];
$subject = "Codekrane: contact message";

send_email($email, $subject, $message);

function send_email($email, $subject, $message)
{
	$headers = 'From: '.$email."\r\n" .
    'Reply-To: '.$email. "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	mail("office@codekrane.com", $subject, $message, $headers);

	/*$to      = 'nobody@example.com';
	$subject = 'the subject';
	$message = 'hello';
	$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);*/
	return;
}

echo("message sent..");
echo("returning..");

?>