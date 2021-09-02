import { Navigation } from '../components/Navigation';
import { Feed } from '../components/feed/Feed';
import { Grid, GridItem } from '@chakra-ui/react';
export const TwitterPage = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem colStart="1" position="fixed" colSpan="1">
        <Navigation />
      </GridItem>
      <GridItem colStart="2" colSpan="1">
        <Feed />
      </GridItem>
      <GridItem colStart="3" colSpan="1"></GridItem>
    </Grid>
  );
};
