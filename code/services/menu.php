
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
        echo("OKE");
        return;
    }
}
?>
