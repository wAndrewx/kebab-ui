import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import {
  ChatIcon,
  DeleteIcon,
  Icon,
  RepeatIcon,
  StarIcon,
} from '@chakra-ui/icons';
import { TweetButtons } from './TweetButtons';
import { tweet } from '../utils/tweetRequests';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const Tweet = ({
  likes,
  reKebabs,
  content,
  user,
  date,
  id,
  handleDeleteTweet,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [tweetLikes, setTweetLikes] = useState(likes);

  const [isReKebab, setisReKebab] = useState(false);
  const [rtNums, setRTNum] = useState(reKebabs);

  const [isOwnerTweet, setIsOwnerTweet] = useState();

  useEffect(() => {
    setIsOwnerTweet(user.username === localStorage.getItem('user'));
  }, [isOwnerTweet, setIsOwnerTweet, user.username]);
  const handleLikes = async () => {
    if (!isLiked) {
      setTweetLikes(tweetLikes + 1);
      setIsLiked(true);
      await tweet(localStorage.getItem('token')).likeTweet(id);
    } else if (isLiked) {
      setTweetLikes(tweetLikes - 1);
      setIsLiked(false);
      await tweet(localStorage.getItem('token')).likeTweet(
        { like: tweetLikes },
        id
      );
    }
  };

  const handleRetweet = async () => {
    if (!isReKebab) {
      setRTNum(rtNums + 1);
      setisReKebab(true);
      await tweet(localStorage.getItem('token')).reTweet(id);
    } else if (isReKebab) {
      setRTNum(rtNums - 1);
      setisReKebab(false);
      await tweet(localStorage.getItem('token')).reTweet(id);
    }
  };

  const handleDel = async () => {
    handleDeleteTweet(id);
  };
  return (
    <Box display="flex" borderBottom="1px" borderColor="gray.500">
      <Link to={{ pathname: `/${user.username}`, state: { userID: user.id } }}>
        <Flex
          boxSize="14"
          bg="blue.200"
          rounded="full"
          align="center"
          justifyContent="center"
          fontWeight="bold"
          mx="2"
          mt="4"
          position="absolute"
        >
          {user.username[0]}
        </Flex>
      </Link>
      <Stack direction="column" mt="4" ml="20">
        <Box
          id="username"
          display="flex"
          alignSelf="baseline"
          fontWeight="bold"
          px="2"
        >
          <Link
            to={{ pathname: `/${user.username}`, state: { userID: user.id } }}
          >
            {user ? user.username : 'null'}
          </Link>
        </Box>
        <Box
          id="content"
          fontSize="md"
          display="flex"
          alignSelf="baseline"
          m="0"
          p="2"
        >
          {content}
        </Box>
        <Box
          id="tweet-buttons"
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          pr="16"
          m="0"
        >
          {isOwnerTweet && (
            <TweetButtons type={<DeleteIcon />} fn={handleDel} />
          )}
          <TweetButtons
            type={<RepeatIcon />}
            number={rtNums || 0}
            fn={handleRetweet}
          />
          <TweetButtons
            type={<StarIcon />}
            number={tweetLikes || 0}
            fn={handleLikes}
          />
        </Box>
      </Stack>
    </Box>
  );
};
