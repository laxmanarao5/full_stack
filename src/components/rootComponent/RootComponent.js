import React from 'react'
import Header from '../header/Header'
import Footer from "../footer/Footer"
import { Outlet } from 'react-router-dom'

function RootComponent() {
  return (
    <div>
      {/* nest Header to root component */}
      <Header/>
      
      <div style={{minHeight:"80vh"}}>
      <Outlet/>
      </div>
      
       {/* nest Footer to root component */}
       <Footer/>
    </div>
  )
}

export default RootComponent