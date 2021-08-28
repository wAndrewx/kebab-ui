import { Stack, Box, useColorModeValue, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { NavButton } from './NavButtons';
export const Navigation = () => {
  const icon = useColorModeValue('light-', 'dark-');
  console.log(`${icon}home.png`);
  return (
    <Stack
      direction="column"
      align="flex-start"
      fontWeight="bold"
      mt="2"
      mr="12"
      w="12vw"
      spacing="4"
      position='relative'
    >
      <NavButton fallbackSrc={`${icon}twitter.png`} path="feed" />
      <NavButton fallbackSrc={`${icon}home.png`} name="Home" path="feed" />
      <NavButton fallbackSrc={`${icon}user.png`} name="Profile" />
      <NavButton fallbackSrc={`${icon}github.png`} name="GitHub" />
      <Box>
        <ColorModeSwitcher />
      </Box>
      <Box
        as="button"
        rounded="full"
        fontWeight="bold"
        w="80%"
        p="3"
        bg="twitter.500"
      >
        Tweet
      </Box>
      <Text p="3" fontSize="xs" color="twitter.300">
        Created by Andrew Huynh
      </Text>
    </Stack>
  );
};
