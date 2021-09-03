import { Box, Button, Flex, Textarea, VStack } from '@chakra-ui/react';
import { useCallback, useState, useEffect } from 'react';
import { tweet } from '../utils/tweetRequests';
import { Tweet } from './Tweet';
export const Feed = () => {
  const [tweetsFetched, setTweetsFetched] = useState([]);
  const [token, setToken] = useState();
  useEffect(() => {
    let localToken = localStorage.getItem('token');
    console.log(typeof localToken);
    setToken(localToken);
    handleFeed();
  }, []);
  const handleFeed = useCallback(async () => {
    let feed = await tweet(token).getTweet();
    setTweetsFetched(feed);
    console.log(feed);
  }, []);

  return (
    <Box height="100%" borderX="1px" borderColor="gray.500" maxW="600px">
      {/* get tweet in here and then put shit in <Tweet> */}
      <Box
        pt="2"
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
        flexDirection="row"
        flexBasis="auto"
        mt="4"
        pr="4"
        p="2"
      >
        <Flex
          boxSize="14"
          bg="blue.200"
          rounded="full"
          align="center"
          justifyContent="center"
          fontWeight="bold"
          mr="6"
          p="6"
        >
          A
        </Flex>

        <VStack w="100%">
          <Textarea
            resize="none"
            maxLength="280"
            overflowY=""
            variant="flushed"
          />
          <Button
            mx="4"
            alignSelf="end"
            colorScheme="twitter"
            bg="twitter.500"
            rounded="full"
          >
            Tweet
          </Button>
        </VStack>
      </Box>
      <Box maxW="600px">
        <Tweet />
      </Box>
    </Box>
  );
};
