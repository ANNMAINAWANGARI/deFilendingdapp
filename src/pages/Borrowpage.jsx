import React from 'react';
import Navbar from '../components/Navbar';
import BorrowForm from '../components/BorrowForm';
//import { Container } from '@mui/material';
//import { Divider } from '@mui/material';
//import LendersList from '../components/LendersList';

const Borrowpage = () => {
  return (
    <>
      <Navbar />
      <BorrowForm />
      {/* <Divider color="secondary" sx={{ marginBottom: 2, marginTop: 2 }} />
      <LendersList />*/}
    </>
  );
};

export default Borrowpage;
