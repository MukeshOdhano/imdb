import Link from 'next/link'
import React from 'react'

import {CiLight} from 'react-icons/ci'

const Styles={
  transition: "all .3s ease-in"
}

function Menu({title, address, Icon}) {
  return (
    <div >
      <Link href={address} className=' hover:text-orange-400 'style={Styles}>
        <Icon className="mx-2 text-2xl sm:hidden"/>
        <p className='mr-4 lg:ml-8 hidden sm:inline'>{title}</p>
      </Link>
    </div>
  )
} 

function LightMode(){
  return(
    <div style={Styles} className=' w-10 h-10 font-bold text-3xl flex justify-center items-center hover:bg-orange-500 rounded-full '>
      <CiLight className=' cursor-pointer'></CiLight>
    </div>
  )
}

export {
  Menu,
  LightMode, 
}