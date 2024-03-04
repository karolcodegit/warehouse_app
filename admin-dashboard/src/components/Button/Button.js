import React from 'react'
import { LiaTrashAlt, LiaSave, LiaEdit, LiaPlusSolid } from "react-icons/lia";
import { CiLogin } from "react-icons/ci";
import { PiPrinterThin } from "react-icons/pi";


const Button = ({children, onClick, type}) => {
  let colorClasses;
  let Icon;

  switch(type) {
    case 'delete':
      colorClasses = 'bg-red-500 hover:bg-red-600';
      Icon = LiaTrashAlt;
      break;
    case 'save':
      colorClasses = 'bg-green-500 hover:bg-green-600';
      Icon = LiaSave;
      break;
    case 'edit':
      colorClasses = 'bg-yellow-500 hover:bg-yellow-600';
      Icon = LiaEdit;
      break;
    case 'add':
      colorClasses = 'bg-blue-500 hover:bg-blue-600';
      Icon = LiaPlusSolid;
      break;
    case 'login':
      colorClasses = 'bg-blue-500 hover:bg-blue-600';
      Icon = CiLogin;
      break;
    case 'print':
      colorClasses = 'bg-blue-500 hover:bg-blue-600';
      Icon = PiPrinterThin;
      break;
    default:
      colorClasses = 'bg-indigo-500 hover:bg-indigo-600';
  }

  return (
    <button onClick={onClick} className={`flex items-center btn ${colorClasses} text-white px-4 py-2 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
        {Icon && <Icon className="mr-2" />}
        {children}
    </button>
  )
}

export default Button