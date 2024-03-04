import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import QRCode from "qrcode.react";

const zoneFH = ({ zone, location1, location2, location3 }) => {
  const fullLocation = `${zone} ${location1} ${location2} ${location3}`;

  return (
    <div className=" items-center justify-center text-black" id="label">
      <div className="flex flex-row items-center">
        <FaArrowUpLong style={{ fontSize: '5em' }}/>

        <div className="flex flex-col w-2/3">
          <div className="ml-6">
            <span className="text-4xl pr-3 ">{zone}</span>
            <span className="text-4xl pr-3">{location1}</span>
          </div>
          <div>
           <span className="text-5xl pr-3 font-extrabold">{location2}</span>
            <span className="text-4xl pr-3 ">{location3}</span>
          </div>
        </div>
        <QRCode value={fullLocation} size={80} />
      </div>
    </div>
  );
};

export default zoneFH;
