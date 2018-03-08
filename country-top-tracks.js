const searchCountry = document.getElementById('searchCountry');
const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';
const method = 'geo.gettoptracks';


searchCountry.addEventListener('change', function(){
	const searchValue = searchCountry.value;
	getLastFmData(searchValue);
})

getLastFmData();


function getLastFmData(country) {
	fetch(`https://ws.audioscrobbler.com/2.0/?method=${method}&country=${country}&api_key=${apiKey}&format=json`)
	//as soon as the fetch has resolved, 
	//take the response and turn it into JSON
    .then((response) => response.json())
    .then(function(lastFmData){
		displayLastFmData(lastFmData);
    })
    .catch(function(error){
      console.log(error);
    })
}


function displayLastFmData(lastFmData){
	const { tracks } = lastFmData;
	
	const lastFmInfoElement = document.getElementById('lastFmInfo');
//	let lastFmInfo = `
//		<p> ${user.name} from </p>
//		<p> ${user.country} has </p>
//		<p> ${user.playcount} scrobbles </p>
//  `;
	let lastFmInfo =
		`
		<div class="image-container">
			<img src="${tracks.track[0].image[3]['#text']}" alt="${tracks.track[0].name}" class="thumbnail" width="300px" height="300px">
		</div>
		<div class="loader" id="loader"></div>
		<a href="${tracks.track[0].url}" target="_blank">
			<p> ${tracks.track[0].name}</p>
		</a>
		<a href="${tracks.track[0].artist.url}" target="_blank">
			<p> ${tracks.track[0].artist.name}</p>
		</a>
	`;
  lastFmInfoElement.innerHTML = lastFmInfo;
}


//loader shit

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}


function showPage() {
  document.getElementById("loader").style.display = "none";
  lastFmInfo.style.display = "block";
}





