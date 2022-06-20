import Search from "./Search";
import ChatList from "./ChatList";
import LineBreak from "./LineBreak";

const ChatLeftSide = ({ receivedMessage, sentMessage }) => {
  return (
    <div className="px-5 mt-8 basis-80 xl:basis-chatlist flex flex-col gap-5">
      <Search />
      <LineBreak />
      <ChatList receivedMessage={receivedMessage} sentMessage={sentMessage} />
    </div>
  );
};

export default ChatLeftSide;
