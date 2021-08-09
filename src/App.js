import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import {Blob} from "./components/Blob"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="start" fontSize="xl">
        <ColorModeSwitcher />
        <Blob/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
