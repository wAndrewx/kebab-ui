import { Box, Button, Flex, Textarea, VStack } from '@chakra-ui/react';
import { useCallback, useState, useEffect } from 'react';
import { tweet } from '../utils/tweetRequests';
import { useInput } from '../utils/useInput';
import { Tweet } from './Tweet';
export const Feed = () => {
  const [tweetsFetched, setTweetsFetched] = useState([]);
  const contentTweet = useInput();
  useEffect(() => {
    handleFeed(localStorage.getItem('token'));
  }, []);

  const handleFeed = async token => {
    let feed = await tweet(token).getTweet();
    feed.data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setTweetsFetched(feed.data);
  };

  const handlePost = async e => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    let content = { content: contentTweet.data };
    if (contentTweet.data.length > 0) {
      let create = await tweet(token).makeTweet(content);
      setTweetsFetched(
        tweetsFetched.concat(create.data).sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })
      );
      contentTweet.resetField();
    }
  };

  const handleDeleteTweet = async id => {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    console.log(id);
    await tweet(token).deleteTweet(id);
    setTweetsFetched(
      tweetsFetched.filter(val => {
        return id !== val.id;
      })
    );
  };

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
            placeholder={"What's happening?"}
            onChange={e => {
              contentTweet.handleData(e);
              console.log(280 - e.target.value.length);
            }}
          />
          <Button
            mx="4"
            alignSelf="end"
            colorScheme="twitter"
            bg="twitter.500"
            rounded="full"
            onClick={handlePost}
          >
            Tweet
          </Button>
        </VStack>
      </Box>
      <Box maxW="600px">
        {tweetsFetched.map((item, index) => {
          return (
            <Tweet
              likes={item.likes}
              usersLiked={item.usersLiked}
              usersRetweet={item.usersRetweet}
              reKebabs={item.reKebabs}
              content={item.content}
              user={item.user}
              date={item.date}
              id={item.id}
              handleDeleteTweet={handleDeleteTweet}
            />
          );
        })}
      </Box>
    </Box>
  );
};
