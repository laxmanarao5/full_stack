//import db connection
const  { DataTypes } = require("sequelize")
const sequelize =require("../db.config");

exports.User=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dob:{
        type:DataTypes.DATE,
        allowNull:false
    },
    email:{

        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},
{
    freezeTableName:true,
    timestamps:false,
    createdAt:false,
    updatedAt:false
})