import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SettingPanel from "../components/SettingsPanel/SettingsPanel";
import { ApplicationListbox } from "../components/ApplicationListBox/ApplicationListBox";
import { LanguageListbox } from "../components/LanguageListbox/LanguageListbox";
import ToolbarActions from "../components/ToolbarActions/ToolbarActions";
import UserProfile from "../components/UserProfile/UserProfile";
import DepartureNotification from "../components/DepartureNotification/DepartureNotification";

const Topbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    <div className="sticky top-0 bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex gap-5">
            <button
              className="text-slate-500 hover:text-slate-600"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span className="sr-only">open/close sidebar</span>
              <RxHamburgerMenu className="text-white" />
            </button>
            <div className="relative inline-block text-left">
              <ApplicationListbox />
            </div>
          </div>
          <div>
          <DepartureNotification departureTime={new Date(new Date().getTime() + 20 * 60 * 1000)} /> {/* Dodajemy komponent DepartureNotification */}
          </div>
          <div className="flex items-center space-x-3 self-center">
            <div className="flex mx-4 self-center items-center">
              <div className="relative inline-block text-left self-center items-center">
                <LanguageListbox />
              </div>
                <ToolbarActions handleSettings={handleSettings} />
            </div>
            <div className="realative inline-flex items-center mt-2">
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
      {isSettingsVisible && (
        <SettingPanel
          isSettingsOpen={isSettingsVisible}
          setIsSettingsOpen={setIsSettingsVisible}
        />
      )}
    </div>
  );
};

export default Topbar;
