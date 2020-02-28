<?php
include_once("../core/includer.php");
includes(1, 'PHP');

//Shutting down error reporting till I create a split in javascript to remove JSON from the response text.
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);

//CALL INITIAL FUNCTIONS
Instantiator::instantiate_classes();

//User, Password, host, port, schema, table, token_table
$sql->create_settings("root", "", "127.0.0.1", "3306", "Statistics", "DailyStats", "token_surface");

Phpservice::initiate();

class Phpservice
{
    function initiate()
    {
        global $sql, $post, $service_elements, $json, $types, $dates;
        $date = $post->check_POST("currentDate");
        $data = $post->check_POST("Data");

        $sql->sql_table_create($service_elements['TABLE'], "id INT(4) AUTO_INCREMENT PRIMARY KEY, LastUpdate DATETIME NOT NULL, HitCount int(11) NOT NULL, LastTag VARCHAR(24) NOT NULL");
        
        if($types->ifnull($sql->return_first_row($sql->sql_get($service_elements['TABLE'], "DATE(LastUpdate) = '".$dates->to_sql_date($date)."'"))))
        {
            $sql->sql_set($service_elements['TABLE'], "DEFAULT, '".$dates->to_sql_datetime($date)."', 1, '".$data."'");
        }
        else
        {            
            $sql->sql_update($service_elements['TABLE'], "DATE(LastUpdate) = '".$dates->to_sql_date($date)."'", "LastUpdate='".$dates->to_sql_datetime($date)."', HitCount=HitCount+1, LastTag='".$data."'");
        }
        $json->JSON_out_custom(array("LastUpdate" => $date, "LastTag" => $data));
        return;
    }
}
?>