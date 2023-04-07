import React from 'react'


import { AiFillHome } from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs'

import Menu from './MenuItem'
import Link from 'next/link';
import LightMode from './LightMode';

const Styles={
   transition: "all .3s ease-in"
}

export default function Header() {

  return (
      <div className='mx-3 lg:mx-6 p-2 lg:p-6 md:p-4 text-black-500 flex justify-between items-center flex-row-reverse lg:flex-row md:flex-row md:text-1xl'>
         <div className='flex justify items-center'>
            <div className=" mr-2 inline lg:hidden md:hidden ">
               <LightMode />
            </div>

            <Link href="/">
               <h1 style={Styles} className='lg:pr-2 lg:py-2 text-2xl font-bold lg:border-2 lg:border-orange-500 lg:hover:bg-[#f9731622]'>
                  <span className='bg-orange-500 lg:bg-transparent rounded-md px-2 '>IMDB</span>
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
