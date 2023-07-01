const Department = require('../models/department.model');

exports.create = async (req, res) => {
  const user = req.payload;
  try {
    const { department_organization_id, department_title } = req.body;

    const newDepartment = await Department.create({
      department_organization_id,
      department_title,
      user_id:user.id
    });

    res.status(201).json(newDepartment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new department' });
  }
};

exports.selectAll = async (req, res) => {
  try {
    // Retrieve all departments using the Department model
    const departments = await Department.findAndCountAll();

    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve departments' });
  }
};

exports.selectById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find a department by its ID using the Department model
    const department = await Department.findByPk(id);

    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }

      res.json(department);
      
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve the department' });
  }
};

exports.update = async (req, res) => {
  try {
      const { id } = req.params;
        
      const {department_title} = req.body;

      const result = await Department.findByPk(id);
      if (!result) {
          res.status(404).json({message:"this user id"})
      }

      let data = req.body;
      delete data.user_id;
      delete data.department_organization_id;

      await result.update({
          department_title: department_title,
      })

    res.json({ message: 'Department updated successfully' });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'Failed to update the department' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const rowsDeleted = await Department.destroy({ where: { id } });

    if (!rowsDeleted) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the department' });
  }
};
