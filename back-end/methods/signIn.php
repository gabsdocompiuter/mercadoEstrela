<?php
require 'database/usuario.class.php';

$user = $_POST['user'];
$pass = $_POST['pass'];

$myUser = new Usuario();
$userDto = $myUser->getDTO($user, $pass);

if($userDto){
    echo json_encode($userDto);
}
else{
    returnMessage(401, 'Usuário ou senha inválidos');
}
