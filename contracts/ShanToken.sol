pragma solidity ^0.8.11;

contract ShanToken{

    // This value store number of Tokens to be made avaialble for this Smart Contract 
    uint256 public totalSupply;

     constructor(uint256 _totalSupply ){
        totalSupply = _totalSupply;
    }
}