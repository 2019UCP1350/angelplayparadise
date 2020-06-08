function menu()
{
	var a=document.getElementsByClassName("menuicon");
	for (i=0;i<a.length;i++)
	{
		a[i].style.backgroundColor="black";
	}
}
function menureverse()
{
	var a=document.getElementsByClassName("menuicon");
	for (i=0;i<a.length;i++)
	{
		a[i].style.backgroundColor="white";
	}
}
function openNav() {
	document.getElementById("sidenav").style.width = "16vw";
}

function closeNav() {
	document.getElementById("sidenav").style.width = "0";
}
