import {chakra, VStack, Flex, IconButton, shouldForwardProp, Text} from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import Link from "next/link";
import {RepeatIcon} from "@chakra-ui/icons";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const variants = {
  hidden: { opacity: 1, x: '100%', y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: '100%', y: 0 }
}

const MobileNav = ({isOpen}) => {
  return (

    <MotionBox
      initial="hidden"
      animate={`${isOpen ? "enter" : ''}`}
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      pos="absolute" w="100%" h="100%" bg="blackAlpha.900" zIndex="100">
      <VStack spacing="5" mt="10" align="start">
        <Link href="/">
          <Flex align="center">
            <IconButton icon={<RepeatIcon/>} />
            <Text fontSize="lg" fontWeight="600">Swap</Text>
          </Flex>
        </Link>

        <Link href="/">
          <Flex align="center">
            <IconButton icon={<RepeatIcon/>} />
            <Text fontSize="lg" fontWeight="600">Swap</Text>
          </Flex>
        </Link>

        <Link href="/">
          <Flex align="center">
            <IconButton icon={<RepeatIcon/>} />
            <Text fontSize="lg" fontWeight="600">Swap</Text>
          </Flex>
        </Link>

        <Link href="/">
          <Flex align="center">
            <IconButton icon={<RepeatIcon/>} />
            <Text fontSize="lg" fontWeight="600">Swap</Text>
          </Flex>
        </Link>
      </VStack>
    </MotionBox>

  );
};

export default MobileNav;
