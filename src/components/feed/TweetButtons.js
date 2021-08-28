import { Box, Button, IconButton, Text } from '@chakra-ui/react';

export const TweetButtons = ({ number, clicked, type }) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        rounded="full"
        variant="ghost"
        boxSize="8"
        icon={type}
      ></IconButton>
      <Text fontSize="md" fontWeight="light" letterSpacing="wider">
        {number}
      </Text>
    </Box>
  );
};
