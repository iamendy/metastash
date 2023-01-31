"use client"
import Navbar from "@/app/components/Navbar";
import {Container, Heading, Text, Divider, Center, Button, Flex, Box} from "@chakra-ui/react";
import Title from "@/app/components/Title";
import {LinkIcon} from "@chakra-ui/icons";
import peep from "/public/peep.png";
import Image from "next/image";

export default function Home() {
  return (
    <Box flex="1" display="flex">
      <Box h="100%">
        <Title text="My Portfolio"/>

        <Container>
          <Box fontSize="lg" fontWeight="600">
            <Text textAlign="center" mt={{base: 24}} mb={{base: 6}}>View all your NFTs and other tokens once you connect
              your metamask.</Text>
            <Text textAlign="center" mb={{base: 6}}>This service is absolutely free</Text>

            <Button display="block" mx="auto" size="lg"> <LinkIcon mr="3px"/> Connect Wallet </Button>
          </Box>

          <Image src={peep}/>
        </Container>

      </Box>
    </Box>
  )
}
