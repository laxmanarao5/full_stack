const exp=require("express")


//create a router for user API
const userApp=exp.Router()

//express body parser
userApp.use(exp.json())

//import controllers
const {test, register,login,getAllUsers, updateUser,deleteUser,testProtection}=require("../controllers/user.controller")


//test route
userApp.get("/test",test)

//registration route
userApp.post("/register",register)


userApp.post("/login",login)
//Get all users
userApp.get("/all",getAllUsers)

//update users
userApp.put("/user/:id",updateUser)

//delete user
userApp.delete("/user/:id",deleteUser)

//export router
module.exports=userApp