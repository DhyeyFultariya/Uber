import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
        <h5 onClick={() => 
        props.setConfirmedRidePanle(false)
        } className='p-3 text-center absolute top-2 right-2 text-2xl text-gray-600'><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-4'>Confirm your Ride</h3>

        <div className='flex gap-2 justify-between items-center flex-col'>
            <img className='h-36' src="./uber-car-img.webp" alt="" />
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
            <div className='w-full'>
                <button onClick={() => {
                    props.setVehicleFound(true)
                    props.setConfirmedRidePanle(false)
                } } className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-xl'>Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmedRide