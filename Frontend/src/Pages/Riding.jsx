import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to={'/home'} className='fixed h-10 w-10 bg-white flex justify-center items-center rounded-full top-2 right-2 z-50'>
            <i className="text-2xl font-bold ri-home-5-line"></i>
        </Link>
        <div className='h-1/2'>
                    <img className='w-full h-full object-cover' src="./temp-map.png" alt="" />
        </div>
        <div className='h-1/2 p-4'>
                <div className='flex gap-2 justify-between items-center'>
                    <img className='h-24' src="./uber-car-img.webp" alt="" />
                    <div className='text-right'>
                        <h2 className='font-medium text-lg'>Driver Name</h2>
                        <h4 className='text-xl font-semibold -mt-2 -mb-1'>GJ 03 DF 0603</h4>
                        <p className='text-sm text-gray-600'>Innova</p>
                    </div>
                </div>

            <div className='flex gap-2 justify-between items-center flex-col'>
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                        <i className="text-xl ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Neharunagar</h3>
                            <p className='text-gray-600 text-sm -mt-1'>GSRTC Bus Station</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                        <i className="text-xl ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹199</h3>
                            <p className='text-gray-600 text-sm -mt-1'>Cash, cash</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-full mt-2 bg-green-500 text-white font-semibold p-2 rounded-xl'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding