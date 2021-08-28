import { Box, Textarea } from '@chakra-ui/react';
import { Tweet } from './Tweet';
//tweets
export const Feed = () => {
  return (
    <Box height="100vh" borderX="1px" borderColor="gray.500" maxW="600px">
      {/* get tweet in here and then put shit in <Tweet> */}
      <Box
        pt="2"
        w="100%"
        h="6vh"
        alignItems="baseline"
        display="flex"
        px="4"
        fontWeight="bold"
        position="static"
        borderBottom="1px"
        borderColor="gray.500"
        display="flex"
      >
        Latest Tweets
      </Box>
      <Box>
        <Textarea resize="none" />
      </Box>
      <Box position="absolute" maxW="600px" w='100%' >
        <Tweet />
      </Box>
    </Box>
  );
};
