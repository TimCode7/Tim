var mesMatchs = document.getElementById("matchs");


function ajouterMatch(){
	mondiv = document.createElement('div');
	var res = prompt("entrez V pour une victoire et D pour une défaite");
	mondiv.id = res;
	if (res == "V") {
		mondiv.innerHTML += "Victoire"; 
	}else if (res=="D"){
		mondiv.innerHTML += "Défaite";
	}
	mesMatchs.appendChild(mondiv);
	console.log(mesMatchs);

}