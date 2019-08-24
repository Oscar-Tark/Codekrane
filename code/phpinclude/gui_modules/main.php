<?php

class control_creator
{
	function create_control($values)
	{
		//Takes: array{''=>obj}
		//[0]: type, [1]: subtype , [...]: id, [...]: where, [...]: contained, [...]: contained_tag, [...]: cssproperty1 ...

		$control += "<".$values[0]." id='".$values[2]."' ";

		if(subtype != null)
		{
			$control += "type='".$values[1]."'";
		}

		$control += "></".$values[0].">";
		return;
	}

	function css_control($values)
	{
		foreach ($values as $pr => $value)
		{
			
		}
		return;
	}
}

class page_modifier
{
	function create_title($title)
	{
		echo("<title>".$title."</title>");
		return;
	}
}

?>