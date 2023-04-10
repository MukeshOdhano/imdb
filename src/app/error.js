"use client"

import React, { useEffect } from 'react'

export default function Error({error, reset}) {
   useEffect(function(){
      console.log(error)
   }, [error])

  return (
    <div className=' w-100 h-[75.5vh] flex flex-col justify-center items-center'>
      <div className="text-center space-y-6">
         <h1 className='text-2xl lg:text-6xl'>Somthing went wrong :( </h1>
         <button 
            onClick={()=>reset()}
            className='py-1 px-2 rounded-[4px] uppercase text-2xl bg-orange-600'
         >
            Try again
         </button>
      </div>
    </div>
  )
}
