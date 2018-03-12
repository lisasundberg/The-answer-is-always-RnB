const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';
const method = 'user.getlovedtracks';
const user = 'ultralisan';
const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${apiKey}&format=json`;
const input = document.getElementById('input');
const output = document.getElementById('output');
const body = document.querySelector('body');
let lovedTracks = [];


//Fetch RnB-tracks from Last FM, based on ultralisan's loved tracks
const getLovedTracks = async (username) => {
	try {
		await delay(1);
		var response = await fetch(url);
		var json = await response.json();
		lovedTracks = json.lovedtracks.track;
		displayTracks(lovedTracks);
	}	catch(error) {
		console.log("Data didn't load", error);
	}
}

//After writing a question, fetch tracks from Last FM
input.addEventListener('change', function(){
	input.classList.add("active");
	if (input.value.includes('?')){
		getLovedTracks(user);
	} else {
		output.innerHTML = 
			`<p class="animate-bottom alert">
				You need to write a question :-)
			</p>`;
	}
});


//Create a function to display a random song
function displayTracks(tracks){
	//Get random RnB-track from ultralisan's loved tracks
	let randomTrack = tracks[Math.floor(Math.random()*tracks.length)];
	
	const htmlBlock = 
		`<div>
			<div id="image" class="animate-bottom image-container">
				<img src="${randomTrack.image[3]['#text']}" alt="${randomTrack.artist.name}">
				<small class="answer">The answer is </small>
			</div>
			
			<a href="${randomTrack.url}">
				<p class="animate-bottom">${randomTrack.name}</p>
			</a>
			<a href="${randomTrack.artist.url}">
				<p class="animate-bottom">${randomTrack.artist.name}</p>
			</a>
		</div>`;
//	const loader = `<div class="loader" id="loader"></div>`;
//	output.innerHTML = loader;
	output.innerHTML = htmlBlock;
}


//Create a function to delay displaying the information
function delay(seconds) {
	return new Promise(
		resolve => setTimeout(resolve, seconds * 1000)
	)
};





