function set_select_items_FromArray(select_name, array)
{
	var index = 0;
	for (index = 0; index < array.length; ++index)
	{
		var select = document.getElementById(select_name);
		select.options[select.options.length] = new Option(array[index], array[index]);
	}
	return;
}
