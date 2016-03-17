import { connect } from 'react-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import User from '../models/users';

function Main({ isDriver, isRider, match, location }) {
  console.log('isDriver, isRider:', isDriver, isRider);
  console.log('match', match)
  console.log('location', location)
  return (
    <div className="MainApp">
    <button onClick={User.facebook}>Facebook</button>
    <button onClick={User.github}>Github</button>
    <button onClick={User.google}>Google</button>
      <TopNavBarContainer />
      {
        !isDriver && !isRider ?
          <SplashContainer /> :
          <MapView match={match} location={location} />
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

  let userState = state.toJS()
  return {
    isRider: userState.user.isRider,
    isDriver: userState.user.isDriver,
    location: userState.user.location,
    match: userState.ride.match,
  };
};

export const MainContainer = connect(
  mapStateToProps
)(Main);
