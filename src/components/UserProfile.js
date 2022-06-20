import person1 from "../static/person1.jpg";
import { HiChevronDown } from "react-icons/hi";

const UserProfile = () => {
  return (
    <div className="w-full h-52 flex flex-col justify-center items-center gap-4 drop-shadow-md">
      <img
        src={person1}
        alt=""
        className="w-20 h-20 rounded-full border-4 border-white cursor-pointer"
      />
      <p className="font-bold text-sm flex flex-row gap-1 items-center text-gray-600 tracking-widest cursor-pointer">
        Jimi Hendrix
        <HiChevronDown size={20} />
      </p>
    </div>
  );
};

export default UserProfile;
