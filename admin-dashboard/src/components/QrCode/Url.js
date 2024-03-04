import React, { useState } from "react";
import Input from "../Input/Input";
import InputList from "../InputList/InputList";
import Select from "../Select/Select";

const Url = ({
  codeType,
  showText,
  inputText,
  setCodeType,
  setShowText,
  setInputText,
}) => {
  const selectCode = [{ title: "QR" }, { title: "Code-128" }];
  const withText = [{ title: "Yes" }, { title: "No" }];

  const handleSelectChange = (e) => {
    setCodeType(e.target.value);
  };

  const handleTextShow = () => {
    setShowText(!showText);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      {/* <InputList
        label="Select Code"
        value={codeType}
        onChange={handleSelectChange}
        options={selectCode}
      /> */}
      <Select
        label="With text?"
        value={showText}
        onChange={handleTextShow}
        options={withText}
      />
      <Input
        label="Text"
        type="text"
        placeholder="Text"
        value={inputText}
        onChange={handleTextChange}
      />
    </>
  );
};

export default Url;
