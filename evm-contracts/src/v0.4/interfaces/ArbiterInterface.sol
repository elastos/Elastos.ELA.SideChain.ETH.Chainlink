pragma solidity ^0.4.24;

interface ArbiterInterface {
  function getOndutyOracle() external returns(address, string);
}
