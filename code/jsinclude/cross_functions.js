function accept_dec_cookies(level)
{
    //SAVE OPTION TO COOKIES IF ACCEPTED
    if(level == 0)
    {
        set_hidden("cookies");
    }
    else
    {
        close();
    }
    return;
}

function force_agb(type)
{
    if(type == 0)
    {
        if(get_checked("book_agb"))
        {
            get_item("book_next_button").disabled = false;
            set_innerHTML("book_next_button", "Next");
        }
        else
        {
            get_item("book_next_button").disabled = true;
            set_innerHTML("book_next_button", "Next (Please Accept the terms and conditions/AGB)");
        }
    }
    else if(type == 559)
    {
        if(get_checked("join_con"))
        {
            get_item("join_next_button").disabled = false;
            set_innerHTML("join_next_button", "Next");
        }
        else
        {
            get_item("join_next_button").disabled = true;
            set_innerHTML("join_next_button", "Next (Please Accept the freelance agreement)");
        }
    }
    else
    {
        if(get_checked("join_agb"))
        {
            get_item("join_next_button").disabled = false;
            set_innerHTML("join_next_button", "Next");
        }
        else
        {
            get_item("join_next_button").disabled = true;
            set_innerHTML("join_next_button", "Next (Please Accept the terms and conditions/AGB)");
        }
    }
    return;
}

function get_address()
{
    getLocation();
    return;
}