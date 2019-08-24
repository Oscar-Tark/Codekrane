<?php

function includes($concatenation_level)
{
    //Takes: int = 0 = ./ = 1 = ../ = 2 = ../../ etc...
    $concat = "./";
    if($concatenation_level != 0 && $concatenation_level != -1)
    {
        $concat = create_concatenation($concatenation_level);
    }

    $phppaths = array("phpinclude/modules/*.php", "phpinclude/gui_modules/*.php" );
    $jspaths = array("jsinclude/*.js");
    $csspaths = array("cssinclude/*.css", "cssinclude/iframe/*.css");
    $htmlpaths = array("htmlinclude/*.html");
    foreach ($phppaths as $path)
    {
      foreach(glob($concat.$path) as $filename)
      {
          include($filename);
      }
    }
    foreach ($jspaths as $path)
    {
      foreach(glob($concat.$path) as $filename)
      {
          js_include($filename);
      }
    }
    foreach ($csspaths as $path)
    {
      foreach(glob($concat.$path) as $filename)
      {
          echo "<link rel='stylesheet' href='".$filename."'/>";
      }
    }

    js_lc($concatenation_level);
    include_project($concat);
    return;
}

function include_project($concat)
{
      //Datetime.js
      echo "<script src='".$concat."packages/Datejs-master/build/date-de-DE.js'></script>";
      return;
}

/*function includes($concatenation_level)
{
    //Takes: int
    $concat = "./";
    if($concatenation_level != 0 && $concatenation_level != -1)
    {
        $concat = create_concatenation($concatenation_level);
    }

    $final_path = $concat."phpinclude/modules/*.php";
    foreach(glob($final_path) as $filename)
    {
        include($filename);
    }

    $final_path = $concat."phpinclude/gui_modules/*.php";

    foreach(glob($final_path) as $filename)
    {
        include($filename);
    }

    $final_path = $concat."phpinclude/custom_modules/*.php";

    foreach(glob($final_path) as $filename)
    {
        include($filename);
    }

    $final_path = $concat."jsinclude/*.js";

    foreach(glob($final_path) as $filename)
    {
        echo "<script src=".$filename."></script>";
    }

    if($concatenation_level != -1)
    {
        $final_path = $concat."cssinclude/*.css";

        foreach(glob($final_path) as $filename)
        {
            echo "<link rel='stylesheet' href='".$filename."'/>";
        }
    }
    else
    {
        $final_path = $concat."cssinclude/iframe/*.css";

        foreach(glob($final_path) as $filename)
        {
            echo "<link rel='stylesheet' href='".$filename."'/>";
        }
    }

    //TEMPORARY: DELETE ONCE REPLACEMENT MODULES HAVE BEEN CREATED
    include($concat.'phpinclude/content_functions.php');
    //include($concat.'phpinclude/sql.php');
    include($concat.'phpinclude/functions.php');
    include($concat.'phpinclude/objects.php');
    return;
}*/

function create_concatenation($concatenation_level)
{
    $int = (int)$concatenation_level;
    $concatenation = "";
    $intup = 0;

    while($intup < $int)
    {
        $concatenation = $concatenation."../";
        $intup++;
    }
    return $concatenation;
}

function includes_custom($concatenation_level, $include_basepath)
{
    $concat = "./";
    if($concatenation_level != 0)
    {
        $concat = create_concatenation($concatenation_level);
    }

    $concat = create_concatenation($concatenation_level);
    $final_path = $concat.$include_basepath;

    foreach(glob($final_path) as $filename)
    {
        include($filename);
    }
    return;
}

?>
