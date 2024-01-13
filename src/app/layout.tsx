import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar/page'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jude\'s Portfolio Website',
  description: 'Using Prismic and Next.js to build a portfolio website',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} flex flex-col items-center my-3 
        px-32 justify-center `}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
