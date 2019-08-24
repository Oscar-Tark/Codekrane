<?php

function write_inner_html($name, $innerHTML)
{
    echo("<script>set_item_value('".$name."', '".$innerHTML."');</script>");
    return;
}

function check_text_fields_equal($field1, $field2)
{
    return;
}

function set_calendar_week()
{
	$weekday = get_today_weekday();
	$today = get_today();

	create_calendar_cell();
}

function create_calendar_cell($index)
{

}

?>