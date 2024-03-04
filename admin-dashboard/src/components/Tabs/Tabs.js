import React, { useEffect, useRef, useState } from "react";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);
    

  return (
    <div className="flex border-b">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`py-2 px-4 cursor-pointer ${activeTab === tab.name ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => {
            setActiveTab(tab.name);
            tab.onClick();
          }}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
