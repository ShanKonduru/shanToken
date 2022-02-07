pragma solidity ^0.8.11;

contract ShanToken{

    // This value store number of Tokens to be made avaialble for this Smart Contract 
    uint256 public totalSupply;

    mapping (address => uint256) public balanceOf;

     constructor(uint256 _totalSupply ){
         balanceOf[msg.sender] = _totalSupply;
        totalSupply = _totalSupply;
    }
}