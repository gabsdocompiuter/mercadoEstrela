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
         returnError(404, 'Função não encontrada');
      }

      callMethod($method);
   }

   function callMethod($method){
      include "methods/$method.php";
   }
   
   function returnError($code, $message){
      class ErrorJSON{
         public $errorCode;
         public $message;
      }
      $error = new ErrorJSON();

      $error->errorCode = $code;
      $error->message = $message;

      echo json_encode($error);
      exit();
   }