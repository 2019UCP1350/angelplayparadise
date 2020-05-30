var j=1;
showgallery();
function showgallery()
{
	for(i=1;i<=4;i++)
	{	
		var d=i+j;
		if(d>93)
		{
			d=1;
		}
		document.getElementById("gallery"+i).src="images/christmas2018/1 ("+d+").jpg";
	}
	j=(j+1)%94;
	setTimeout(showgallery,5000);
}