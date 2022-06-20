import person3 from "../static/person3.jpg";
import person4 from "../static/person4.jpg";

const placeholderChat = [
  {
    id: 3,
    name: "Victor Erixson",
    avartar: person3,
    message: "This is a placeholder",
    date: "20 June",
    newMessage: 2,
  },
  {
    id: 4,
    name: "Jony Ive",
    avartar: person4,
    message: "This is a placeholder",
    date: "20 June",
    newMessage: 5,
  },
];

const ChatList = ({ receivedMessage, sentMessage }) => {
  return (
    <div className="flex flex-col gap-3 overflow-y-auto chat-list-height">
      <div className="h-21 w-full bg-white rounded-md cursor-pointer hover:bg-sidebar transition ease-in-outout duration-300 shadow-sm">
        <div className="p-4 flex items-center justify-between gap-3">
          <div className="flex flex-row items-center gap-4">
            <img
              src={receivedMessage.avartar}
              alt=""
              className="rounded-full h-12 w-12"
            />
            <div className="text-sm tracking-wider">
              <p className="font-bold text-gray-600">{receivedMessage.name}</p>
              <p className="text-gray-400">{sentMessage.lastMessage}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 text-xs">
            <p className="text-gray-400 font-medium">{sentMessage.date}</p>
            {!sentMessage.lastMessage && (
              <div className="w-5 h-5 bg-red-500 rounded-full text-white flex items-center justify-center">
                1
              </div>
            )}
          </div>
        </div>
      </div>
      {placeholderChat.map((item) => (
        <div className="h-21 w-full bg-white rounded-md cursor-pointer hover:bg-sidebar transition ease-in-outout duration-300 shadow-sm">
          <div className="p-4 flex items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-4">
              <img
                src={item.avartar}
                alt=""
                className="rounded-full h-12 w-12"
              />
              <div className="text-sm tracking-wider">
                <p className="font-bold text-gray-600">{item.name}</p>
                <p className="text-gray-400">{item.message}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 text-xs">
              <p className="text-gray-400 font-medium">{item.date}</p>
              <div className="w-5 h-5 bg-red-500 rounded-full text-white flex items-center justify-center">
                {item.newMessage}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
