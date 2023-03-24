//import express

const exp=require("express")

const app=exp()

require("dotenv").config()

app.listen(process.env.PORT || 4000,()=>{
    console.log(`Listening to port ${process.env.PORT}`);
})

// //import cors
// const cors=require("cors")

// //cors configuration
// app.use(cors({
//     origin:'*'
// }))

//connect react build with nodejs web server
const path=require("path")
app.use(exp.static(path.join(__dirname,"../build")))



//import db connection

const sequelize=require("./database/db.config")


sequelize.authenticate().then(()=>{
    console.log("Connection database success");
}).catch((err)=>{
    console.log(err.message);
})


//import routers
const userApp=require("./routes/user.route")

//routing to user api

app.use("/user-api",userApp)


//handle page refresh
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"../build/index.html"))
})

//invalid path middleware

app.use("*",(req,res)=>{
    res.send({message:"Invalid path"})
})


//Error handling middleware

app.use((err,req,res,next)=>{
    res.send({message:"Error occured" ,error : err.message})
})