import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useInput } from '../utils/useInput';
import { register } from '../utils/auth';
import { useState } from 'react';
import { AuthAlert } from './AuthAlert';
export const Register = () => {
  const email = useInput();
  const username = useInput();
  const password = useInput();

  const [notification, setNotif] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const registerObject = {
      username: username.data,
      password: password.data,
      email: email.data,
    };
    const reg = await register(registerObject);
    setLoading(false);
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
      <Button
        my="4"
        rounded="full"
        type="submit"
        isLoading={loading}
        loadingText={'Submitting'}
      >
        Submit
      </Button>
      <AuthAlert message={notification} />
    </form>
  );
};
