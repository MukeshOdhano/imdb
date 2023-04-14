"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBox() {
   const [search, setSearch] = useState("")
   const router = useRouter()

   function handleSubmit(e){
      e.preventDefault();
      if(!search) return;

      router.push(`/search/${search}`)
   }
  return (
   <form
      className='mx-auto px-6 lg:px-14 py-3 lg:py-4 flex flex-row max-w-6xl border-b-2 border-slate-400'
      onSubmit={handleSubmit}
   >
      <input 
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         className=' w-full flex items-center justify-center dark:bg-slate-600
                     outline-none flex-1 '
         type='text' 
         placeholder='Search Movie or TV'
      />
      <button className='' type='submit'>search</button>
   </form>

  )
}
