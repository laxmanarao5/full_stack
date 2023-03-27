//import express-async-handler
const expressAsyncHandler=require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt=require("jsonwebtoken")

//import models
const {User}= require("../database/models/user.model")


exports.test=expressAsyncHandler((req,res)=>{
    res.send({message:"user api is working"})
})


//registration controller
exports.register=expressAsyncHandler(async(req,res)=>{
    console.log("working");
    try{
        console.log(req.body);
        await User.create(req.body)
        res.status(201).send({message:"registration successfull"})
    }
    catch(err)
    {
        res.status(209).send({message:"email already exists",error:err.message})
    }
    
})


//login request
exports.login=expressAsyncHandler(async(req,res)=>{
    //verify user
    let user=await User.findOne({where:{
        email:req.body.email
    }})
    if(user==null)
    {
        res.send({message:"User not found"})
    }
    else
    {
        let result=await bcryptjs.compare(req.body.password,user.password)
        if(result==false)
        {
            res.send({message:"Invalid password",})
        }
        else{
            let token=jwt.sign({email:req.body.email},"laxmanannn")
            delete user.password
            res.send({message:"success",token:token,user:user})
        }
    }
    //verify password
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

//protected route
exports.testProtection=expressAsyncHandler(async(req,res)=>{
    res.send({message: "Protected route"})
})