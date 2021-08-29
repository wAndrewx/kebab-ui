import { Box, Flex, Text } from '@chakra-ui/react';
import { Register } from '../components/auth/Register';
import { Login } from '../components/auth/Login';

export const LoginPage = () => {
  return (
    <Flex direction="row" h="100%">
      <Box bg="red.900" id="landing-page-info" w="70%" h="100vh">
        <Text id="landing-title">Twitter mock app interface</Text>
        <Text>
          This is the front end of the twitter mock app. The API is limited to tweets and authentication only 
        </Text>
      </Box>
      <Box bg="green.900" w="30%" h="100vh">
        <Register />
        <Login />
      </Box>
    </Flex>
  );
};
