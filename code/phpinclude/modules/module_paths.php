<?php

function path_concatenation($concatenation_level)
{
    //Takes: int
    
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

