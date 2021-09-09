import { Box, Button, IconButton, Text } from '@chakra-ui/react';

export const TweetButtons = ({ number, fn, type, id }) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        rounded="full"
        variant="ghost"
        boxSize="8"
        icon={type}
        onClick={fn}
      ></IconButton>
      <Text fontSize="md" fontWeight="light" letterSpacing="wider">
        {number}
      </Text>
    </Box>
  );
};
