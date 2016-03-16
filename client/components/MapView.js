import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

var location = {}
var options = {timeout:6000};

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
      ref={(map) => console.log(map)}
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={{ lat: location.lat, lng: location.lng }}>
      </GoogleMap> }
      />
    </div>
	);
};
