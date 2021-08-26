import React, { useCallback, useEffect, useState } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { TwitterPage } from '../src/pages/TwitterPage';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="start" fontSize="xl">
        <TwitterPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
