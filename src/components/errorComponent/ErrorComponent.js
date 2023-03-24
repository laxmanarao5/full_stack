import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorComponent.css"
function ErrorComponent() {

  return (
    <div className='p-5 m-5'>
      <h4 className='text-danger m-5'>You're Lost , click on Home page to got to Home page</h4>
      <Link to="/"><button className='btn btn-success'>Home Page</button></Link>
    </div>
  )
}

export default ErrorComponent