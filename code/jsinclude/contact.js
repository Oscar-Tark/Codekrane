function eval_contact_slider(level, args)
{
	if(level == 0)
	{
		document.getElementById("contact").innerHTML = '';
		document.getElementById("contact").innerHTML = '<hr><br><label id="info_txt">Contact us</label><br><div id=\"contact_gen_info\"><br><form action="javascript: validateEmailSQL(2); if(validateEmail(2)){contact_store_values(0);eval_contact_slider(1);}else{wrong_email(2);}"><label id=\"contact_text\">Your first name*</label><br><input id=\"contact_name\" type=\"text\" required></input><br><label id=\"contact_text\">Your email address*</label><br><input id=\"contact_email\" type=\"text\" required></input><div id="contact_eml_wrng"></div><br><br><button style="float:none; margin-right:auto; margin-left:auto;" id=\"contact_button\" type=\"submit\" value="Next">Next</button></form></div>';
	}
	if(level == 1)
	{
		document.getElementById("contact").innerHTML = '';
		document.getElementById("contact").innerHTML = '<hr><br><label id="info_txt">Contact us</label><br><div id=\"contact_message\"><br><form action="javascript: contact_store_values(1);AJAX(2);"><label id=\"contact_text\">Your message*</label><br><textarea cols="40" rows="5" id=\"contact_message_txt\" required></textarea><br><br><button style="float:none; margin-right:auto; margin-left:auto;" id=\"contact_button\" type=\"submit\" value="Send">Send</button></form></div>';

		//set_select_itemsFromArray("contact_input", contact_elements);
		var index = 0;
		for (index = 0; index < contact_elements.length; ++index)
		{
			var select = document.getElementById("contact_input");
			select.options[select.options.length] = new Option(contact_elements[index],contact_elements[index]);
		}
	}
	if(level == 2)
	{
		document.getElementById("contact").innerHTML = '';
document.getElementById("contact").innerHTML = '<hr><br><div style="width: 100%; text-align:center;"><label id="info_txt"">Message Sent!</label></div>';
	}
}

function contact_store_values(level)
{
	if(level == 0)
	{
		contain_contact_values[0] = get_item_value("contact_name");
		contain_contact_values[1] = get_item_value("contact_email");
	}
	else if(level == 1)
	{
		contain_contact_values[2] = get_item_value("contact_message_txt");
	}
	return;
}
