import React from "react";

const RidePopup = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setRidePopupPanle(false)}
        className="p-3 text-center absolute top-2 right-2 text-2xl text-gray-600"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-4">New Ride Avaliable</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-2xl mt-5">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="./uber-driver-img.jpeg"
            alt=""
          />
          <h2 className="text-lg font-medium">Customer Name</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 km</h5>
      </div>

      <div className="flex gap-2 justify-between items-center flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-xl ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Neharunagar</h3>
              <p className="text-gray-600 text-sm -mt-1">GSRTC Bus Station</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Neharunagar</h3>
              <p className="text-gray-600 text-sm -mt-1">GSRTC Bus Station</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-xl ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹199</h3>
              <p className="text-gray-600 text-sm -mt-1">Cash, cash</p>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full flex items-center justify-between ">
            <button
            onClick={() => {
              props.setRidePopupPanle(false);
            }}
            className=" bg-red-600 text-white font-semibold p-3 px-10 rounded-xl"
          >
            Ignor
          </button>
          <button
            onClick={() => {
                props.setConfirmRidePopupPanle(true)
            }}
            className="bg-green-500 text-white font-semibold p-3 px-10 rounded-xl"
          >
            Accept
          </button>

        </div>
      </div>
    </div>
  );
};

export default RidePopup;
