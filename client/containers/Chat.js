import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { DriverItem } from '../components/DriverItem';
import { MessageItemList } from '../components/Chat/MessageItemList';

export function Chat({ match, id, messages, }) {
  return (
    <div className='chatbox'>
      <DriverItem {...match} />
      <MessageItemList userID={id} messages={messages}/>
    </div>
  );
}

// const mapStateToProps = function (state) {
//   return state.toJS();
// };

// // jscs:disable
// const mapDispatchToProps = function (dispatch) {
//   return;
// };
// // jscs:enable

// export const Chat = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Chat);