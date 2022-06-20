import SidebarMenu from "./SidebarMenu";
import UserProfile from "./UserProfile";

const Sidebar = () => {
  return (
    <div className="basis-60 bg-sidebar min-h-screen">
      <UserProfile />
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
