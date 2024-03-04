// Sidebar.js
import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { sidebarData } from "./sidebarConfig";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../components/Logo/Logo";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(null);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const handleToggle = (title) => {
    if (expanded === title) {
      setExpanded(""); // Jeśli tytuł jest już rozwinięty, zwiń go
    } else {
      setExpanded(title); // W przeciwnym razie rozwiń tytuł
    }
    setToggle(!toggle);
  };

  return (
    <div
      id="sidebar"
      className=" flex flex-col absolute z-30 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out translate-x-0 py-10"
    >
      <div className="flex justify-center items-center">
        <Logo col />
      </div>
      
      <div className="space-y-8">
        <ul className="mt-10">
          {sidebarData.map((item, index) => (
            <li key={index} className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 ">
              <NavLink
                to={item.path}
                className="text-slate-200"
                activeclassname="text-red-400"
                onClick={() => handleToggle(item.title)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="shrink-0 h-5 w-5">{item.icon}</div>
                    <span
                      className={`text-base font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 hover:text-red-400 ${
                        location.pathname === item.path ? "text-red-400" : ""
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div className="flex shrink-0 ml-2">
                    {item.subNav && (
                      <IoIosArrowDown
                        className={`transition-transform duration-500 ease-in-out ${
                          expanded === item.title ? "transform rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                </div>
              </NavLink>
              {expanded === item.title &&
                item.subNav &&
                item.subNav.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="lg:hidden lg:sidebar-expanded:block 2xl:block"
                  >
                    <ul className="pl-12 mt-3 false">
                      <li
                        key={subIndex}
                        className="block transition duration-150 truncate text-slate-200 hover:text-red-400"
                      >
                        <NavLink
                          to={subItem.path}
                          activeclassname="text-red-400"
                        >
                          <span
                            className={`text-base font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${
                              location.pathname === subItem.path
                                ? "text-red-400"
                                : ""
                            }`}
                          >
                            {subItem.title}
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
