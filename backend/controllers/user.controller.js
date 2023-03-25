//import express-async-handler
const expressAsyncHandler=require("express-async-handler")

//import models
const {User}= require("../database/models/user.model")


exports.test=expressAsyncHandler((req,res)=>{
    res.send({message:"user api is working"})
})


//registration controller
exports.register=expressAsyncHandler(async(req,res)=>{
    console.log("working");
    try{
        await User.create(req.body)
        res.status(201).send({message:"registration successfull"})
    }
    catch(err)
    {
        res.status(209).send({message:"email already exists"})
    }
    
})

//get all users
exports.getAllUsers=expressAsyncHandler(async(req,res)=>{
    let result=await User.findAll({where:{
        status:true
    }})
    res.send({message:"All users",payload:result})})

//update user information
exports.updateUser= expressAsyncHandler ( async (req,res) => {
    let response=await User.update(req.body,{where:{
        id:req.params.id
    }})
    res.send({message:"User details updated "})
})

//delete user
exports.deleteUser= expressAsyncHandler( async(req,res) =>{
    let response=await User.update({status:false},{where:{
        id:req.params.id
    }})
    res.send({message:"User deleted successfully"})
})