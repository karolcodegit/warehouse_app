import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "./services/auth.service";
import Sidebar from "./Templates/Sidebar";
import Topbar from "./Templates/Topbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Login from "./pages/Login";
import OutboundTransport from "./pages/OutboundTransport";
import InboundTransport from "./pages/InboundTransport";
import Settings from "./pages/Settings";
import NotFoundPage from "./Templates/404";
import UserContext from "./contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import Footer from "./Templates/Footer";
import Main from "./pages/Main";
import axios from "axios";
import EditForm from "./components/EditForm/EditForm";
import PrintLabel from "./pages/PrintLabel";
import Reports from "./pages/Support/Reports";
import SupportStatictics from "./pages/Support/SupportStatictics";
import Documentation from "./pages/Documentation";
import ModuleConfig from "./pages/Config/ModuleConfig";
import Devices from "./pages/Devices";
import InventoryManagement from "./pages/InventoryManagement";
import BaseConfig from "./pages/Config/BaseConfig";
import Roles from "./module/roles/roles";
import ViewTicket from "./pages/Support/ViewTicket";


function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const isLoginPage = location.pathname === '/login'; // Zmień '/login' na rzeczywistą ścieżkę do strony logowania

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logoutUser = () => {
    AuthService.logout();
    console.log(localStorage)
    setCurrentUser(undefined);
    navigate('/login')
  };

  useEffect(() => {
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          switch (error.response.status) {
            case 401: // Unauthorized
              logoutUser();
              toast.error("Your session has expired. Please log in again.");
              break;
            case 403: // Forbidden
              toast.error("You don't have permission to perform this action.");
              break;
            case 500: // Internal Server Error
              toast.error("An error occurred on the server. Please try again later.");
              break;
            default:
              toast.error("An error occurred. Please try again.");
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);

  const renderRoute = (Component) => currentUser ? <Component /> : <Login />;

  let element = useRoutes([
    { path: "/", element: renderRoute(Main) },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: renderRoute(Dashboard) },
    { path: "/users", element: renderRoute(Users) },
    { path: "/transport/outbound", element: renderRoute(OutboundTransport) },
    { path: "/transport/outbound/:id", element: renderRoute(EditForm) },
    { path: "/transport/inbound", element: renderRoute(InboundTransport) },
    { path: "/transport/inbound/:id", element: renderRoute(EditForm) },
    { path: "/print/label", element: renderRoute(PrintLabel) },
    { path: "/support/reports", element: renderRoute(Reports) },
    { path: "/support/statistics", element: renderRoute(SupportStatictics) },
    { path: "/settings", element: renderRoute(Settings) },
    { path: "/profile", element: renderRoute(Profile) },
    { path: "/config",element: renderRoute(ModuleConfig) },
    { path: '/documentation', element: renderRoute(Documentation)},
    { path: '/devices', element: renderRoute(Devices)},
    { path: '/roles', element: renderRoute(Roles)},
    {path: '/inventoryManagment', element: renderRoute(InventoryManagement)},
    {path: '/baseConfig', element: renderRoute(BaseConfig)},

    {path: '/ticket', element: renderRoute(ViewTicket)},

    { path: "*", element: <NotFoundPage /> },
  ]);

  

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, logoutUser }}>
      <ToastContainer position="top-right" autoClose={3000} />
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
         <div className={`w-full max-w-9xl mx-auto bg-slate-200 h-full ${!isLoginPage ? 'px-4 sm:px-6 lg:px-8 pt-8 mb-28' : ''}`}>
            {element}
          </div>
          {currentUser && <Footer  isSidebarOpen={isSidebarOpen} />}
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
