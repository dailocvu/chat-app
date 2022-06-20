import person2 from "../static/person2.jpg";

const MessageReceived = ({ receivedMessage }) => {
  return (
    <div className="flex flex-row items-start gap-3">
      <div className="flex flex-col items-center gap-1 font-medium">
        <img src={person2} alt="" className="rounded-full h-12 w-12" />
        <p className="text-xs text-gray-500">{receivedMessage.time}</p>
      </div>
      {receivedMessage.message.map((item, index) => (
        <p
          key={index}
          className="text-gray-600 text-sm font-medium py-3 px-5 bg-message rounded-3xl"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default MessageReceived;
