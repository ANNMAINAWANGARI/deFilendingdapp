import React from 'react';
import {
  Box,
  Container,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Typography,
  TableBody,
  Avatar,
  Button,
  Paper
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/Navbar';
import { tableCellClasses } from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';
const stakeRows = [
  {
    avatarLetter: 'D',
    token: 'Dai',
    amount: '200.93',
    increase: '5.5',
    decrease: '4.7',
    tokenShort: 'DAI',
    amountToken: '0.4657DAI'
  },
  {
    avatarLetter: 'W',
    token: 'Weth',
    amount: '300.94',
    increase: '5.5',
    decrease: '4.7',
    tokenShort: 'WETH',
    amountToken: '0.4657WETH'
  },
  {
    avatarLetter: 'E',
    token: 'Ether',
    amount: '100.56',
    increase: '5.5',
    decrease: '4.7',
    tokenShort: 'ETH',
    amountToken: '0.4657ETH'
  },
  {
    avatarLetter: 'F',
    token: 'Fau',
    amount: '600.95',
    increase: '5.5',
    decrease: '4.7',
    tokenShort: 'FAU',
    amountToken: '0.4657FAU'
  }
];

const useStyles = makeStyles(theme => ({}));
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
          marginTop: 10,
          padding: 1
        }}
      >
        <Typography variant="h2" align="center" gutterBottom color="common.white">
          A Blockchain Loan Lending Decentralized Application
        </Typography>
        <Typography variant="h6" align="center" gutterBottom color="gray">
          Borrow and Lend loans on the blockchain while earning interest
        </Typography>
      </Container>

      <TableContainer component={Paper} sx={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none'
            }
          }}
        >
          <TableHead sx={{ backgroundColor: 'primary.main' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }} align="left">
                Logo
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="center">
                Token Name
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="center">
                Amount
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="center">
                Supply %
              </TableCell>
              <TableCell sx={{ color: 'white' }} align="center">
                Borrow
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stakeRows.map(strow => (
              <TableRow key={strow.token}>
                <TableCell align="right">
                  <Avatar sx={{ background: '#240b36', padding: 1 }}>{strow.avatarLetter}</Avatar>
                </TableCell>
                <TableCell align="left">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5">{strow.token}</Typography>
                    <Typography color="primary">{strow.tokenShort}</Typography>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5">${strow.amount}</Typography>
                    <Typography color="primary">{strow.amountToken}</Typography>
                  </div>
                </TableCell>
                <TableCell align="left">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5" color="green">
                      +{strow.increase}%
                    </Typography>
                    <Typography variant="h5" color="red">
                      - {strow.decrease}%
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" onClick={() => navigate('/borrow')}>
                    Borrow
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
