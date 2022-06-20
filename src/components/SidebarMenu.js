import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineChatAlt } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineTag } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";

const menu = [
  {
    id: 1,
    icon: HiOutlineHome,
    title: "Properties",
    active: false,
  },
  {
    id: 2,
    icon: HiOutlineChatAlt,
    title: "Chat",
    active: true,
  },
  {
    id: 3,
    icon: HiOutlineCalendar,
    title: "Calendar",
    active: false,
  },
  {
    id: 4,
    icon: HiOutlineTag,
    title: "Offers",
    active: false,
  },
  {
    id: 5,
    icon: HiOutlineDocumentText,
    title: "Documents",
    active: false,
  },
  {
    id: 6,
    icon: AiOutlineSetting,
    title: "Settings",
    active: false,
  },
];

const SidebarMenu = () => {
  return (
    <>
      {menu.map((item) => (
        <div
          key={item.id}
          className={`w-full h-16 py-4 px-8 flex flex-row ${
            item.active ? "text-blue-500 relative" : "text-gray-400"
          } uppercase text-xs font-bold gap-4 items-center tracking-widest hover:bg-sidebarhover cursor-pointer transition ease-in-outout duration-300`}
        >
          {item.active && (
            <div className="w-1 h-9 rounded-md bg-blue-500 absolute left-0"></div>
          )}
          <item.icon size={20} />
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default SidebarMenu;
