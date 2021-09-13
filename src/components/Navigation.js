import {
  Stack,
  Box,
  useColorModeValue,
  Text,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { NavButton } from './NavButtons';
export const Navigation = () => {
  const icon = useColorModeValue('light-', 'dark-');
  console.log(`${icon}home.png`);
  return (
    <Flex dir="row" justifyContent="end" px="2" position="fixed">
      <Stack
        direction="column"
        align="flex-start"
        fontWeight="bold"
        mt="2"
        spacing="4"
      >
        <NavButton fallbackSrc={`${icon}twitter.png`} path="feed" />
        <NavButton fallbackSrc={`${icon}home.png`} name="Home" path="feed" />
        {/* <NavButton
          fallbackSrc={`${icon}user.png`}
          name="Profile"
          path={localStorage.getItem('user')}
        /> */}
        <a href="https://github.com/wAndrewx/kebab-api">
          <Button rounded="full" p="3" h="100%" variant="ghost">
            <Image fallbackSrc={`${icon}github.png`} />
            <Text pl="6" fontSize="xl" fontWeight="light" letterSpacing="wider">
              GitHub
            </Text>
          </Button>
        </a>
        <Box>
          <ColorModeSwitcher />
        </Box>
        <Button
          as="button"
          rounded="full"
          fontWeight="bold"
          w="80%"
          p="3"
          colorScheme="twitter"
          alignSelf="center"
          bg="twitter.500"
        >
          Tweet
        </Button>
        <Text p="3" fontSize="xs" color="twitter.300">
          Created by Andrew Huynh
        </Text>
      </Stack>
    </Flex>
  );
};
