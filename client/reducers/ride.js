import { Map } from 'immutable';

import { handleCancel } from './cancelRide';
import { handleConfirm } from './confirmRide';
import { handleRideFetch } from './fetchRide';
import { handleMessages } from './rideMessages';

// The state passed to this reducer is state.ride
export default function(state = Map(), action) {

  // console.log('reducing ride state:', state.toJS());
  switch (action.type) {
    case 'REQUEST_RIDE':
    case 'RECEIVE_RIDE_ID':
    case 'RECEIVE_RIDE':
    case 'REQUEST_RIDE_ERROR':
      return handleRideFetch(state, action);
    case 'CONFIRM_RIDE':
    case 'ACCEPT_RIDE_SENT':
    case 'ACCEPT_RIDE_ERROR':
      return handleConfirm(state, action);
    case 'CANCEL_RIDE':
    case 'CANCEL_RIDE_SENT':
    case 'CANCEL_RIDE_ERROR':
    case 'REMOVE_RIDER':
      return handleCancel(state, action);
    case 'REQUEST_MESSAGES':
    case 'RECEIVE_MESSAGES':
    case 'REQUEST_MESSAGES_ERROR':
    case 'ADD_MESSAGE':
      return handleMessages(state, action);
    case 'SET_DIRECTIONS':
      console.log('setting directions:', action.entry);
      return state.merge(action.entry);
  };

  return state;
}
