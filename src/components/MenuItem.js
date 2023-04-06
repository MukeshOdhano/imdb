
import Link from 'next/link'
import React from 'react'

const Styles={
  transition: "all .3s ease-in"
}

export default function Menu({title, address, Icon}) {

  return (
    <div >

      <Link href={address} className=' hover:text-orange-400 'style={Styles}>
        <Icon className="mx-2 text-2xl sm:hidden"/>
        <p className='mr-4 lg:ml-8 hidden sm:inline'>{title}</p>
      </Link>
    </div>
  )
} 
