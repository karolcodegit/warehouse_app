import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { FieldNumberIcon } from "../../utils/icons";
import Title from "../../components/Title/Tilte";
import Button from "../../components/Button/Button";

import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineScheduleSend } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";




const ViewTicket = () => {
  const [report, setReport] = useState({});

  const handleChange = (e) => {};
  return (
    <>
      <div className="absolute left-0 right-0 top-16 z-10">
        <div className="bg-gray-300 min-h-12 flex items-center justify-between">
          <div className="p-4">
            <nav>
              <span className="bg-gray-500 px-3 py-2 rounded-md text-white font-bold">
                Ticket #dev/123/c/2021
              </span>
            </nav>
          </div>
          <div className="p-4">
            <span className="bg-green-500 px-3 py-2 rounded-md text-white font-bold">
              Open
            </span>
          </div>
        </div>
      </div>
      <div
        className="absolute "
        style={{ top: "114px", right: "0px", bottom: "50px", left: "0px" }}
      >
        <section className="w-full h-full grid grid-rows-1 relative  grid-cols-custom">
          <div className="relative min-w-0 min-h-0 border-r border-gray-300">
            <div className="grid w-full h-full overflow-hidden grid-cols-1 grid-rows-1">
              <div className="overflow-y-auto h-full pt-8 px-5 pb-16">
                <div className="pb-3">
                  <Title tag="h3">Information</Title>
                </div>
                <Input
                  type="text"
                  icon={FieldNumberIcon}
                  name="shipment"
                  label="Requester"
                  value="Karol Znojkiewicz"
                />
                <Input
                  type="text"
                  icon={FieldNumberIcon}
                  name="shipment"
                  label="Assignee"
                  value="IT"
                />
                <Input
                  type="text"
                  icon={FieldNumberIcon}
                  name="shipment"
                  label="Department"
                  value="Outbound"
                />
                <Input
                  type="text"
                  icon={FieldNumberIcon}
                  name="shipment"
                  label="Place"
                  value="Pack15"
                />
                <Input
                  type="text"
                  icon={FieldNumberIcon}
                  name="shipment"
                  label="Device"
                  value="PC"
                />
                <Input
                  type="text"
                  icon={FieldNumberIcon}
                  name="shipment"
                  label="Priority"
                  value="Urgent"
                />
              </div>
            </div>
          </div>

          <div className="relative min-w-0 min-h-0 border-r border-gray-300">
            <div className="grid w-full h-full overflow-hidden grid-cols-1 grid-rows-1">
              <div className="relative h-full w-full">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-white">
                  <div className="flex flex-col flex-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-w-0 min-h-0">
            <div className="w-full h-full">
              <div className="flex flex-col items-center mx-auto">
                <div className="overflow-y-auto h-full pt-8 px-5 pb-16">
                  <div className="flex flex-col items-center gap-y-5">
                    <Button>
                      <IoCalendarOutline />
                    </Button>
                    <Button>
                      <MdOutlineScheduleSend />
                    </Button>
                    <Button>
                      <IoMdSend />
                    </Button>
                    <Button>
                      <IoLockClosedSharp />
                    </Button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewTicket;
