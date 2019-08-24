function send_AJAX(request_type, url, render_to)
{
    //file_to_send_request_to: what file to call?
    //url: built url from urlbuildeval().
    //function_to_call: what function to call?
    //response_action: what is the action of the response? Edit innerHTML? clear? create? redirect?
    //response_element: what is the response element to modify contents of?

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            //itm created exclusively so that response InnerHTML .js can be executed
            var itm; var cont = false;
            var js_type; //0=execute innerHTML, 1=execute returned expression AKA "var resp" directly through "eval()".
            def_addresses_gmaps = [];

            if(render_to == "")
            {
                js_type = false;
                cont = true;
            }
            else
            {
                //render
                itm = get_item(render_to);
                itm.innerHTML=this.responseText;
                js_type = true;
                cont = true;
            }

            //EXECUTE JS using eval(). Eval should be replaced later on with something better. "Eval is evil!!!"
            if(js_type)
            {
                var x = itm.getElementsByTagName("script");
                for(var i=0;i<x.length;i++)
                {
                    eval(x[i].text);}
                }
            }
            else
            {
                try
                {
                    eval(this.responseText);
                }
                catch(exp)
                { }
            }

            if(cont)
            {
              //continue action
            }
    };

    xmlhttp.open("GET", "../phpinclude/core/module_ajax.php?r_t="+request_type+url, true);
    xmlhttp.send();
}
