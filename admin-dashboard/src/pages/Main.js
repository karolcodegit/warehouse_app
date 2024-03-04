import React from "react";
import { DeviceIcon, RecoveryIcon } from "../utils/icons";
import ShortcutPanel from "../components/ShortcutPanel/ShortcutPanel";
import TabsHome from "../components/TabsHome/TabsHome";
import TileGrid from "../components/TileGrid/TileGrid";
import { FcDataConfiguration, FcMultipleDevices } from "react-icons/fc";

const config= [
  {
    title: "Base config",
    link: '/devices',
    icon: FcDataConfiguration,
  },
  {
    title: "Devices",
    icon: FcMultipleDevices,
  },
  {
    title: "Module 3",
    icon: FcDataConfiguration,
  },
  {
    title: "Module 4",
    icon: FcMultipleDevices,
  },

]


const Main = () => {
  return (
    <div className="block">
      <div className="overflow-hidden">
        <div className="mt-10">
          <div className="flex flex-col h-full ">
            <TabsHome
              tabs={[
                {
                  label: "Get Started",
                  path: "/get-started",
                  component: ShortcutPanel,
                },
                { label: "Dashboard", path: "/dashboard", component: () => <TileGrid tiles={config} /> },
                // Dodaj więcej tabów tutaj
              ]}
            />
            {/* <ShortcutPanel /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
