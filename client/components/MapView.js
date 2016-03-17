import React from 'react';
import { GoogleMapLoader, GoogleMap , Marker, DirectionsRenderer } from 'react-google-maps';

// var location = {}
// var options = {timeout:6000};

// var trackPosition = navigator.geolocation.watchPosition(function(current) {
//   console.log( "Newer Position Found" );

// 					Set the new position of the existing marker.
// 					updateMarker(
// 						locationMarker,
// 						position.coords.latitude,
// 						position.coords.longitude,
// 						"Updated / Accurate Position"
// 					);

// 				}
// 			);

// function positionWatcher(input){
//   if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(function (data, err, options) {
//     location.lat = data.coords.latitude;
//     location.lng = data.coords.longitude;
// 	console.log('Rider Time Summoned:', new Date(data.timestamp))
// })}
// }

    //clearWatch()    watchPosition()    getCurrentPosition()
    // navigator.geolocation.getCurrentPosition(GoogleMap, errorError);

export function MapView ({ match, location }) {

const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: { location },
      destination: {lat:41, lng:73},
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
     	console.log('these are results', result)
     	console.log('these are status', status)
      }
    )

    return <div></div>
}

//  return (
//    <div className='map'>
//      // <GoogleMapLoader
//       ref={(map) => console.log('map data1', map)}
//       containerElement={ <div style={{ height: '70%' }} /> }
//       googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
//       </GoogleMap> }
//       />
//     </div>
// 	);
// };








// export function MapView ({ match, location }) {
//   return (
//     <div className='map'>
//       match ? 
//         <GoogleMap getDirectionsBetween={riderLocation, driverLocation} />
//       :
//       <GoogleMapLoader
//       ref={(map) => console.log('map data1', map)}
//       containerElement={ <div style={{ height: '70%' }} /> }
//       googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
//       </GoogleMap> }
//       />
//     </div>
// 	);
// };

