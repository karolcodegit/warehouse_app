import Dashboard from "../assets/Icons/Dashboard.png";
import Transport from "../assets/Icons/Transport.png";
import Support from "../assets/Icons/Support.png";

import {
  FaHome,
  FaTruckMoving,
  FaHeadset,
  FaUsers,
  FaCog,
  FaPrint,
} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";

import { CiUser } from "react-icons/ci";
import { DocumentIcon, InventoryIcon } from "../utils/icons";

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiFillDashboard />,
  },
  {
    title: "Transport",
    icon: <FaTruckMoving />,
    subNav: [
      {
        title: "Outbound",
        path: "/transport/outbound",
      },
      {
        title: "Inbound",
        path: "/transport/inbound",
      },
    ],
  },
  {
    title: "Print",
    icon: <FaPrint />,
    subNav: [
      {
        title: "Label",
        path: "/print/label",
      },
      {
        title: "Location",
        path: "/print/location",
      },
    ],
  },
  {
    title: "Support",
    icon: <FaHeadset />,
    subNav: [
      {
        title: "Reports",
        path: "/support/reports",
      },
      {
        title: "Statistics",
        path: "/support/statistics",
      },
    ],
  },
  { 
    title: "Users",
    path: "/users",
    icon: <FaUsers />,
  },
  {
    title: 'Inventory',
    path: '/inventoryManagment',
    icon: <InventoryIcon />,

  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
  {
    title: "Configuration",
    path: "/config",
    icon: <FaCog />,
  },
  {
    title: 'Documentation',
    path: '/documentation',
    icon: <DocumentIcon />,
  },
];
