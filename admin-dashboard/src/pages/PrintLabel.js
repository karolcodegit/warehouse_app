import React, { useState } from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";







import Box from "../components/Box/Box";
import Tabs from "../components/Tabs/Tabs";
import Location from "../components/QrCode/Location";
import Url from "../components/QrCode/Url";
import Title from "../components/Title/Tilte";
import Button from "../components/Button/Button";
import zoneU from "../components/LayoutLabel/zoneU";
import zoneFH from "../components/LayoutLabel/zoneFH";
import Label from "../components/LayoutLabel/Label";
import { printLabel } from "../utils/printLabel";



const PrintLabel = () => {
  const [zone, setZone] = useState("F1");
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");

  const [activeTab, setActiveTab] = useState("Location");

  const [codeType, setCodeType] = useState("QR");
  const [showText, setShowText] = useState(true);
  const [inputText, setInputText] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let Layout;

  if (activeTab === "Location") {
    if (zone.startsWith("U")) {
      Layout = zoneU;
    } else if (zone.startsWith("F") || zone.startsWith("H")) {
      Layout = zoneFH;
    }
  } else {
    Layout = Label;
  }

  const clearInputs = () => {
    setZone("F1");
    setLocation1("");
    setLocation2("");
    setLocation3("");
    setActiveTab("Location");
    setCodeType("QR");
    setShowText(true);
    setInputText("");
  }
  return (
    <>
      <Box className="items-center md:flex-row flex-col">
        <IoQrCodeOutline className="text-3xl" />
        <h1 className="pl-2 font-bold">QR CODE GENERATOR</h1>
      </Box>

      <div className="flex xl:flex-row flex-col gap-3 w-full grow">
        <Box col className="xl:w-3/5 w-full">
          <Tabs
            tabs={[
              {
                name: "Location",
                onClick: () => setActiveTab("Location"),
              },
              {
                name: "Url",
                onClick: () => setActiveTab("Url"),
              },
            ]}
          />
          <div className="my-8 flex flex-col">
            {activeTab === "Location" && (
              <Location
                zone={zone}
                setZone={setZone}
                location1={location1}
                setLocation1={setLocation1}
                location2={location2}
                setLocation2={setLocation2}
                location3={location3}
                setLocation3={setLocation3}
              />
            )}
            {activeTab === "Url" && (
              <Url
                inputText={inputText}
                setInputText={setInputText}
                showText={showText}
                setShowText={setShowText}
                codeType={codeType}
                setCodeType={setCodeType}
              />
            )}
          </div>
        </Box>
        <Box className="flex flex-col xl:w-2/5 w-full  items-center justify-between py-10">
          <Title tag="h2">Preview</Title>
          <div className="w-full flex items-center justify-center">
            {Layout && (
              <Layout
                zone={zone}
                location1={location1}
                location2={location2}
                location3={location3}
                inputText={inputText}
                showText={showText}
                codeType={codeType}
              />
            )}
            <div className="block absolute w-8 h-8 left-[-23px] top-1/2 transform -translate-y-1/2 z-50">
              <div className="contents='' absolute w-9 h-9 bg-white z-50 rounded-full border-8 border-gray-200 flex items-center justify-center">
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Button onClick={printLabel} colorScheme="blue">
              Pobierz
            </Button>
            <Button colorScheme="green">Vector</Button>
          </div>
        </Box>
      </div>

      <div className="flex flex-row justify-between space-x-4 p-4">
        <Button onClick={clearInputs} bg="bg-red-500" textColor="text-white" width="w-1/2">
          Clear
        </Button>
        <Button
          onClick={printLabel}
          bg="bg-green-500"
          textColor="text-white"
          width="w-1/2"
        >
          Print
        </Button>
      </div>
    </>
  );
};

export default PrintLabel;
