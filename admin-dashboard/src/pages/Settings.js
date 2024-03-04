import React, { useState } from 'react'
import Box from '../components/Box/Box';
import PrinterSettings from '../components/Setting/PrinterSettings';
import CmrSettings from '../components/Setting/CmrSettings';
import ConfigSettings from '../components/Setting/ConfigSettings';
import Other from '../components/Setting/Other';
import InformationSettings from '../components/Setting/InformationSettings';

const Setting = () => {
  const [activeSection, setActiveSection] = useState("appearance");
  const renderSection = () => {
    switch (activeSection) {
      case "printer":
        return <PrinterSettings />;
        case "information":
        return <InformationSettings />;
      case "cmr":
        return <CmrSettings />;
      case "config":
          return <ConfigSettings />;
      case "other":
        return <Other />;
    }
  };
  const sections = [
    {id: 'printer', name: 'Printer'},
    {id: 'information', name:'Information'},
    {id: 'cmr', name: 'Transport'},
    {id: 'config', name: 'Config'},
    {id: 'other', name: 'Other'}
  ]
  return (
    <div className="flex">
      <Box col className="flex space-x-1 p-6 w-64 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left py-2 px-4 rounded font-bold my-2 transition-colors duration-200 ${
                activeSection === section.id ? " bg-blue-500 text-white" : " text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.name}
          </button>
        ))}
      </Box>
      <Box className="flex-grow p-6 ml-4 bg-white rounded-2xl text-gray-700 shadow-lg h-minfull">
        {renderSection()}
      </Box>
    </div>
  );
};

export default Setting;