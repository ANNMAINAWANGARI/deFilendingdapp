import React from 'react';
import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PaidIcon from '@mui/icons-material/Paid';
import SendIcon from '@mui/icons-material/Send';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';

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
      <Box
        mt={10}
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
      {/*<Box
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
        <Button
          variant="contained"
          sx={{ display: 'flex', alignItems: 'center' }}
          className={classes.buttonIcon}
          onClick={() => navigate('/lend')}
        >
          <SendIcon fontSize="small" sx={{ m: 1 }} />
          Lend crypto
        </Button>
      </Box>*/}
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
            <Button variant="contained">Borrow</Button>
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
            <Button variant="contained">Borrow</Button>
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
            <Button variant="contained">Borrow</Button>
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
            <Button variant="contained">Borrow</Button>
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
            <Button variant="contained">Borrow</Button>
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
            <Button variant="contained">Borrow</Button>
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
            <Button variant="contained">Borrow</Button>
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
            <Button variant="contained">Borrow</Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Homepage;
