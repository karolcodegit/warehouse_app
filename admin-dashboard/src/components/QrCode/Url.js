import React, { useState } from "react";
import Input from "../Input/Input";
import InputList from "../InputList/InputList";
import { FieldNumberIcon } from "../../utils/icons";

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

  const handleTextShow = (value) => {
    setShowText(value === "Yes");
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <InputList
        label="Select Code"
        name="codeType"
        value={codeType}
        onChange={setCodeType}
        data={selectCode.map((code) => code.title)}
      />
      <InputList
        label="With text?"
        name="showText"
        value={showText ? "Yes" : "No"}
        onChange={handleTextShow}
        data={withText.map((text) => text.title)}
      />
      <Input
        icon={FieldNumberIcon}
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
