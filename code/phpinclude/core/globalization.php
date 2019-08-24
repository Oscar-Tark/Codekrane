<?php

include('../config.php');
include('./sql.php');

global $lang_English; $lang_English = array();
global $lang_German; $lang_German = array();
global $languages; $languages = array();
global $username; global $session;
global $authentication;

function get_languages()
{
    global $languages;
    $lang_result = query_("SELECT * FROM Languages");
    while($row = $lang_result->fetch_assoc())
    {
        echo('<script>def_langs.push("'.$row["text"].'")</script>');
        echo('<script>def_langs_gmaps.push("'.$row["gmaps_lang"].'")</script>');
        echo('<script>def_langs_gmaps_reg.push("'.$row["gmaps_reg"].'")</script>');
        array_push($languages, $row["name"]);
    }
    mysqli_free_result($lang_result);
}

function load_languages_ToArrays($page)
{
global $lang_English;
global $lang_German;
global $languages;

foreach($languages as $lang)
{
$lang_result = query_("SELECT * FROM Lang_".$lang." ORDER BY id ASC");
while($row = $lang_result->fetch_assoc())
{
   if($lang == "English")
   {
      array_push($lang_English, $row["word"]);
   }
   else if($lang == "Deutsch")
   {
      array_push($lang_German, $row["word"]);
   }
}
mysqli_free_result($lang_result);
}
}

function apply_language($name)
{
   global $lang_English;
   global $lang_German;

   if($name == 0)
   {
      echo('<script>def_lang = [];</script>');
      foreach($lang_English as $word)
      {
          echo("<script>def_lang.push(\"" . $word . "\");</script>");
      }
   }
   else if($name == 1)
   {
      echo('<script>def_lang = [];</script>');
      foreach($lang_German as $word)
      {
          echo("<script>def_lang.push(\"" . $word . "\");</script>");
      }
   }
}
?>
