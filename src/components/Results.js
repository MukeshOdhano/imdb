import React from 'react'
import Image from "next/image";

export default function Results({resultsProps}) {
  return (
    <div>
      {
         resultsProps.map(result =>(
            <div key={result.id} >
               <h1 className='text-2xl'>{result.title}</h1>
               <p className='mb-4 '>{result.overview}</p>
            </div>
         ))
      }
    </div>
  )
}
