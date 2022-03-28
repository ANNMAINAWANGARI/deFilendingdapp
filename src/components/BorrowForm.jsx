import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Box,
  InputAdornment,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  InputLabel,
  MenuItem
} from '@mui/material';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
//import { DateRangePicker } from 'react-date-range';
const BorrowForm = () => {
  //const [show, setShow] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [duration, setDuration] = React.useState('');

  const handleChange = event => {
    setDuration(event.target.value);
  };
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  };
  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', justifyContent: 'center', paddingLeft: '8px', paddingRight: '8px' }}
    >
      <Box sx={{ width: '100%', marginTop: 5 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ color: '#240b36', marginBottom: 4 }}>
          Request a loan on Ethereum
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
            type="number"
            id="amount"
            label="Amount to borrow"
            color="primary"
            focused
            name="Amount"
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              inputProps: { min: 1 }
            }}
            sx={{ marginBottom: 3 }}
          />
          {/*<div style={{ width: '100%', marginBottom: 3 }}>
            <TextField
              fullWidth
              required
              value={endDate.toLocaleDateString('en-US')}
              id="repayDate"
              name="Repaydate"
              color="primary"
              focused
              sx={{ marginBottom: 3 }}
              onClick={() => {
                setShow(true);
              }}
            />
            {show && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={['#ad5389']}
                  onChange={handleSelect}
                />
                <Button
                  variant="contained"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Done
                </Button>
              </div>
            )}
          </div>*/}
          <TextField
            required
            type="number"
            id="interest"
            label="% Interest Rate"
            name="Interest"
            color="primary"
            focused
            fullWidth
            sx={{ marginBottom: 3 }}
            InputProps={{
              inputProps: { min: 5 }
            }}
          />
          <FormControl fullWidth sx={{ marginBottom: 3 }} secondary="true" focused>
            <InputLabel id="demo-simple-select-label" label="Loan Duration">
              Duration
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={duration}
              label="Duration"
              onChange={handleChange}
            >
              <MenuItem value={4}>Four months</MenuItem>
              <MenuItem value={6}>Six months</MenuItem>
              <MenuItem value={8}>Eight months</MenuItem>
              <MenuItem value={10}>Ten months</MenuItem>
            </Select>
          </FormControl>
          <div style={{ width: '100%', marginBottom: 3 }}>
            <TextField
              fullWidth
              required
              id="standard-multiline-static"
              label="Collateral"
              color="primary"
              focused
              multiline
              rows={4}
              variant="filled"
            />
            <FormControl sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="ETH"
                name="radio-buttons-group"
                row
              >
                <FormControlLabel value="ETH" control={<Radio size="small" color="secondary" />} label="ETH" />
                <FormControlLabel value="Lock Wallet" control={<Radio size="small" />} label="Lock Wallet" />
                <FormControlLabel
                  value="Guarantor Address"
                  control={<Radio size="small" color="secondary" sx={{ color: '#240b36' }} />}
                  label="Guarantor Address"
                />
              </RadioGroup>
            </FormControl>
          </div>

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
