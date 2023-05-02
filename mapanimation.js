var map;
var hyper_a = [];
var hyper_b = [];
var marker = [];
var buseslength;
var markers = [];
var begin = 0;
var direction1 = [];
var buses_previous;
var buseslength1;

// load map
function init(){
	var myOptions = {
		zoom      : 14,
		center    : { lat:42.353350,lng:-71.091525},
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var element = document.getElementById('map');
  	map = new google.maps.Map(element, myOptions);
	var myLatLng = { lat:42.353350,lng:-71.091525};
	var myLatLng2 = { lat:42.353350,lng:-71.091525};





	url2 = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	var oneBus;

  
    const makeRequest = async function (url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    };



    
function newbus1(){
    makeRequest(url2).then(function (result) {

		
		buses_previous=buseslength1;

          dataArray = result;


		  buseslength1 = dataArray.data.length;


		



		  console.log("BUSES:"+buseslength1);

		 /* if(buseslength1 < buses_previous){
			for(let k=0;k<(buses_previous-buseslength1);k++){
		  		
				marker[buses_previous-k-1].setMap(null);
			}
		  		}

				  if(buseslength1 > buses_previous){
					for(let l=0;l<(buseslength1-buses_previous);l++){	
				/*marker[buseslength1+l] = new google.maps.Marker({
    			position: myLatLng,
    			map,
  				});

				  marker[buseslength1+l].setPosition( {
					lat: 42.353350, 
					lng: -71.091525
					});

				  marker[buseslength1+l].setMap(map);

				if(direction1[buseslength1+l]==1){
				marker[buseslength1+l].setIcon('blue.png');
				}
				else{
					marker[buseslength1+l].setIcon('red.png');
				}
		  		}
			}	*/

          console.log("contador");
                for(let i = 0;i < 10;i++){

				if(i<dataArray.data.length){	
                oneBus= dataArray.data[i];
                console.log("bus id:"+" longitude:"+oneBus.attributes.longitude+" latitude:"+oneBus.attributes.latitude+"dir:"+oneBus.attributes.direction_id);
				console.log(hyper_a[i]);
                hyper_a[i]=oneBus.attributes.longitude;
                hyper_b[i]=oneBus.attributes.latitude;
				direction1[i]=oneBus.attributes.direction_id;


				console.log("marker:"+marker.length);
				

				if(begin == 1){

				marker[i].setPosition( {
    			lat: hyper_b[i], 
    			lng: hyper_a[i]
				});

				marker[i].setMap(map);

				if(direction1[i]==1){
				marker[i].setIcon('./images/blue.png');
				}
				else{
					marker[i].setIcon('./images/red.png');
				}

                }

			}
			else if(begin==1 && (i>=dataArray.data.length)){
				marker[i].setMap(null);
			}

			}


			
		



          return dataArray;
          })
  }

  
function createMarkers(){
    begin = 1;
	for(let j = 0; j<buseslength1; j++){
  myLatLng = { lat: hyper_b[j],lng: hyper_a[j]};

				/*marker[j] = new google.maps.Marker({
    			position: myLatLng,
    			map,
  				});*/

				marker[j].setPosition( {
    			lat: hyper_b[j], 
    			lng: hyper_a[j]
				});

				marker[j].setMap(map);

				if(direction1[j]==1){
				marker[j].setIcon('./images/blue.png');
				}
				else{
					marker[j].setIcon('./images/red.png');
				}
				
			}

			}

function createMarkers_0(){
    begin = 1;
	for(let j = 0; j<10; j++){
				marker[j] = new google.maps.Marker({
    			position: myLatLng,
    			map,
  				});
				  marker[j].setMap(null);	
			}

			}

		setTimeout(newbus1, 500);
		setTimeout(createMarkers_0,2000);
		setTimeout(createMarkers,2500);
        setInterval(newbus1,20000);

		
		







}


window.onload = init;
