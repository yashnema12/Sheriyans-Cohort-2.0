import React from 'react'

const Navbar = (props) => {
    console.log(props.color);
    
  return (
<div style={{backgroundColor:props.color}} className='bg-pink-700 mb-1 flex items-center justify-between text-white px-8 py-3'>
    <h2>{props.Title}</h2>
    <div className="flex gap-8">
        {props.links.map(function(elem,idx){
            return <h4 key={idx}>{elem}</h4>
        })}
        </div>
    </div>
  )
}

export default Navbar
