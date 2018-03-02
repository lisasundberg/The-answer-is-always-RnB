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
		<p> ${user.name} </p>
		<p> ${user.country}</p>
  	`;
  lastFmInfoElement.innerHTML = lastFmInfo;
}









// make a request to lastFM
//function lastFM(data, callback){
//  return request({
//    url:`https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${apiKey}&format=json`,
//    data: data,
//    type: 'json',
//    success: function(data){
//      if(callback){callback(false, data)}
//    },
//    error: function(err){
//      if(callback){callback(err)}
//    }
//  })
//}
//
//// generate data for a request
//function requestData(apiKey, user, page){
//  return {
//    method:method,
//    user:user,
//    api_key:apiKey,
//    limit:200,
//    page: page || 1
//  }
//}
//
//
//// generate a list of request data objects
//function requestList(apiKey, user, page_count){
//  var requests = [];
//  for(var page = 1; page <= page_count; page++){
//    requests.push(requestData(apiKey, user, page))
//  }
//  return requests;
//}
//
//console.log(requestList(apiKey, 'ultralisan' , 1));




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