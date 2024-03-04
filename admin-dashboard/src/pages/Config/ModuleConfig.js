import React from 'react';
import { FcDataConfiguration } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";
import TileGrid from '../../components/TileGrid/TileGrid';
import { FcFlowChart } from "react-icons/fc";

const config= [
  {
    title: "Base config",
    link: '/baseConfig',
    icon: FcDataConfiguration,
  },
  {
    title: "Devices",
    link: "/devices",
    icon: FcMultipleDevices,
  },
  {
    title: "Roles",
    link: "/roles",
    icon: FcFlowChart,
  },
  {
    title: "Module 4",
    icon: FcMultipleDevices,
  },

]

const ModuleConfig = () => {
  return (
    <TileGrid tiles={config} />
  
  );
};

export default ModuleConfig;