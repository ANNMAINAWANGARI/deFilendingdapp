import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/Navbar';

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  WaitingButton: {
    '&:hover': {
      backgroundColor: 'white'
    }
  }
}));
const Homepage = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        background: '#240b36',
        width: '100%',
        height: '100vh'
      }}
    >
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: 20,
          padding: 1
        }}
      >
        <Typography variant="h2" align="center" gutterBottom color="common.white">
          A Blockchain Loan Lending Decentralized Application
        </Typography>
        <Typography variant="h6" align="center" gutterBottom color="gray">
          Borrow and Lend loans on the blockchain while earning interest
        </Typography>
        <Box mt={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button
            variant="contained"
            className={classes.WaitingButton}
            sx={{ color: 'primary.main', backgroundColor: 'white', marginRight: 2 }}
            onClick={() => navigate('/borrow')}
          >
            Join the waiting list
          </Button>
          <Button sx={{ border: '1px solid white' }}>Read the whitepaper</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;
