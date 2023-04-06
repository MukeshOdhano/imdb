import React from 'react'
import {Menu, LightMode} from './MenuItem'

import { AiFillHome } from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';


export default function Header() {
  return (
      <div className=' p-2 lg:p-6 md:p-4 text-red-50 bg-slate-600 flex justify-between items-center flex-row-reverse lg:flex-row md:flex-row md:text-1xl'>
         <div className='flex justify items-center'>
            <div className=" mr-2 inline lg:hidden md:hidden ">
               <LightMode />
            </div>

            <Link href="/">
               <h1 className='text-2xl font-bold'>
                  <span className='bg-orange-500 rounded-md px-2 sm:bg-slate-600 '>IMDB</span>
                  <span className='text-orange-500  hidden sm:inline'>Clone</span>
               </h1>
            </Link>
         </div>

         <div className='flex'>
            <div className='text-2xl lg:text-[20px] flex justify-between'>
               <Menu title="Navbar" address="/" Icon={AiFillHome}/>
               <Menu title="About" address="/about" Icon={BsFillInfoCircleFill}/>
            </div>            

         </div>    

         <div className='hidden bg:inline md:inline '>
            <LightMode className=''/>
         </div>
      </div>
  )
}
