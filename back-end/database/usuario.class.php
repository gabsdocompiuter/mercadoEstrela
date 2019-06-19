<?php
require_once __DIR__ . '/mysql.class.php';
require __DIR__ . '/usuarioDTO.class.php';

class Usuario extends MySQL{
    public function __construct(){
        parent::connect();
    }

    public function getDTO($user, $pass){
        $sql = "SELECT *
                   FROM `usuario`
                   WHERE password = '$pass'
                    AND (user  = '$user'
                      OR cpf   = '$user'
                      OR email = '$user');";

        $result = $this->conn->query($sql);
        if ($result->num_rows > 0){
            $row = $result->fetch_assoc();

            $dto = new UsuarioDTO();
            $dto->id = $row["id"];
            $dto->nome = $row["nome"];
            $dto->cpf = $row["cpf"];
            $dto->email = $row["email"];
            $dto->user = $row["user"];
            $dto->password = $row["password"];
            
            return $dto;
        }
        return false;
    }
}