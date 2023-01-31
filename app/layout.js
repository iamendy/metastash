"use client"
import './globals.css'
import { ChakraProvider, ColorModeScript, Flex } from '@chakra-ui/react'
import theme from "@/theme";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head/>
    <body>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Flex direction="column" justifyItems="space-between" minH="100vh">
        <Navbar/>
          {children}
        <Footer/>
      </Flex>
    </ChakraProvider>
    </body>
    </html>
  )
}
