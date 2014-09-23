var myImage=document.getElementById("myPhoto");

var imageArray=["slide1.png","slide2.png","slide3.png"];

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