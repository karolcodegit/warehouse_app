import React, { Fragment, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
import Modal from "../Model/Model";
import Input from "../Input/Input";
import { useModal } from "../../hooks/useModal";
import api from "../../api";
import Details from "../SetingsDetailsTable/SetingsDetailsTable";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { BuildingIcon } from "../../utils/icons";

const CmrSettings = () => {
  const [carrier, setCarrier] = useState([]);
  const [editCarrier, setEditCarrier] = useState(null);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [formData, setFormData] = useState({
    carrierName: "",
    carrierStreet: "",
    carrierNumber: "",
    carrierCity: "",
    carrierZipCode: "",
    carrierCountry: "",
  });
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editCarrier) {
        // Jeśli edytujemy przewoźnika, wyślij żądanie PUT
        const res = await api.put(`/api/carriers/${editCarrier._id}`, formData);
        // Aktualizuj listę przewoźników
        setCarrier((prevCarriers) =>
          prevCarriers.map((c) => (c.id === editCarrier.id ? res.data : c))
        );
        toast.success("Edited carrier");
      } else {
        // Jeśli dodajemy nowego przewoźnika, wyślij żądanie POST
        const res = await api.post("/api/carriers", formData);
        // Dodaj nowego przewoźnika do listy
        setCarrier((prevCarriers) => [...prevCarriers, res.data]);
        toast.success("Added carrier");
      }
    } catch (error) {
      toast.error("Error");
    }
    setEditCarrier(null);
    handleCloseModal();
  };
  const handleEdit = (carrier) => {
    setEditCarrier(carrier);
    setFormData(carrier);
    handleOpenModal();
  };

  const handleDelete = async (carrierToDelete) => {
    try {
      await api.delete(`/api/carriers/${carrierToDelete._id}`);
      setCarrier((prevCarriers) =>
        prevCarriers.filter((c) => c._id !== carrierToDelete._id)
      );
      toast.success("Deleted carrier");
    } catch (e) {
      toast.error("Error");
    }
  };

  useEffect(() => {
    api.get("/api/carriers").then((res) => {
      setCarrier(res.data);
    });
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col px-3 py-4">
        <div className="flex items-center mb-8">
          <span>Settings</span>{" "}
          <span className="px-2">
            <IoIosArrowForward />
          </span>
          <span>Carriers</span>
        </div>

        {/* <div className="w-full max-w-md px-2 py-16 sm:px-0"> */}
        <Tab.Group>
          <Tab.List
            className="rounded-xl bg-blue-900/20 p-1"
            role="tablist"
            aria-orientation="horizontal"
          >
            <Tab
              className={({ selected }) =>
                classNames(
                  " rounded-lg px-3 py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2  focus:outline-none focus:ring-2  hover:bg-white/[0.12] hover:text-white",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-900 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              General
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  " rounded-lg px-3 py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2  focus:outline-none focus:ring-2  hover:bg-white/[0.12] hover:text-white",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-900 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Carrier
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  " rounded-lg px-3 py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2  focus:outline-none focus:ring-2  hover:bg-white/[0.12] hover:text-white",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-900 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Wyjazdy
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-2 w-full">
            <Tab.Panel>{/* Zawartość dla General */}</Tab.Panel>

            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60  focus:outline-none focus:ring-2"
              )}
            >
              <div className="flex justify-end items-center my-10">
                <Button type="add" onClick={handleOpenModal}>
                  Add carrier
                </Button>
              </div>
              {/* carrier list */}
              {carrier.length === 0 && <div>No carrier found</div>}
              {carrier.map((carrierItem, index) => (
                <motion.div
                  key={carrier._id}
                  initial={{ opacity: 0, y: -10 }} // Początkowy stan animacji
                  animate={{ opacity: 1, y: 0 }} // Końcowy stan animacji
                  transition={{ duration: 0.5 }} // Czas trwania animacji
                  className="my-2 p-4 border border-gray-300 shadow-sm rounded-md"
                >
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <Details title={carrierItem.carrierName} />
                    </div>
                    <div className="flex gap-3">
                      <Button
                        type="edit"
                        onClick={() => handleEdit(carrierItem)}
                      >
                        Edit
                      </Button>
                      <Button
                        type="delete"
                        onClick={() => handleDelete(carrierItem)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Tab.Panel>

            <Tab.Panel>
            <form>
  <div className="mb-4 mt-10">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direction">
      Direction
    </label>
    <select id="direction" name="direction" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <option>Pilot</option>
      <option>DHL SOUTH</option>
      <option>DHL NORTH</option>
      {/* Add more options as needed */}
    </select>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departureTime">
      Departure Time
    </label>
    <input type="time" id="departureTime" name="departureTime" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cutoffTime">
      Cutoff Time
    </label>
    <input type="time" id="cutoffTime" name="cutoffTime" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>

  <div className="flex items-center justify-between">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Save
    </button>
  </div>
</form>
            </Tab.Panel>
          </Tab.Panels>

          {isModalOpen && (
            <Modal
              handleSave={handleSubmit}
              isOpen={isModalOpen}
              handleCloseModal={handleCloseModal}
              title="Add carrier"
            >
              <form>
                <Input
                  icon={BuildingIcon}
                  label="Company name"
                  type="text"
                  name="carrierName"
                  value={formData.carrierName}
                  onChange={handleChange}
                />
                <Input
                  icon={BuildingIcon}
                  label="Street"
                  type="text"
                  name="carrierStreet"
                  value={formData.carrierStreet}
                  onChange={handleChange}
                />
                <Input
                  icon={BuildingIcon}
                  label="Number"
                  type="text"
                  name="carrierNumber"
                  value={formData.carrierNumber}
                  onChange={handleChange}
                />
                <Input
                  icon={BuildingIcon}
                  label="City"
                  type="text"
                  name="carrierCity"
                  value={formData.carrierCity}
                  onChange={handleChange}
                />
                <Input
                  icon={BuildingIcon}
                  label="Zip code"
                  type="text"
                  name="carrierZipCode"
                  value={formData.carrierZipCode}
                  onChange={handleChange}
                />
                <Input
                  icon={BuildingIcon}
                  label="Country"
                  type="text"
                  name="carrierCountry"
                  value={formData.carrierCountry}
                  onChange={handleChange}
                />
              </form>
            </Modal>
          )}
        </Tab.Group>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CmrSettings;
