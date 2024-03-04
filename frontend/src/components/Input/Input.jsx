import React, { useState } from 'react'

const Input = ({ label, name, type, error, onChange, value }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} className="w-full border-gray-300 rounded-md p-2" />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;