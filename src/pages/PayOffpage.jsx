import { Box } from '@mui/material';
import React from 'react';
import Lender from '../components/Lender';
import Navbar from '../components/Navbar';

const PayOffpage = () => {
  return (
    <div>
      <Navbar />
      <Box
        mt={2}
        sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}
      >
        <Lender />
        <Lender />
        <Lender />
        <Lender />
        <Lender />
      </Box>
    </div>
  );
};

export default PayOffpage;
