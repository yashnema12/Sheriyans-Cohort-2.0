import React from 'react'
import Navbar from './Navbar'
import Men from './Men'
import Women from './Women'

const App = () => {
  // const user1 ={
  //   Name:"yash",
  //   Age:21,
  //   gender:"Male"
  // }
  // const user2 ={
  //   Name:"Paro",
  //   Age:21,
  //   gender:"Female"
  // }
  // const user3 ={
  //   Name:"chunni",
  //   Age:8,
  //   gender:"Female"
  // }

  function btnClicked(){
    console.log("button is clicked!!!");
    
  }
  return (
    <div onClick={()=>{btnClicked()}}>
      {/* <Navbar Title="Immortal" type="fantasy" color="lightblue" links={['novel','book','info']} />
      <Navbar Title="Nagas" type="Actionfy"  color="green" links={['novel','book','info']}/>
      <Navbar Title="Vayuputras" type="religeous" color="orange" links={['novel','book','info']}/> */}

      {/* <Men/>
      <Women/> */}

      <button className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'>Click To Download</button>
    </div>
  )
}

export default App
