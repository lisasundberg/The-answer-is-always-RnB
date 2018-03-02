const searchUser = document.getElementById('searchUser');
const apiKey = '81eb011ebdea34eb07af4188c24c4eb9';

const method = 'user.getinfo';


searchUser.addEventListener('change', function(){
  const searchValue = searchUser.value;
  getLastFmData(searchValue);
})

getLastFmData();

function getLastFmData( user = "frippen" ) {
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


function displayLastFmData( lastFmData ){
	// const main = weatherData.main; //This is the same as the row below, called "destructuring"
	const { user } = lastFmData;
	const lastFmInfoElement = document.getElementById('lastFmInfo');
	let lastFmInfo = `
		<p> ${user.name} from</p>
		<p> ${user.country} has</p>
		<p> ${user.playcount} scrobbles</p>
  	`;
  lastFmInfoElement.innerHTML = lastFmInfo;
}

//Fetch method
//
//const getPeopleInSpace = () =>
//	fetch('http://api.open-notify.org/astros.json')
//	//as soon as the fetch has resolved, 
//	//take the response and turn it into JSON
//	.then(res => res.json());
//
//const spaceNames = () =>
//	getPeopleInSpace()
//		.then(json => json.people)
//		//get all the names from the people array
//		.then(people => people.map(p => p.name))
//		//join them together into a string with a comma and a space
//		.then(names => names.join(', '));
//
//	spaceNames()
//		.then(console.log);