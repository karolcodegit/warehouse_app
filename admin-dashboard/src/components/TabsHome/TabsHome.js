import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TabsHome = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].path);

  return (
    <>
      <div className="border-b border-gray-400">
        <div className="flex justify-between ">
          <nav className="flex flex-end ml-8">
            <div className="block overflow-hidden">
              <div className="flex gap-4">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`inline-block relative cursor-pointer overflow-hidden align-top text-center px-7 pb-2 ${
                      activeTab === tab.path ? "border-b-4 border-cyan-800" : ""
                    }`}
                    onClick={() => setActiveTab(tab.path)}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="p-8">
        {tabs.map(
          (tab, index) =>
            activeTab === tab.path &&
            React.createElement(tab.component, { key: index })
        )}
      </div>
    </>
  );
};

export default TabsHome;
