import React, { useState } from 'react'
import axios from 'axios'
import User from './components/User'
import  './App.css'

const App = () => {

  const [AllUsers, setAllUsers] = useState([])

 async function getData(){
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setAllUsers(response.data)
  }

  return (
    <div>
        <button onClick={getData}>Click Me!!</button>

        <div className="all-users">
        {AllUsers.map(function(elem,idx){
          console.log(elem);
          
          return <User/>
        })}
        </div>
    </div>
  )
}

export default App
