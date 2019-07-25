<?php
require 'database/usuario.class.php';

$userDto = new UsuarioDTO();
$userDto->nome = $_POST['name'];
$userDto->cpf = $_POST['cpf'];
$userDto->email = $_POST['email'];
$userDto->user = $_POST['user'];
$userDto->password = $_POST['password'];

$myUser = new Usuario();

if($myUser->AddNewUser($userDto)){
    echo json_encode($userDto);
}
else{
    returnMessage(400, 'Houve um erro ao cadastrar');
}