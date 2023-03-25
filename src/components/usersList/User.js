import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Modal,Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
function User() {
  let navigate = useNavigate()

  let {state}=useLocation()
  let [userInfo,setUserInfo]=useState(state)
  let {register,setValue,getValues} =useForm()

  //state for modal
  let [show,setShow]=useState()

  //function to open model
  const openModal=()=>setShow(true)

  //function close model
  const closeModal=()=>setShow(false)

  //function to handle edit click event
  const editUser=()=>{
    openModal()
    //set values to input .
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("dob",state.dob.toString().slice(0,10))
    setValue("url",state.url)
  }

    //function to save changes in to backend
    const saveChanges= async () =>{
      let modifiedUser=getValues()
      //add id to modified user
      // modifiedUser.id=state.id
      closeModal()
      //update data through API
      let res=await axios.put(`http://localhost:4000/user-api/user/${state.id}`,modifiedUser)
      console.log(res);
      setUserInfo(modifiedUser)
    }

    //function to delete user
    const deleteUser =async () => {
      let res=await axios.delete(`http://localhost:4000/user-api/user/${state.id}`)
        navigate("/users-list")
      
    }

  //return rect element
  return (
    <div className='container shadow p-3 mt-5'>
      <div className='row mx-auto'>

        {/* Display image */}
          <div className='col-12 col-md-4'>
          <img src={state.url} style={{height:"300px"}}/>
          </div>

        {/* Display information */}
            
          <div className='col-12 col-md-8 mx-auto mt-5' style={{textAlign:"center"}}> 
            <p className='fs-5 mt-4'><b>Name : </b>{userInfo.name}</p>
            <p className='fs-5'><b>Email : </b> {userInfo.email}</p>
            <p className='fs-5'><b>DOB : </b> {userInfo.dob.toString().slice(0,10)}</p>
            
            <button className='btn btn-primary mt-3' onClick={editUser}>Edit</button>
            <button className='btn btn-danger ms-5 mt-3' onClick={deleteUser}>Delete</button>
          </div>
      </div>


      {/* Modal for editing */}

      <Modal show={show} onHide={closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
                <div className='m-3'>
                  <label className='form-label'>Name</label>
                  <input type="text" {...register("name")} className='form-control'/>
                </div>

                <div className='m-3'>
                  <label  className='form-label'>Email</label>
                  <input type="email" {...register("email")} className='form-control'/>
                </div>

                <div className='m-3'>
                  <label className='form-label'>Date Of Birth</label>
                  <input type="date" {...register("dob")} className='form-control'/>
                </div>

                <div className='m-3'>
                  <label>Image URL</label>
                  <input type="text" {...register("url")} className="form-control" disabled/>
                </div>
                
          </form>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="success" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default User