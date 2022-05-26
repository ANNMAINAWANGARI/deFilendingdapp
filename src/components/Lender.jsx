import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

const Lender = ({ loanDuration, loanAmount, lender }) => {
  return (
    <Paper
      sx={{
        margin: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        //backgroundColor: 'green',
        //width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        mr={2}
        p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItem: 'center',
          //width: '100%',
          //backgroundColor: 'blue',
          justifyContent: 'space-between'
        }}
      >
        <Typography gutterBottom>{lender}</Typography>
        <Typography color="primary" gutterBottom>
          {loanAmount}ETH
        </Typography>
        <Typography color="primary" gutterBottom>
          {loanDuration * 30}days
        </Typography>
      </Box>
      <Button variant="contained" sx={{ marginRight: '15px' }}>
        Pay
      </Button>
    </Paper>
  );
};

export default Lender;
