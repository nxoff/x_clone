import '@/styles/globals.css'

import { Inter } from 'next/font/google'
const inter = Inter({subsets: ['latin']})

import {
  ClerkProvider,
  SignedIn,
  UserButton
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
          <div className="user-icon-wrapper">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout


// <span>-&gt;</span>