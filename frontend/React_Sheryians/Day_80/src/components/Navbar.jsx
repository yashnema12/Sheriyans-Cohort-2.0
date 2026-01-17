import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-5xl flex gap-4 px-4 py-2'>
      <NavLink to='/' style={({isActive})=>({
        color: isActive?'red':'white'
      })}>
        Home
      </NavLink>

      <NavLink to='/about' style={({isActive})=>({
        color: isActive?'red':'white'
      })}>
        About
      </NavLink>

      <NavLink to='/courses' style={({isActive})=>({
        color: isActive?'red':'white'
      })}>
        CoursePage
      </NavLink>
    </div>
  )
}

export default Navbar
