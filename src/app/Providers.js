"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-slate-700 dark:text-slate-200 transition-colors duration-100 ease-in-out min-h-screen'>
        {children}
      </div>
    </ThemeProvider>
  )
}
