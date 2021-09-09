import { Grid, GridItem } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { ProfileFeed } from '../components/feed/ProfileFeed';
import { Navigation } from '../components/Navigation';

export const ProfilePage = () => {
  const location = useLocation();
  let { user } = useParams();
  console.log(location.state.userID, 'should be an id');
  useEffect(() => {
    //   if there is no user redirect to 404
    // if there is no
  }, []);
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem colStart="1" colSpan="1" display="flex" justifyContent="end">
        <Navigation />
      </GridItem>
      <GridItem colStart="2" colSpan="1" w="600px">
        <ProfileFeed userID={location.state.userID} user={user} />
      </GridItem>
      <GridItem colStart="3" colSpan="1"></GridItem>
    </Grid>
  );
};
