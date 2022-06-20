import MessageContainer from "./MessageContainer";
import TextboxContainer from "./TextboxContainer";

const MessageSection = () => {
  return (
    <div className="h-full pt-4 tracking-wider flex flex-col gap-4 justify-between">
      <MessageContainer />
      <TextboxContainer />
    </div>
  );
};

export default MessageSection;
