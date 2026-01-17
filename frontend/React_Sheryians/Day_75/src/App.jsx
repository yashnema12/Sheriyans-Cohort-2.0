import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [username, setusername] = useState('')
  const [role, setrole] = useState('')
  const [imageurl, setimageurl] = useState('')
  const [description, setdescription] = useState('')

  const [allusers, setallusers] = useState([])

  const submithandler = (e)=>{
    e.preventDefault();
    
    const oldUsers =[...allusers]
    oldUsers.push(username,role,imageurl,description);
    console.log(oldUsers)

    setallusers(oldUsers)

    setusername('')
    setimageurl('')
    setdescription('')
    setrole('')
    
  } 

    const delethandler =()=>{
      console.log("element deleted")
    }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{submithandler(e)}} className=' px-2 py-10 flex flex-wrap'>

      
      <input 
      value={username}
      onChange={(e)=>{setusername(e.target.value)}}
      className='border-2 text-xl font-semibold px-5 py-2 rounded m2 lg:w-[45%]' type="text" placeholder="Enter your name" />

      <input
      value={imageurl}
      onChange={(e)=>{setimageurl(e.target.value)}}
      className='border-2 text-xl font-semibold px-5 py-2 rounded m2 lg:w-[45%]' type="text" placeholder="Img Url" />

      <input
      value={role}
      onChange={(e)=>{setrole(e.target.value)}}
      className='border-2 text-xl font-semibold px-5 py-2 rounded m2 lg:w-[45%]' type="text" placeholder="Enter your role" />

      <input 
      value={description}
      onChange={(e)=>{setdescription(e.target.value)}}
      className='border-2 text-xl font-semibold px-5 py-2 rounded m2 lg:w-[45%]' type="text" placeholder="Enter Description" />

      <button className='px-5 py-2 active:scale-95 cursor-pointer bg-emerald-600 rounded m2 w-[75%]'>Create User</button>
      </form>
      <div className='px-4 py-10 flex flex-wrap'>
      
      {allusers.map(function(elem,idx){
        return <div key={idx} className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl p-5 px-8 text-center flex items-center flex-col  bg-white text-black'>
        <img className='h-24 w-24 rounded-full' src="https://images.unsplash.com/photo-1761839257961-4dce65b72d99?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='text-2xl mt-2 font-semibold'>Yash Nema</h1>
        <h5 className=' text-blue-500 text-lg font-semibold my-3'>Devoloper</h5>
        <p className='text-sm font-medium leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, reiciendis!</p>
        <button onClick={()=>{delethandler()}} className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-700 text-white mt-3'>Remove</button>
    </div>
      })}
  
      </div>
    </div>
  )
}

export default App
