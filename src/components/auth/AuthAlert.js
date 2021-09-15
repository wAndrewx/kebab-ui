import { Alert, AlertIcon } from '@chakra-ui/react';

export const AuthAlert = ({ message }, props) => {
  console.log(message)
  const alert = () => {
    return (
      <Alert rounded="full">
        <AlertIcon />
        {message}
      </Alert>
    );
  };

  return <>{message && alert()}</>;
};
