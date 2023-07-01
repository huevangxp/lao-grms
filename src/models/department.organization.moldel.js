const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');

const DepartmentOrganization = sequelize.define('department-organization', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,

    },
    ministry_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    user_id: {
        type:DataTypes.STRING,
        allowNull:false
    },
    department_organization_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: true,
})

module.exports = DepartmentOrganization;