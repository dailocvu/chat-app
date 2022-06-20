import { RiEmotionHappyLine } from "react-icons/ri";
import { RiAttachment2 } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

const Textbox = () => {
  return (
    <div className="bg-white h-17 flex flex-row items-center p-4 gap-4">
      <RiEmotionHappyLine
        size={35}
        className="text-gray-400 cursor-pointer hover:text-gray-600 transition ease-in-out duration-200"
      />
      <input
        type="text"
        placeholder="Type a message"
        className="w-full bg-inherit border-none outline-none text-sm tracking-wider text-gray-400 focus:text-gray-600"
      />
      <RiAttachment2
        size={20}
        className="text-gray-400 cursor-pointer hover:text-gray-600 transition ease-in-out duration-200"
      />
      <div className="cursor-pointer bg-blue-500 p-2 rounded-full bg-gradient-to-b from-[#74B3F6] to-mymessage send-button">
        <FiSend className="text-white" size={20} />
      </div>
    </div>
  );
};

export default Textbox;
