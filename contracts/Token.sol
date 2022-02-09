//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";

contract Token {
  string public name = "Nader Dabit Token";
  string public symbol = "NDT";
  uint public totalSupply = 1000000;
  address public owner;
  mapping(address => uint) balances;

  // const balances={adderss:uint};
  // balances[address]=uint;

  constructor() {
    balances[msg.sender] = totalSupply;
    owner = msg.sender;
    console.log(owner,'owner_test');
  }
  
  function transfer(address _to, uint amount) external {
    require(balances[msg.sender]>=amount,'not enough tokens');
    balances[msg.sender]-= amount;
    balances[_to]+=amount;

  }

  function balanceOf(address account) external view returns (uint) {
    return balances[account];
    //return the values come from this address
  }
}