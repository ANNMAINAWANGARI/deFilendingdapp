// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JOSANNToken is ERC20 {
    constructor() public ERC20("JOSANN Token", "JOSANN") {
        _mint(msg.sender, 1000000000000000000000000);
    }
}