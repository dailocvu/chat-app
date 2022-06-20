
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";


function App() {

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center text-center text-2xl lg:hidden ">
        Don't support on Tablet and Mobile, please use Desktop version!
      </div>
      <div className="hidden lg:flex flex-row">
        <Sidebar />
        <MainScreen
        />
      </div>
    </>
  );
}

export default App;
