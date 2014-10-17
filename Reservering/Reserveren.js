//Met deze functie wordt nagegaan welke zaal de gebruiker wil zien. 
//Dit wordt gedaan door een select-tag.
function kieszaal(){
	var zaal = document.getElementById("Zalenselector").value;
switch (zaal) {
	case "Zaal1": 
	//De regel "document.getElementById("Zalen").innerHTML = null" zorgt ervoor dat de div "Zalen" leeg wordt
	//gemaakt als er een zaal aan wordt geklikt.
	//Als dit niet zou gebeuren, zouden de zalen onder elkaar worden aangemaakt.
	document.getElementById("Zalen").innerHTML = 0;
	var WelkeZaal = zaal1; 
	document.getElementById("divReserverenText").innerHTML = "</br> U selecteerde zaal 1.";
	MaakZaal(WelkeZaal);
	break;

	case "Zaal2": 
	document.getElementById("Zalen").innerHTML = 0;
	var WelkeZaal = zaal2; 
	document.getElementById("divReserverenText").innerHTML = "</br> U selecteerde zaal 2.";
	MaakZaal(WelkeZaal);
	break;

	case "Zaal3":
	document.getElementById("Zalen").innerHTML = 0;
	var WelkeZaal = zaal3; 
	document.getElementById("divReserverenText").innerHTML = "</br> U selecteerde zaal 3.";
	MaakZaal(WelkeZaal);
	break;}


}

//In deze variabelen staan de waardes van de zalen opgeslagen.
var zaal1 = [
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
	[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
	[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
	[3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3],
	[3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3],
	[3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3],
	[3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3],
	[3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3],
	[3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3],
	[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
	[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0]
];

var zaal2 = [
	[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ,3, 3, 3, 3, 0],
	[0, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3 ,3, 3, 3, 3, 0],
	[0, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2 ,3, 3, 3, 3, 0],
	[0, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2 ,3, 3, 3, 3, 0],
	[0, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ,2, 3, 3, 3, 0],
	[0, 3, 3, 3, 2, 2, 2, 2, 1, 1, 2, 2, 2 ,2, 3, 3, 3, 0],

	[3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2 ,2, 2, 3, 3, 3],
	[3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2 ,2, 2, 3, 3, 3],
	[3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2 ,2, 2, 2, 3, 3],
	[3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2 ,2, 2, 2, 3, 3],
	[3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2 ,2, 2, 2, 3, 3],

	[0, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2 ,2, 2, 3, 3, 0],
	[0, 3, 3, 3, 2, 2, 2, 2, 1, 1, 2, 2, 2 ,2, 3, 3, 3, 0],
	[0, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2 ,3, 3, 3, 3, 0],
	[0, 0, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3 ,3, 3, 3, 0, 0],
	[0, 0, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3 ,3, 3, 3, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ,3, 3, 3, 0, 0],
	[0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ,3, 3, 0, 0, 0],
	[0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ,3, 3, 0, 0, 0]
];

var zaal3 = [
	[0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
	[0, 0, 0, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 0, 0, 0],
	[0, 0, 0, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0, 0, 0],
	[0, 0, 0, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0, 0, 0],
	[0, 0, 0, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0, 0],

	[0, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0],
	[3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],

	[3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
	[0, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 0, 0],
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 0, 0],
	[0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
	[0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
	[0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0]
];





function MaakZaal(WelkeZaal){
	var plaats = 0;

	for(var RijNummer = 0; RijNummer < WelkeZaal.length; RijNummer++){
		for (var StoelNummer = 0; StoelNummer < WelkeZaal[RijNummer].length; StoelNummer++ )
		{
			switch (WelkeZaal[RijNummer][StoelNummer])
			{
			case 0: plaats = Maak_Leegte(); 
			break;
			case 1: plaats = Maak_Stoel(1, RijNummer, StoelNummer, 13.00 ); 
			break;
			case 2: plaats = Maak_Stoel(2,  RijNummer, StoelNummer, 11.00); 
			break;
			case 3: plaats = Maak_Stoel(3, RijNummer, StoelNummer, 7.50); 
			break;
			}
			document.getElementById("Zalen").appendChild(plaats);
		}
		document.getElementById("Zalen").appendChild(document.createElement("br"));
	}
}



var Totaalprijs = 0;
//deze twee functies maken de buttons aan.
function Maak_Stoel(Klasse, RijNummer, StoelNummer, Prijs ){
		var plaats = document.createElement("button");
		
		plaats.type = "button";
		plaats.id = "Rij_" + RijNummer + "_Stoel_" + StoelNummer;
		plaats.value = Prijs;
		var Klasse;
		Klasse = "klasse_" + Klasse;
		plaats.setAttribute("class", Klasse);
		plaats.addEventListener("click", function(){
		if (plaats.gereserveerd === "ja")
		{
		alert("Deze stoel is gereserveerd!");
		}
		else
		{
		
		switch (Prijs)
		{
		case 13.00: 
			document.getElementById("PrijzenReserveringDiv").innerHTML += "<p>\u20AC" + Prijs.toFixed(2) + "</p>"; 
		    Totaalprijs += 13.00;
			break;
		case 11.00: 
			document.getElementById("PrijzenReserveringDiv").innerHTML += "<p>\u20AC" + Prijs.toFixed(2) + "</p>"; 
			Totaalprijs += 11.00;
			break;
		case 7.50: 
			document.getElementById("PrijzenReserveringDiv").innerHTML += "<p>\u20AC" + Prijs.toFixed(2) + "</p>"; 
			Totaalprijs += 7.50;
			break;
		}
		plaats.style.backgroundColor = "#00FFAD"; 
		plaats.gereserveerd = "ja";
		document.getElementById("divReserverenText").innerHTML += "</br> Uw plaats is: " +  plaats.id;
		}

		document.getElementById("TotaalprijsDiv").innerHTML = "<p> Totaalprijs: \u20AC" + Totaalprijs.toFixed(2);
		})
		
		return plaats;

}

function Maak_Leegte(){
		var plaats = document.createElement("button");
		plaats.type = "button";
		plaats.setAttribute("class", "leeg");
		return plaats;

}

function Reserveren(){


}