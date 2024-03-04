import React, { useContext, useEffect, useState } from 'react'
import BarFilter from '../components/BarFilter/BarFilter'
import Button from '../components/Button/Button'
import Table from '../components/Table/Table'
import Modal from '../components/Model/Model'
import InputList from '../components/InputList/InputList'
import Input from '../components/Input/Input'
import statusStyles from "../styles/status";
import { useModal } from '../hooks/useModal'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import EditForm from '../components/EditForm/EditForm'
import { ExitIcon, FieldNumberIcon, PagerIcon, TruckIcon } from '../utils/icons'
import { toast } from 'react-toastify'
import api from '../api'

const InboundTransport = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [carriers, setCarriers] = useState([]);
  const [pallets, setPallets] = useState("");
  const [seal, setSeal] = useState("");
  const [departure, setDeparture] = useState("");
  const [packageNumber, setPackageNumber] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("");
  const [editData, setEditData] = useState(null);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [transports, setTransports] = useState([]);

  const [transport, setTransport] = useState({
    shipment: '',
    carrier: '',
    license_truck: '',
    license_trailer: '',
    pager: '',
    status: 'Waiting',
    gate: '',
    seal: '',
    createdBy: '',
  });

  const navigate = useNavigate();

  const columns = [
    {
      Header: "Date",
      accessor: "date",
      sortable: true,
      Cell: ({ value }) => {
        if (!value || isNaN(Date.parse(value))) {
          return "Invalid date";
        }
        const dateObject = new Date(value);
        return dateObject.toLocaleDateString('pl-PL', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
      },
    },
    {
      Header: "Shipment",
      accessor: "shipment",
    },
    {
      Header: "Carrier",
      accessor: "carrier",
    },
    {
      Header: "License Truck",
      accessor: "license_truck",
    },
    {
      Header: "License Trailer",
      accessor: "license_trailer",
    },
    {
      Header: "Gate",
      accessor: "gate",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => {
        const statusClass = statusStyles[value] || 'text-black'; // Domyślnie czarny, jeśli status nie jest zdefiniowany
        return <span className={statusClass}>{value}</span>;
      }
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: ({ row }) => (
        <div>
          <button onClick={() => handleEdit(row.original._id)}>Edit</button>
        </div>
      ),
    },
  ];
  const handleSave = async () => {
    let isValid = true;

    // Check if the required fields are filled
    if (!transport.gate) {
      toast.error("Gate field is required");
      isValid = false;
    }
    if (!transport.pager) {
      toast.error("Pager field is required");
      isValid = false;
    }
  
    // If any fields are empty, return early
    if (!isValid) {
      return;
    }

    // Set createdBy to the ID of the currentUser
    transport.createdBy = currentUser._id;
    try {
      const response = await api.post("/api/transport/inbound", transport);
      if (response) {
        handleCloseModal();
        setTransport({
          shipment: '',
          carrier: '',
          license_truck: '',
          license_trailer: '',
          pager: '',
          status: 'Waiting',
          gate: '',
          seal: '',
        });
        setTransports(prevTransports => [...prevTransports, response.data]);
        toast.success("Added Transport");
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      await fetchTransport();
    } catch (e) {
      toast.error("Error");
    }
  };

  const handleEdit = (id) => {
    // Here you can handle the edit action, for example, open a modal with the row data
    navigate(`/transport/outbound/${id}`)
  };

  const handleChange = (e) => {
    setTransport({
      ...transport,
      [e.target.name]: e.target.value
    });
  };

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

  const fetchTransport = async () => {
    try {
      const response = await api.get("/api/transport/inbound");
      setTransports(response.data);
    } catch (e) {
      toast.error("Error fetching transport", e);
    }
  };

  useEffect(() => {
    fetchTransport();
  }, []);
  return (
    <>
    <BarFilter>
      <Button type="add" onClick={handleOpenModal}>
        Add transport
      </Button>
    </BarFilter>
    <Table columns={columns} data={transports} />
    {isModalOpen && (
      <Modal
        handleSave={handleSave}
        isOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        title="Add truck"
      >
        <InputList
          name="carrier"
          data={carriers.map((carrier) => carrier.carrierName)}
          label="Carrier"
          placeholder="Carrier"
          value={transport.carrier}
          onChange={(value) => setTransport(prevTransport => ({ ...prevTransport, carrier: value }))}          />
        <Input
          type='number'
          icon={FieldNumberIcon}
          name="shipment"
          label="Shipment"
          placeholder="9392"
          value={transport.shipment}
          onChange={handleChange}
        />
        <Input
          icon={TruckIcon}
          name="license_truck"
          label="License Truck"
          placeholder="PZ123X"
          value={transport.license_truck}
          onChange={handleChange}
        />
        <Input
          icon={TruckIcon}
          name="license_trailer"
          label="License Trailer"
          placeholder="PZ1234X"
          value={transport.license_trailer}
          onChange={handleChange}
        />
        <Input
          type='number'
          icon={PagerIcon}
          name="pager"
          label="Pager"
          placeholder="1"
          value={transport.pager}
          onChange={handleChange}
        />
        <Input
          type='number'
          icon={ExitIcon}
          name="gate"
          label="Gate"
          placeholder="1"
          value={transport.gate}
          onChange={handleChange}
        />
      </Modal>
    )}
    {editData && (
        <EditForm initialValues={transport} />
    )}
  </>
  )
}

export default InboundTransport