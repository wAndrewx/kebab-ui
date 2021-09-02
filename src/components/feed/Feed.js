import { Box, Button, Flex, Textarea, VStack } from '@chakra-ui/react';
import { Tweet } from './Tweet';
//tweets
export const Feed = () => {
  return (
    <Box height="100%" borderX="1px" borderColor="gray.500" maxW="600px">
      {/* get tweet in here and then put shit in <Tweet> */}
      <Box
        pt="2"
        w="100%"
        h="6vh"
        alignItems="baseline"
        display="flex"
        px="4"
        fontWeight="bold"
        position="relative"
        borderBottom="1px"
        borderColor="gray.500"
        zIndex="2"
      >
        Latest Tweets
      </Box>
      <Box
        borderBottom="1px"
        borderColor="gray.500"
        display="flex"
        justifyContent="space-between"
      >
        <Flex
          boxSize="14"
          bg="blue.200"
          rounded="full"
          align="center"
          justifyContent="center"
          fontWeight="bold"
          mx="2"
          mt="4"
        >
          A
        </Flex>
        <VStack align='end' w='100%'> 
          <Textarea
            resize="none"
            border="0"
            border="1px"
            alignSelf="baseline"
          />
          <Button>Tweet</Button>
        </VStack>
      </Box>
      <Box maxW="600px" >
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Box>
    </Box>
  );
};
