import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div className='bg-primary p-3 nav justify-content-center'>
        <li className='nav-item'>
          <NavLink to="" className={({isActive})=>isActive===true?"active nav-link":"inactive nav-link"}>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="register" className={({isActive})=>isActive===true?"active nav-link":"inactive nav-link"}>Register</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="contact-us" className={({isActive})=>isActive===true?"active nav-link":"inactive nav-link"}>Conact Us</NavLink>
        </li>
    </div>
  )
}

export default Header