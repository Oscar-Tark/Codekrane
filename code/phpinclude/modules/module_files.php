<?php
function read_file_text($file_name)
{
    return file_get_contents($file_name);
}

function replace_char($toreplace, $replacewith, $content)
{
	return str_replace($toreplace, $replacewith, $content);
}

function generate_pdf()
{
	return;
}

function create_folder($path)
{
	if (!file_exists($path))
	{
		mkdir($path, 0644, true);
		return true;
	}
	return false;
}

function set_cookie($name, $value)
{
	//REMEMBERED FOR ONE DAY
	setcookie($name, $value, time()+(86400+30), "/");
	return true;
}

function get_cookie($name)
{
	if(!isset($_COOKIE[$name]))
	{
		return $_COOKIE[$name];
	}
}