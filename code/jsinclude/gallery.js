function into_gallery(filename)
{
	document.location("./gallery_in.php?img="+filename);
	return;
}

function set_onclick(name)
{
	document.getElementById(name).onclick = function () {document.location("./gallery_in.php?img="+filename);}
	return;
}