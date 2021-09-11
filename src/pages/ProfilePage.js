import { Grid, GridItem } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { Redirect, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ProfileFeed } from '../components/feed/ProfileFeed';
import { Navigation } from '../components/Navigation';

export const ProfilePage = () => {
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();
  let { user } = useParams();
  useEffect(() => {
    if (!location.state) {
      console.log('poop');
      setRedirect(true);
    } else {
      setRedirect(false);
    }
  }, []);
  return (
    <div>
      {!redirect && (
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem
            colStart="1"
            colSpan="1"
            display="flex"
            justifyContent="end"
          >
            <Navigation />
          </GridItem>
          <GridItem colStart="2" colSpan="1" w="600px">
            <ProfileFeed userID={location.state} user={user} />
          </GridItem>
          <GridItem colStart="3" colSpan="1"></GridItem>
        </Grid>
      )}
      {redirect && <Redirect to="./404"></Redirect>}
    </div>
  );
};
