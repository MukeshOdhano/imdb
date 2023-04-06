import Header from '@/components/Header'

import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header/>
        {/* Navbar */}

        {/* Search */}

        {children}
      </body>
    </html>
  )
}
