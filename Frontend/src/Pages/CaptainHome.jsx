import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../Components/CaptainDetails";
import RidePopup from "../Components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../Components/ConfirmRidePopup";

const CaptainHome = () => {

  const ridePopupPanleRef = useRef(null)
  const confirmRidePopupRef = useRef(null)

  const [ridePopupPanle, setRidePopupPanle] = useState(true)
  const [confirmRidePopupPanle, setConfirmRidePopupPanle] = useState(false)

  
  useGSAP( () => {
    if (ridePopupPanle) {
        gsap.to(ridePopupPanleRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(ridePopupPanleRef.current, {
            transform: 'translateY(100%)'
        })
    }
  }, [ ridePopupPanle, ridePopupPanleRef ])

  useGSAP( () => {
    if (confirmRidePopupPanle) {
        gsap.to(confirmRidePopupRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(confirmRidePopupRef.current, {
            transform: 'translateY(100%)'
        })
    }
  }, [ confirmRidePopupPanle , confirmRidePopupRef ])
  

  return (
    <div className="h-screen">
      <div className="fixed left-3 top-0 w-screen flex justify-between items-cente z-50">
        <img className="w-20" src="./uber-logo.png" alt="" />
        <Link
          to={"/captain-home"}
          className="fixed h-10 w-10 bg-white flex justify-center items-center rounded-full top-3 right-2 z-50"
        >
          <i class="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="./temp-map.png"
          alt=""
        />
      </div>
      
      <div className="h-2/5 p-4">
        <CaptainDetails />
      </div>

      <div ref={ridePopupPanleRef} className='fixed z-10 translate-y-full bg-white bottom-0 pt-12 px-3 py-8 w-full rounded-t-3xl'>
          <RidePopup setRidePopupPanle={setRidePopupPanle} setConfirmRidePopupPanle={setConfirmRidePopupPanle} />
      </div>

      <div ref={confirmRidePopupRef} className='fixed h-[92%] z-10 translate-y-full bg-white bottom-0 pt-12 px-3 py-8 w-full rounded-t-3xl'>
          <ConfirmRidePopup setConfirmRidePopupPanle={setConfirmRidePopupPanle} setRidePopupPanle={setRidePopupPanle} />
      </div>


    </div>
  );
};

export default CaptainHome;
