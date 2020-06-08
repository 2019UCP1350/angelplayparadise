const galleryimage=document.querySelectorAll(".gallery-slide img");
const galleryslide=document.querySelector(".gallery-slide");
const previousbtn=document.getElementById("gallery-pre");
const nextbtn=document.getElementById("gallery-next");
var size=galleryimage[0].clientWidth;
//galleryslide.Width=size*4;
console.log(size);
//size=size/4;
window.onresize=function(){
	galleryresize();
	resize();
	}
var counter=1;
function galleryresize()
{
	size=galleryslide.clientWidth;
	//size=size/4;
}
nextbtn.addEventListener('click',function(){gallerynext();});
function gallerynext()
{
	if (counter>=galleryimage.length-5) return;
	galleryslide.style.transition="transform 0.7s ease-in-out";
	counter++;
	galleryslide.style.transform="translateX("+(-size*counter)+"px)";
}

previousbtn.addEventListener('click',()=>{
	if (counter<=0) return;
	galleryslide.style.transition="transform 0.7s ease-in-out";
	counter--;
	galleryslide.style.transform="translateX("+(-size*counter)+"px)";
});
galleryslide.addEventListener('transitionend',()=>{
	if(galleryimage[counter].id=="lastclone")
	{
		galleryslide.style.transition="none";
		counter=galleryimage.length-6;
		galleryslide.style.transform="translateX("+(-size*counter)+"px)";
	}
	if(galleryimage[counter].id=="firstclone")
	{
		galleryslide.style.transition="none";
		counter=1;
		galleryslide.style.transform="translateX("+(-size*counter)+"px)";
	}
});
nextimagegallery();
function nextimagegallery()
{
	gallerynext();
	setTimeout(nextimagegallery,4000);
}