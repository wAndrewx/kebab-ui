import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useInput } from '../utils/useInput';
import { register } from '../utils/auth';
import { useState } from 'react';
import { AuthAlert } from './AuthAlert';
export const Register = () => {
  const email = useInput();
  const username = useInput();
  const password = useInput();

  const [notification, setNotif] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const registerObject = {
      username: username.data,
      password: password.data,
      email: email.data,
    };
    // console.log(registerObject);
    const reg = await register(registerObject);

    setNotif(reg.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          rounded="full"
          onChange={e => {
            email.handleData(e);
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="username"
          rounded="full"
          onChange={e => {
            username.handleData(e);
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          rounded="full"
          type="password"
          onChange={e => {
            password.handleData(e);
          }}
        />
      </FormControl>
      <Button my="4" rounded="full" type="submit" style={{ isLoading: false }}>
        Submit
      </Button>
      <AuthAlert message={notification} />
    </form>
  );
};
