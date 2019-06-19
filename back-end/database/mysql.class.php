<?php
    class MySQL{
        protected $conn;

        public function connect() {
            if($this->conn) return true;

            $configMySQL = json_decode(file_get_contents(__DIR__ . '/config.json'), true);
    
            $this->conn = new mysqli(
                $configMySQL['serv'],
                $configMySQL['user'],
                $configMySQL['pass'],
                $configMySQL['base']
            );
        }
    }