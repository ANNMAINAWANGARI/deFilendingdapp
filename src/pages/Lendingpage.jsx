import { Box, Hidden } from '@mui/material';
import React from 'react';
import LendingTable from '../components/LendingTable';
import LendSections from '../components/LendSections';
import Navbar from '../components/Navbar';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import CarRentalIcon from '@mui/icons-material/CarRental';
import CableIcon from '@mui/icons-material/Cable';
import YardIcon from '@mui/icons-material/Yard';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Outlet } from 'react-router-dom';

const Lendingpage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Hidden mdDown>
          <section
            style={{
              //flexBasis: '20%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#240b36',
              height: '100vh'
            }}
          >
            <Box sx={{ justifyContent: 'space-between', height: '100%', marginTop: 'auto' }}>
              <LendSections title="crypto" selected Icon={<PaidIcon />} />
              <LendSections title="mortgage" Icon={<HomeIcon />} />
              <LendSections title="electronics" Icon={<CableIcon />} />
              <LendSections title="vehicles" Icon={<CarRentalIcon />} />
              <LendSections title="gardening" Icon={<YardIcon />} />
              <LendSections title="CountryFinancialAid" Icon={<CreditCardIcon />} />
              <LendSections title="household" Icon={<BedroomParentIcon />} />
            </Box>
          </section>
        </Hidden>
        <Outlet />
      </div>
    </div>
  );
};

export default Lendingpage;
