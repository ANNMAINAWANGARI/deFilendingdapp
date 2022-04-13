//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/PullPayment.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "hardhat/console.sol";

contract LoanLending is Pausable, PullPayment, ReentrancyGuard,AccessControl,Ownable{
AggregatorV3Interface internal priceFeed;
uint256 id = 0;
 enum LoanState {
    REPAID,
    CREATED,
    FUNDED,
    TAKEN,
    FAILED
    }
enum CollateralState {
    PAID,
    WALLET_LOCKED,
    GUARANTOR,
    WAITING,
    NOT_PAID
}
enum TypeOfSecurity {
    COLLATERAL,
    WALLETLOCK,
    GUARANTOR
}
LoanState loanStateChoice;
 CollateralState collateralStateChoice;
 TypeOfSecurity typeofSecurityChoice;
struct CRYPTOBorrowers{
 
 address lender;
 uint256 amtNeededETH;
 uint256 amtNeededUSD;
 uint256 amtRemainingETH;
 uint256 amtRemainingUSD;
 uint256 amtRaised;
 uint256 collateralAmount;
 uint256 collateralDeposits;
 uint256 loanDuration;
 uint256 interestPercentage;
 uint256 returnAmount;
 uint256 id;
}
struct ITEMBorrowers{
 LoanState loanState;
 CollateralState collateralState;
 TypeOfSecurity typeofSecurity;
 address lender;
 string itemName;
 string itemCategory;
 string location;
 address myAddress;
 string imgURI;
 uint256 loanDuration;
 uint256 interestPercentage;
 uint256 id;
}
mapping(address => CRYPTOBorrowers) cryptoBorrower;
mapping(address => ITEMBorrowers) itemBorrower;
address[] public borrowers;
address[] public lenders;
event CollateralPaid(address,uint256);
constructor() {
    priceFeed = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
    }
function createCryptoLoan(address _address,uint256 _amtNeededInETH, uint256 _loanDuration, string memory _collateralType,uint256 _interestPercentage/*,uint256 _collateralAmount*/) public payable{
_address = msg.sender;
console.log('hello');
//make sure borrower doesnt have another outstanding loan
require(checkIfBorrowedBefore(_address),'You have an outstanding loan');
//check type of security chosen
if(keccak256(abi.encodePacked(_collateralType))==keccak256(abi.encodePacked('LOCK WALLET'))){
    //if security chosen is lockwallet , change typeofsecurity state to walletlocked,lock wallet for duration similar to loan duartion
typeofSecurityChoice = TypeOfSecurity.WALLETLOCK;
}
//if security chosen is collateral first change it to eth,change typeofsecurity state to collateral, change state to waiting ,send collateral to smart contract,change state to arrived
else if(keccak256(abi.encodePacked(_collateralType))==keccak256(abi.encodePacked('ETH'))){
    typeofSecurityChoice = TypeOfSecurity.COLLATERAL;
    //change dollars to eth
    uint256 _price =uint256 (getLatestPrice() / 10 ** 8); // price of 1 ether in USD
    //set _amtNeededInEth,
    //calculate to return amount:loan+interest
      uint256 returnAmount = _interestPercentage/100 * _amtNeededInETH * _loanDuration/12;
    //send collateral to smart contract
     require(msg.value >= _amtNeededInETH/2,'The amount of collateral is not enough');
    cryptoBorrower[_address].collateralDeposits += msg.value;
    //emit event
    emit CollateralPaid(_address,msg.value);
    collateralStateChoice = CollateralState.PAID;
    CRYPTOBorrowers storage borrower = cryptoBorrower[_address];
    borrower.amtNeededUSD = _amtNeededInETH * _price;
    borrower.amtNeededETH = _amtNeededInETH;
    borrower.loanDuration = _loanDuration;
    borrower.interestPercentage = _interestPercentage;
    borrower.returnAmount = returnAmount;
    borrower.amtRaised = 0;
    borrower.amtRemainingETH = _amtNeededInETH - borrower.amtRaised;
    borrower.amtRemainingUSD = borrower.amtRemainingETH * _price;
    borrower.id = getId();
    borrowers.push(_address);
    loanStateChoice = LoanState.CREATED;
}else{
typeofSecurityChoice = TypeOfSecurity.GUARANTOR;
}
loanStateChoice = LoanState.CREATED;


}
function checkIfBorrowedBefore(address _address) public view returns (bool){
    for(uint256 currentAddress=0; currentAddress<borrowers.length; currentAddress++){
        if(borrowers[currentAddress]== _address){
            return false;
        }
    }
    return true;
}
function getLatestPrice() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }
function getId() public returns (uint){
    id++;
    return id;
}
    
}