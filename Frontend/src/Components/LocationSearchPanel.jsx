import React from 'react'

const LocationSearchPanel = () => {

    const localtion = [
        "Neharunagar GSRTC Bus Station",
        "Paldi GSRTC Bus Station",
        "Gita Mandir GSRTC Bus Station",
        "Iscon GSRTC Bus Station",
    ]

  return (
    <>
    <div>
        {
            localtion.map((item, index) => {
                return (
                    <div className="flex items-center justify-start mb-5 space-x-4 border-2 border-transparent active:border-black rounded-lg px-1 py-2">
                        <h2 className='bg-[#eee] px-2 py-1 rounded-full text-xl'><i class="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{item}</h4>
                    </div>
                )
            })
        }
    </div>

    </>
  )
}

export default LocationSearchPanel