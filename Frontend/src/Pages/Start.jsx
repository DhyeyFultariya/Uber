import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-[url("Ride-with-Uber.webp")] h-screen pt-8 w-full flex justify-between flex-col'>
        <img src="/uber-logo.png" alt="" className='w-28 ml-8'/>
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Start with Uber</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 mt-8 rounded'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start