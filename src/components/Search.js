import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex flex-row gap-3 items-center text-gray-600">
      <HiOutlineSearch size={25} className="text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-inherit border-none outline-none text-sm tracking-wider"
      />
    </div>
  );
};

export default Search;
