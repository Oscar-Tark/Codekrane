<?php
class Curler
{
    function curl_request($date, $data)
    {
        global $curl_elements, $json, $service_elements;
        $ch = curl_init();
        $params=["Data"=>$data, "currentDate"=>$date];
        $defaults = array(
            CURLOPT_URL => $curl_elements['URL'].$service_elements['SRV'].$service_elements['SRV_fix'],
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $params,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER => false
        );
        curl_setopt_array($ch, $defaults);
        $result = curl_exec($ch);
        //$json->JEO(curl_error($ch));
        curl_close($ch);
        echo $result;
        return;
    }

    function create_settings($url)
    {
        global $curl_elements;
        $curl_elements['URL'] = $url;
        return;
    }
}
?>