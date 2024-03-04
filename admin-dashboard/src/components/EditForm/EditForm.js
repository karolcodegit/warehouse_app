import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Modal from "../Model/Model";
import Title from "../Title/Tilte";
import Box from "../Box/Box";
import { useModal } from "../../hooks/useModal";
import api from "../../api";
import { AlarmIcon, PackageIcon, PagerIcon, PalletIcon, TruckIcon, WeightIcon } from "../../utils/icons";
import InputList from "../InputList/InputList";
import { toast } from "react-toastify";
import { useGeneratePdf } from "../generatorCmr/generatorCmr";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transport, setTransport] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [carriers, setCarriers] = useState([]);
  const [carrier, setCarrier] = useState("");
  const [isTransportUpdated, setIsTransportUpdated] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);


  

  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    // Pobierz dane transportu, który chcesz edytować
    api.get(`/api/transport/outbound/${id}`)
      .then(response => setTransport(response.data))
      .catch(error => console.error(`Error: ${error}`));
  }, [id]);

  const handleSave = async () => {
    try{
      await api.put(`/api/transport/outbound/${id}`, transport);
      toast.success("Edited Transport");
    }catch(e){
      toast.error("Failed to add transport");
    }
  }

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await api.get("/api/company-info");
        setCompanyInfo(response.data);
      } catch (e) {
        toast.error("Error fetching company info", e);
      }
    };
    fetchCompanyInfo();
  }, []);

  useEffect(() => {
    if (transport.carrier) {
      const foundCarrier = carriers.find((c) => c.carrierName === transport.carrier);
      setSelectedCarrier(foundCarrier);
    }
  }, [transport.carrier, carriers]);
  
  useEffect(() => {
    if (isTransportUpdated) {
      handlePrint();
      setIsTransportUpdated(false);
    }
  }, [isTransportUpdated]);
  


  const handlePrintClick = async () => {
    setTransport(prevRow => ({...prevRow, status: 'Closed'}));
    setIsTransportUpdated(true);

    // Update the data on the server
    try {
      await api.put(`/api/transport/outbound/${id}`, {...transport, status: 'Closed'});
      toast.success("Status updated to Closed");
    } catch (e) {
      toast.error("Failed to update status");
    }
  };
  
  const {generatePdf} = useGeneratePdf(transport, selectedCarrier, companyInfo);

  const handlePrint = async() => {
    const selectedCarrier  = carriers.find((c) => c.carrierName === transport.carrier);

    if(!selectedCarrier) {
      toast.error("Selected carrier not found");
      return;
    }

    // Użyj funkcji zwróconej przez hook
    const pdfDoc = await generatePdf(transport, selectedCarrier, companyInfo);
    
    if (pdfDoc) {
      const blob = new Blob([pdfDoc.output('blob')], {type: 'application/pdf'}); // Get the document as a Blob
      const url = URL.createObjectURL(blob); // Create a URL to the Blob
      window.open(url, '_blank'); // Open the URL in a new window
    } else {
      toast.error("Failed to generate PDF");
    }
  };

  
  const handleDelete = async () => {
    try {
      await api.delete(`/api/transport/outbound/${id}`);
      navigate('/transport/outbound');
      toast.success("Transport deleted");
    } catch (error) {
      toast.error('Error')
      
    }
  }


  useEffect(() => {
    const fetchCarriers = async () => {
      try {
        const response = await api.get("/api/carriers");
        setCarriers(response.data);
      } catch (e) {
        toast.error("Error fetching carriers", e);
      }
    };
    fetchCarriers();
  }, []);

  const handleChange = (e) => {
    setTransport({
      ...transport,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Box>
        <div className="w-full flex items-center justify-center ">
          <div className="lg:flex items-center grow">
            <div className="w-full mt-8 mx-auto px-16 py-8 rounded-lg">
              <div className="flex justify-between items-center">
              <Title tag="h3">Edit transport</Title>
              <Button onClick={() => navigate('/transport/outbound')}>Back</Button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
              >
                <div className="px-3">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2  mb-6 md:mb-0">
                      <div className="my-4 mx-2">
                      <InputList
                        name="carrier"
                        data={carriers.map((carrier) => carrier.carrierName)}
                        label="Carrier"
                        placeholder="Carrier"
                        value={transport?.carrier}
                        onChange={(value) => setTransport(prevTransport => ({ ...prevTransport, carrier: value }))}
                      />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type="number"
                          icon={TruckIcon}
                          name="shipment"
                          label="Shipment number"
                          value={transport?.shipment}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input

                          type="number"
                          icon={PagerIcon}
                          name="pager"
                          label="Pager"
                          value={transport?.pager}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="my-4 mx-2">
                        <Input
                          type="text"
                          icon={TruckIcon}
                          name="license_truck"
                          label="License truck"
                          value={transport?.license_truck}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          icon={TruckIcon}
                          name="license_trailer"
                          label="License trailer"
                          value={transport?.license_trailer}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2  mb-6 md:mb-0">
                      <div className="my-4 mx-2">
                        <Input
                          type='number'
                          icon={PalletIcon}
                          name="pallets"
                          label="Number of pallets"
                          value={transport?.pallets}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type='number'
                          icon={TruckIcon}
                          name="seal"
                          label="Seal"
                          value={transport?.seal}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type="time"
                          icon={AlarmIcon}
                          name="departure"
                          label="Departure date"
                          value={transport?.departure}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 ">
                      <div className="my-4 mx-2">
                        <Input
                          type='number'
                          icon={PackageIcon}
                          name="package"
                          label="Number of packages"
                          value={transport?.packageNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-4 mx-2">
                        <Input
                          type='number'
                          icon={WeightIcon}
                          name="weight"
                          label="Weight"
                          value={transport?.weight}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full mx-2">
                      <Input
                        type="textarea"
                        tag="textarea"
                        name="message"
                        label="Message"
                        value={transport?.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex w-full space-x-3 items-center md:justify-end justify-center my-8">
                  <Button
                    type="save"
                    className="grow mx-3 mt-4"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    type='print'
                    onClick={() => handlePrintClick()}
                    className={`grow mx-3 mt-4`}
                    // disabled={!transport.Carrier || !transport.Carrier_Number || !transport.License_Truck || !transport.License_Trailer || !transport.Pager || !transport.Pallets || !transport.Seal || !transport.Departure || !transport.Package || !transport.Weight}
                  >
                    Print
                  </Button>
                  <Button
                    type='delete'
                    onClick={() => handleOpenModal(true)}
                    className="grow mx-3 mt-4"
                  >
                    Delete
                  </Button>

                  <Modal
                    isOpen={isModalOpen}
                    handleCloseModal={handleCloseModal}
                    handleSave={handleDelete}
                    title="Delete transport"
                    description="Are you sure you want to delete this transport?"
                    >
                  </Modal>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default EditForm;
