"use client"
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head/>
    <body>
    <ChakraProvider>
      {children}
    </ChakraProvider>
    </body>
    </html>
  )
}
