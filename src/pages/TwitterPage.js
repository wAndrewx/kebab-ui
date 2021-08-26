import { Navigation } from '../components/Navigation';
import { Feed } from '../components/feed/Feed';
import { Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
export const TwitterPage = () => {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colStart="1" justifySelf="end">
          <Navigation />
        </GridItem>
        <GridItem colStart="2">
          <Feed />
        </GridItem>
        <GridItem colStart="3"></GridItem>
      </Grid>
    </>
  );
};
