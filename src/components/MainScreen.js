import Status from "./Status";
import MenuTitle from "./MenuTitle";
import ChatContainer from "./ChatContainer";

const Chat = () => {
  return (
    <div className="px-8 py-17 xl:p-17 bg-chat min-h-screen relative flex-1">
      <Status />
      <MenuTitle />
      <ChatContainer
      />
    </div>
  );
};

export default Chat;
