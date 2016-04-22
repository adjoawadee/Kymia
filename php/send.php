<?php

$name = $_post['email'];
$to ="armin.ing34@gmail.com";
$subject="Email subscription";
$body ="This is a subscription emial from a user. Please do not reply /n/n  $email";
mail ($to, $subject, $body);

echo "Thank you. Email has been sent to us.";

 ?>
