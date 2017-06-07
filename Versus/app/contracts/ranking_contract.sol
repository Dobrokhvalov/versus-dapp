pragma solidity ^0.4.7;
contract RankContract {
  uint public count;

  function SimpleStorage(uint initialValue) {
    count = 0;
  }

  function update() {
    count = count + 1;
  }

  function unlock(uint matchCost) {
    if (count >= matchCost) {
      count = count - matchCost;
    }
  }

  function get() constant returns (uint retVal) {
    return count;
  }

}
