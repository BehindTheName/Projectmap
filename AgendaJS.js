var WelkeDag = ["Zondag", "Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"]
var d = new Date();
var n = d.getDay(); 
var dag; 
function Dagbepalen () {


document.getElementById("DagCel").innerHTML = WelkeDag[n];
dag = WelkeDag[n];
Weekdag = n 
var Tijd = document.getElementById("SelectTijd").value;
var WelkeTijd;
	switch (Tijd)
	{
	case "9:00": WelkeTijd = 0;
	break;
	case "12:00": WelkeTijd = 1;
	break;
	case "15:00": WelkeTijd = 2;
	break;
	case "16:00": WelkeTijd = 3;
	break;
	case "18:00": WelkeTijd = 4;
	break;
	case "20:00": WelkeTijd = 5;
	break;
	case "22:00": WelkeTijd = 6;
	break;
	}

	document.getElementById("Film1").innerHTML = Dagen[n][WelkeTijd][0][0];
	document.getElementById("Zaal1").innerHTML = Dagen[n][WelkeTijd][0][1];

	document.getElementById("Film2").innerHTML = Dagen[n][WelkeTijd][1][0];
	document.getElementById("Zaal2").innerHTML = Dagen[n][WelkeTijd][1][1];

	document.getElementById("Film3").innerHTML = Dagen[n][WelkeTijd][2][0];
	document.getElementById("Zaal3").innerHTML = Dagen[n][WelkeTijd][2][1];

}

var Dagen = [
//Zondag
[
[["How To Train Your Dragon", "Zaal 1"], ["X-men", "Zaal 2"], ["Let's Be Cops", "Zaal 3"]],//9:00
[["If I Stay", "Zaal 1"], ["How To Train Your Dragon", "Zaal 2"], ["If I Stay", "Zaal 3"]],//12:00
[["Let's Be Cops", "Zaal 1"], ["The Expandables 3", "Zaal 2"], ["The Maze Runner", "Zaal 3"]],//15:00
[["The Maze Runner", "Zaal 1"], ["Into The Strom", "Zaal 2"], ["Into The Storm", "Zaal 3"]],//16:00
[["The Expandables", "Zaal 1"], ["The Maze Runner", "Zaal 2"], ["The Expandables", "Zaal 3"]],//18:00
[["X-men", "Zaal 1"], ["If I Stay", "Zaal 2"], ["How To Train Your Dragon", "Zaal 3"]],//20:00
[["Into The Storm", "Zaal 1"], ["Let's Be Cops", "Zaal 2"], ["X-men", "Zaal 3"]]//22:00
],

//Maandag
[
[["If I Stay", "Zaal 1"], ["A most Wanted Man", "Zaal 2"], ["The Maze Runner", "Zaal 3"]],//9:00
[["The Equalizer", "Zaal 1"], ["If I Stay", "Zaal 2"], ["The Equalizer", "Zaal 3"]],//12:00
[["The Maze Runner", "Zaal 1"], ["Let´s Be Cops", "Zaal 2"], ["Pijnstillers", "Zaal 3"]],//15:00
[["Pijnstillers", "Zaal 1"], ["November Man", "Zaal 2"], ["November Man", "Zaal 3"]],//16:00
[["Let´s Be Cops", "Zaal 1"], ["Pijnstillers", "Zaal 2"], ["Let´s Be Cops", "Zaal 3"]],//18:00
[["A Most Wanted Man", "Zaal 1"], ["The Equalizer", "Zaal 2"], ["If I Stay", "Zaal 3"]],//20:00
[["November Man", "Zaal 1"], ["The Maze Runner", "Zaal 2"], ["A Most Wanted Man", "Zaal 3"]]//22:00
],

//Dinsdag 
[
[["Deliver Us From Evil ", "Zaal 1"], ["X-men", "Zaal 2"], ["Guardians Of The Galaxy", "Zaal 3"]],//9:00
[["Into The Storm", "Zaal 1"], ["Deliver Us From Evil", "Zaal 2"], ["Into The Storm", "Zaal 3"]],//12:00
[["Guardians Of The Galaxy", "Zaal 1"], ["Winter Sleep", "Zaal 2"], ["The Expandables 3", "Zaal 3"]],//15:00
[["The Expandables 3", "Zaal 1"], ["12 Years A Slave", "Zaal 2"], ["12 Years a Slave", "Zaal 3"]],//16:00
[["Winter Sleep", "Zaal 1"], ["The Expandables 3", "Zaal 2"], ["Winter Sleep", "Zaal 3"]],//18:00
[["X-men", "Zaal 1"], ["Into The Storm", "Zaal 2"], ["Deliver Us From Evil", "Zaal 3"]],//20:00
[["12 Years A Slave", "Zaal 1"], ["Guardians OF The Galaxy", "Zaal 2"], ["X-men", "Zaal 3"]]//22:00
],


//Woensdag
[
[["How To Train Your Dragon", "Zaal 1"], ["Guardians Of The Galaxy", "Zaal 2"], ["If I Stay", "Zaal 3"]],//9:00
[["Edge Of Tomorrow", "Zaal 1"], ["How To Train Your Dragon", "Zaal 2"], ["Edge OF Tomorrow", "Zaal 3"]],//12:00
[["If I Stay", "Zaal 1"], ["Let's Be Cops", "Zaal 2"], ["The Maze Runner", "Zaal 3"]],//15:00
[["The Maze Runner", "Zaal 1"], ["Into The Storm", "Zaal 2"], ["Into The Storm", "Zaal 3"]],//16:00
[["Let's Be Cops", "Zaal 1"], ["The Maze Runner", "Zaal 2"], ["Let's Be Cops", "Zaal 3"]],//18:00
[["Guardians Of The Galaxy", "Zaal 1"], ["Edge Of Tomorrow", "Zaal 2"], ["How To train Your Dragon", "Zaal 3"]],//20:00
[["Into The Storm", "Zaal 1"], ["If I Stay", "Zaal 2"], ["Guardians Of The Galaxy", "Zaal 3"]]//22:00
],

//Donderdag
[
[["12 Years A Slave", "Zaal 1"], ["Pijnstillers", "Zaal 2"], ["Winter Sleep", "Zaal 3"]],//9:00
[["If I Stay", "Zaal 1"], ["12 Years A Slave", "Zaal 2"], ["If I Stay", "Zaal 3"]],//12:00
[["Winter Sleep", "Zaal 1"], ["Deliver Us From Evil", "Zaal 2"], ["12 Years A Slave", "Zaal 3"]],//15:00
[["12 Years A Slave", "Zaal 1"], ["The Expandables 3", "Zaal 2"], ["The Expandables 3", "Zaal 3"]],//16:00
[["Deliver Us From Evil", "Zaal 1"], ["12 Years A Slave", "Zaal 2"], ["Deliver Us From Evil", "Zaal 3"]],//18:00
[["Pijnstillers", "Zaal 1"], ["If I Stay", "Zaal 2"], ["12 Years A Slave", "Zaal 3"]],//20:00
[["The Expandables 3", "Zaal 1"], ["Winter Sleep", "Zaal 2"], ["Pijnstillers", "Zaal 3"]]//22:00
],


//Vrijdag
[
[["Let's Be Cops", "Zaal 1"], ["How To Train Your Dragon", "Zaal 2"], ["Into The Storm", "Zaal 3"]],//9:00
[["The Equalizer", "Zaal 1"], ["Let's Be Cops", "Zaal 2"], ["The Equalizer", "Zaal 3"]],//12:00
[["Into The Storm", "Zaal 1"], ["X-Men", "Zaal 2"], ["The Expandables 3", "Zaal 3"]],//15:00
[["The Expandables 3", "Zaal 1"], ["A Most Wanted Man", "Zaal 2"], ["A Most Wanted Man", "Zaal 3"]],//16:00
[["X-Men", "Zaal 1"], ["The Expandables 3", "Zaal 2"], ["X-Men", "Zaal 3"]],//18:00
[["How To Train Your Dragon", "Zaal 1"], ["The Equalizer", "Zaal 2"], ["Let's Be Cops", "Zaal 3"]],//20:00
[["A Most Wanted Man", "Zaal 1"], ["Into The Storm", "Zaal 2"], ["How To Train Your Dragon", "Zaal 3"]]//22:00
],

//Zaterdag
[
[["Edge Of Tomorrow", "Zaal 1"], ["12 Years A Slave", "Zaal 2"], ["Deliver Us From Evil", "Zaal 3"]],//9:00
[["Guardian OF The Galaxy", "Zaal 1"], ["Edge Of Tomorrow", "Zaal 2"], ["Guardian OF The Galaxy", "Zaal 3"]],//12:00
[["Deliver Us From Evil", "Zaal 1"], ["The Maze Runner", "Zaal 2"], ["November Man", "Zaal 3"]],//15:00
[["November Man", "Zaal 1"], ["If I Stay", "Zaal 2"], ["If I Stay", "Zaal 3"]],//16:00
[["The Maze Runner", "Zaal 1"], ["November Man", "Zaal 2"], ["The Maze Runner", "Zaal 3"]],//18:00
[["12 Years A Slave", "Zaal 1"], ["Guardian OF The Galaxy", "Zaal 2"], ["Edge Of Tomorrow", "Zaal 3"]],//20:00
[["If I Stay", "Zaal 1"], ["Deliver Us From Evil", "Zaal 2"], ["12 Years A Slave", "Zaal 3"]]//22:00
]
];


function VolgendeDag() {
if (n >= 6)
{
	n = 0;
}
else {
	n++;
}

Dagbepalen();
}

function VorigeDag() {
if (n <= 0)
{
	n = 6;
}
else {
	n = n - 1;
}

Dagbepalen();

}