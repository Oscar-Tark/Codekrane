<html>
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Mukta+Mahee" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Gugi|Neucha|Work+Sans" rel="stylesheet">
<link rel="shortcut icon" type="image/png" href="../Assets/Images/icons/fav/favico.png"/>
</html>

<?php
include("../phpinclude/core/includer.php");
includes(1);
start();
$_SESSION['COOKIENOTICE'] = true;
$file = $_GET['f'];

$page_modifier = new page_modifier();
$page_modifier->create_title("Codekrane - Sample code");

draw_html("../htmlinclude/mainframe.html");
draw_html_inside("../htmlinclude/home_menuframe.html", "mainframe");
draw_html_inside("../htmlinclude/logo.html", "mainframe");
//draw_html_inside("../htmlinclude/console_inputter.html", "mainframe");
draw_html_inside("../htmlinclude/console.html", "mainframe");
draw_html_inside("../htmlinclude/cookies.html", "mainframe");
draw_html_inside("../htmlinclude/notification_banner.html", "mainframe");
?>

<script>
</script>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Editor</title>
  <style type="text/css" media="screen">
    body {
        overflow: hidden;
    }

    #editor {
        margin: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
  </style>
</head>
<body>

<pre id="editor">function foo(items) {
    var i;
    for (i = 0; i &lt; items.length; i++) {
        alert("Ace Rocks " + items[i]);
    }
}</pre>

<script src="../packages/ace-builds-master/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/javascript");
</script>

</body>
</html>

