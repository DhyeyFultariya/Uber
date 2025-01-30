import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() => 
        props.setVehiclePanelOpen(false)
        } className='p-3 text-center absolute top-2 right-2 text-2xl text-gray-600'><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-4'>Choose a Vehicle</h3>

        <div onClick={ () => {
            props.setConfirmedRidePanle(true)
        } } className='flex mb-3 border-2 active:border-black bg-gray-100 items-center justify-between p-3 rounded-xl w-full '>
          <img className='h-14' src="./uber-car-img.webp" alt="" />
          <div >
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides </p>
          </div>
          <h2 className='font-semibold text-lg'>₹199</h2>
        </div>

        <div onClick={ () => {
            props.setConfirmedRidePanle(true)
        } } className='flex mb-3 border-2 active:border-black bg-gray-100 items-center justify-between p-3 rounded-xl w-full '>
          <img className='h-10' src="./uber-moto-img.webp" alt="" />
          <div >
            <h4 className='font-medium text-base'>Moto <span><i class="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>1 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motercycle ride </p>
          </div>
          <h2 className='font-semibold text-lg'>₹49</h2>
        </div>

        <div onClick={ () => {
            props.setConfirmedRidePanle(true)
        } } className='flex mb-3 border-2 active:border-black bg-gray-100 items-center justify-between p-3 rounded-xl w-full '>
          <img className='h-10' src="./uber-auto-img.webp" alt="" />
          <div className='-ml-7' >
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto ride </p>
          </div>
          <h2 className='font-semibold text-lg'>₹79</h2>
        </div>
    </div>
  )
}

export default VehiclePanel