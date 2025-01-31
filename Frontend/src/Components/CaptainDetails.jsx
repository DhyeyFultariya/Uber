import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 justify-center">
        <img
          className="h-10 w-10 object-cover rounded-full "
          src="./uber-driver-img.jpeg"
          alt=""
        />
        <h4 className="text-lg font-semibold">Driver Name</h4>
      </div>
      <div>
        <h4 className="text-xl font-semibold">₹999</h4>
        <p className="text-sm text-gray-600">Earned</p>
      </div>
    </div>

    <div className="flex w-full p-3 bg-gray-100 rounded-2xl justify-center gap-5 mt-5 items-start">
      <div className="text-center ">
        <i className="text-3xl font-thin ri-timer-2-line"></i>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
      </div>
      <div className="text-center ">
        <i className="text-3xl font-thin ri-speed-up-line"></i>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
      </div>
      <div className="text-center ">
        <i className="text-3xl font-thin ri-booklet-line"></i>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
      </div>
    </div>
  </div>
  )
}

export default CaptainDetails