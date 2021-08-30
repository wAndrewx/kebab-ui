import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { Register } from '../components/auth/Register';
import { Login } from '../components/auth/Login';

export const LoginPage = () => {
  return (
    <Flex direction="row" h="100%">
      <Box bg="red.900" id="landing-page-info" w="70%" h="100vh">
        <Text id="landing-title">Twitter mock app interface</Text>
        <Text>
          This is the front end of the twitter mock app. The API is limited to
          tweets and authentication only
        </Text>
      </Box>

      <Tabs w="30%" variant="soft-rounded">
        <TabList p="2">
          <Tab mx="2">Login</Tab>
          <Tab mx="2">Register</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
