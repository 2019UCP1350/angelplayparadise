if (window.innerWidth>900)
		{
			window.onscroll = function() {scrollFunction()};
			function scrollFunction()
			{
					if (document.body.scrollTop >100 || document.documentElement.scrollTop >100) 
					{
						document.getElementById("navbar").style.position= "fixed";
						document.getElementById("navbar").style.top="0px";
						document.getElementById("main").style.marginTop="40px";
					}
					else 
					{
						document.getElementById("navbar").style.position= "static";
						document.getElementById("main").style.marginTop="0px";
					}
			}
		}
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
			document.getElementById("sidenav").style.width = "180px";
		}

		function closeNav() {
			document.getElementById("sidenav").style.width = "0";
		}