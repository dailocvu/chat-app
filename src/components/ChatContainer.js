import { useState } from "react";
import ChatLeftSide from "./ChatLeftSide";
import ChatRightSide from "./ChatRightSide";

import person2 from "../static/person2.jpg";

const ChatContainer = () => {
  const [receivedMessage, setReceivedMessage] = useState({
    name: "Hali",
    avartar: person2,
    message: ["We invite you at our office to visit"],
    chatTitle: "Gold Coast",
    time: "10:00",
    date: "",
  });

  const [sentMessage, setSentMessage] = useState({
    message: ["It's like dream come true", "Thank you so much"],
    lastMessage: "Thank you so much",
    time: "",
    date: "20 June",
  });

  return (
    <div className="flex flex-row">
      <ChatLeftSide
        receivedMessage={receivedMessage}
        sentMessage={sentMessage}
      />
      <ChatRightSide
        receivedMessage={receivedMessage}
        sentMessage={sentMessage}
      />
    </div>
  );
};

export default ChatContainer;
