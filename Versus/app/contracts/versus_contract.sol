pragma solidity ^0.4.7;
contract VersusContract {

  uint[] public feedIds;
  uint public pairCounter;

  struct Pair {
    uint pairId;
    bytes32 imageSrcA;
    bytes32 imageSrcB;
    uint imageRatingA;
    uint imageRatingB;
    bytes32 title;
    address submitter;
  }

  mapping(uint => Pair) feedMapping;
  
  
  function VersusContract() {
    pairCounter = 0;
  }
  
  function addVersus( 
		     bytes32 imageSrcA,
		     bytes32 imageSrcB,
		     bytes32 title,
		     address submitter		  
		     ) returns(uint[]) {
    
    feedMapping[pairCounter] = Pair({pairId: pairCounter,
	  imageSrcA: imageSrcA,
	  imageSrcB: imageSrcB,
	  imageRatingA: 0,
	  imageRatingB: 0,
	  title: title,
	  submitter: submitter});

    feedIds.push(pairCounter);
    pairCounter = pairCounter + 1;
    
    return feedIds;
  }

  function getVersuses() constant returns (uint[]) {
    return feedIds;
  }
  function getVersus(uint pairId) constant returns (Pair) {
    return feedMapping[pairId];
  }

}
