import React from 'react';
import { AppBar, Box, Button, Container, Hidden, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PaidIcon from '@mui/icons-material/Paid';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';

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
  return (
    <Box
      sx={{ background: /*'linear-gradient(to right, #200122, #6f0000)'*/ '#240b36', width: '100%', height: '100vh' }}
    >
      {/**appbar */}
      <AppBar position="sticky" elevation={0} sx={{ background: 'transparent' }}>
        <Container maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/**MenuIcon */}
              <Hidden smUp>
                <IconButton>
                  <MenuIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>
              </Hidden>
              {/**Logo */}
              <Hidden smDown>
                <Typography variant="h5" color="primary.main">
                  LBSP
                </Typography>
              </Hidden>
            </Box>
            {/**Menu-items */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Hidden mdDown>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Lend
                </Typography>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Borrow
                </Typography>
                <Typography variant="h6" sx={{ p: 2 }}>
                  Stake
                </Typography>
                <Typography variant="h6" sx={{ p: 2 }}>
                  PayOff
                </Typography>
              </Hidden>
            </Box>
            {/**Login Button */}
            <Button variant="contained">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
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
        >
          <PaidIcon fontSize="small" sx={{ m: 1 }} />
          Borrow crypto
        </Button>
        {/**lend crypto */}
        <Button variant="contained" sx={{ display: 'flex', alignItems: 'center' }} className={classes.buttonIcon}>
          <SendIcon fontSize="small" sx={{ m: 1 }} />
          Lend crypto
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
