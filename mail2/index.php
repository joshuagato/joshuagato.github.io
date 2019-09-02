<?php
	//the subject
	$sub = "Your subject";
	//the message
	$msg = "Your message";
	//recipient email here
	$rec = "jgato410@gmail.com";
	//send email

	if (mail($rec,$sub,$msg)) {
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