import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { tweet } from '../utils/tweetRequests';
import { Tweet } from './Tweet';

export const ProfileFeed = ({ userID, user }) => {
  const [tweetsFetched, setTweetsFetched] = useState([]);
  useEffect(() => {
    handleFeed(localStorage.getItem('token'));
  }, []);

  const handleFeed = async token => {
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

      <Box>
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
        No more Tweets
      </Box>
    </Box>
  );
};
