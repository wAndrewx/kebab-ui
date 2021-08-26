import { Stack, Box, useColorModeValue, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { NavButton } from './NavButtons';
export const Navigation = () => {
  const icon = useColorModeValue('light-', 'dark-');
  console.log(`${icon}home.png`);
  return (
    <Stack direction="column" align="flex-start" fontWeight="bold" mx="8">
      <NavButton fallbackSrc={`${icon}twitter.png`} />
      <NavButton fallbackSrc={`${icon}home.png`} name="Home" />
      <NavButton fallbackSrc={`${icon}user.png`} name="Profile" />
      <NavButton fallbackSrc={`${icon}github.png`} name="GitHub" />
      <ColorModeSwitcher />
      <Box
        as="button"
        rounded="full"
        fontWeight="bold"
        w="85%"
        p="2"
        bg="twitter.500"
      >
        Tweet
      </Box>
      <Text p="3">Created by Andrew Huynh</Text>
    </Stack>
  );
};
