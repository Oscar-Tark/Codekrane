<?php
include('./module_sql.php');

global $lang_words; $lang_words = array();
global $languages; $languages = array();

function load_languages_ToArrays($lang)
{
    global $lang_words;
    $STR_ = "<script>def_langs = [];";
    
    $lang_result = send("SELECT * FROM lang_".$lang." ORDER BY id ASC");
    while($row = $lang_result->fetch_assoc())
    {
        $STR_ = $STR_."def_langs.push(\"" . $row["word"] . "\");";
        $STR_ = $STR_."def_langs_ids.push(\"" . $row["div_id"] . "\");";
        $STR_ = $STR_."def_langs_types.push(\"" . $row["type"] . "\");";
    }
    $STR_ = $STR_."</script>";
    mysqli_free_result($lang_result);
    echo($STR_);
    return;
}

function apply_language()
{
    return;
}
?>
