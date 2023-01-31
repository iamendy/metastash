"use client"
import {
  Container,
  Text,
  Button,
  Box,
  chakra,
  shouldForwardProp
} from "@chakra-ui/react";
import Title from "@/app/components/Title";
import {LinkIcon} from "@chakra-ui/icons";
import peep from "/public/peep.png";
import Image from "next/image";
import {isValidMotionProp, motion} from "framer-motion";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Home() {
  return (
    <Box display="flex">
      <Box minH="100%">
        <Title text="My Portfolio"/>

        <Container>
          <Box fontSize="lg" fontWeight="600">
            <Text textAlign="center" mt={{base: 24}} mb={{base: 6}}>View all your NFTs and other tokens once you connect
              your metamask.</Text>
            <Text textAlign="center" mb={{base: 6}}>This service is absolutely free</Text>

            <Button display="block" mx="auto" size="lg"> <LinkIcon mr="3px"/> Connect Wallet </Button>
          </Box>

          <MotionBox
            initial={{x:0, y: 20, opacity: 0}}
            animate={{x: 0, y: 0, opacity: 1}}
            transition={{delay: '0.1', duration: '0.5', ease: "easeInOut",}}>
            <Image src={peep}/>
          </MotionBox>
        </Container>

      </Box>
    </Box>
  )
}
