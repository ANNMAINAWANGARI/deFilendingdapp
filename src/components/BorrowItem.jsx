import React from 'react';
import { Box, Button, Container, InputAdornment, Slider, TextField, Typography } from '@mui/material';
const BorrowItem = () => {
  const [location, setLocation] = React.useState();
  const [day, setDay] = React.useState(false);
  const [collateral, setCollateral] = React.useState();
  const [description, setDescription] = React.useState();
  const [item, setItem] = React.useState();
  const days = [
    { value: 1, label: '1 ' },
    { value: 2, label: '2 ' },
    { value: 3, label: '3 ' },
    { value: 4, label: '4 ' },
    { value: 5, label: '5 ' },
    { value: 6, label: '6 ' },
    { value: 7, label: '7 ' },
    { value: 8, label: '8 ' },
    { value: 9, label: '9 ' },
    { value: 10, label: '10 ' },
    { value: 11, label: '11 ' },
    { value: 12, label: '12 ' }
  ];
  const handleSliderDayChange = (event, newValue) => {
    setDay(newValue);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', justifyContent: 'center', paddingLeft: '8px', paddingRight: '8px' }}
    >
      <Box sx={{ width: '100%', marginTop: 5 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ color: '#240b36', marginBottom: 4 }}>
          Borrow an item on Ethereum
        </Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 3
          }}
        >
          <TextField
            required
            type="text"
            id="item"
            label="What item do you want to borrow"
            color="primary"
            focused
            name="Item"
            value={item}
            onChange={e => {
              setItem(e.target.value);
            }}
            fullWidth
            sx={{ marginBottom: 3 }}
          />
          <TextField
            required
            type="text"
            id="location"
            label="Enter your location"
            color="primary"
            focused
            name="Location"
            value={location}
            onChange={e => {
              setLocation(e.target.value);
            }}
            fullWidth
            sx={{ marginBottom: 3 }}
          />
          <TextField
            required
            type="text"
            id="description"
            label="Enter item description"
            color="primary"
            focused
            name="Description"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
            fullWidth
            sx={{ marginBottom: 3 }}
          />
          <TextField
            required
            type="file"
            id="image"
            label="Enter item image"
            color="primary"
            focused
            name="Image"
            fullWidth
            sx={{ marginBottom: 3 }}
          />
          <TextField
            fullWidth
            required
            type="number"
            id="standard-multiline-static"
            label="ETH Collateral"
            color="primary"
            value={collateral}
            onChange={e => {
              setCollateral(e.target.value);
            }}
            InputProps={{
              endAdornment: <InputAdornment position="start">ETH</InputAdornment>,
              inputProps: { min: 1 }
            }}
            focused
            multiline
          />
          <Box mb={2} sx={{ width: '100%' }}>
            <Typography variant="h5">Total Loan Duration In Months</Typography>
            <Slider
              defaultValue={1}
              marks={days}
              step={0.001}
              min={1}
              max={12}
              onChangeCommitted={handleSliderDayChange}
            />
          </Box>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              width: '100%'
            }}
          >
            <Button variant="contained" sx={{}}>
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default BorrowItem;
