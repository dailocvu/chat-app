const MessageSent = ({ sentMessage }) => {
  return (
    <div className="flex flex-col self-end items-end gap-1">
      {sentMessage.message.map((item, index) => (
        <p
          className="text-sm py-3 px-5 bg-mymessage rounded-3xl text-gray-100 w-fit"
          key={index}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default MessageSent;
