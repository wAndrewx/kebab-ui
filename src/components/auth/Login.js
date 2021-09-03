import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useInput } from '../utils/useInput';
import { login } from '../utils/auth';
import { useHistory } from 'react-router-dom';
import { AuthAlert } from './AuthAlert';

export const Login = () => {
  const username = useInput();
  const password = useInput();
  const [notification, setNotif] = useState('');
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const loginObject = {
      password: password.data,
      username: username.data,
    };
    const logging = await login(loginObject);
    setNotif(logging.message);
    if (logging.token) {
      localStorage.setItem('token', logging.token);
      localStorage.setItem('isLogged', true);
      localStorage.setItem('user', logging.user);
      history.push('/feed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          rounded="full"
          onChange={e => {
            username.handleData(e);
          }}
          type="text"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          rounded="full"
          onChange={e => {
            password.handleData(e);
          }}
          type="password"
        />
      </FormControl>
      <Button my="4" rounded="full" type="submit">
        Submit
      </Button>
      <AuthAlert message={notification} />
    </form>
  );
};
