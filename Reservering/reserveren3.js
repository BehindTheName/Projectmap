
var Totaalprijs = 0;


//In deze variabelen staan de waardes van de zalen opgeslagen.


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





function MaakZaal(){
	var plaats = 0;

	for(var RijNummer = 0; RijNummer < zaal3.length; RijNummer++){
		for (var StoelNummer = 0; StoelNummer < zaal3[RijNummer].length; StoelNummer++ )
		{
			switch (zaal3[RijNummer][StoelNummer])
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



var PlaatsenTicket = "";
//deze twee functies maken de buttons aan.
function Maak_Stoel(Klasse, RijNummer, StoelNummer, Prijs ){
		var plaats = document.createElement("button");
		
		plaats.type = "button";
		plaats.id = "Zaal 3 Rij " + RijNummer + " Stoel " + StoelNummer;
		plaats.value = Prijs;
		var Klasse;
		Klasse = "klasse_" + Klasse;
		plaats.setAttribute("class", Klasse);
			
		if (localStorage.getItem(plaats.id)=== "bezet")
		{
			plaats.gereserveerd = "ja"; 
			plaats.style.backgroundColor = "#00FFAD";
		}
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
			document.getElementById("PrijzenReserveringDiv").innerHTML += "</br>\u20AC" + Prijs.toFixed(2) ; 
		    Totaalprijs += 13.00;
			break;
		case 11.00: 
			document.getElementById("PrijzenReserveringDiv").innerHTML += "</br>\u20AC" + Prijs.toFixed(2); 
			Totaalprijs += 11.00;
			break;
		case 7.50: 
			document.getElementById("PrijzenReserveringDiv").innerHTML += "</br>\u20AC" + Prijs.toFixed(2); 
			Totaalprijs += 7.50;
			break;
		}
		plaats.style.backgroundColor = "#00FFAD"; 
		plaats.gereserveerd = "ja";
		localStorage.setItem(plaats.id, "bezet")
		document.getElementById("divReserverenText").innerHTML += "</br> Uw plaats is: " +  plaats.id;
		PlaatsenTicket += plaats.id;
		}

		document.getElementById("TotaalprijsDiv").innerHTML = "</br> Totaalprijs: \u20AC" + Totaalprijs.toFixed(2);
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
	window.open("Ticket.html", "Ticket", "height=360, width=625" );
	

}

function Wissen() {
	localStorage.clear(); 
	Totaalprijs = 0; 
	document.getElementById("Zalen").innerHTML = ''; 
	document.getElementById("divReserverenText").innerHTML = "Naam:<br><input></input> </br>"+
	"E-mailadres: <br><input> </input> </br>"+
	"Zaal 1<br></div>;" 
	document.getElementById("PrijzenReserveringDiv").innerHTML = ''; 
	document.getElementById("TotaalprijsDiv").innerHTML = ''; 
	MaakZaal();


}