/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark

Please also use CSS to style up your work 

//console.log the var

*/




var kingdoms = [{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", house: "House Arryn",region: "The Vale of Arryn",lord: "Robin Arryn", allegiance: "House Stark", words: "As High As Honor"},{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister", words: "We Stand Together"},{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign", words: "We Do Not Sow"},{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Targaryen", words: "Hear Me Roar!"}, { crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign", words: "Winter Is Coming"},{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign", words: "Fire And Blood"}];

var gotTitle = document.createElement("div");
gotTitle.id = "gotTitle";
gotTitle.innerHTML = "GAME OF THRONES";
heading.appendChild(gotTitle);

var gotSub = document.createElement("div");
gotSub.id = "gotSub";
gotSub.innerHTML = "Click House Names to Unlock More Info About That Kingdom";
heading.appendChild(gotSub);

for(var i = 0; i < kingdoms.length; i++){
	
	var kingdom = document.createElement("div");
	kingdom.className = "kingdom";
	kingdom.id = "card" + i;

	var crest = document.createElement("img");
	crest.className = "crest";
	crest.src = kingdoms[i].crest;
	kingdom.appendChild(crest);

	var house = document.createElement("div");
	house.className = "house";
	house.innerHTML = kingdoms[i].house;
	kingdom.appendChild(house);

	var toggleDivs = document.createElement("div");
	toggleDivs.className = "toggleDivs";
	toggleDivs.style.display = "none";
	house.appendChild(toggleDivs);

	var region = document.createElement("div");
	region.className = "region";
	region.innerHTML = "Region: " + kingdoms[i].region;
	toggleDivs.appendChild(region);

	var lord = document.createElement("div");
	lord.className = "lord";
	lord.innerHTML = "Lord: " + kingdoms[i].lord;
	toggleDivs.appendChild(lord);

	var allegiance = document.createElement("div");
	allegiance.className = "allegiance";
	allegiance.innerHTML = "Allegiance: " + kingdoms[i].allegiance;
	toggleDivs.appendChild(allegiance);

	var words = document.createElement("div");
	words.className = "words";
	words.innerHTML = "Slogan: " + kingdoms[i].words;
	toggleDivs.appendChild(words);

	 var addbreak = document.createElement("BR");
    kingdom.appendChild(addbreak);


    main.appendChild(kingdom);

}

var listeningElements = document.getElementsByClassName("house");


for(var i = 0; i< listeningElements.length; i++){
  listeningElements[i].addEventListener("click", toggleAll);
}

function toggleAll(){
  var toggleAll = this.querySelectorAll(".toggleDivs")[0];
  if(toggleAll.style.display === "none"){
    toggleAll.style.display = "block";
  }else{
    toggleAll.style.display = "none";
  }
}

toggleAll();

/* Add this to the bottom next time through JS <!-- <footer>
		<div class = "content">
			<p id = "copyright">&copy 2017</p>
			<p id = "credit">Site Design and Development By Dawnska4u</p>
			
		</div>
	</footer> -->*/










