import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useModal } from '../../hooks/useModal';
import Button from '../Button/Button';
import Modal from '../Model/Model';
import Input from '../Input/Input';


const PrinterSettings = () => {
  const [printers, setPrinters] = useState([]);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [newPrinter, setNewPrinter] = useState({ name: '', ip: '', port: '' });

  const handleInputChange = (event) => {
    setNewPrinter({ ...newPrinter, [event.target.name]: event.target.value });
  };

  const handleAddPrinter = () => {
    setPrinters([...printers, newPrinter]);
    setNewPrinter({ name: '', ip: '', port: '' });
  };

  const handleSubmit = (e) => {

  }

    return (
      <div className="w-full">
        <div className="flex flex-col px-3 py-4">
          <div className="flex items-center">
            
            <span>Settings</span>{" "}
            <span className="px-2">
              <IoIosArrowForward />
            </span>
            <span>Print</span>
          </div>

          <div className='flex justify-between py-2 border-b border-gray-300 mt-10'>
            <div className="">General</div>
            <Button type='add' onClick={handleOpenModal}>Add</Button>
        
          </div>

          
  
      <div>
        <h2>Added Printers</h2>
        {printers.map((printer, index) => (
          <div key={index}>
            <p>Name: {printer.name}</p>
            <p>IP: {printer.ip}</p>
            <p>Port: {printer.port}</p>
          </div>
        ))}
      </div>
    

    {isModalOpen && (
        <Modal handleSave={handleSubmit} isOpen={isModalOpen} handleCloseModal={handleCloseModal} title='Edit company'>
            <form >
                <Input type='text' name='name' placeholder='Name' value={newPrinter.name} onChange={handleInputChange} />
                <Input type='text' name='secondName' placeholder='Ip' value={newPrinter.ip} onChange={handleInputChange}/>
                <Input type='text' name='street' placeholder='Port' value={newPrinter.port} onChange={handleInputChange}/>
            </form>
        </Modal>
      )}
        </div>
      </div>
    );
  };

export default PrinterSettings