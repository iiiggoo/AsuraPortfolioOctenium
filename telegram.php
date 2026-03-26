<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$token = "8692987809:AAHT0EiA6hB4g2v6Pk1ThKimEBNv_-0YmVo";
$chat_id = "1098390817";

$data = json_decode(file_get_contents('php://input'), true);
$text = $data['text'];

$url = "https://api.telegram.org/bot$token/sendMessage";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'chat_id' => $chat_id,
    'text' => $text
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>