import React, { useState } from 'react'
import "./Register.css"
import {useForm} from "react-hook-form"
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
function Register() {

  let [err,setErr]=useState("")

  let navigate=useNavigate()

  let {handleSubmit,register,reset,formState:{
    errors
  }}=useForm()

  const onSubmit= async (user) =>{
    try{
      let response=await axios.post("http://localhost:4000/user-api/register",user)
      if(response.status===201)
      {
        reset()
        navigate("/users-list")
      }
    }
    catch(error){
      setErr(error.message)
    }
  }

  return (
    <div>
        <div>
          <h2 className='text-warning'>Registration</h2>
        </div>
        <div className='w-25 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>

              {
                err && <p className='text-danger fs-1'>{err}</p>
              }
            <div className='m-3'>
              <label className='form-label'>Name</label>
            <input type="text" {...register("name",{required:"Name is required"})} className='form-control'/>
            {errors.name && <p className='text-danger'>{errors.name?.message}</p>}
            </div>
            
            <div className='m-3'>
              <label  className='form-label'>Email</label>
            <input type="email" {...register("email",{required:"Email is required"})} className='form-control'/>
            {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
            </div>

            <div className='m-3'>
              <label className='form-label'>Date Of Birth</label>
            <input type="date" {...register("dob",{required:"Date of birth is required"})} className='form-control'/>
            {errors.dob && <p className='text-danger'>{errors.dob?.message}</p>}
            </div>

            <div className='m-3'>
              <label>Image URL</label>
              <input type="text" {...register("url")} className="form-control"/>
            </div>

            <div className='m-3'>
              <button type="submit" className='btn btn-success me-5'>Register</button>
              <Link to="/users-list"><button type="button" className='btn btn-warning ms-5'>Existing users</button></Link>
            </div>
              <div className='m-3'>
                  
              </div>
          </form>
        </div>
      
    </div>
  )
}

export default Register