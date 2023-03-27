import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import {clearState} from '../../slices/userSlice'
function Header() {
  let {status}=useSelector(state=>state.user)

  let dispatch=useDispatch()

  const logout=()=>{
         let actionObj= clearState()
         dispatch(actionObj)
         sessionStorage.removeItem("token")

  }
  return (
    <div className='bg-primary p-3 nav justify-content-center'>
        <li className='nav-item'>
          <NavLink to="" className={({isActive})=>isActive===true?"active nav-link":"inactive nav-link"}>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="register" className={({isActive})=>isActive===true?"active nav-link":"inactive nav-link"}>Register</NavLink>
        </li>

        {status==="success"?
        <li className='nav-item'>
          <NavLink to="login" onClick={logout} className={({isActive})=>isActive===true?"active nav-link":"inactive nav-link" }>Logout</NavLink>
        </li>:

        <li className='nav-item'>
          <NavLink to="login" className={({isActive})=>isActive===true?"active nav-link":"inactive nav-link"}>Login</NavLink>
        </li>
      }


        <li className='nav-item'>
          <NavLink to="contact-us" className={({isActive})=>isActive===true?"active nav-link":"inactive nav-link"}>Conact Us</NavLink>
        </li>
    </div>
  )
}

export default Header