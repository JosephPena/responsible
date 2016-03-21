import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux';

// overlayMapTypes
// MapTypes
function Map({ match, location, directions }) {
  const state = {
   markers: [{
     position: {
       lat: 30.2705365,
       lng: -97.7362387,
     },
     defaultAnimation: 1,
   },
   ],
 };
  console.log('these are directions', directions);
  return match ?
  (
    <div className='map'>
      <GoogleMapLoader
        ref={(map) => console.log('MATCH!', map)}
        containerElement={ <div style={{ height: '70%' }} /> }
        googleMapElement={
          <GoogleMap defaultZoom={14} defaultCenter={ location } >
            {
              directions ?
                <DirectionsRenderer directions={ directions } /> :
                null
            }
          </GoogleMap>
        }
      />
    </div>
  )
  :
  (
    <div className='map'>
    <GoogleMapLoader
        ref={(map) => console.log('OHHHH... YOU WALKIN!', map)}
       containerElement={<div style={{ height: '100%' }} />}
       googleMapElement={
        <GoogleMap defaultZoom={16} defaultCenter={ location } >
         {state.markers.map((marker) => {
           return (
        <Marker {...marker} />
           );
         })};
         </GoogleMap>
       }
     />
    </div>
  );
};

export const MapView = connect()(Map);

