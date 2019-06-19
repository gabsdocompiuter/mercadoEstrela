<?php
    include(__DIR__ . '/mysql.class.php');

    class ApiAccess extends MySQL{

        public function __construct(){
            parent::connect();
            // $conn = parent::conn;
        }

        public function checkValidApi($apikey){
            $sql = "SELECT 1
                       FROM `apiAccess`
                       WHERE apiKey = '$apikey';";

            $result = $this->conn->query($sql);
            if ($result->num_rows > 0) return true;
            return false;
        }
    }