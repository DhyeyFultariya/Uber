import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel'
import VehiclePanel from '../Components/VehiclePanel'
import ConfirmedRide from '../Components/ConfirmedRide'
import WaitingForDriver from '../Components/WaitingForDriver'
import LookingForDriver from '../Components/LookingForDriver'


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmedRideRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmedRidePanle, setConfirmedRidePanle] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP( () => {
    if(panelOpen){
      gsap.to( panelRef.current, {
        height: '70%',
        padding: '20px',
        duration: 1,
        ease: 'power4.out'
      })
      gsap.to( panelCloseRef.current, {
        rotate: 180,
        duration: 1,
        ease: 'power4.out'
      })
    } else {
      gsap.to( panelRef.current, {
        height: '0%',
        padding: '0px',
        duration: 1,
        ease: 'power4.out'
      })
      gsap.to( panelCloseRef.current, {
        rotate: 0,
        duration: 1,
        ease: 'power4.out'
      })
    }
    }, [panelOpen, panelCloseRef])


  useGSAP( () => {
    if(vehiclePanelOpen){

      gsap.to( vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to( vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen, vehiclePanelRef])

  useGSAP( () => {
    if(confirmedRidePanle){

      gsap.to( confirmedRideRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to( confirmedRideRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmedRidePanle, confirmedRideRef])

  useGSAP( () => {
      if (vehicleFound) {
          gsap.to(vehicleFoundRef.current, {
              transform: 'translateY(0)'
          })
      } else {
          gsap.to(vehicleFoundRef.current, {
              transform: 'translateY(100%)'
          })
      }
  }, [ vehicleFound ])

  useGSAP( () => {
    if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(100%)'
        })
    }
  }, [ waitingForDriver ])

  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      <img className='w-28 absolute top-0 left-0' src="./uber-logo.png" alt="" />
      
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='w-full h-full object-cover' src="./temp-map.png" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white rounded-t-3xl relative'>
          <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className='absolute top-4 right-5 text-3xl'>
            <i className="ri-arrow-up-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute w-1 h-16 top-[47%] left-[10%] rounded bg-gray-700'></div>
            <input 
            onClick={() => setPanelOpen(true)}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className='bg-[#eee] px-12 py-2 text-lg mt-5 rounded-lg w-full' 
            type="text" name="" id="" 
            placeholder='Add a Pickup Location'
            />
            <input 
            onClick={() => setPanelOpen(true)}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className='bg-[#eee] px-12 py-2 text-lg mt-3 rounded-lg w-full' 
            type="text" name="" id="" 
            placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-[0] bg-white'>
          <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed z-10 translate-y-full bg-white bottom-0 px-3 py-8 w-full rounded-t-3xl'>
          <VehiclePanel setConfirmedRidePanle={setConfirmedRidePanle} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={confirmedRideRef} className='fixed z-10 translate-y-full bg-white bottom-0 pt-12 px-3 py-8 w-full rounded-t-3xl'>
          <ConfirmedRide setConfirmedRidePanle={setConfirmedRidePanle} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed z-10 translate-y-full bg-white bottom-0 pt-12 px-3 py-8 w-full rounded-t-3xl'>
          <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className='fixed z-10 bg-white bottom-0 pt-12 px-3 py-8 w-full rounded-t-3xl'>
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver}  />
      </div>
    </div>
  )
}

export default Home