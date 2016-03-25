import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer, InfoWindow } from 'react-google-maps';
import { connect } from 'react-redux';

let mapOptions = {
  disableDefaultUI: true,
};

export function MapView({ isRider, isDriver, match, location, riders, directions }) {

  return match ?
  (
    <div className='map'>
      <GoogleMapLoader
        containerElement={ <div style={{ height: '70%' }} /> }
        googleMapElement={
          <GoogleMap
          options={ mapOptions }
          defaultZoom={14} defaultCenter={ location } >
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
       containerElement={<div style={{ height: '70%' }} />}
       googleMapElement={
        <GoogleMap
        options={ mapOptions }
        defaultZoom={14} defaultCenter={ location } >
          <Marker
            position={ location }
            defaultAnimation={2}>
          </Marker>
         {
          isRider ?
            riders.map((rider) => {
              let riderMarker = {};
              riderMarker.position = rider.location;
              riderMarker.showInfo = 'Rider_' + rider.user_id;

              return (
                <Marker
                  position={riderMarker.position}
                  defaultAnimation={1}>
                  <InfoWindow content={riderMarker.showInfo}/>
                </Marker>
              );
            })
            :
            <div />
        };
         </GoogleMap>
       }
     />
    </div>
  );
};
