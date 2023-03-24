import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UsersList() {

    let navigate=useNavigate()

    // create state
    let [users,setUsers]=useState([])
    let [loading,setLoading]=useState(0)
    //function to fetch data
    const getData = async() =>{
        let response=await axios.get("http://localhost:4000/user-api/all")

        setUsers(response.data.payload)
        setLoading(1)
        
    }
    const navigateToAUser= (user) =>{
        console.log(user);
        navigate(`/user/${user.id }`,{state:user})
    }

    //
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='container'>

<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-3'>

    {
    //if data is fetching 
    loading===0?<div className='mx-auto'><div className="spinner-border text-primary m-5 " role="status"></div><p>Loading ...</p></div>:
    //if no users found then
    users.length===0?<h3 className="text-danger mx-auto">No users found</h3>:
    //If users exists then
            users.map((user)=>(
                <div className='col gy-3 mx-auto h-100' key={user.id}>
                        <div className="card text-center shadow mx-auto" style={{maxWidth:"15rem"}}>
                            <img className="card-img-top" src={user.url} alt="" style={{height:"200px"}}></img>
                            <div className='card-body'>
                            <p className='lead'>{user.name}</p>
                            <button className='btn btn-success' onClick={()=>navigateToAUser(user)}>Profile</button>
                            </div>
                    </div>
                </div>     
                )) 
            }      
    </div>
    
    </div>
    
  )
}

export default UsersList