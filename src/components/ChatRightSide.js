import LineBreak from "./LineBreak";

import ChatTitle from "./ChatTile";
import MessageContainer from "./MessageContainer";
import TextboxContainer from "./TextboxContainer";

const ChatRightSide = ({ receivedMessage, sentMessage }) => {
  return (
    <div className="px-5 flex-1 flex flex-col gap-3 mt-5">
      <ChatTitle receivedMessage={receivedMessage} />
      <LineBreak />
      <MessageContainer
        receivedMessage={receivedMessage}
        sentMessage={sentMessage}
      />
      <TextboxContainer />
    </div>
  );
};

export default ChatRightSide;
