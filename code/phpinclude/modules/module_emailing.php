<?php

function emailing_test()
{
	echo("<script>console.log('ok');</script>");
}

function send_email($to, $subject, $message)
{
	$headers = '' . "\r\n" .
    '' . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	mail($to, $subject, $message, $headers);
	return;
}

?>