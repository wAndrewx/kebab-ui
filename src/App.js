import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { TwitterPage } from '../src/pages/TwitterPage';
import { LoginPage } from '../src/pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { VerifyPage } from './pages/VerifyPage';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/feed">
            <Box fontSize="xl">
              <TwitterPage />
            </Box>
          </Route>
          <Route exact path="/404">
            <NotFoundPage />
          </Route>
          <Route exact path="/:user">
            <Box fontSize="xl">
              <ProfilePage />
            </Box>
          </Route>
        </Switch>
        <Route exact path="/verify/:hash">
          <VerifyPage />
        </Route>
        <Route exact path="/">
          <LoginPage />
        </Route>
      </Router>
    </ChakraProvider>
  );
}

export default App;
