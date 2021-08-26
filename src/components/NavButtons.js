import { Box, Button, Image, Text } from '@chakra-ui/react';

export const NavButton = ({ fallbackSrc, name, handler }) => {
  return (
    <Button
      rounded="full"
      p="3"
      h="100%"
      alignItems="center"
      display="inline-flex"
      variant="ghost"
    >
      <Image fallbackSrc={fallbackSrc} />
      {name && (
        <Text pl="6" fontSize="xl" fontWeight="light" letterSpacing="wider">
          {' '}
          {name}
        </Text>
      )}
    </Button>
  );
};
