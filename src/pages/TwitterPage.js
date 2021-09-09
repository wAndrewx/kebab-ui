import { Navigation } from '../components/Navigation';
import { Feed } from '../components/feed/Feed';
import { Grid, GridItem } from '@chakra-ui/react';
export const TwitterPage = () => {
  return (
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
        <Feed />
      </GridItem>
      <GridItem colStart="3" colSpan="1" ></GridItem>
    </Grid>
  );
};
