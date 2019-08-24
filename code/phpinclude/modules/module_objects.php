<?php

$basepaths = ["/gui_modules/*.php", "/modules/*.php"];

//implement with sqllite
function start_variables()
{
	//$result_var = sql_get_all("public_var");
	//$result_lang = sql_get_all("lang_default");
}

function load_default_session()
{
	return;
}

function set_session_variable()
{
	return;
}

function check_array_if_duplicate_file($array)
{
	foreach ($array as $file)
	{
		foreach ($array as $file_to_compare)
		{
			if($file['name'] == $file_to_compare['name'])
			{
				return true;
			}
		}
	}
	return false;
}

function ifnull($variable)
{
	if($variable == null || $variable == "")
	{
		return true;
	}
	return false;
}

?>