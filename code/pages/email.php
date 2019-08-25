<?php
include("../phpinclude/modules/module_sql.php");
include("../phpinclude/modules/module_sql_connect.php");
include("../phpinclude/modules/module_jseval.php");
include("../phpinclude/modules/module_getpost.php");
include("../phpinclude/modules/module_filters.php");

getter();
function getter()
{
    $name = filter(post("name"));
    $email = filter(post("email"));
    $message = filter(post("message"));

    if (!filter_name($name) || !filter_email($email))
    {
        echo('<link rel="stylesheet" href="../cssinclude/main.css">');
        echo('<link rel="stylesheet" href="../cssinclude/codebottle.css">');
        echo("<div class='message'><label class='label_highlighted'>Naughty Naughty! trying to bypass my filters!...</label><br><br>><label class='label_mid'>Names must be characters only</label><br>><label class='label_mid'>Emails must use the email format</label><br><br><button type='button' onclick='javascript: window.history.go(-1);'/>Reboot commandline</button></div>");
        return;
    }
    sql_set("messages", "DEFAULT, '".$name."', '".$email."', '".$message."'");
    echo('<link rel="stylesheet" href="../cssinclude/main.css">');
    echo('<link rel="stylesheet" href="../cssinclude/codebottle.css">');
    echo("<div class='message'><label class='label_highlighted'>Your message has been sent. Thank you for being a:</label><br><br>><label class='label_mid'>Model citizen</label><br>><label class='label_mid'>Person I will write back to</label><br><br><button type='button' onclick='javascript: window.history.go(-1);'/>Ok cool, go back</button></div>");
}
?>