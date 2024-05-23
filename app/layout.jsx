import './globals.css'

import { Inter } from 'next/font/google'
const inter = Inter({subsets: ['latin']})

import {
  ClerkProvider
} from '@clerk/nextjs'

export const metadata = {
  title: 'X'
}

const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout


// <span>-&gt;</span>