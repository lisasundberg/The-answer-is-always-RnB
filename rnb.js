const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';
const method = 'user.getlovedtracks';
const user = 'ultralisan';
const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${apiKey}&format=json`;

const input = document.getElementById('input');
const output = document.getElementById('output');

let lovedTracks = [];


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


input.addEventListener('change', function(){
	getLovedTracks(user);
});


function displayTracks(tracks){
	
	let randomTrack = lovedTracks[Math.floor(Math.random()*lovedTracks.length)];
	
	const htmlBlock = `
		<div class="animate-bottom">
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
		</div>
	`;
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

//<blockquote class="embedly-card"><h4><a href="https://www.last.fm/music/Jhen%C3%A9+Aiko/_/Sativa">Jhené Aiko - Sativa</a></h4><p>Watch the video for Sativa by Jhené Aiko for free, and see the artwork, lyrics and similar artists.</p></blockquote>
//<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>




