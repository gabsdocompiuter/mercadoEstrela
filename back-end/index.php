<?php
   header('Content-Type: application/json');
   $method = $_SERVER['REQUEST_METHOD'];

   if($method == 'GET'){
      echo $_GET['url'];
      echo $_GET['teste'];
   }

   if($method == 'POST'){
      callMethod('apiAccess');

      $method = $_POST['function'];

      if(!file_exists("methods/$method.php")){
         returnMessage(404, 'Função não encontrada');
      }

      callMethod($method);
   }

   function callMethod($method){
      include "methods/$method.php";
   }
   
   function returnMessage($code, $message){
      class MessageJSON{
         public $code;
         public $message;
      }
      $msg = new MessageJSON();

      $msg->code = $code;
      $msg->message = $message;
      echo json_encode($msg);

      if($code >= 400) exit();
   }