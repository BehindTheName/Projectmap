var myImage=document.getElementById("myPhoto");

var imageArray=["slideA1.png","slideA3.png","slideA2.png","slideA4.png","slideA5.png"];

var imageIndex=0;

function changeImage(){
	myPhoto.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length){
		imageIndex=0;
	}
}

var intervalHandle = setInterval(changeImage,4000);

myPhoto.onclick=function(){
	clearInterval(intervalHandle);
}

//slideshow---------------------------------