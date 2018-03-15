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
		await delay(1);
		var response = await fetch(url);
		var json = await response.json();
		lovedTracks = json.lovedtracks.track;
		displayTracks(lovedTracks);
	}	catch(error) {
		output.innerHTML = 
			`<p class="animate-bottom alert">
				Sorry, something went wrong.
			</p>`;
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

//Create a function that fetches number of listeners for a specific track
async function getTrackInfo(track, artist){
	try {
		var response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=81eb011ebdea34eb07af4188c24c4eb9&artist=${artist}&track=${track}&format=json`);
		var json = await response.json();
		let numberOfListeners = json.track.listeners;
		console.log(numberOfListeners); //Detta funkar: skriver ut antal lyssnare
//			return numberOfListeners; //Detta funkar inte: skriver ut att Promiset är pending
	} catch(error) {
		output.innerHTML = 
			`<p class="animate-bottom alert">
				Sorry, something went wrong.
			</p>`;
	}
}


//Create a function to randomize and display a song
function displayTracks(tracks){
	
	//Get random RnB-track from loved tracks
	let randomTrack = tracks[Math.floor(Math.random()*tracks.length)];
	
	//Get number of plays for the track by passing the track name and artist name into the function
	numberOfListeners = getTrackInfo(randomTrack.name, randomTrack.artist.name);
	
	//Write out the information
	const htmlBlock = 
		`<div>
			<div id="image" class="animate-bottom image-container">
				<img src="${randomTrack.image[3]['#text']}" alt="${randomTrack.artist.name}">
				<a href="${randomTrack.url}" target="_blank">
					<div class="play-button">
						<svg aria-hidden="true" data-prefix="fas" data-icon="play" role="img" 
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 
						47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" 
						class=""></path></svg>
					</div>
				</a>
			</div>

			<small class="answer">The answer is </small>

			<p class="animate-bottom track"><a href="${randomTrack.url}" 
			target="_blank">${randomTrack.name}</a></p>
			
			<p class="animate-bottom artist">by <a href="${randomTrack.artist.url}" 
			target="_blank">${randomTrack.artist.name}</a></p>
			
		</div>`;
	
	output.innerHTML = htmlBlock;
}


//Create a function to delay displaying the information
function delay(seconds) {
	return new Promise(
		resolve => setTimeout(resolve, seconds * 1000)
	)
};

