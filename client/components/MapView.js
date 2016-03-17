import React from 'react';
import { GoogleMapLoader, GoogleMap , Marker} from 'react-google-maps';

var location = {}
var options = {timeout:6000};

var trackPosition = navigator.geolocation.watchPosition(function(current) {
  console.log( "Newer Position Found" );

					// Set the new position of the existing marker.
					// updateMarker(
					// 	locationMarker,
					// 	position.coords.latitude,
					// 	position.coords.longitude,
					// 	"Updated / Accurate Position"
					// );

				}
			);


  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function (data, err, options) {
    location.lat = data.coords.latitude;
    location.lng = data.coords.longitude;
	console.log('Rider Time Summoned:', new Date(data.timestamp))
})}

    //clearWatch()    watchPosition()    getCurrentPosition()
    // navigator.geolocation.getCurrentPosition(GoogleMap, errorError);

export function MapView(props) {
  return (
    <div className='map'>
      <GoogleMapLoader
      ref={(map) => console.log('map data1', map)}
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap 
      	ref={(map) => console.log('map data2', map)}
      	defaultZoom={14} defaultCenter={{ lat: location.lat, lng: location.lng }} onClick={props.onMapClick}>
        return (
        <Marker onRightclick={() => props.onMarkerRightclick(index)} />
        );
      </GoogleMap> }
      />
    </div>
	);
};

