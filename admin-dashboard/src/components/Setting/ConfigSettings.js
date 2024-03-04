import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
// import Modal from "../Common/Modal/Modal";
// import Input from "../Input/Input";
// import Title from "../Common/Title/Title";
// import Form from "../Form/Form";
// import { FaTruck } from "react-icons/fa6";
// import Notification from "../Common/Notification/Notification";
// import Details from "../Common/SetingsDetailsTable/SetingsDetailsTable";
// import { addData, getData } from "../../services/firebase/database";
// import { SettingsContext } from "../../contexts/settings/SettingsContext";




const ConfigSettings = () => {
    const [notification, setNotification] = useState({ message: "", type: "" });
    // const { updateNumberOfPacks } = useContext(SettingsContext);

    const handleUpdate = () => {
        // updateNumberOfPacks(15);
    }

  return (
    <div className="w-full">
      <div className="flex flex-col px-3 py-4">
        <div className="flex items-center">
          <span>Settings</span>{" "}
          <span className="px-2">
            <IoIosArrowForward />
          </span>
          <span>Config</span>
        </div>
        <div className="py-2 border-b border-gray-300 mt-7">General</div>
        <div className="py-2 border-b border-gray-300 mt-7">
          <span className="font-bold">Default settings</span>
        </div>

        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Stanowiska packowe</span>
          <div>
            {/* <span>{updateNumberOfPacks(15)}</span> */}
            <button onClick={handleUpdate}>Zmień</button>
          </div>
        </div>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Stanowisk zwrotowych</span>
          <div>
            <span>8</span>
          </div>
        </div>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Ilość skanerów</span>
          <div>
            <span>102</span>
          </div>
        </div>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Ilość drukarek</span>
          <div>
            <span>72</span>
          </div>
        </div>
        

        
      </div>
      {/* <Notification message={notification.message} type={notification.type} /> */}
    </div>
  );
};

export default ConfigSettings;
