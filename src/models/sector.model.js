const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');

const Sector = sequelize.define('sector', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    department_foreign_id: {
        type: DataTypes.UUID,
        allowNull:false
    },
    user_id: {
        type:DataTypes.STRING,
        allowNull:false
    },
    sector_title:{
        type: DataTypes.STRING,
        allowNull:false
    },

}, { sequelize, timestamps: true })

module.exports = Sector;