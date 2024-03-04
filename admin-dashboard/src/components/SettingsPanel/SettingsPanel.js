import React from "react";
import Title from "../Title/Tilte";
import { IoClose } from "react-icons/io5";

// import { AppThemeContext } from "../../contexts/themes/AppThemeContext";
import Toggle from "../Toggle/Toggle";

const SettingPanel = ({ isSettingsOpen, setIsSettingsOpen }) => {
//   const { theme, toggleTheme, fontSize, handleFontSizeChange } = useContext(AppThemeContext);


  return (
    <div>
      <div
        className={`fixed top-0 right-0 bottom-0 h-full w-96 bg-white p-4 transition-transform transform ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between">
          <Title tag="h3">Settings</Title>
          <IoClose
            className="cursor-pointer"
            onClick={() => setIsSettingsOpen(false)}
          />
        </div>

        <div className="mt-10">
        <span className="font-medium text-lg">Color themes</span>
          <div className="flex mt-4">
          <span className="pr-3">Light</span>
            <Toggle
            //   checked={theme === "dark"}
            //   onChange={toggleTheme}
              label="Change background"
            />
            <span className="px-3">Dark</span>
         
          </div>
        </div>
        <div className="mt-10">
        <span className="font-medium text-lg">Size font</span>
          <div className="flex mt-4">
          <button className="rounded-lg bg-gray-200 px-3 py-1">Smaller</button>
          <button  className="rounded-lg bg-gray-200 px-3 py-1 mx-4">Normal</button>
          <button  className="rounded-lg bg-gray-200 px-3 py-1">Bigger</button>
          </div>
        </div>
        <div className="mt-10">
          <span className="font-medium text-lg">Contrast</span>
          <div className="flex mt-4">
            <button className="rounded-lg bg-gray-200 px-3 py-1">Normal</button>
            <button className="rounded-lg bg-gray-200 px-3 py-1 mx-4">High</button>
        </div>
        </div>
        <div className="mt-10">
          <span className="font-medium text-lg">Nav background</span>
          <div className="flex mt-4">
          <button className="rounded-lg bg-gray-200 px-3 py-1">Navy blue</button>
            <button className="rounded-lg bg-gray-200 px-3 py-1 mx-4">White</button>
            <button className="rounded-lg bg-gray-200 px-3 py-1 ">Black</button>
        </div>
      
    </div>
    </div>
    </div>
  );
};

export default SettingPanel;
