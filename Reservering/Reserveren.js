function kieszaal(){
	var zaal = document.getElementById("Zalenselector").value;
switch (zaal) {
	case "Zaal1": MaakZaal1();
	break;
	case "Zaal2": alert("U selecteerde zaal 2");
	break;
	case "Zaal3": alert("U selecteerde zaal 3");
	break;}


}

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
	[0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
	[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
	[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0]
];


function MaakZaal1(){
	var plaats;
	for(var RijNummer = 0; RijNummer < zaal1.length; RijNummer++){
		for (var StoelNummer = 0; StoelNummer < zaal1[RijNummer].length; StoelNummer++ )
		{
			switch (zaal1[RijNummer][StoelNummer])
			{
			case 0: Maak_Leegte(); 
			break;
			case 1: Maak_Stoel(1, RijNummer, StoelNummer, 13.00 ); 
			break;
			case 2: Maak_Stoel(2,  RijNummer, StoelNummer, 11.00); 
			break;
			case 3: Maak_Stoel(3, RijNummer, StoelNummer, 7.50); 
			break;
			}
			document.getElementById("Zalen").appendChild(plaats);
		}
		document.getElementById("Zalen").appendChild(document.createElement("br"));
	}
}


function Maak_Stoel(Klasse, RijNummer, StoelNummer, Prijs ){
		var plaats = document.createElement("button");
		plaats.type = "button";
		plaats.id = "Stoel_" + RijNummer + "_" + StoelNummer;
		plaats.value = Prijs;
		var Klasse;
		Klasse = "klasse_" + Klasse;
		plaats.setAttribute("class", Klasse);
		return plaats;

}

function Maak_Leegte(){
	var plaats = document.createElement("button");
		plaats.type = "button";
		plaats.setAttribute("class", "leeg");
		return plaats;

}