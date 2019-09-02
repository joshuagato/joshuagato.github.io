<?php	
		$url = 'joshuagato.unaux.com';
		$email = 'jgato410@gmail.com';
		$to = $email;
        $subject = 'Reset your password for basketmouth.com';
        $message = '<p>We received a password reset request. The link to reset your password is below. If you did not make this request, you can ignore this email.</p>';
        $message .= '<p>Here is your password reset link: <br/>';
        $message .= '<a href="'.$url.'">'.$url.'</a></p>';

        //$headers = "From: basketmouth <info@basketmouth.com>\r\n";
        $headers = "From: basketmouth <lawmens37@gmail.com>\r\n";
        $headers .= "Reply-To: lawmens37@gmail.com\r\n";
        $headers .= "Content-type: text/html\r\n";

        if (mail($to, $subject, $message, $headers)) {
        	echo "Success!!";
        }
        else {
        	echo "Failure!!";
        }
?>

<!DOCTYPE html>
<html>
<head>
	<title>Mail</title>
</head>
<body>

	<h1>Try sending a mail</h1>
	

</body>
</html>