const DepartmentMember = require('../models/department.menber.model');

exports.create = async (req, res) => {
  try {
    const { department_id, user_id, name, last_name, profile, phone, position, address } = req.body;

      // const user =
    console.log('object');
    // Create a new department member using the DepartmentMember model
    const newDepartmentMember = await DepartmentMember.create({
      department_id,
      user_id,
      name,
      last_name,
      profile,
      phone,
      position,
      address,
    });
    res.status(201).json(newDepartmentMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new department member' });
  }
};

exports.selectAll = async (req, res) => {
  try {
    // Retrieve all department members using the DepartmentMember model
    const departmentMembers = await DepartmentMember.findAndCountAll();

    res.status(200).json(departmentMembers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.selectById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find a department member by its ID using the DepartmentMember model
    const departmentMember = await DepartmentMember.findByPk(id);

    if (!departmentMember) {
      return res.status(404).json({ error: 'Department member not found' });
    }

    res.json(departmentMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve the department member' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    let { department_id, user_id, name, last_name, profile, phone, position, address } = req.body;

      delete department_id;
      delete user_id;
    // Find the department member by its ID and update its properties using the DepartmentMember model
    const [rowsUpdated] = await DepartmentMember.update(
      { department_id, user_id, name, last_name, profile, phone, position, address },
      { where: { id } }
    );

    if (!rowsUpdated) {
      return res.status(404).json({ error: 'Department member not found' });
    }

    res.json({ message: 'Department member updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update the department member' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the department member by its ID using the DepartmentMember model
    const rowsDeleted = await DepartmentMember.destroy({ where: { id } });

    if (!rowsDeleted) {
      return res.status(404).json({ error: 'Department member not found' });
    }

    res.json({ message: 'Department member deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the department member' });
  }
};
