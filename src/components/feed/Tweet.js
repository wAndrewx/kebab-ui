import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { ChatIcon, Icon, RepeatIcon, StarIcon } from '@chakra-ui/icons';
import { TweetButtons } from './TweetButtons';
import { tweet } from '../utils/tweetRequests';
export const Tweet = ({ likes, reKebabs, content, user, date, id }) => {
  const handleCreateTweet = () => {};
  const handleLikes = () => {};
  const handleDelete = () => {};
  const handleRetweet = () => {};
  return (
    <Box display="flex" borderBottom="1px" borderColor="gray.500">
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
      <Stack direction="column" mt="4" ml="20">
        <Box
          id="username"
          display="flex"
          alignSelf="baseline"
          fontWeight="bold"
          px="2"
        >
          {user ? user.username : 'null'}
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
          <TweetButtons type={<ChatIcon />} number={'0'} />
          <TweetButtons type={<RepeatIcon />} number={reKebabs || 0} />
          <TweetButtons type={<StarIcon />} number={likes || 0} />
        </Box>
      </Stack>
    </Box>
  );
};
