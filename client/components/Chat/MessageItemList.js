import { MessageItem } from './MessageItem';

export function MessageItemList(props) {
  return (
    <div className="MessageItemList">
        {
          props.messages.map(function (message) {
            return <MessageItem {...message}
              key={Math.random()}
              client_id={props.user_id}
            />;
          })
        }
    </div>
  );
};
