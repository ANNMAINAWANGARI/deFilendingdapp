import React from 'react';
import { Container, Typography, TextField, Box, InputAdornment, Button } from '@mui/material';

const BorrowForm = () => {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', height: '70vh' }}>
      <Box sx={{ width: '70%', height: '100%', marginTop: 5 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#240b36' }}>
          Borrow Form
        </Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <TextField
            required
            type="number"
            id="amount"
            label="Amount to borrow"
            helperText="Amount to borrow"
            name="Amount"
            fullWidth
            margin="1"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            sx={{ marginBottom: 4 }}
          />
          <TextField
            fullWidth
            required
            type="date"
            id="repayDate"
            name="Repaydate"
            margin="1"
            helperText="Repay Date"
            sx={{ marginBottom: 4 }}
          />
          <TextField
            fullWidth
            required
            id="standard-multiline-static"
            label="Collateral"
            helperText="Collateral"
            multiline
            rows={4}
            variant="filled"
            margin="1"
            sx={{ marginBottom: 2 }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              width: '100%'
            }}
          >
            <Button variant="contained" sx={{}}>
              Enter
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default BorrowForm;
