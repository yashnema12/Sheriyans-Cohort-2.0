import React from 'react'

const Card = () => {
  return (
                    //responsiveness
    <div className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl p-5 px-8 text-center flex items-center flex-col  bg-white text-black'>
        <img className='h-24 w-24 rounded-full' src={elem.imgurl} alt="" />
        <h1 className='text-2xl mt-2 font-semibold'>{elem.username}</h1>
        <h5 className=' text-blue-500 text-lg font-semibold my-3'>{elem.role}</h5>
        <p className='text-sm font-medium leading-tight'>{elem.description}</p>
        <button className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-700 text-white mt-3'>Remove</button>
    </div>
  )
}

export default Card
