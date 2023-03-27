//import db connection
const  { DataTypes } = require("sequelize")
const sequelize =require("../db.config");
const bcryptjs = require("bcryptjs")
exports.User=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dob:{
        type:DataTypes.DATE,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        set(pass){
                let hashedPassword=bcryptjs.hashSync(pass,4)
                this.setDataValue("password",hashedPassword)
        }
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