/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark

Please also use CSS to style up your work 

//console.log the var

*/

console.log("test");


var kingdoms = [
	{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", 
		house: "House Arryn",
		region: "The Vale of Arryn",
		lord: "Robin Arryn", 
		allegiance: "House Stark"},
	{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister"},{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign"},{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Targaryen"},{ crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign"},{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign"}];

for(var i = 0; i < kingdoms.length; i++){
	//console.log(kingdoms[i].house);
	//console.log(kingdoms[i].region);
	//console.log(kingdoms[i].lord);
	//console.log(kingdoms[i].allegiance);
/*
	var img = new Image();   // Create new img element
img.addEventListener('load', function() {
  // execute drawImage statements here
}, false);
img.src = 'kingdoms[i].crest';*/

	var crest = document.createElement("img");
	crest.className = "crest";
	crest.src = kingdoms[i].crest;
	main.appendChild(crest);

	var region = document.createElement("div");
	region.className = "region";
	region.innerHTML = kingdoms[i].region;
	main.appendChild(region);

	var lord = document.createElement("div");
	lord.className = "lord";
	lord.innerHTML = kingdoms[i].house;
	main.appendChild(lord);

	var allegiance = document.createElement("div");
	allegiance.className = "allegiance";
	allegiance.innerHTML = kingdoms[i].allegiance;
	main.appendChild(allegiance);

	 var addbreak = document.createElement("BR");
    main.appendChild(addbreak);

}

