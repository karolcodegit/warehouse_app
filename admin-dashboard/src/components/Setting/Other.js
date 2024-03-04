import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Other = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col px-3 py-4">
        <div className="flex items-center">
          <span>Settings</span>{" "}
          <span className="px-2">
            <IoIosArrowForward />
          </span>
          <span>Other</span>
        </div>
        <div className="py-2 border-b border-gray-300 mt-7">General</div>
        <div className="py-2 border-b border-gray-300 mt-7">
          <span className="font-bold">Default settings</span>
        </div>
        <div className="flex justify-between py-8 border-b border-gray-300">
            <span>Reprint (setting number)</span>
            <div>
              <span>Change number</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Other;
