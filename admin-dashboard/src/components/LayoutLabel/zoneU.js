import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import QRCode from "qrcode.react";

const zoneU = ({ zone, location1, location2, location3 }) => {
  const fullLocation = `${zone} ${location1} ${location2} ${location3}`;
  return (
    <div className="w-48 h-48 flex flex-col items-center justify-between" id="label">
      <QRCode value={fullLocation} size={100} />
      <div className="flex text-black content-end">
        <FaArrowUpLong style={{ fontSize: "4em" }} className="self-end" />
        <div className="flex flex-col self-end">
          <div>
            <span className="text-3xl pr-3 ">{zone}</span>
            <span className="text-3xl pr-3">{location1}</span>
          </div>
          <div>
            <span className="text-3xl pr-3 font-extrabold">{location2}</span>
            <span className="text-3xl pr-3 ">{location3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default zoneU;
