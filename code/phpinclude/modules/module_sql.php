<?php
error_reporting(E_ALL);

function send($query_)
{
	//Takes: string

    return sql_query_($query_);
}

function sql_get($table, $conditions)
{
	//Takes: string, string

    return send("SELECT * FROM ".$table." WHERE ".$conditions.";--");
}

function sql_update($table, $conditions, $values)
{
    //Takes: string, string, string
    //'UPDATE ".$table." SET ".$values." WHERE ".$conditions."'
    //echo("<script>console.log('".$values."');</script>");
    return send("UPDATE ".$table." SET ".$values." WHERE ".$conditions);
}

function sql_get_all($table)
{
    //Takes: string

    return send("SELECT * FROM ".$table.";--");
}

function sql_set($table, $values)
{
	//Takes: string, string

    return send("INSERT INTO ".$table." VALUES(".$values.");--");
}

function create_table($table, $columns)
{
    send("CREATE TABLE ".$table." (".$columns.")");
}

function return_first_row($sql_result)
{
    if(mysqli_num_rows($sql_result) == 1)
    {
        while($row = $sql_result->fetch_assoc())
        {
            return $row;
        }
    }
    else if(mysqli_num_rows($sql_result) == 0)
    {
        echo("<script>console.log('SERVER ERROR: zero rows returned from database');</script>");
        return null;
    }
    else
    {
        echo("<script>console.log('SERVER ERROR: more rows returned from database');</script>");
        return null;
    }
    return;
}

//Previously known as query_();
function sql_query_($quer)
{
	//Takes: string

    $link = sql_get_connect();
    //NEVER SET ROOT AS THE MAIN USER! REMEMBER TO SET PERMISSIONS ACCORDINGLY
    /*$hostname = '';
    $username = '';
    $password = '';
    $dbname = '';
    $link = new mysqli($hostname, $username, $password, $dbname)
        or die("MYSQL: Unable to connect to the specific host.\n[END]\n".mysql_error());*/
    $link->set_charset('utf8_swedish_ci');
    if ($link->connect_errno)
    {
      echo "Failed to connect to DB: " . $link->connect_errno;
    }
    $result = $link->query($quer) or die("".$link->error.'Query error');
    $link->close();
    return $result;
}

function sql_module_test()
{
    echo("<script>console.log('SQL: ok.');</script>");
}