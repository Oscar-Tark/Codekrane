/*function send_ajax_in(token, request)
{
        var data = this.get_data(token);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
            if(this.readyState === 4 && this.status === 200)
            {
                document.getElementById("response_div").innerHTML += "<br><br>Response ["+c_datetime.get_timestamp()+"]: <br><hr><br>" + this.responseText;
                var JSON_= JSON.parse(this.responseText);
                if(JSON_.TYPE == 'KY')
                    c_ajax.send_ajax(JSON_.DATA);
            }
        };

        try
        {
            xmlhttp.open("POST", "./sh.php", true);
            xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xmlhttp.send(data);
        }
        catch(e)
        {
            console.log("An error occured [" + e + "]");
        }
        return;
}

function get_data(token)
{
        //Data encoded but not encrypted. Reason is there is no point in encrypting even with AES in JS. If you can see the salt value, you can easily decrypt it. Data is however HASHED in PHP.
        return "currentDate="+c_datetime.get_timestamp()+"&data=" + btoa(unescape(encodeURIComponent(document.getElementById("name").value))) + "&ky="+token;
}
*/
