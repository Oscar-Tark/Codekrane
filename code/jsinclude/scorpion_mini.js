var html = {
    contact: '<br><form class="contact_form" action="./email.php" method="POST"><label>I was too lazy to create an email validation system for javascript. In order for your email to go through you will have to:<br><br>><label class="label_mid">Make sure the name field only has characters</label><br>><label class="label_mid">Make sure the email field contains an email address</label><br><br><label class="label_highlighted">Efforts to xss or SQLinject will be evaded.</label></label><br><br><label>Your name:</label><br><input name="name" class="contact_input" type="text" required/><br><br><label>Your email address:</label><br><input name="email" type="text" class="contact_input" required/><br><br><label>Your message:</label><br><textarea name="message" rows="5" class="contact_input" required></textarea><br><br><button id="email" class="contact_button" type="SUBMIT"/>Send</button></form>',

    header: function(text, command)
    {
        executables.console_write_text("<br>[Starting process]: "+text+"<br>[Command]: "+command+"<br>[Running-Waitingforexit (wfoex.out): <label id='loader'></label>]<br>---------------<br><br>");
        loader_on();
    },

    init: '<br><label><img src="../Assets/Images/icons/gen/032-algorithm.png" height="50px"><br><br>Codekrane v.1.1<br>Welcome\nto the scorpion emulation console [ Full version <a target="_blank" href="https://github.com/Oscar-Tark/CSharp-Live">HERE</a> ]<br><br>Commands are not the standard ones in Scorpion. This is an fake emulation copy with no functionality of the original whatsoever. You know you are in control of the world now. In javascript ofcourse.<br><br>[<label class="label_highlighted"> !WARNING! </label>] Any changes made are stored in a simple memory structure with no encryption or are dead ends<br>[<label class="label_mid">VIEW:</label> <a href="javascript: javascript: scorpion(\'fnc.run(1)\');">PORTFOLIO</a> | <a target="blank_" href="https://www.linkedin.com/in/oscartk/">LINKEDIN</a> | <a target="blank_" href="https://github.com/Oscar-Tark">GITHUB</a> | <a target="blank_" href=" https://bitbucket.org/%7B2a290b41-1933-4604-8eba-a92f90e6fbda%7D/">BITBUCKET</a> | <a target="blank_" href="https://www.codeproject.com/Articles/Oscar-Tark#Article">CODEPROJECT</a> ]<br><div></div><script>loader_on();</script>',

    options: '<br><div id="centered_div" class="centered_div"></div>',

    blog: '<br><div id="blog_div" class="centered_div"><hr><label class="label_mid">Welcome:</label><label> Welcome to codekrane. The website where I just post exterior links of what I do. <br><br><label class="label_mid">Things I hate:</label><label> I hate Javascript and all of the frameworks that come with it (React, Vue, Garry, Barry, Larryframework, x,y,z). There is nothing solid about a service provider switching frameworks every 6 months and introducing new exploitable bugs. Frameworks built by people who just monkey see monkey do their names to success. Rather than contributing to the Javascript project. Making JS more stable and introducing all the things they would like to have in JS. It\'s just a clusterf*ck it\'s not clean or well thought out, just a stack of technologies one over the other with then frameworks stacking themselves over other frameworks of frameworks of the framework frameworks. As you can see I did not put much work into this website and am not going to hire a "ReAcTion eNgINeER" from Le bandwagon to help me out. Am I salty? maybe. Salt is not a bad thing. Maybe I\'m just old school but for me computers have been a passion since the day I tore open my TI 86 calculator. A passion in life will fullfill you like nothing else will. Its getting harder to find people in the industry that have actually joined for the passion rather than cash.<br><br><label class="label_mid">Things I love:</label> C, Cybersecurity, Assembly (x86 CISC & ARM RISC), C#, Linux, Linus Torvalds, Richard Stallman(sometimes), ERP systems, Tuna from a can, sh*tty open source drivers.</label><br><br><label class="label_mid">What I can help you with:</label>If you are a company looking for someone who will get the job done. Someone with IT skills and maybe managerial skills. I am your guy. I am the guy. You may check out my <a href="javascript: scorpion(\'fnc.run(1)\');">Portfolio</a> go to my <a href="https://www.linkedin.com/in/oscartk/" target="_new">Linkedin</a> or my <a href="https://github.com/Oscar-Tark" target="_new">Github</a>/<a href="https://bitbucket.org/%7B2a290b41-1933-4604-8eba-a92f90e6fbda%7D/" target="_new">Bitbucket</a> for a glimpse at my early days of programming and my progress now. Some projects are very old and are from when I started programming and may contain loads of If\'s and repetitive code. You may also look at some more advanced topics that I have been working on by looking at my articles on <a href="https://www.codeproject.com/Articles/Oscar-Tark#Article">Codeproject</a><label></div>'
}

var functions = {
    //If you are looking at this JS its clear it does nothing, just a simple if else structure. And you are looking in the wrong place. Visit the original C# version on Github, that does a breakdown of variables functions and accessors returning an array and afterwards executing the element in a cross threaded environment.
    breakdown : function(command){
        
        if(command == "init" || command == "fnc.init")
        {
            executables.console_write_html_repl(html.init);
            executables.console_write_text("Waiting for input by user");
            executables.console_write_html("<label id='loader'></label><br>");
            executables.console_write_html(html.options);
            executables.console_write_html(html.blog);
            send_ajax_in(null, 'menu');
            //draw_choose_box("menu", "Option 1", "View my portfolio", 'scorpion(\"fnc.run(1)\");');
            //draw_choose_box("menu", "Option 2", "Contact me", 'scorpion(\"fnc.run(2)\");');
            //draw_choose_box("menu", "Option 3", "Reboot commandline", 'scorpion(\"fnc.run(-1)\");');
            loader_on();
        }
        else if(command == "fnc.reboot()" || command == "fnc.run(-1)")
        {
			executables.console_write_text_repl("");
            executables.console_write_text("Booting commandline...");
            executables.console_write_html("<label id='loader'></label>");
            setTimeout(scorpion, 2000, 'win_reb');
            setTimeout(scorpion, 7000, 'init');
            loader_on();
        }
        else if(command == "win_reb")
        {
			executables.console_write_text_repl("");
            executables.console_write_text("Linux booted everything to stack at address 0xffffffff <label class='label_mid'>Linux Torvlads Nokia says 'just because' fcuck nvadia</label>");
            executables.console_write_text("<br><br><label class='label_highlighted'>WINDOORS BSOD</label> - exited with code - :( Unable to page as usual<br>Update IExplorer today.date(dd/mm/yyyy) = 01/01/1976 <br><br>message at address 0xffffffac auto command(gdb ./windoors.out >> x/s $ebp) <label class='label_mid'>Bill money says 'Ha you know we can't count'</label>");
            executables.console_write_text("Starting commandline...");
            executables.console_write_html("<label id='loader'></label>");
        }
        else if(command == "fnc.run('Portfolio')" || command == "fnc.run(1)")
        {
            executables.console_write_back();
            html.header("Portfolio", command);
            executables.portfolio_div();
            executables.portfolio_header('My portfolio: [<label class="label_mid">Professional links:</label> <a target="blank_" href="https://www.linkedin.com/in/oscartk/">LINKEDIN</a> | <a target="blank_" href="https://github.com/Oscar-Tark">GITHUB</a> | <a target="blank_" href="https://bitbucket.org/%7B2a290b41-1933-4604-8eba-a92f90e6fbda%7D/">BITBUCKET</a> | <a target="blank_" href="https://www.codeproject.com/Articles/Oscar-Tark#Article">CODEPROJECT</a> ]:');
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
        else if(command == "fnc.run(5)")
        {
			//show sample code
            executables.console_write_back();
            html.header("Sample code", command)
			
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
        set_addition_inner_HTML("console", "<br><div class='static_content'><label>"+text+"</label></div>");
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
