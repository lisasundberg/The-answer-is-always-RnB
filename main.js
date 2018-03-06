const searchUser = document.getElementById('searchUser');
const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';
const method = 'user.getInfo';


searchUser.addEventListener('change', function(){
  const searchValue = searchUser.value;
  getLastFmData(searchValue);
})

getLastFmData();


function getLastFmData( user = "ultralisan" ) {
	fetch(`https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${apiKey}&format=json`)
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
	const { user } = lastFmData;
	console.log(name);
	const lastFmInfoElement = document.getElementById('lastFmInfo');
	let lastFmInfo = `
		<p> ${user.name} from </p>
		<p> ${user.country} has </p>
		<p> ${user.playcount} scrobbles </p>
  	`;
  lastFmInfoElement.innerHTML = lastFmInfo;
}



