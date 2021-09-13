import { Alert, AlertIcon } from '@chakra-ui/alert';
import { Button } from '@chakra-ui/button';
import { Center, Flex, Link } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { verify } from '../components/utils/auth';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const VerifyPage = () => {
  const [isVerified, setisVerified] = useState(false);
  const id = useParams();
  useEffect(() => {
    handleVerify(id.hash);
  }, [id.hash]);

  const handleVerify = async hash => {
    try {
      const hashVerify = await verify(hash);
      if (hashVerify.status === 200) {
        setisVerified(hashVerify.data);
      } else {
        setisVerified(hashVerify.data);
      }
    } catch (error) {
      setisVerified('Server is down');
    }
  };
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100vw"
      h="100vh"
    >
      <Center>
        <Alert fontSize="2xl" m="2" rounded="md">
          <AlertIcon />
          {isVerified}
        </Alert>
      </Center>
      <Link href="/">
        <Button m="2" rightIcon={<ArrowForwardIcon />}>
          Continue
        </Button>
      </Link>
    </Flex>
  );
};
