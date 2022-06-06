import { Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Item = ({ img, addressBorrower, itemName, location, description, collateralDeposits, loanDuration }) => {
  const address = useSelector(state => state.connectWallet.address);
  let navigate = useNavigate();
  return (
    <div style={{}}>
      <Card>
        <CardMedia component="img" height="300" image={img} alt={itemName} />
        <CardContent>
          <Typography gutterBottom sx={{ fontSize: '15px' }} color="primary">
            {location}
          </Typography>
          <Typography gutterBottom sx={{ color: 'gray' }}>
            {collateralDeposits} ETH Collateral
          </Typography>
          <Typography gutterBottom sx={{ color: 'gray' }}>
            Loan duration period is {loanDuration * 30} days
          </Typography>
          <Typography gutterBottom sx={{ color: 'gray' }}>
            {description}
          </Typography>
          <Typography gutterBottom sx={{ fontWeight: 800 }}>
            {addressBorrower}
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '40px'
            }}
          >
            <Box>
              <Button
                variant="contained"
                onClick={() => {
                  navigate(`/chat/${addressBorrower}`);
                }}
              >
                Chat
              </Button>
              {addressBorrower.toUpperCase() != address.toUpperCase() && (
                <Button variant="contained" sx={{ marginLeft: 2 }}>
                  Lend
                </Button>
              )}

              {addressBorrower.toUpperCase() === address.toUpperCase() && (
                <Button variant="contained" sx={{ marginLeft: 2 }}>
                  Agree
                </Button>
              )}
            </Box>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" sx={{ borderRadius: '80px', backgroundColor: '#240b36' }}>
                +
              </Button>
              <Typography sx={{ padding: 2 }}>Collateral</Typography>
              <Button variant="contained" sx={{ borderRadius: '80px', backgroundColor: '#240b36' }}>
                -
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Item;
