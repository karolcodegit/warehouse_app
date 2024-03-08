import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Sidebar from "../Templates/Sidebar";
import Topbar from "../Templates/Topbar";
import Footer from "../Templates/Footer";

const MainLayout = ({ children }) => {
  const { currentUser, isSidebarOpen, setIsSidebarOpen } =
    useContext(UserContext);

  return (
    <div className="flex h-screen overflow-hidden">
      <div>
        <div
          className="fixed inset-0 bg-slate-900 bg-opacity-30 z-40  lg:z-auto transition-opacity duration-200 opacity-0 pointer-events-none"
          aria-hidden="true"
        ></div>
        {currentUser && isSidebarOpen && (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
      </div>
      <div className="relative flex flex-col w-full flex-1 overflow-y-auto overflow-x-hidden">
        {currentUser && (
          <Topbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
        <div className="w-full max-w-9xl mx-auto bg-slate-200 h-full px-4 sm:px-6 lg:px-8 pt-8 mb-28">
          {children}
        </div>
        {currentUser && <Footer isSidebarOpen={isSidebarOpen} />}
      </div>
    </div>
  );
}

export default MainLayout;
