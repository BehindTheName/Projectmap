var ReclameIMG = ['ReclameKoffie.jpg', 'ReclameActieMaand.jpg']

var Interval = setInterval(VeranderIMG, 5000);



var i = 0;

function VeranderIMG() {


	document.getElementById("ActiesImg").src = ReclameIMG[i];
	i++;
	if (i >= ReclameIMG.length)
	{ i = 0
	}
}



function Pause(){
clearInterval(Interval);
document.getElementById("Pauseknop").src = "Start.png";

}

function Next(){
	if (i >= ReclameIMG.length)
	{ i = 0
	}
	
	document.getElementById("ActiesImg").src = ReclameIMG[i];
	i++;



}

function Previous(){
	
	if (i < 0)
	{ i = ReclameIMG.length;

	}
	i--;
	document.getElementById("ActiesImg").src = ReclameIMG[i];


}