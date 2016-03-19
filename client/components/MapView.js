import React from 'react';
<<<<<<< 9f6b2b8978ab6dda289bf616f152507db2c320e4
import { GoogleMapLoader, GoogleMap , Marker, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux'

=======
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
>>>>>>> working on active updating geolocation

    //clearWatch()    watchPosition()    getCurrentPosition()
    // navigator.geolocation.getCurrentPosition(GoogleMap, errorError);


const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
    origin: {lat:41.8507300, lng:-87.6512600},
    destination: {lat:41.8525800, lng:-87.6514100},
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      onDirectionsResult(result);
      console.log('these are results', result)
      console.log('these are status', status)
      }
    )


//  return (
//    <div className='map'>
//       <GoogleMapLoader
//       containerElement={ <div style={{ height: '70%' }} /> }
//       googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
//       {directions ? <DirectionsRenderer directions={directions} /> : null}
//       </GoogleMap> }
//       />
//     </div>
//  );
// };






function Map ({ match, location, onMapView, directions }) {
  return match ? 
  (
    <div className='map'>
      <GoogleMapLoader
      ref={(map) => console.log('map data1', map)}
      containerElement={ <div style={{ height: '70%' }} /> }
<<<<<<< 9f6b2b8978ab6dda289bf616f152507db2c320e4
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
      {directions ? <DirectionsRenderer directions={directions} /> : null}
=======
      googleMapElement={ <GoogleMap 
      	ref={(map) => console.log('map data2', map)}
      	defaultZoom={14} defaultCenter={{ lat: location.lat, lng: location.lng }} onClick={props.onMapClick}>
        return (
        <Marker onRightclick={() => props.onMarkerRightclick(index)} />
        );
>>>>>>> working on active updating geolocation
      </GoogleMap> }
      />
    </div>
  )
  :
  (
    <div className='map'>
      <GoogleMapLoader
      ref={(map) => console.log('map data1', map)}
      containerElement={ <div style={{ height: '70%' }} /> }
      googleMapElement={ <GoogleMap defaultZoom={14} defaultCenter={ location } >
      </GoogleMap> }
      />
    </div>
  );
};

const mapDispatchToProps = function (dispatch) {
  return {
    onMapView() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: { location },
          destination: {lat:41.8525800, lng:-30.6514100},
          travelMode: google.maps.TravelMode.DRIVING
        },
        function(result, status) {
          // dispatch(result);
          console.log('these are results', result);
          console.log('these are status', status);
        }
      );
    },
  };
};

<<<<<<< 9f6b2b8978ab6dda289bf616f152507db2c320e4
// const DirectionsService = new google.maps.DirectionsService();
//     DirectionsService.route(
//     {
//     origin: { location },
//     destination: {lat:41.8525800, lng:-87.6514100},
//       travelMode: google.maps.TravelMode.DRIVING,
//     }, 
//     function (result, status) {
//       console.log('these are results', result)
//       console.log('these are status', status)
//     }
//     )


export const MapView = connect(
  null,
  mapDispatchToProps
)(Map);




// function Github({ onGithubClick = nullFn, }) {
//   return (
//     <div className='GitHubButton' onClick={onGithubClick}>
//       <button className='GithubButton btn'>Github</button>
//     </div>
//   );
// }

// const mapDispatchToProps = function (dispatch) {
//   return {
//     onGithubClick() {
//       var user;
//       OAuth.popup('github', { cache: true })
//         .done(function (githubToken) {
//           githubToken.me()
//             .done(function (me) {
//               console.log('found myself, finally:', me);

//               user = {
//                 username: me.alias,
//                 first_name: me.name.split(' ')[0],
//                 last_name: me.name.split(' ')[1],
//                 avatar: me.avatar,
//                 verifyBy: me.id,
//                 token: githubToken.access_token,
//               };

//               dispatch(userAction.fetchUserInfo(user));
//             });
//         })
//         .fail(function (err) {
//           console.log('error', err);
//         });
//     },
//   };
// };

// export const GithubButton = connect(
//   null,
//   mapDispatchToProps
// )(Github);








=======
>>>>>>> working on active updating geolocation
