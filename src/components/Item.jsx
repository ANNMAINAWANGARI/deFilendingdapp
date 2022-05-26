import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Item = ({ img, address, itemName, location, description, collateralDeposits, loanDuration }) => {
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
            {address}
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
            <Button variant="contained">Chat</Button>
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
