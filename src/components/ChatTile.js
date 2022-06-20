const ChatTitle = ({ receivedMessage, sentMessage }) => {
  return (
    <div className="">
      <p className="text-lg font-bold text-gray-600 tracking-wider">
        {receivedMessage.chatTitle}
      </p>
      <p className="text-xs text-gray-400 tracking-wider font-bold">
        From : {receivedMessage.name}
      </p>
    </div>
  );
};

export default ChatTitle;
