import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { TwitterPage } from '../src/pages/TwitterPage';
import { LoginPage } from '../src/pages/LoginPage';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Route path="/feed">
          <Box textAlign="start" fontSize="xl">
            <TwitterPage />
          </Box>
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Router>
    </ChakraProvider>
  );
}

export default App;
