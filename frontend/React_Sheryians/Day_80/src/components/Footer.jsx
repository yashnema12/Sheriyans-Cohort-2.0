import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  
  return (

    <div className='footer'>
        <h1>Footer Section</h1>
        <button
        onClick={()=>{navigate('/courses')}}
        >Explore Page</button>
    </div>
  )
}

export default Footer
