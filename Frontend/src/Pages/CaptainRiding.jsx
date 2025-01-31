import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import FinishRide from '../Components/FinishRide';


const CaptainRiding = () => {

    const finishRidePanleRef = useRef(null)
    const [finishRidePanle, setFinishRidePanle] = useState(false)

    useGSAP( () => {
        if (finishRidePanle) {
            gsap.to(finishRidePanleRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanleRef.current, {
                transform: 'translateY(100%)'
            })
        }
      }, [ finishRidePanle , finishRidePanleRef ])

  return (
    <div className="h-screen relative">
    
    <div className="fixed left-3 top-0 w-screen flex justify-between items-cente z-50">
      <img className="w-20" src="./uber-logo.png" alt="" />
      <Link
        to={"/captain-home"}
        className="fixed h-10 w-10 bg-white flex justify-center items-center rounded-full top-3 right-2 z-50"
      >
        <i class="ri-logout-box-r-line"></i>
      </Link>
    </div>
    <div className="h-4/5">
      <img
        className="w-full h-full object-cover"
        src="./temp-map.png"
        alt=""
      />
    </div>

    <div className='h-1/5 p-4 bg-yellow-400 relative flex items-center justify-between' 
        onClick={ () => setFinishRidePanle(true)}
    >
        <h5
            className="p-3 items-center w-[93%] text-center absolute top-[-10px] text-2xl text-red-600"
        >
            <i className="ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className="bg-green-500 text-white font-semibold p-3 px-10 rounded-xl">Complete Ride</button>
    </div>

    <div ref={finishRidePanleRef} className='fixed z-10 translate-y-full bg-white bottom-0 pt-12 px-3 py-8 w-full rounded-t-3xl'>
        <FinishRide setFinishRidePanle={setFinishRidePanle} />
      </div>

  </div>
  )
}

export default CaptainRiding