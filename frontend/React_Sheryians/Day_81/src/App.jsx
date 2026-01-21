import React from 'react'
import AllSections from './components/AllSections'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {

  const courseData = {
    courseName:"Cohort 2.0",
    instructor:"Sarthak",
    mentor:"Anubhav",
    duration:"6 months"
  }

  return (
    <div>
      <Navbar/>
      <AllSections courseData={courseData}/>
      <Footer/>
    </div>
  )
}

export default App
