import {
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import { tableCellClasses } from '@mui/material/TableCell';
const rows = [
  { key: 1, borrower: '0*F948657634920', amountN: '2ETH', amountL: '0ETH', amountR: '2ETH', status: 'WAITING' },
  { key: 2, borrower: '0*F948657634920', amountN: '2ETH', amountL: '0ETH', amountR: '2ETH', status: 'WAITING' },
  { key: 3, borrower: '0*F948657634920', amountN: '2ETH', amountL: '0ETH', amountR: '2ETH', status: 'WAITING' },
  { key: 4, borrower: '0*F948657634920', amountN: '5ETH', amountL: '3ETH', amountR: '2ETH', status: 'PARTIALLY' },
  { key: 5, borrower: '0*F948657634920', amountN: '3ETH', amountL: '3ETH', amountR: '3ETH', status: 'LOANED' }
];

const Lendingpage = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ paddingLeft: '8px', paddingRight: '8px', marginTop: 10 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none'
              }
            }}
          >
            <TableHead sx={{ backgroundColor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Borrower&apos;s Address</TableCell>
                <TableCell sx={{ color: 'white' }}>Amount Needed</TableCell>
                <TableCell sx={{ color: 'white' }}>Amount Loaned</TableCell>
                <TableCell sx={{ color: 'white' }}>Amount Remaining</TableCell>
                <TableCell sx={{ color: 'white' }}>Status</TableCell>
                <TableCell sx={{ color: 'white' }}>Loan</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.key}>
                  <TableCell align="left">{row.borrower}</TableCell>
                  <TableCell align="left">{row.amountN}</TableCell>
                  <TableCell align="left">{row.amountL}</TableCell>
                  <TableCell align="left">{row.amountR}</TableCell>
                  <TableCell align="left" sx={{ color: row.status === 'LOANED' ? 'red' : 'green' }}>
                    {row.status}
                  </TableCell>
                  <TableCell align="left">
                    <Button variant="contained" disabled={row.status === 'LOANED'}>
                      Loan
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Lendingpage;
