<?php
function js_execute($javascript)
{
	echo("<script>".$javascript."</script>");
	return;
}

function js_eval($javascript)
{
	echo("<script>eval(".$javascript.");</script>");
	return;
}

function js_include($name)
{
	echo('<script src="'.$name.'"></script>');
	return;
}

function js_lc($value)
{
	if($value > 1)
		$value = 1;
	else
		$value = 0;

	js_execute('set_local("lc", '.$value.');');
	return;
}
?>
