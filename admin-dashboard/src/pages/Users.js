import React, { useEffect, useState } from "react";
import api from "../api";
import BarFilter from "../components/BarFilter/BarFilter";
import Button from "../components/Button/Button";
import Table from "../components/Table/Table";
import Input from "../components/Input/Input";
import InputList from "../components/InputList/InputList";
import Modal from "../components/Model/Model";
import { useModal } from "../hooks/useModal";
import { toast } from "react-toastify";
import { PersonIcon } from "../utils/icons";
import AuthService from "../services/auth.service";
import statusStyles from "../styles/status";


const Users = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("user");
  const [gender, setGender] = useState("Male");


  const roleMapping = roles.reduce((map, role) => {
    map[role._id] = role.name;
    return map;
  }, {});

  const roleNameToId = roles.reduce((map, role) => {
    map[role.name] = role._id;
    return map;
  }, {});

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/api/roles");
        setRoles(response.data);
      } catch (e) {
        toast.error("Error fetching roles", e);
      }
    };
    fetchRoles();
  }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/api/users");
        setUsers(response.data);
      } catch (e) {
        toast.error("Error fetching users", e);
      }
    };
    fetchUsers();
  }, []);


  
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Surname",
      accessor: "surname",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      accessor: "roles",
      Cell: ({ cell: { value } }) => {
        const roleNames = value.map(roleId => roleMapping[roleId]);
        const statusClasses = roleNames.map(roleName => statusStyles[roleName] || 'text-black');
        return roleNames.map((roleName, index) => 
          <span key={index} className={statusClasses[index]}>{roleName || 'Unknown role'}</span>
        );
      }
    },
    {
      Header: "Created",
      accessor: "createdAt",
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
      }
    }
  ];

  const roleMappingReversed = Object.entries(roleMapping).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});

  
  const handleSave = async () => {
    // Convert the role name to its ID
    const roleId = roleMappingReversed[role];
    

    try {
      const response = await AuthService.register(name, surname, gender, roleId);
      if (response) {
        handleCloseModal();
        setName("");
        setSurname("");
        setRole("");
        setGender("");
        toast.success("Added User ");

         // Update the users state with the new user
        setUsers(prevUsers => [...prevUsers, response.data]);
      } else {
        throw new Error("Error saving user");
      }
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <>
      <div>
        <BarFilter>
          <Button type='add' onClick={handleOpenModal}>Add user</Button>
        </BarFilter>
        <Table columns={columns} data={users} />
        {isModalOpen && (
          <Modal
            handleSave={handleSave}
            isOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            title="Add user"
          >
            <Input
              icon={PersonIcon}
              label="Name"
              placeholder="John"
              value={users.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={PersonIcon}
              label="Surname"
              placeholder="Smith"
              value={users.surname}
              onChange={(e) => {setSurname(e.target.value)}}
            />
          <InputList
            name="role"
            data={roles.map((role) => role.name)}
            label="Role"
            valueField="name"
            initialValueField={users.role} // assuming `user` is the currently edited user
            value={role}
            onChange={(value) => setRole(value)}
          />
          <InputList
            data={["Male", "Female"]}
            label="Gender"
            valueField="gender"
            initialValueField={users.gender} // assuming `user` is the currently edited user
            value={gender}
            onChange={(value) => setGender(value)}
          />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Users;
