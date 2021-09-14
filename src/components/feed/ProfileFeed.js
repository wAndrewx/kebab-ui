import { Box, Spinner, Flex, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { tweet } from '../utils/tweetRequests';
import { Tweet } from './Tweet';

export const ProfileFeed = ({ userID, user }) => {
  const [tweetsFetched, setTweetsFetched] = useState([]);
  const [feedIsLoading, setIsFeedLoading] = useState(false);

  useEffect(() => {
    handleFeed(localStorage.getItem('token'));
  }, []);

  const handleFeed = async token => {
    setIsFeedLoading(true);
    try {
      let feed;
      if (userID) {
        feed = await tweet(token).userProfileTweets(userID.userID);
      }
      feed.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setTweetsFetched(feed);
    } catch (error) {
      setTweetsFetched([]);
    }
    setIsFeedLoading(false);
  };

  const handleDeleteTweet = async id => {
    let token = localStorage.getItem('token');
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
        {user}'s Latest Tweets
      </Box>

      <Flex flexDirection="column" borderBottom="1px" borderColor="gray.500">
        {feedIsLoading && (
          <Spinner m="4" alignSelf="center" size="xl"></Spinner>
        )}
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
        <Text alignSelf="center" m="2">
          End of the road
        </Text>
      </Flex>
    </Box>
  );
};
