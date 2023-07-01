const { DataTypes } = require('sequelize'); // ພະແນກ
const sequelize = require('../configs/db');

const DepartmentMenber = sequelize.define('department-number', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    department_id: {
        type: DataTypes.UUID,
        allowNull:false,
    },
    user_id: {
        type:DataTypes.STRING,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    profile: {
        type: DataTypes.STRING,
        allowNull:false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:false
    },
    position: {
        type: DataTypes.STRING,
        allowNull:false
    },
    address: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {sequelize,timestamps:true,})

module.exports = DepartmentMenber;