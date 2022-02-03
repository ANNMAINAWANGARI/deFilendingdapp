import React from 'react';
import { Avatar, Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
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
        height: '100%'
      }}
    >
      {/**appbar */}
      <Navbar />
      {/**Homepage balance */}
      {/**Homepage Main */}
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 10, padding: 1 }}
        className={classes.homeMainBox}
      >
        <Typography variant="h2" align="center" gutterBottom color="common.white">
          A Blockchain Loan Lending Decentralized Application
        </Typography>
        <Typography variant="h6" align="center" color="gray">
          Borrow and Lend loans on the blockchain while earning interest
        </Typography>
      </Container>
      <Card sx={{ maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
        <CardContent sx={{}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <Avatar sx={{ background: '#240b36', padding: 1 }}>D</Avatar>
            <Typography variant="h6">DAI</Typography>
            <Typography variant="h6">100</Typography>
            <Box>
              <Typography variant="h6" color="green">
                +5.5%
              </Typography>
              <Typography variant="h6" color="red">
                - 4.8%
              </Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate('/borrow')}>
              Borrow
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <Avatar sx={{ background: '#240b36', padding: 1 }}>E</Avatar>
            <Typography variant="h6">ETH</Typography>
            <Typography variant="h6">100</Typography>
            <Box>
              <Typography variant="h6" color="green">
                +5.5%
              </Typography>
              <Typography variant="h6" color="red">
                - 4.8%
              </Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate('/borrow')}>
              Borrow
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <Avatar sx={{ background: '#240b36', padding: 1 }}>W</Avatar>
            <Typography variant="h6">WETH</Typography>
            <Typography variant="h6">100</Typography>
            <Box>
              <Typography variant="h6" color="green">
                +5.5%
              </Typography>
              <Typography variant="h6" color="red">
                - 4.8%
              </Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate('/borrow')}>
              Borrow
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <Avatar sx={{ background: '#240b36', padding: 1 }}>F</Avatar>
            <Typography variant="h6">FAU</Typography>
            <Typography variant="h6">100</Typography>
            <Box>
              <Typography variant="h6" color="green">
                +50.0%
              </Typography>
              <Typography variant="h6" color="red">
                - 6.8%
              </Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate('/borrow')}>
              Borrow
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <Avatar sx={{ background: '#240b36', padding: 1 }}>B</Avatar>
            <Typography variant="h6">BTC</Typography>
            <Typography variant="h6">100</Typography>
            <Box>
              <Typography variant="h6" color="green">
                +5.5%
              </Typography>
              <Typography variant="h6" color="red">
                - 4.8%
              </Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate('/borrow')}>
              Borrow
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <Avatar sx={{ background: '#240b36', padding: 1 }}>F</Avatar>
            <Typography variant="h6">FAU</Typography>
            <Typography variant="h6">100</Typography>
            <Box>
              <Typography variant="h6" color="green">
                +8.8%
              </Typography>
              <Typography variant="h6" color="red">
                - 1.5%
              </Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate('/borrow')}>
              Borrow
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <Avatar sx={{ background: '#240b36', padding: 1 }}>F</Avatar>
            <Typography variant="h6">FAU</Typography>
            <Typography variant="h6">100</Typography>
            <Box>
              <Typography variant="h6" color="green">
                +25.5%
              </Typography>
              <Typography variant="h6" color="red">
                - 2.8%
              </Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate('/borrow')}>
              Borrow
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <Avatar sx={{ background: '#240b36', padding: 1 }}>F</Avatar>
            <Typography variant="h6">FAU</Typography>
            <Typography variant="h6">100</Typography>
            <Box>
              <Typography variant="h6" color="green">
                +9.5%
              </Typography>
              <Typography variant="h6" color="red">
                - 4.1%
              </Typography>
            </Box>
            <Button variant="contained" onClick={() => navigate('/borrow')}>
              Borrow
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Homepage;
