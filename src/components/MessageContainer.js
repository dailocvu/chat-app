import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";

const MessageContainer = ({ receivedMessage, sentMessage }) => {
  return (
    <div className="flex flex-col gap-8 overflow-y-auto chat-height">
      <MessageReceived receivedMessage={receivedMessage} />
      <MessageSent sentMessage={sentMessage} />
    </div>
  );
};

export default MessageContainer;
