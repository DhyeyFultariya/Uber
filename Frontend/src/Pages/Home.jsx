import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel'


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

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
          <LocationSearchPanel />
        </div>
      </div>
      <div className='fixed z-10 translate-y-full bg-white bottom-0 px-3 py-8 w-full'>
        <h3 className='text-2xl font-semibold mb-4'>Choose a Vehicle</h3>

        <div className='flex mb-3 border-2 active:border-black bg-gray-100 items-center justify-between p-3 rounded-xl w-full '>
          <img className='h-14' src="./uber-car-img.webp" alt="" />
          <div >
            <h4 className='font-medium text-base'>UberGo <span><i class="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides </p>
          </div>
          <h2 className='font-semibold text-lg'>₹199</h2>
        </div>

        <div className='flex mb-3 border-2 active:border-black bg-gray-100 items-center justify-between p-3 rounded-xl w-full '>
          <img className='h-10' src="./uber-moto-img.webp" alt="" />
          <div >
            <h4 className='font-medium text-base'>Moto <span><i class="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>1 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motercycle ride </p>
          </div>
          <h2 className='font-semibold text-lg'>₹49</h2>
        </div>

        <div className='flex mb-3 border-2 active:border-black bg-gray-100 items-center justify-between p-3 rounded-xl w-full '>
          <img className='h-10' src="./uber-auto-img.webp" alt="" />
          <div className='-ml-7' >
            <h4 className='font-medium text-base'>UberAuto <span><i class="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto ride </p>
          </div>
          <h2 className='font-semibold text-lg'>₹79</h2>
        </div>
      </div>
    </div>
  )
}

export default Home