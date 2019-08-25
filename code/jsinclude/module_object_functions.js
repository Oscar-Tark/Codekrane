function validateEmail(value)
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function dl_d(value)
{
    document.write(value);
    return;
}

function dl_r(ndx)
{
    return def_langs[ndx];
}

function dl_dc(ndx, ndx)
{
    return def_langs[ndx] + def_langs[ndx];
}

function ifnull(value)
{
    if(value == "" || value == undefined || value == null)
    {
        return true;
    }
    return false;
}

function reload_iframe(level, complete_reload)
{
    if(level == 0)
    {
        document.getElementById('contract_frame').contentDocument.location.reload(true);
    }
    return;
}

function go_to_iframe(name, url)
{
    document.location = url;
    return;
}

function set_onclick(name, event)
{
    document.getElementById(name).setAttribute("onClick", event);
    return;
}

function set_key_up(name, key, event)
{
    get_item(name).addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === key) {
        //Yes Eval shouldn't always be called due to cross scripting attacks. This website howerver is a show of mostly how things should not be done.
        eval(event);
    }});
    return;
}

function set_enter(name)
{
    get_item(name).addEventListener('focus', function onEvent(e) {
        set_height("inputter_autocomplete", "100px");
    });
    return;
}

function set_enter(name)
{
    get_item(name).addEventListener('focus', function onEvent(e) {
        set_height("inputter_autocomplete", "100px");
    });
    return;
}

function set_color(name, color)
{
    document.getElementById(name).style.color = color;
    return;
}

function set_all_margins_to(name, margin)
{
    document.getElementById(name).style.margin = margin;
    return;
}

function set_all_paddings_to(name, padding)
{
    document.getElementById(name).style.padding = padding;
    return;
}

function set_padding_left(name, padding)
{
    document.getElementById(name).style.paddingLeft = padding;
    return;
}

function set_padding_right(name, padding)
{
    document.getElementById(name).style.paddingRight = padding;
    return;
}

function set_scroll(name, scroll)
{
    document.getElementById(name).style.overflow = scroll;
    return;
}

function set_height_class(name, height)
{
    var x = document.getElementsByClassName(name);
    for (i = 0; i < x.length; i++)
    {
        x[i].style.height = height;
    }
    return;
}

function mainframe_as_body()
{
    set_padding_left("mainframe", "8%");
    set_padding_right("mainframe", "8%");
    return;
}

function set_body_full()
{
    document.body.style='margin:0px;padding:0px;';
    return;
}

function set_body_scroll(value)
{
    document.body.style.overflow = value;
    return;
}

function validate_filled(field)
{
    if(get_item_value(field) == "" || get_item_value(field) == undefined)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function validate_checked(checkbox)
{
    return get_checked(checkbox);
}

function required_filled(form_name)
{
    if(get_item_value(form_name) == "")
    {
        return false;
    }
    else
    {
        return true;
    }
    return;
}

function arrayClear()
{
    return [];
}

function arrayReturnByKey(key, array_, default_)
{
    if(!(key in array_))
    {
        return array_[default_];
    }
    return array_[key];
}

function arrayLength(array_)
{
    return array_.length;
}

function array_push(array_, item)
{
    array_.push(item);
    return;
}

function fill_select(array, select_name)
{
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            var elem=document.getElementById(select_name);
            elem.options[elem.options.length] = new Option(element,element);
        }
    return;
}

function add_select_element(element, select_name)
{
    var select_elem = get_item(select_name);
    select_elem.options[select_elem.options.length] = new Option(element, element);
    return;
}

//GET FUNCTIONS
function get_item(name)
{
    return document.getElementById(name);
}

function get_item_value(name)
{
    return document.getElementById(name).value;
}

function get_selected_index(name)
{
    return get_item(name).selectedIndex;
}

function get_selected_item(name)
{
    return get_item(name)[get_item(name).selectedIndex].value;
}

function get_checked(name)
{
    return get_item(name).checked;
}

function get_index(name)
{
    return get_item(name).selectedIndex;
}

function get_length(name)
{
    return get_item(name).length;
}

function highlight_field(name)
{
    get_item(name).style = "border: 1px solid red;color: red;";
    return;
}

function highlight_field_borderless(name)
{
    get_item(name).style = "color: red;";
    return;
}

function highlight_field_borderunderlined(name)
{
    get_item(name).style = "color: red; border-bottom: 1px solid red;";
    return;
}

function scroll_to(name)
{
    get_item(name).scrollIntoView();
    return;
}

function scroll_totop()
{
    window.scrollTo(0, 0);
    return;
}

function scrollToBottom(name)
{
    get_item(name).scrollTop = get_item(name).scrollHeight;
    return;
}

function scroll_type(name, value)
{
    return get_item(name).overflow = value;
}

function get_hidden(name)
{
    return get_item(name).style.visibility;
}

function set_hidden(name)
{
    get_item(name).style.visibility = "hidden";
    return;
}

function set_opacity(name, opacity)
{
    get_item(name).style.opacity = opacity;
    return;
}

function set_border_radius_br(name, radius)
{
    get_item(name).style.borderBottomRightRadius = radius;
    return;
}

function set_border_radius_bl(name, radius)
{
    get_item(name).style.borderBottomLeftRadius = radius;
    return;
}

function set_border_radius_tr(name, radius)
{
    get_item(name).style.borderTopRightRadius = radius;
    return;
}

function set_border_radius_tl(name, radius)
{
    get_item(name).style.borderTopLeftRadius = radius;
    return;
}

function set_display(name, display_status)
{
    get_item(name).style.display = display_status;
    return;
}

function set_image(name, image)
{
    get_item(name).src = image;
    return;
}

function set_item_min(name, minimum)
{
    get_item(name).min = minimum;
    return;
}

function set_margin_bottom(name, value)
{
    get_item(name).style.marginBottom = value;
    return;
}

function set_margin_right(name, value)
{
    get_item(name).style.marginRight = value;
    return;
}

function set_margin_left(name, value)
{
    get_item(name).style.marginLeft = value;
    return;
}

function set_margin_top(name, value)
{
    get_item(name).style.marginTop = value;
    return;
}

function set_visible(name)
{
    get_item(name).style.visibility = "visible";
    return;
}

function set_width(name, value)
{
    get_item(name).style.width = value;
    return;
}

function set_fontsize(name, value)
{
    get_item(name).style.fontSize = value;
    return;
}

function set_float(name, value)
{
    get_item(name).style.cssFloat = value;
    return;
}

function set_backgroundcolor(name, value)
{
    get_item(name).style.backgroundColor = value;
    return;
}

function set_textalign(name, value)
{
    get_item(name).style.textAlign = value;
    return;
}

function set_index(name, value)
{
    get_item(name).selectedIndex = value;
    return;
}

function set_checked(name, value)
{
    get_item(name).checked = value;
    return;
}

function reset_variables()
{
    set_local("venue_edit", "");
}

function set_item_value(name, value)
{
    get_item(name).value = value;
    return;
}

function set_innerHTML(name, value)
{
    get_item(name).innerHTML = value;
    return;
}

function clear_innerHTML(name)
{
    get_item(name).innerHTML = "";
    return;
}

function replace_string(value, to_replace, replace_with)
{
    return value.replace(to_replace, replace_with);
}

function remove_inner_HTML(name)
{
    get_item(name).parentNode.removeChild(get_item(name));
    return;
}

function set_addition_inner_HTML(name, value)
{
    get_item(name).innerHTML += value;
    return;
}

function set_enabled(name, bool)
{
    get_item(name).disabled = bool;
    return;
}

function set_height(name, height)
{
    get_item(name).style.height = height;
    return;
}

function set_local(name, value)
{
    localStorage.setItem(name, value);
    return;
}

function get_local(name)
{
    return localStorage.getItem(name);
}

function getJSON(value)
{
    return JSON.parse(value);
}

function concat_two(value1, value2)
{
    return value1 + value2;
}

function concat_two_space(value1, value2)
{
    return value1 + " " + value2;
}

function selectItem(name)
{
    get_item(name).focus();
    return;
}
