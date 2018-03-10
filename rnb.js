const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';
const method = 'user.getlovedtracks';
const user = 'ultralisan';
const input = document.getElementById('input');
let lovedTracks = [];
//const lovedTracksNames = [];
const output = document.getElementById('output');

input.addEventListener('change', function(){
	getLovedTracks(user);
});

async function getLovedTracks(username) {
	try {
		var response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=ultralisan&api_key=81eb011ebdea34eb07af4188c24c4eb9&format=json`);
		var json = await response.json();
		lovedTracks = json.lovedtracks.track;
		displayTracks(lovedTracks);

	}	catch(e) {
		console.log("Data didn't load", e);
	}
}

//Select a random track
var randomTrack = lovedTracks[Math.floor(Math.random()*lovedTracks.length)];

function displayTracks(tracks){
	
	let randomTrack = lovedTracks[Math.floor(Math.random()*lovedTracks.length)];
	
	const htmlBlock = `
		<small>You asked</small>
		<p class="question">${input.value}</p>
		<div class="image">
			<img src="${randomTrack.image[3]['#text']}" alt="${randomTrack.artist.name}">
		</div>
		<a href="${randomTrack.url}">
			<p>${randomTrack.name}</p>
		</a>
		<a href="${randomTrack.artist.url}">
			<p>${randomTrack.artist.name}</p>
		</a>
	`;
//	const loader = `<div class="loader" id="loader"></div>`;
//	output.innerHTML = loader;
	output.innerHTML = htmlBlock;
	
	//Prints out all the tracks
	//	for(const track of tracks){
	////		console.log(track.name);
	////		htmlBlock += `<p>${track.name}</p>`;
	//	}
}


//<blockquote class="embedly-card"><h4><a href="https://www.last.fm/music/Jhen%C3%A9+Aiko/_/Sativa">Jhené Aiko - Sativa</a></h4><p>Watch the video for Sativa by Jhené Aiko for free, and see the artwork, lyrics and similar artists.</p></blockquote>
//<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>




