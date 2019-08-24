<?php

function contains($needle, $haystack)
{
    return strpos($haystack, $needle) !== false;
}