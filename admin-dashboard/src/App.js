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
import withLayout from "./Layout/withLayout";
import MainLayout from "./Layout/MainLayout";
import LoginLayout from "./Layout/LoginLayout";
import renderRoute from "./Layout/withLayout";
import RenderRoute from "./Layout/withLayout";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logoutUser = () => {
    AuthService.logout();
    console.log(localStorage);
    setCurrentUser(undefined);
    navigate("/login");
  };

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
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
              toast.error(
                "An error occurred on the server. Please try again later."
              );
              break;
            default:
              toast.error("An error occurred. Please try again.");
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);

  // const renderRoute = (Component, Layout) => {
  //   return currentUser !== undefined || location.pathname === "/login"
  //     ? withLayout(Component, Layout)
  //     : withLayout(Login, LoginLayout);
  // };
  let element = useRoutes([
    { path: "/", element: <RenderRoute component={Main} layout={MainLayout} /> },
    { path: "/login", element: <RenderRoute component={Login} layout={LoginLayout} /> },
    { path: "/dashboard", element: <RenderRoute component={Dashboard} layout={MainLayout} /> },
    { path: "/users", element: <RenderRoute component={Users} layout={MainLayout} /> },
    { path: "/transport/outbound", element: <RenderRoute component={OutboundTransport} layout={MainLayout} /> },
    { path: "/transport/outbound/:id", element: <RenderRoute component={EditForm} layout={MainLayout} /> },
    { path: "/transport/inbound", element: <RenderRoute component={InboundTransport} layout={MainLayout} /> },
    { path: "/transport/inbound/:id", element: <RenderRoute component={EditForm} layout={MainLayout} /> },
    { path: "/print/label", element: <RenderRoute component={PrintLabel} layout={MainLayout} /> },
    { path: "/support/reports", element: <RenderRoute component={Reports} layout={MainLayout} /> },
    { path: "/support/statistics", element: <RenderRoute component={SupportStatictics} layout={MainLayout} /> },
    { path: "/settings", element: <RenderRoute component={Settings} layout={MainLayout} /> },
    { path: "/profile", element: <RenderRoute component={Profile} layout={MainLayout} /> },
    { path: "/config", element: <RenderRoute component={ModuleConfig} layout={MainLayout} /> },
    { path: "/documentation", element: <RenderRoute component={Documentation} layout={MainLayout} /> },
    { path: "/devices", element: <RenderRoute component={Devices} layout={MainLayout} /> },
    { path: "/roles", element: <RenderRoute component={Roles} layout={MainLayout} /> },
    { path: "/inventoryManagment", element: <RenderRoute component={InventoryManagement} layout={MainLayout} /> },
    { path: "/baseConfig", element: <RenderRoute component={BaseConfig} layout={MainLayout} /> },
    { path: "/ticket", element: <RenderRoute component={ViewTicket} layout={MainLayout} /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <UserContext.Provider value={{ isSidebarOpen, setIsSidebarOpen,currentUser, setCurrentUser, logoutUser }}>
      <ToastContainer position="top-right" autoClose={3000} />
      {element}
    </UserContext.Provider>
  );
}

export default App;
