var ReclameIMG = ['ReclameKoffie.jpg', 'ReclameActieMaand.jpg']



setInterval(VeranderIMG, 5000);
var i = 0;
function VeranderIMG() {


	document.getElementById("ActiesImg").src = ReclameIMG[i];
	i ++;
	if (i >= ReclameIMG.length)
	{ i = 0
	}
}



