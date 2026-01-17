import React, { useState } from 'react'

const App = () => {

const [username, setusername] = useState('')
const [AllUsers, setAllUsers] = useState([])
const [Email, setEmail] = useState('')


const submitHandler =(e)=>{
  e.preventDefault()
  const newUser = [...AllUsers]
  
  newUser.push({username,Email});
  console.log(newUser);
  setAllUsers(newUser);

  setusername('');
  setEmail('');
  
}

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter You Name'
        value={username} 
        onChange={(e)=>{setusername(e.target.value)}}
        />

        <input type="text" placeholder='Enter You Email'
        value={Email} 
        onChange={(e)=>{setEmail(e.target.value)}}
        />

        <button>submit</button>
      </form>

      {AllUsers.map((elem,idx)=>{
        return <div key={idx}>
          <h1 key={idx}>{elem.username}</h1>
          <p key={idx}>{elem.Email}</p>
        </div>
      })}
    </div>
  )
}

export default App
