import React from 'react'

import NavbarItem from './NavbarItem'

export default function Navbar() {
   return (
      <div 
         className='
         py-3 lg:py-4
         flex items-center justify-center
         bg-orange-600

         '
      >
      
         <NavbarItem title="Trending" param="fetchTrending" />
         <NavbarItem title="Top Ratted" param="fetchTopRatted" />
      </div>
   )
}
