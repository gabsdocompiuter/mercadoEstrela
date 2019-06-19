<?php
   require_once('config.php');

   header('Content-Type: application/json');

   $method = $_SERVER['REQUEST_METHOD'];

   if($method == 'GET'){
      echo $_GET['url'];
      echo $_GET['teste'];
   }

   if($method == 'POST'){
      validaUsuario();

      switch($_POST['function']){
         case 'signIn':
            include 'login.php';
            break;

         default:
            returnError(404, 'Função não encontrada');
            break;
      }
   }

   function validaUsuario(){
      $api = new ApiAccess();

      $validUser = $api->checkValidApi($_POST['apiKey']);
      if(!$validUser){
         returnError(401, 'Api não cadastrada');
         exit();
      }
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
   }