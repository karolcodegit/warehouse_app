import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import BarFilter from "../components/BarFilter/BarFilter";
import Button from "../components/Button/Button";

const Devices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    setDevices([
      {
        id: 1,
        type: "Monitor",
        name: "Monitor 1",
        serialNumber: "123",
        department: "Outbound",
      },
      {
        id: 2,
        type: "Komputer",
        name: "Komputer 1",
        serialNumber: "456",
        department: "Inbound",
      },
    ]);
  }, []);

  const columns = [
    {
      Header: "Date",
      accessor: "date",
      Cell: ({ value }) => {
        if (!value || isNaN(Date.parse(value))) {
          return "Invalid date";
        }
        const dateObject = new Date(value);
        return dateObject.toLocaleDateString("pl-PL", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
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
    // {
    //   Header: "Actions",
    //   accessor: "actions",
    //   Cell: ({ row }) => (
    //     <div>
    //       <button onClick={() => handleEdit(row.original._id)}>Edit</button>
    //     </div>
    //   ),
    // },
  ];

    const handleOpenModal = () => {
        console.log("Open modal");
    };

  return (
    <>
      <BarFilter>
        <Button type="add" onClick={handleOpenModal}>
          Add transport
        </Button>
      </BarFilter>
      <Table columns={columns} data={devices} />
    </>
  );
};

export default Devices;
