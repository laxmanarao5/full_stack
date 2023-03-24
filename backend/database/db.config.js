
//import sequelize
const {Sequelize,DataTypes}=require("sequelize")

//import env variables
require("dotenv").config()

const sequelize=new Sequelize(process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.HOST,
        dialect:"mysql"
    }

)
sequelize.sync()
module.exports=sequelize