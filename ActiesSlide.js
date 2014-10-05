var ReclameIMG = ['ReclameKoffie.jpg', 'ReclameActieMaand.jpg', 'ReclameOpeningsactie.png'];

var Interval = setInterval(VeranderIMG, 5000);



var i = 0;

function VeranderIMG() {
	if (i >= ReclameIMG.length)
	{ i = 0;
	}

	document.getElementById("ActiesImg").src = ReclameIMG[i];
	i++;
	
}



function Pause(){
clearInterval(Interval);
<<<<<<< HEAD
document.getElementById("Pauseknop").src = "Start.png";
 
=======
>>>>>>> origin/master


document.getElementById("Startknop").style.display = 'block';
document.getElementById("Pauseknop").style.display = 'none';
}

function Start(){
	var Interval = setInterval(VeranderIMG, 5000);	
	document.getElementById("Startknop").style.display = 'none';
	document.getElementById("Pauseknop").style.display = 'block';

}


function Next(){
	if (i >= ReclameIMG.length)
	{ i = 0;
	}
	
	document.getElementById("ActiesImg").src = ReclameIMG[i];
	i++;



}

function Previous(){
	
	
	i--;
	document.getElementById("ActiesImg").src = ReclameIMG[i];
	
	if (i <= 0)
		{ 
		i = ReclameIMG.length;
		}
}