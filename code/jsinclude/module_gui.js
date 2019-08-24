var gui_snip = {
    'tabbed_interface' : '<div id="tabbed_interface" class="tabbed_interface"><div id="tabbed_button_row" class="tabbed_button_row"></div><div class="tabbed_content" id="tabbed_content"></div></div>'
}

//Content...
var tabs = {
    0 : '<div><label>Business solutions are always different. Our no bullshit approach helps u</label></div>'
}
var tabbed_buttons = 0;

function evalTab(level)
{
    set_innerHTML('tabbed_content', tabs[level]);
    return;
}

function tabbedInterface()
{  
    set_addition_inner_HTML('mainframe', gui_snip['tabbed_interface']);
    return;
}

function addTabbedInterfacePage(text, div)
{
    set_addition_inner_HTML(div, '<input type="button" class="tabbed_interface_button'+tabbed_buttons+'" value="'+text+'" onclick="evalTab('+tabbed_buttons+')"/>');
    tabbed_buttons++;
    return;
}

function tabbedInterfaceCycle(id)
{

    return;
}

function draw_user()
{
    set_addition_inner_HTML('console', '<label>codekrane@read</label>');
}

function init_text()
{
    scorpion("fnc.reboot()");
    return;
}

function start_console()
{
    init_text();
    set_key_up("console_input", 13, "scorpion(get_item_value('console_input'));");
    //set_enter("console_input");
    return;
}

function get_links(link1, link2)
{
    tot_link = '<label class="vis_box_label">';
    if(link1 != "" && link1 != undefined)
    {
        tot_link += '<a target="_blank" href="'+link1+'">Website</a>';
    }

    if(link2 != "" && link2 != undefined)
    {
        tot_link += ' <a target="_blank" href="'+link2+'">Github</a>';
    }

    return tot_link + '</label>';
}

function add_portfolio_box(destination, text, image, web, git, prefix_int, style, skills)
{
    set_addition_inner_HTML(destination, '<div class="vis_box" onmouseover=""><div class="vis_box_sub"><label class="vis_box_label">'+text+'</label><input type="button" class="nav" value=">" onclick="javascript: cycle_image('+prefix_int+', 1);"/><input type="button" class="nav" value="<" onclick="javascript: cycle_image('+prefix_int+', 0);"/>'+get_links(web, git)+'<br><br><label class="vis_box_label">Skills used: '+skills+'</label></div><br><img style="'+style+'" class="vis_box_img" id="vis_box_img_'+text+'" src="../Assets/Images/elem/'+images[image]+'.png"/></div>');
    return;
}

function loader_on()
{
    try
    { loader_off(); }
    catch{}
    loader_interval = setInterval(cycle_loader, 300);
}

function loader_off()
{
    clearInterval(loader_interval);
}

function cycle_loader()
{
    set_innerHTML('loader', loader_elements[loader_int]);
    loader_int++;
    if(loader_int >3)
    { loader_int = 0; }
}

function cycle_image(prefix_int, type_)
{
    if(images[prefixes[prefix_int]+"_current"] == images[prefixes[prefix_int]+"_max"] && type_ == 1)
    {
        images[prefixes[prefix_int]+"_current"] = -1;
    }
    else if(images[prefixes[prefix_int]+"_current"] == images[prefixes[prefix_int]+"_min"] && type_ == 0)
    {
        images[prefixes[prefix_int]+"_current"] = images[prefixes[prefix_int]+"_max"] + 1;
    }

    if(type_ == 1)
    {
        images[prefixes[prefix_int]+"_current"] = images[prefixes[prefix_int]+"_current"]+1;
    }
    else
    {
        images[prefixes[prefix_int]+"_current"] = images[prefixes[prefix_int]+"_current"]-1;
    }

    console.log("vis_box_img_"+prefixes[prefix_int], "../Assets/Images/elem/"+prefixes[prefix_int]+images[prefixes[prefix_int]+'_current']+".png");

    set_image("vis_box_img_"+prefixes[prefix_int], "../Assets/Images/elem/"+prefixes[prefix_int]+images[prefixes[prefix_int]+'_current']+".png");
    return;
}