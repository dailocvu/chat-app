import { RiArrowDownSFill } from "react-icons/ri";
import { HiOutlineBell } from "react-icons/hi";

const Status = () => {
  return (
    <div className="text-gray-600 tracking-wider p-2 absolute right-14 xl:right-24 top-9 font-medium flex flex-row gap-6 items-center">
      <div className="flex flex-row gap-1 items-center">
        <p className="text-sm cursor-pointer">Status: Sale</p>
        <RiArrowDownSFill
          size={20}
          className="text-gray-400 cursor-pointer hover:text-gray-600 transition ease-in-out duration-200"
        />
      </div>
      <HiOutlineBell
        size={20}
        className="text-gray-400 cursor-pointer hover:text-gray-600 transition ease-in-out duration-200"
      />
    </div>
  );
};

export default Status;
