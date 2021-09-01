import {
  Box,
  Divider,
  Flex,
  Image,
  Link,
  Portal,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { Register } from '../components/auth/Register';
import { Login } from '../components/auth/Login';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const LoginPage = () => {
  return (
    <Flex direction="row" h="100%">
      <Box
        id="landing-page-info"
        w="70%"
        h="100vh"
        flexWrap="wrap"
        backgroundImage="login-2.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Text
          id="landing-title"
          fontWeight="bold"
          fontSize="8xl"
          mt="20"
          lineHeight="short"
          px="16"
          w="60vw"
          color="blackAlpha.900"
        >
          Twitter Mock Interface
        </Text>
        <Text
          id="landing-body"
          mt="20"
          fontSize="xl"
          p="8"
          w="60vw"
          color="whiteAlpha.900"
          bg="blackAlpha.600"
          rounded="2xl"
          m="16"
        >
          This is the front end, to interface the Twitter mock API. The API is
          hosted on AWS Lambda using serverless and managed by AWS API gateway.
          <Divider py="2" />
          You can checkout the code{' '}
          <Link
            textDecoration="underline"
            href="https://github.com/wAndrewx/kebab-api"
          >
            here
            <ExternalLinkIcon mx="2px" />
          </Link>
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
