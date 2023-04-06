"use client"

import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { BsMoonFill } from 'react-icons/bs'
import {MdOutlineLightMode} from 'react-icons/md'

const Styles={
   transition: "all .3s ease-in"
}

export default function LightMode(){  
   const [mounted, setMounted] = useState(false)
   const {systemTheme, theme, setTheme} = useTheme();
   const currentTheme = theme === "system" ? systemTheme : theme

   useEffect(()=>{
      setMounted(true),
      []
   })

   return(
     <div className='text-3xl flex justify-center items-center'>
         {mounted && (currentTheme === "dark" ?
         (
            <MdOutlineLightMode 
                  onClick={()=>{setTheme("light")}} 
                  style={Styles} 
                  className=' hover:text-orange-500 cursor-pointer' 
            />) : (
            
            <BsMoonFill 
               onClick={()=>{setTheme("dark")}} 
               style={Styles} 
               className=' hover:text-orange-500 cursor-pointer' 
            />
         ))}
     </div>
   )
 }