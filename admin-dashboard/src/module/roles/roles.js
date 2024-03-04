import React, { useEffect, useState } from "react";
import BarFilter from "../../components/BarFilter/BarFilter";
import Button from "../../components/Button/Button";
import { useModal } from "../../hooks/useModal";
import Modal from "../../components/Model/Model";
import Input from "../../components/Input/Input";
import api from "../../api";
import { toast } from "react-toastify";

const Roles = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/api/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Failed to fetch the roles:", error);
      }
    };
    fetchRoles();
  }, []);

  const handleRemove = async (id) => {
    try {
      const response = await api.delete(`/api/roles/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      setRoles(roles.filter((role) => role._id !== id));
    } catch (error) {
      console.error("Failed to remove the role:", error);
    }
  };
  const handleSave = async () => {
    try {
      const response = await api.post('/api/roles', { name: newRole });
  
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
  
      const role = await response.json();
      setRoles([...roles, role]);
      setNewRole('');
      handleCloseModal();
      toast.success('Role added successfully');
    } catch (error) {

      toast.error('Failed to save the role:', error);
    }
  };
  return (
    <div>
      <BarFilter title="Roles">
        <Button type="add" onClick={handleOpenModal}>
          Add role
        </Button>
      </BarFilter>

      <div className="overflow-hidden max-w-5xl mx-auto">
        <ul className="space-y-4">
          {roles.map((role) => (
            <li
              key={role._id}
              className="flex justify-between items-center p-4 bg-gray-200 rounded shadow"
            >
              <span className="text-lg font-medium">{role.name}</span>
              <button
                onClick={() => handleRemove(role._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {isModalOpen && (
          <Modal
            handleSave={handleSave}
            isOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            title="Add role"
          >
            <Input
              type="text"
              // icon={FieldNumberIcon}
              name="roles"
              label="Role"
              placeholder="admin"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Roles;
