import Role from '../models/role.model.js';

// Get all roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// Get a role by id
exports.getRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (role == null) {
      return res.status(404).json({ message: 'Cannot find role' });
    }
    res.json(role);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

// Create a new role
exports.createRole = async (req, res) => {
  const role = new Role({
    name: req.body.name,
  });

  try {
    const newRole = await role.save();
    res.status(201).json(newRole);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

// Update a role
exports.updateRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (role == null) {
      return res.status(404).json({ message: 'Cannot find role' });
    }

    if (req.body.name != null) {
      role.name = req.body.name;
    }

    const updatedRole = await role.save();
    res.json(updatedRole);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

// Delete a role
exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (role == null) {
      return res.status(404).json({ message: 'Cannot find role' });
    }

    await role.remove();
    res.json({ message: 'Deleted role' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};