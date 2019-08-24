var html = {
    contact: '<br><form class="contact_form" action="./getter.php" method="get"><label>Your name:</label><br><input name="name" class="contact_input" type="text"/><br><br><label>Your email address:</label><br><input name="email" type="text" class="contact_input"/><br><br><label>Your message:</label><br><textarea name="message" rows="5" class="contact_input"></textarea><br><br><button class="contact_button" type="SUBMIT">Send</button></form>',

    header: function(text, command)
    {
        executables.console_write_text("<br>[Starting process]: "+text+"<br>[Command]: "+command+"<br>[Running-Waitingforexit (wfoex.out): <label id='loader'></label>]<br>---------------<br><br>");
        loader_on();
    },

    init: '<br><label><img src="../Assets/Images/icons/gen/032-algorithm.png" height="50px"><br><br>Codekrane v.1.1<br>Welcome\nto the scorpion emulation console [ Full version <a target="_blank" href="https://github.com/Oscar-Tark/CSharp-Live">HERE</a> ]<br><br>Commands are not the standard ones in Scorpion. This is an fake emulation copy with no functionality of the original whatsoever. You know you are in control of the world now. In javascript ofcourse.<br><br>[WARNING!] Any changes made are stored in a simple memory structure with no encryption or are dead ends<br><br>[<label class="label_mid">LINKEDIN:</label> <a target="blank_" href="https://www.linkedin.com/in/oscartk/">https://www.linkedin.com/in/oscartk/</a> ]<br><br>Commands<br><br>><label class="label_highlighted"> Portfolio</label> - <label class="label_mid">fnc.run(\'Portfolio\')</label> too lazy to type? <label class= "console_clickable" onclick="scorpion(\'fnc.run(1)\')">click here</label><br><!--<label class="label_highlighted"> My skills</label> - <label class="label_mid">fnc.run(\'skills\')</label> too lazy to type? <label class= "console_clickable" onclick="scorpion(\'fnc.run(3)\')">click here</label><br>-->><label class="label_highlighted"> Contact me</label> - <label class="label_mid">fnc.run(\'Contact\')</label> too lazy to type? <label class= "console_clickable" onclick="scorpion(\'fnc.run(2)\')">click here</label><br>><label class="label_highlighted"> Reboot commandline</label> - <label class="label_mid">fnc.reboot()</label> too lazy to type? <label class= "console_clickable" onclick="scorpion(\'fnc.run(-1)\')">click here</label></label><script>loader_on();</script>'
}

var functions = {
    //If you are looking at this JS its clear it does nothing, just a simple if else structure. And you are looking in the wrong place. Visit the original C# version on Github, that does a breakdown of variables functions and accessors returning an array and afterwards executing the element in a cross threaded environment.
    breakdown : function(command){
        
        if(command == "init" || command == "fnc.init")
        {
            executables.console_write_html_repl(html.init);
            executables.console_write_text("Waiting for input by user");
            executables.console_write_html("<label id='loader'></label>");
            loader_on();
        }
        else if(command == "fnc.reboot()" || command == "fnc.run(-1)")
        {
            executables.console_write_text_repl("Booting commandline...");
            executables.console_write_html("<label id='loader'></label>");
            setTimeout(scorpion, 2000, 'win_reb');
            setTimeout(scorpion, 7000, 'init');
            loader_on();
        }
        else if(command == "win_reb")
        {
            executables.console_write_text_repl("Loading windoors executables with monu C%...");
            executables.console_write_text_repl("Linux booted everything to stack at address 0xffffffff <label class='label_mid'>Linux Torvlads Nokia says 'just because' fcuck nvadia</label>");
            executables.console_write_text("<br><br><label class='label_highlighted'>WINDOORS BSOD</label> - exited with code - :( Unable to page as usual<br>Update IExplorer today.date(dd/mm/yyyy) = 01/01/1976 <br><br>message at address 0xffffffac auto command(gdb ./windoors.out >> x/s $ebp) <label class='label_mid'>Bill money says 'Ha you know we can't count'</label>");
            executables.console_write_text("Starting commandline...");
            executables.console_write_html("<label id='loader'></label>");
        }
        else if(command == "fnc.run('Portfolio')" || command == "fnc.run(1)")
        {
            executables.console_write_back();
            html.header("Portfolio", command);
            executables.portfolio_div();
            executables.portfolio_header('The codekrane portfolio [<label class="label_mid">LINKEDIN:</label> <a href="https://www.linkedin.com/in/oscartk/" target="blank_">https://www.linkedin.com/in/oscartk/</a> ]:');
            add_portfolio_box('portfolio_div', 'Cleanery', 'Cleanery0', 'https://www.cleanery.de', '', 0, "", "PHP7, HTML5, CSS, Javascript, AJAX, JSON, MySQL, FPDF, Stripe API, HERE Maps");
            add_portfolio_box('portfolio_div', 'Pranavaya - The platform for the homeless', 'Prana0', 'https://www.pranavaya.com', 'https://github.com/Social-Incubator-Global/Prana-the-platform-for-the-homeless', 1, "", "PHP, HTML5, CSS, Javascript, AJAX, MySQL");
            add_portfolio_box('portfolio_div', 'Amatrix', 'Amatrix0', "", "https://github.com/Oscar-Tark/Amatrix-ERP", 2, "width: auto;", "C#, MSSQL, MSSQLCE, ADO.NET, POS.NET, AES");
            add_portfolio_box('portfolio_div', 'CSharp-live', 'Scorpion0', "", "https://github.com/Oscar-Tark/CSharp-Live", 0, "", "C#");
        }
        else if(command == "fnc.run('Contact')" || command == "fnc.run(2)")
        {
            executables.console_write_back();
            html.header("Contact", command);
            executables.console_write_html(html.contact);
        }
        else if(command == "fnc.nuclearexplosion(*'mykitchen', *'5G', *true, *false)")
        {
            executables.console_write_text('');
        }
        else if(command == "$(fnc.dismiss())")
        {
            accept_dec_cookies(0);
        }
        else
        {
            executables.console_write_back();
            executables.console_write_text("Unable to find command<br><br>---------------<br><br><label id='loader'></label> <label>Going back in 3 seconds..</label>");
            loader_on();
            setTimeout(scorpion, 3000, 'init');
            setTimeout(loader_off, 3000);
        }
        return command;
     },
};

var executables = {
    console_write_html_repl : function(html)
    {
        set_innerHTML("console", "<div class='static_content'>"+html+"</div>");
    },
    console_write_html : function(html)
    {
        set_addition_inner_HTML("console", "<div class='static_content'>"+html+"</div>");
    },

    console_write_text : function(text)
    {
        set_addition_inner_HTML("console", "<br><label>"+text+"</label>");
    },

    console_write_text_repl : function(text)
    {
        set_innerHTML("console", "<br><label>"+text+"</label>");
    },

    console_write_back : function()
    {
        set_innerHTML("console", '<div><br><label class="console_clickable" onclick="scorpion(\'init\'); loader_off();"><- Go back</label></div>');
    },

    portfolio_div: function()
    {
        executables.console_write_html('<div class="portfolio_div" id="portfolio_div"></div>');
    },

    portfolio_header: function(text)
    {
        set_addition_inner_HTML('portfolio_div','<label>'+text+'</label><br><hr><br>');
    },

    portfolio_box: function(text, image)
    {
        add_portfolio_box('portfolio_div', text, image);
    },
};

function scorpion(command)
{
    //If you are looking at this JS its clear it does nothing. And you are looking in the wrong place. Visit the original C# version on Github, that does a breakdown of variables functions and accessors returning an array and afterwards executing the element in a cross threaded environment.
    set_addition_inner_HTML('console', '<br><label>Executing command: '+command+'</label>');
    set_item_value('console_input', '');
    execute_insecure_scoprion_js(command);
    return;
}

function execute_insecure_scoprion_js(command)
{
    //If you are looking at this JS its clear it does nothing. And you are looking in the wrong place. Visit the original C# version on Github, that does a breakdown of variables functions and accessors returning an array and afterwards executing the element in a cross threaded environment.
    functions.breakdown(command);
    executables.console_write_text('Executed command: ' + command + " (Processing time: 0ms)");
    return;
}

function scoprion_execute_final()
{
    //If you are looking at this JS its clear it does nothing. And you are looking in the wrong place. Visit the original C# version on Github, that does a breakdown of variables functions and accessors returning an array and afterwards executing the element in a cross threaded environment.
    return;
}