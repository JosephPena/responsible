import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export function MapView() {
  return (
      <GoogleMapLoader
        containerElement={ <div style={{ height: '70%' }} /> }
         googleMapElement={
          <GoogleMap
          defaultZoom={12} defaultCenter={{ lat: 30.2672, lng: -97.7431 }}></GoogleMap>
        }
      />
	);
};
