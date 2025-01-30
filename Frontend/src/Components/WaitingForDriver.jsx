import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 onClick={() => 
    props.WaitingForDriver(false)
    } className='p-3 text-center absolute top-2 right-2 text-2xl text-gray-600'><i className="ri-arrow-down-wide-line"></i></h5>
    
    <div className='flex gap-2 justify-between items-center'>
        <img className='h-24' src="./uber-car-img.webp" alt="" />
        <div className='text-right'>
            <h2 className='font-medium text-lg'>Driver Name</h2>
            <h4 className='text-xl font-semibold -mt-2 -mb-1'>GJ 03 DF 0603</h4>
            <p className='text-sm text-gray-600'>Innova</p>
        </div>
    </div>

    <div className='flex gap-2 justify-between items-center flex-col'>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-2 '>
                <i className="text-xl ri-map-pin-fill"></i>
                <div>
                    <h3 className='text-lg font-medium'>Neharunagar</h3>
                    <p className='text-gray-600 text-sm -mt-1'>GSRTC Bus Station</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2 '>
                <i className="text-xl ri-map-pin-user-fill"></i>
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
    </div>
  )
}

export default WaitingForDriver