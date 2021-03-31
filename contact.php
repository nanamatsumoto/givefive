<?php
require_once('libs/common.php');
// POST取得
var_dump($_POST);

$to = 'n.motohashi7@gmail.com';

$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$body = $_POST['body'];

$message = "
名前:{$name}" . PHP_EOL .
"メールアドレス:{$email}" . PHP_EOL .
"本文:" . PHP_EOL .
"{$body}";

// メール送信
if (!mb_send_mail($to, $subject, $message))
{
  // 失敗
  redirect('error.html');
  return;
}
redirect('complete.html');