function apply_language()
{
	//var i = 0;
	for (i = 0; i < def_langs.length; i++) 
	{
		if(def_langs_types[i] == 0)
		{
			document.getElementById(def_langs_ids[i]).innerHTML = def_langs[i];
		}
		else
		{
			document.getElementById(def_langs_ids[i]).value = def_langs[i];
		}
	}
    return;
}

function apply_language_range(start, stop)
{
	//THIS FUNCTION ALLOWS YOU TO APPLY RANGES, VERY USEFULL FOR EVAL(), REMEMBER TO GROUP LANGUAGE ELEMENTS IN THE DATABASE
	var i;
	for (i = start; i < stop; i++) 
	{
		if(def_langs_types[i] == 0)
		{
			document.getElementById(def_langs_ids[i]).innerHTML = def_langs[i];
		}
		else
		{
			document.getElementById(def_langs_ids[i]).value = def_langs[i];
		}
	}
    return;
}

function set_lang(level)
{
	if(level == 0)
	{
		localStorage.setItem("LANG", "EN");
	}
	else if(level == 1)
	{
		localStorage.setItem("LANG", "DE");
	}
	if(level == 2)
	{
		localStorage.setItem("LANG", "IT");
	}
	return;
}