import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

const Lender = () => {
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
        <Typography gutterBottom>0xA0Dc04E5F32a9637528b66c452A288747eeCAe69</Typography>
        <Typography color="primary" gutterBottom>
          2ETH
        </Typography>
      </Box>
      <Button variant="contained" sx={{ marginRight: '15px' }}>
        Pay
      </Button>
    </Paper>
  );
};

export default Lender;
