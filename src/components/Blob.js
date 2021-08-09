import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { io } from 'socket.io-client';

export const Blob = () => {
  const [blobber, setblobber] = useState('');
  const socket = io('http://localhost:8080');
  console.log(socket);
  const handleKebab = () => {
    socket.emit('kebabDisplay');
    console.log("click")
  };
  return (
    <div>
      Tests
      <Input w="25%" type="text" value={blobber} />
      <Button onClick={handleKebab}></Button>
    </div>
  );
};
