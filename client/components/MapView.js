import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export function MapView(props) {

  function errorError() {
    alert("Location can't be found");
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (data) {
    console.log('all the location data', data);
  });

    navigator.geolocation.getCurrentPosition(function (data) {
    coord.lat = data.coords.latitude;
    lng = data.coords.longitude;
  });

    //clearWatch()    watchPosition()    getCurrentPosition()
    navigator.geolocation.getCurrentPosition(GoogleMap, errorError);
  };

  var austin = {
	  lat: 30.2672,
	  lng: -97.7431,
	};
  return (
    <div className='map'>
      <GoogleMapLoader
      ref={(map) => console.log(map)}
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={{ lat: props.lat, lng: this.props.lng }}>
      </GoogleMap> }
      />
    </div>
	);
};
