import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Button from '../Button/Button'
import Modal from '../Model/Model'
import Input from '../Input/Input'
import { useModal } from '../../hooks/useModal'
import api from '../../api'
import Details from '../SetingsDetailsTable/SetingsDetailsTable'
import { toast } from 'react-toastify'

const InformationSettings = () => {
    const [companyInfo, setCompanyInfo] = useState([])
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
    const [formData, setFormData] = useState({
        name: '',
        secondName: '',
        street: '',
        number: '',
        zipCode: '',
        city: '',
        country: '',
        numberPhone: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (Object.keys(companyInfo).length === 0) {
                // If companyInfo is empty, send a POST request
                const res = await api.post('/api/company-info/', formData)
            } else {
                // If companyInfo is not empty, send a PUT request
                const res = await api.put('/api/company-info/', formData)
            }
        } catch (error) {
           toast.error(error)
        }
        handleCloseModal();
    }
    
   
    useEffect(() => {
        api.get('/api/company-info').
        then(res => {
            setCompanyInfo(res.data)
            setFormData(res.data)
        })
    }, [])
  return (


    
    <div className="w-full">
      <div className="flex flex-col px-3 py-4">
        <div className="flex items-center">
          <span>Settings</span>{" "}
          <span className="px-2">
            <IoIosArrowForward />
          </span>
          <span>Information</span>
        </div>


        <div className='flex justify-between py-2 border-b border-gray-300 mt-10'>
            <div className="">General</div>
            <Button type='edit' onClick={handleOpenModal}>Edit company</Button>
        
        </div>
        
        {companyInfo.length === 0 && ( <div>No company found</div>)}

        <Details title='Company name' value={companyInfo?.name} />
        <Details title='Second name' value={companyInfo?.secondName} />
        <Details title='Street' value={companyInfo?.street} />
        <Details title='Number' value={companyInfo?.number} />
        <Details title='Zip code' value={companyInfo?.zipCode} />
        <Details title='City' value={companyInfo?.city} />
        <Details title='Country' value={companyInfo?.country} />
        <Details title='Number phone' value={companyInfo?.numberPhone} />
        
      </div>
      {isModalOpen && (
        <Modal handleSave={handleSubmit} isOpen={isModalOpen} handleCloseModal={handleCloseModal} title='Edit company'>
            <form >
                <Input type='text' name='name' placeholder='Company name' value={formData.name} onChange={handleChange} />
                <Input type='text' name='secondName' placeholder='Second name' value={formData.secondName} onChange={handleChange}/>
                <Input type='text' name='street' placeholder='Street' value={formData.street} onChange={handleChange}/>
                <Input type='text' name='number' placeholder='Number' value={formData.number}  onChange={handleChange}/>
                <Input type='text' name='zipCode' placeholder='Zip code' value={formData.zipCode} onChange={handleChange} />
                <Input type='text' name='city' placeholder='City' value={formData.city} onChange={handleChange}/>
                <Input type='text' name='country' placeholder='Country' value={formData.country} onChange={handleChange} />
                <Input type='text' name='numberPhone' placeholder='Number phone' value={formData.numberPhone} onChange={handleChange}/>

            </form>
        </Modal>
      )}
    </div>
  )
}

export default InformationSettings