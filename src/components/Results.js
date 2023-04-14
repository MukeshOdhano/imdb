import React from 'react'
import Image from "next/image";
import Card from './Card';

export default function Results({resultsProps}) {
  console.log(resultsProps[0])
  return (
    <div 
      className=' my-6
                  max-w-6xl mx-auto py-4
                  grid place-items-center gap-4
                  lg:grid-cols-4 
                  md:grid-cols-3
                  sm:grid-cols-2 
                '
    >
      {
        resultsProps.map(result =>(
          <Card key={result.id} cardResult={result}/>
        ))
      }
    </div>
  )
}
