import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import BarFilter from "../../components/BarFilter/BarFilter";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import statusStyles from "../../styles/status";
import InputList from "../../components/InputList/InputList";
import Input from "../../components/Input/Input";
import Stepper from "../../components/Stepper/Stepper";
import StepperModal from "../../components/StepperModal/StepperModal";
const Reports = () => {
  const navigate = useNavigate();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [ordernumber, setOrdernumber] = useState("");
  const [department, setDepartment] = useState("");
  const [place, setPlace] = useState("");
  const [device, setDevice] = useState("");
  const [typeofdefect, setTypeofdefect] = useState("");
  const [person, setPerson] = useState("");
  const [status, setStatus] = useState("Open");
  const [step, setStep] = useState(1);
  const [secondInput, setSecondInput] = useState("");

  const handleDepartmentChange = (e) => {};

  const [departments, setDepartments] = useState([
    {
      name: "Outbound",
    },
    {
      name: "Inbound",
    },
  ]);

  const steps = [
    {
      title: "Department",
      component: (
        <InputList
          name="department"
          data={departments.map((department) => department.name)}
          label="Department"
          value={department}
          onChange={handleDepartmentChange}
        />
      ),
    },
    {
      title: "Place",
      component: (
        <Input
          name="secondInput"
          label="Second Input"
          placeholder="Enter value"
          value={secondInput}
          onChange={(e) => setSecondInput(e.target.value)}
        />
      ),
    },
    {
      title: "Message",
      component: (
        <Input
          name="secondInput"
          label="Second Input"
          placeholder="Enter value"
          value={secondInput}
          onChange={(e) => setSecondInput(e.target.value)}
        />
      ),
    },
    // More steps...
  ];

  const dataRaports = [
    {
      date: "2021-09-01",
      ordernumber: "dev/123/c/2021",
      department: "Outbound",
      place: "Pack",
      device: "Packing machine",
      typeofdefect: "Monitor",
      person: "Karol Znojkiewicz",
      status: "Closed",
    },
  ];

  const handleEdit = (id) => {};

  const columns = [
    {
      Header: "Date",
      accessor: "date",
      // Cell: ({ value }) => {
      //   if (!value || isNaN(Date.parse(value))) {
      //     return "Invalid date";
      //   }
      //   const dateObject = new Date(value);
      //   return dateObject.toLocaleDateString('pl-PL', {
      //     day: '2-digit',
      //     month: '2-digit',
      //     year: 'numeric'
      //   });
      // }
    },
    {
      Header: "Order number",
      accessor: "ordernumber",
    },
    {
      Header: "Department",
      accessor: "department",
    },
    {
      Header: "Place",
      accessor: "place",
    },
    {
      Header: "Device",
      accessor: "device",
    },
    {
      Header: "Type of defect",
      accessor: "typeofdefect",
    },
    {
      Header: "Person",
      accessor: "person",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => {
        const statusClass = statusStyles[value] || "text-black"; // Domyślnie czarny, jeśli status nie jest zdefiniowany
        return <span className={statusClass}>{value}</span>;
      },
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
  const handleSave = async () => {}
  

  return (
    <>
      <BarFilter>
        <Button type="add" onClick={handleOpenModal}>
          Add raport
        </Button>
      </BarFilter>
      <Table columns={columns} data={dataRaports} />
      {isModalOpen && (
        <StepperModal
          handleSave={handleSave}
          isOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          title="Add raport"
          steps={steps}
        >
          <Stepper steps={steps} />
        </StepperModal>
      )}
      {/* {editData && (
            <EditForm />
        )} */}
    </>
  );
};

export default Reports;
