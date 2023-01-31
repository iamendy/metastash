"use client"
import './globals.css'
import {Box, ChakraProvider, ColorModeScript, Flex} from '@chakra-ui/react'
import theme from "@/theme";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MobileNav from "@/app/components/MobileNav";
import {useState} from "react";

export default function RootLayout({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    return setIsOpen(!isOpen)
  }
  return (
    <html lang="en">
    <head/>
    <body>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Flex direction="column" justifyItems="space-between" h="100vh" overflow="hidden">
        <Navbar handleToggle={handleToggle}/>
        <Box pos="relative" flex="1">
          <MobileNav isOpen={isOpen} />
          {children}
        </Box>
        <Footer/>
      </Flex>
    </ChakraProvider>
    </body>
    </html>
  )
}
