const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';
const method = 'user.getlovedtracks';
const user = 'ultralisan';
const input = document.getElementById('input');
let lovedTracks = [];
//const lovedTracksNames = [];


input.addEventListener('change', function(){

	(async(username) => {
		try {
			var response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=ultralisan&api_key=81eb011ebdea34eb07af4188c24c4eb9&format=json`);
			var json = await response.json();
			lovedTracks = json.lovedtracks.track;
			
			displayTracks(lovedTracks);
			
		}	catch(e) {
			console.log("Data didn't load", e);
		}
	})(user);

});


//Math.floor((Math.random() * 100) + 1);

var randomTrack = lovedTracks[Math.floor(Math.random()*lovedTracks.length)];

function displayTracks(tracks){
	const output = document.getElementById('output');
	let randomTrack = lovedTracks[Math.floor(Math.random()*lovedTracks.length)];
	
	const htmlBlock = `
		<p>${randomTrack.name}</p>
		<p>${randomTrack.artist.name}</p>
	`;
	output.innerHTML = htmlBlock;
	
	//Prints out all the tracks
	//	for(const track of tracks){
	////		console.log(track.name);
	////		htmlBlock += `<p>${track.name}</p>`;
	//	}
}





