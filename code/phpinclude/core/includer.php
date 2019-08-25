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

      //PHPMAILER
      echo "<script src='".$concat."packages/PHPMailer-master/src/PHPMailer.js'></script>";
      echo "<script src='".$concat."packages/PHPMailer-master/src/Exception.js'></script>";
      echo "<script src='".$concat."packages/PHPMailer-master/src/SMTP.js'></script>";
      return;
}

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
