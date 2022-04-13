import React from 'react';
import Item from './Item';
import { Grid } from '@mui/material';
import House1 from '../assets/house1.jpg';
import House2 from '../assets/house2.jpg';
import House3 from '../assets/house3.jpg';
import House4 from '../assets/house4.jpg';
const Mortgage = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 2 }}>
      <Grid item xs={12} sm={4} md={3}>
        <Item img={House1} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Item img={House2} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Item img={House3} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Item img={House4} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Item img={House1} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Item img={House2} />
      </Grid>
    </Grid>
  );
};

export default Mortgage;
