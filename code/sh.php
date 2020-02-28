<?php
//Shutting down error reporting till I create a split in javascript to remove JSON from the response text.
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);

include_once("./core/includer.php");
includes(0, 'PHP');
Instantiator::instantiate_classes(/*Yes require will be used in the future*/);

//User, Password, host, port, schema, table, token_table
$sql->create_settings("root", "", "127.0.0.1", "3306", "Statistics", "codekrane", "token_surface");

/*if($post->get_POST("ky") === "" || $post->get_POST("ky") === "undefined")
{
    //Any AJAX request gets sent here in which a token is generated and sent back.
    $sql->sql_table_create($service_elements['KY'], "id INT(11) AUTO_INCREMENT PRIMARY KEY, token VARCHAR(25) NOT NULL");
    $json->set_response($tokens->return_token(), "KY");
    $json->JSON_out();
}
else
{
    //Verify and delete token.
    //Dies in verify token if token not found.
    $tokens->verify_token($post->get_POST("ky"));
    Servicehandler::handle_();
}*/
Servicehandler::handle_();

class Servicehandler
{
    function handle_()
    {
		echo('<script>console.log("oke");</script>');
        //Handle the actual response.
        /*global $post, $encryptor, $curl, $dates, $json, $encoder, $services;

        //Check date formatting.
        $date = $post->check_POST("currentDate");
        if($dates->check_format($date, "d-m-Y H:i:s") === false)
            die($json->JEO("Date format incorrect"));

        //Carefull! stack overflow could occur with too many calls, modify.
        $e_data = $encryptor->encrypt($encoder->encode_utf8($encoder->decode_64($post->check_POST("data"))));

        //CURL
        //Service file.
        $services->create_settings("hit_service", ".php");
        //CURL url without the file.
        $curl->create_settings("http://localhost/oscars-secured-post-api/services/");
        $curl->curl_request($date, $e_data);*/
        return;
    }
}
?>
