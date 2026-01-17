import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [allpic, setallpic] = useState([])
  const [user, setuser] = useState(0)

  const getData = async () => {
    const response = await axios.get(
      "https://randomuser.me/api/"
    )
    setallpic((response.data.results[0].name.first)+" "+response.data.results[0].name.last)
  }

  useEffect(() => {
    getData()
  }, [user])

  return (
    <div>
      {allpic}

      <h1>{user}</h1>
      <button onClick={()=>{
        setuser(user+1)
      }}>Click</button>
    </div>
  )
}

export default App
