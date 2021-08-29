import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { ChatIcon, Icon, RepeatIcon, StarIcon } from '@chakra-ui/icons';
import { TweetButtons } from './TweetButtons';

export const Tweet = ({ name }) => {
  name = 'Andrew';
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
        {name[0]}
      </Flex>
      <Stack direction="column" mt="4" ml="20">
        <Box
          id="username"
          display="flex"
          alignSelf="baseline"
          fontWeight="bold"
          px="2"
        >
          andrew
        </Box>
        <Box
          id="content"
          fontSize="md"
          display="flex"
          alignSelf="baseline"
          m="0"
          p="2"
        >
          tweet herewefaefa tweet hereefaefweet here tweet hereawefawef tweet
          here tweet herasfefae tweet heasefaefre tweet here tweet here tweet
          here tweet here tweet here tweet here twaefawt here tweet here tweet
          here tweet here tweet here
        </Box>
        <Box
          id="tweet-buttons"
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          pr="16"
          m="0"
        >
          <TweetButtons type={<ChatIcon />} number="2" />
          <TweetButtons type={<RepeatIcon />} number="2" />
          <TweetButtons type={<StarIcon />} number="2" />
        </Box>
      </Stack>
    </Box>
  );
};
