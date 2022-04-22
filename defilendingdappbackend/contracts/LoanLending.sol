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
 address borrower;
 uint256 amtNeededETH;
 uint256 amtRemainingETH;
 uint256 amtRaised;
 //uint256 collateralAmount;
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
event CollateralPaid(address indexed sender,uint256 collateralAmount,uint256 timestamp);
constructor() {
    //priceFeed = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
    }
function createCryptoLoan(address _address, uint256 _amtNeededInETH, uint256 _loanDuration, string memory _collateralType,uint256 _interestPercentage/*,uint256 _collateralAmount*/) public payable{
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
      uint256 interest = _interestPercentage/100 * _amtNeededInETH * _loanDuration/12;
      uint returnAmount = interest + _amtNeededInETH;
    //send collateral to smart contract
     require(msg.value >= _amtNeededInETH/2,'The amount of collateral is not enough');
    cryptoBorrower[_address].collateralDeposits += msg.value;
    //emit event
    emit CollateralPaid(msg.sender,msg.value,block.timestamp);
    collateralStateChoice = CollateralState.PAID;
    CRYPTOBorrowers storage borrower = cryptoBorrower[_address];
    borrower.borrower = _address;
    borrower.amtNeededETH = _amtNeededInETH;
    borrower.loanDuration = _loanDuration;
    borrower.interestPercentage = _interestPercentage;
    borrower.returnAmount = returnAmount;
    borrower.amtRaised = 0;
    borrower.collateralDeposits = msg.value;
    borrower.amtRemainingETH = _amtNeededInETH - borrower.amtRaised;
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

function getId() public returns (uint){
    id++;
    return id;
}
function getBorrowers() view public returns(address[] memory){
    return borrowers;
}
function getBorrower(address _address) public view returns(uint256,uint256,uint256,uint256,uint256,uint256,uint256){
return (cryptoBorrower[_address].amtNeededETH,cryptoBorrower[_address].loanDuration,cryptoBorrower[_address].interestPercentage,cryptoBorrower[_address].returnAmount,cryptoBorrower[_address].amtRaised,cryptoBorrower[_address].amtRemainingETH,cryptoBorrower[_address].id);
}
    
}