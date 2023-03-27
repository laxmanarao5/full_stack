import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function UserProfile() {

    let {userObj}=useSelector(state=>state.user)
    let token=sessionStorage.getItem("token")
    console.log(token);
    let navigate=useNavigate()
    const handleRedirect=()=>{
        
        navigate("/login")
    }
  
  return (
    <div>
       {token===null?<div>
        <p className='fs-1'>Please Login to continue</p>
        <button className='btn btn-primary' onClick={handleRedirect}>Login Page</button>
        </div>:
      <div>
            <img src={userObj.url} style={{height:"20px",width:"20px"}} className="img-fluid"/>
        <h2>Welcome<p>{userObj.username}</p></h2>
        </div>
        }
    </div>
  )
}

export default UserProfile