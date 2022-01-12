import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PaidIcon from '@mui/icons-material/Paid';
import SendIcon from '@mui/icons-material/Send';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  boxButton: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: 2
    }
  },
  buttonIcon: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      margin: 10
    }
  },
  homeMainBox: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 100
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
      {/**appbar */}
      <Navbar />
      {/**Homepage Main */}
      <Box
        mt={20}
        p={1}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        className={classes.homeMainBox}
      >
        <Typography variant="h2" align="center" gutterBottom color="common.white">
          A Blockchain Loan Lending Decentralized Application
        </Typography>
        <Typography variant="h6" align="center" color="gray">
          Borrow and Lend loans on the blockchain while earning interest
        </Typography>
      </Box>
      {/**buttons */}
      <Box
        mt={2}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        className={classes.boxButton}
      >
        <Button
          variant="contained"
          sx={{ marginRight: 2, display: 'flex', alignItems: 'center' }}
          className={classes.buttonIcon}
          onClick={() => navigate('/borrow')}
        >
          <PaidIcon fontSize="small" sx={{ m: 1 }} />
          Borrow crypto
        </Button>
        {/**lend crypto */}
        <Button
          variant="contained"
          sx={{ display: 'flex', alignItems: 'center' }}
          className={classes.buttonIcon}
          onClick={() => navigate('/lend')}
        >
          <SendIcon fontSize="small" sx={{ m: 1 }} />
          Lend crypto
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
