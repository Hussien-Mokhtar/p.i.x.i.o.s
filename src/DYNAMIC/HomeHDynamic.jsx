import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function HomeHDynamic({HomeH}) {
  return (
    <>
    <div className="pt-4 pb-8 lg:px-0 px-4">
        <LazyLoadImage src={HomeH.img} alt="img" className='h-[18rem] lg:w-[19.5rem] w-[22rem] px-4 rounded-t-full hover:scale-105 duration-150 '/>
        <div className="font-bold lg:w-[17.5rem] w-[20rem] ml-4 py-4 shadow-xl rounded-b-3xl">
        <h1 className='text-xl ml-4'>{HomeH.name}</h1>
        <h1 className='font-semibold text-green-500 ml-4 py-1'>{HomeH.title}</h1>
        </div>
      </div>

    </>
  )
}
