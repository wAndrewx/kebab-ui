import { Button } from '@chakra-ui/button';
import { Flex, Link, Text } from '@chakra-ui/layout';
import { ArrowForwardIcon } from '@chakra-ui/icons';
export const NotFoundPage = () => {
  return (
    <Flex direction="column" justify="center" h="100vh" align="center">
      <Text fontSize="8xl" m="4" p="2">
        404
        <Text fontSize="4xl">
          Page not found
          <Link href="/">
            <Button w="100%" rightIcon={<ArrowForwardIcon />}>
              Continue
            </Button>
          </Link>
        </Text>
      </Text>
    </Flex>
  );
};
