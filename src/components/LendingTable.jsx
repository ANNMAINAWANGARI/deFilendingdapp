import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import React, { useEffect } from 'react';
import { tableCellClasses } from '@mui/material/TableCell';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { LOANLENDING_CONTRACT_ADDRESS, abi } from '../constants';

const LendingTable = () => {
  const [allData, setAllData] = React.useState([]);
  function createData(
    id,
    address,
    amountNeeded,
    loanDuration,
    interestPercentage,
    returnAmount,
    amountRaised,
    AmountRemaining
  ) {
    return {
      id,
      address,
      amountNeeded,
      loanDuration,
      interestPercentage,
      returnAmount,
      amountRaised,
      AmountRemaining
    };
  }
  const address = useSelector(state => state.connectWallet.address);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(LOANLENDING_CONTRACT_ADDRESS, abi, provider.getSigner(address));

  useEffect(() => {
    console.log('helloz');
    const getCryptoBorrowerAddresses = async () => {
      try {
        const cryptoBorrowersAddresses = await contract.getBorrowers();
        console.log('cryptoBorrowersAddresses', cryptoBorrowersAddresses);
        return cryptoBorrowersAddresses;
      } catch (err) {
        console.error(err);
      }
    };
    const getcryptoBorrowerInfo = async () => {
      try {
        let addressValue = await getCryptoBorrowerAddresses();
        console.log('addresses', addressValue);
        return Promise.all(
          addressValue.map(async singleAddress => {
            const cryptoBorrowerInfo = await contract.getBorrower(singleAddress);
            const allCryptoBorrowersInfo = await Promise.all(cryptoBorrowerInfo).then(allResults => {
              return createData(
                parseInt(allResults[6]),
                singleAddress,
                ethers.utils.formatEther(allResults[0]),
                parseFloat(allResults[1]) / 10,
                parseFloat(allResults[2]) / 1000,
                ethers.utils.formatEther(allResults[3]),
                ethers.utils.formatEther(allResults[4]),
                ethers.utils.formatEther(allResults[5])
              );
            });
            return allCryptoBorrowersInfo;
          })
        );
      } catch (err) {
        console.error(err);
      }
    };
    const setCryptoBrowserInfo = async () => {
      try {
        await getcryptoBorrowerInfo().then(data => setAllData(data));
      } catch (err) {
        console.error(err);
      }
    };
    setCryptoBrowserInfo().catch(console.error);
  }, []);
  return (
    <div>
      <Container maxWidth="lg" sx={{ paddingLeft: '8px', paddingRight: '8px', marginTop: 10 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{
              //maxWidth: '300px',
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none'
              }
            }}
          >
            <TableHead sx={{ backgroundColor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Borrower&apos;s Address</TableCell>
                <TableCell sx={{ color: 'white' }}>Amount Needed</TableCell>
                <TableCell sx={{ color: 'white' }}>Loan Duration(months)</TableCell>
                <TableCell sx={{ color: 'white' }}>Interest Percentage</TableCell>
                <TableCell sx={{ color: 'white' }}>Return Amount</TableCell>
                <TableCell sx={{ color: 'white' }}>Amount Raised</TableCell>
                <TableCell sx={{ color: 'white' }}>Amount Remaining</TableCell>
                <TableCell sx={{ color: 'white' }}>Lend</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">{row.amountNeeded}ETH</TableCell>
                  <TableCell align="left">{row.loanDuration}</TableCell>
                  <TableCell align="left">{row.interestPercentage}%</TableCell>
                  <TableCell align="left">{row.returnAmount}ETH</TableCell>
                  <TableCell align="left">{row.amountRaised}ETH</TableCell>
                  <TableCell align="left">{row.AmountRemaining}ETH</TableCell>
                  {/* <TableCell align="left" sx={{ color: row.status === 'LOANED' ? 'red' : 'green' }}>
                    {row.status}
              </TableCell>*/}
                  <TableCell align="left">
                    <Button variant="contained" disabled={row.status === 'LOANED'}>
                      Lend
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

export default LendingTable;
