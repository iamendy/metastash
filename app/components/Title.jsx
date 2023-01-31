"use client"
import {Box, Divider, Heading} from "@chakra-ui/react";

const Title = ({text}) => {
  return (
    <Box mb={4}>
      <Heading as="h2" variant="pageTitle">{text}</Heading>
      <Divider/>
    </Box>
  );
};

export default Title;
