import { Box, Button, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NavButton = ({ fallbackSrc, name, path }) => {
  return (
    <Link to={`/${path}`}>
      <Button
        rounded="full"
        p="3"
        h="100%"
        variant="ghost"
      >
        <Image fallbackSrc={fallbackSrc} />
        {name && (
          <Text pl="6" fontSize="xl" fontWeight="light" letterSpacing="wider">
            {name}
          </Text>
        )}
      </Button>
    </Link>
  );
};
