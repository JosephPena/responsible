import { connect } from 'react-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import User from '../models/users';

import * as rideActions from '../actionCreators/ride';

function Main({ isDriver, isRider, match, location, directions, onDirectionsResult }) {
  console.log('isDriver, isRider:', isDriver, isRider);
  console.log('match', match)
  console.log('location', location)
  console.log('location, directions, result', location, directions, onDirectionsResult);
  return (
    <div className="MainApp">
    <button onClick={User.facebook}>Facebook</button>
    <button onClick={User.github}>Github</button>
    <button onClick={User.google}>Google</button>
      <TopNavBarContainer />
      {
        !isDriver && !isRider ?
          <SplashContainer /> :
          <MapView isRider={isRider} match={match} location={location} directions={directions} onDirectionsResult={onDirectionsResult} />
      }
      {
        isRider ?
        <BottomNavBarContainer /> :
        <div className="empty" />
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  // console.log('main container mapStateToProps state:', state.toJS());

  let stateJS = state.toJS()
  return {
    isRider: stateJS.user.isRider,
    isDriver: stateJS.user.isDriver,
    location: stateJS.user.location,
    match: stateJS.ride.match,
    directions: stateJS.ride.directions,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onDirectionsResult(result) {
      // dispatch(rideActions.setDirections(result));
    }
  }
}

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
