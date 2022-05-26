import React, { useEffect } from 'react';
import Item from './Item';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { LOANLENDING_CONTRACT_ADDRESS, abi } from '../constants';

const Mortgage = () => {
  const address = useSelector(state => state.connectWallet.address);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(LOANLENDING_CONTRACT_ADDRESS, abi, provider.getSigner(address));
  const [allMortgageData, setAllMortgageData] = React.useState([]);
  function createData(address, itemName, location, description, imgURI, collateralDeposits, loanDuration) {
    return {
      address,
      itemName,
      location,
      description,
      imgURI,
      collateralDeposits,
      loanDuration
    };
  }
  useEffect(() => {
    let isCancelled = false;
    const getMortgageBorrowers = async () => {
      try {
        let mortgageBorrowers = await contract.getMortgageBorrowers();
        return mortgageBorrowers;
      } catch (err) {
        console.error(err);
      }
    };
    const fetchMortgageBorrowersInfo = async () => {
      try {
        let mortgageAddresses = await getMortgageBorrowers();
        return Promise.all(
          mortgageAddresses.map(async singleMortgageAddress => {
            const mortgageBorrowersInfo = await contract.fetchMortgageBorrowers(singleMortgageAddress);
            const allMortgageBorrowersInfo = await Promise.all(mortgageBorrowersInfo).then(allResults => {
              //console.log('allResults', allResults);
              return createData(
                singleMortgageAddress,
                //allResults[0],
                allResults[1],
                allResults[2],
                allResults[3],
                allResults[4],
                Number(ethers.utils.formatEther(allResults[5])).toFixed(2),
                parseFloat(allResults[6]) / 10
              );
            });
            console.log('allMortgageBorrowersInfo', allMortgageBorrowersInfo);
            return allMortgageBorrowersInfo;
            //setAllMortgageData(allMortgageBorrowersInfo);
          })
        );
      } catch (err) {
        console.error(err);
      }
    };
    const setMortgageBorrowerInfo = async () => {
      try {
        //await fetchMortgageBorrowersInfo().then(data => setAllMortgageData(data));
        if (!isCancelled) {
          await fetchMortgageBorrowersInfo()
            .then(data => setAllMortgageData(data))
            .then(data => console.log('allMortgageDataaaaaa', allMortgageData));
        }
        return () => {
          isCancelled = true;
        };
      } catch (err) {
        console.error(err);
      }
    };
    setMortgageBorrowerInfo().catch(console.error);
    //fetchMortgageBorrowersInfo();
  }, []);
  return (
    <Grid container spacing={3} sx={{ padding: 2, maxHeight: '100vh', overflow: 'scroll' }}>
      {allMortgageData.map(mortgage => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={mortgage.address}>
          <Item
            img={mortgage.imgURI}
            address={mortgage.address}
            itemName={mortgage.itemName}
            location={mortgage.location}
            description={mortgage.description}
            collateralDeposits={mortgage.collateralDeposits}
            loanDuration={mortgage.loanDuration}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Mortgage;
