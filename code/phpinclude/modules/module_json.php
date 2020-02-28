<?php
class Servicejson
{
    function set_response($data, $type)
    {
        global $response_;
        $response_['DATA'] = $data;
        $response_['TYPE'] = $type;
        return;
    }

    function to_JSON()
    {
        global $response_;
        return json_encode($response_);
    }

    function JSON_out()
    {
        echo($this->to_JSON());
        return;
    }

    function JSON_out_custom($data_array)
    {
        echo(json_encode($data_array));
        return;
    }

    //JSON ERROR OUT
    function JEO($message)
    {
        $this->set_response($message, "ERR");
        die($this->to_JSON());
        return;  
    }
}
?>