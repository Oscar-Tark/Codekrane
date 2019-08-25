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

$page_modifier = new page_modifier();
$page_modifier->create_title("Codekrane");

draw_html("../htmlinclude/mainframe.html");
draw_html_inside("../htmlinclude/home_menuframe.html", "mainframe");
draw_html_inside("../htmlinclude/logo.html", "mainframe");
draw_html_inside("../htmlinclude/console_inputter.html", "mainframe");
draw_html_inside("../htmlinclude/console.html", "mainframe");
draw_html_inside("../htmlinclude/cookies.html", "mainframe");
draw_html_inside("../htmlinclude/notification_banner.html", "mainframe");
?>

<script>
	start_console();
</script>
