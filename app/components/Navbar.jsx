import {Box, Button, Container, Flex, IconButton, Text, useColorMode} from '@chakra-ui/react';
import {LinkIcon, MoonIcon, SunIcon,HamburgerIcon} from "@chakra-ui/icons";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  //// Here's the signature
  // const value = useColorModeValue(lightModeValue, darkModeValue)
  return (
    <Box bg="blackAlpha.100" boxShadow="md">
    <Container>
    <Flex justify="space-between" align="center" as="nav" py="4">
      <Text color="gray.900" fontWeight="900" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text"
            fontSize="3xl"> MetaStash </Text>

      <Box>
        <IconButton
          colorScheme='teal'
          aria-label='Change scheme'
          boxSize="10"
          mr="4"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />

        <IconButton
          icon={<HamburgerIcon />}
        />

      </Box>
    </Flex>
    </Container>
    </Box>
  );
};

export default Navbar;
