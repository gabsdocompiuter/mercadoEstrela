<?php
require 'database/apiAccess.class.php';

$api = new ApiAccess();

$validUser = $api->checkValidApi($_POST['apiKey']);
if(!$validUser){
    returnMessage(401, 'Api não cadastrada');
}
 