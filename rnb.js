const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';
const method = 'user.getlovedtracks';
const user = 'ultralisan';
const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${apiKey}&format=json`;
const input = document.getElementById('input');
const output = document.getElementById('output');
const body = document.querySelector('body');
let lovedTracks = [];


// Create the function that fetches tracks ultralisan's loved tracks from Last FM
const getLovedTracks = async (username) => {
	try {
		await delay(2);
		var response = await fetch(url);
		var json = await response.json();
		lovedTracks = json.lovedtracks.track;
		displayTracks(lovedTracks);
	}	catch(error) {
		console.log("Data didn't load", error);
	}
}

// When writing a question, call the getLovedTracks-function
input.addEventListener('change', function(){
	
	const loader = `<div class="loader" id="loader"></div>`;
	output.innerHTML = loader;
	
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


//Create a function to randomize and display a song
function displayTracks(tracks){
	
	//Get random RnB-track from loved tracks
	let randomTrack = tracks[Math.floor(Math.random()*tracks.length)];
	
	const htmlBlock = 
		`<div>
			<div id="image" class="animate-bottom image-container">
				<img src="${randomTrack.image[3]['#text']}" alt="${randomTrack.artist.name}">
			</div>

			<small class="answer">The answer is </small>
			
			<p class="animate-bottom track"><a href="${randomTrack.url}">${randomTrack.name}</a></p>
			
			<p class="animate-bottom artist">by <a href="${randomTrack.artist.url}">${randomTrack.artist.name}</a></p>
			
		</div>`;
	
	output.innerHTML = htmlBlock;
}


//Create a function to delay displaying the information
function delay(seconds) {
	return new Promise(
		resolve => setTimeout(resolve, seconds * 1000)
	)
};




