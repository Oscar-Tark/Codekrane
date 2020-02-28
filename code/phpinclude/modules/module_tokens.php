<?php
Class Tokens
{
    function return_token()
    {
        global $encryptor, $sql;
        return $this->set_token($encryptor->generateRandomString());
    }

    function set_token($token)
    {
        global $sql, $encryptor, $service_elements;
        if($encryptor->verifyRandomString($token, $service_elements["KY"], "token") == $token);
            $sql->sql_set($service_elements["KY"], "DEFAULT, '".$token."'");
        return $token;
    }

    function verify_token($token)
    {
        global $sql, $service_elements, $types, $json;
        if($types->ifnull($sql->return_first_row($sql->sql_get($service_elements["KY"], "token='".$token."'"))['token']))
            $json->JEO("Unable to verify token: ".$token);
        return;
    }
}
?>