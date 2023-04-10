"use client"

import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'


export default function NavbarItem({title, param}) {
   const searchParams = useSearchParams()
   const genre = searchParams.get('genre')
  return (
    <div 
      className={`
         mx-2 pb-1 cursor-pointer 
         text-[#000000] text-[22px]
         dark:text-gray-200
         ${
            genre && genre === param &&
            "underline underline-offset-8 decoration-3 dark:decoration-slate-200"
         }
         transition-all duration-75 ease-in
         `}
         >

      <Link href={`/?genre=${param}`}>{title}</Link>
      {/* <h1>{params}</h1> */}
    </div>
  )
}
