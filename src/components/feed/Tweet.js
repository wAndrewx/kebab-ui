import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { ChatIcon, Icon, RepeatIcon, StarIcon } from '@chakra-ui/icons';
import { TweetButtons } from './TweetButtons';

export const Tweet = () => {
  return (
    <Box bg="red.100" h="205px">
      <Flex></Flex>
      <Stack direction="column">
        <Box id="username" bg="salmon">
          @andrew
        </Box>
        <Box id="content" bg="blue.300">
          tweet here
        </Box>
        <Box
          id="tweet-buttons"
          bg="green.200"
          display="flex"
          alignItems="baseline"
          justifyContent="space-evenly"
        >
          <TweetButtons type={<ChatIcon />} number="2" />
          <TweetButtons type={<RepeatIcon />} number="2" />
          <TweetButtons type={<StarIcon />} number="2" />
        </Box>
      </Stack>
    </Box>
  );
};
