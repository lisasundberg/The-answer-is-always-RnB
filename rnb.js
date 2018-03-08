const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';
const method = 'user.getlovedtracks';
const user = 'ultralisan';


(async(username) => {
	try {
		var response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=ultralisan&api_key=81eb011ebdea34eb07af4188c24c4eb9&format=json`);
		var json = await response.json();
//		var lovedTracks = json.map(lovedtracks => lovedtracks.track.name);
		
		//Pick out all the loved track-names and add them to a separate array
		const lovedTracks = json.lovedtracks.track;
		const lovedTracksNames = [];
		for(var track of lovedTracks) {
			lovedTracksNames.push(track.name);
		}
		console.log(lovedTracksNames);
	}	catch(e) {
		console.log("Data didn't load", e);
	}
})
//(user);


//function getLastFmData() {
//	fetch(`https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}api_key=${apiKey}&format=json`)
//	//as soon as the fetch has resolved, 
//	//take the response and turn it into JSON
//    .then((response) => response.json())
//    .then(function(lastFmData){
//		displayLastFmData(lastFmData);
//    })
//    .catch(function(error){
//      console.log(error);
//    })
//}
//
//
//function displayLastFmData(lastFmData){
//	const { lovedtracks } = lastFmData;
//	
//	const lastFmInfoElement = document.getElementById('lastFmInfo');
//	let lastFmInfo = `
//		<p>${user} loves</p>
//		<p> ${lovedtracks.track.name}</p>
//		<p> ${lovedtracks.track.artist.name}</p>
//  `;
//
//  lastFmInfoElement.innerHTML = lastFmInfo;
//}


