<?php

function to_hash($user, $password)
{
    return password_hash($password, PASSWORD_DEFAULT);
}

function verify_password($password, $input)
{
    return password_verify($input, $password);
}

function generateRandomString($length = 20) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function verifyRandomString($string, $table, $column)
{
	//FUNCTION RETURNS STRING REGARDLESS IF A NEW TOKEN OR OLD ONE
	if(!isnull(return_first_row(sql_get($table, $column."=".$string."--;"))))
	{
		$var = 0;
		while ($var <= 10)
		{
			$random = generateRandomString();
			if(isnull(return_first_row(sql_get($table, $column."=".$string."--;"))))
			{
				return $random;
			}
			$var++;
		}
	}
	return $string;
}

function verifyRandomString_test()
{
	$random = generateRandomString();
	echo($random);
	sql_set("testing", "1, '".$random."'");
	$returned_random = verifyRandomString($random);
	echo $returned_random;
	return;
}
?>