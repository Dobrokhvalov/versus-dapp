pragma solidity ^0.4.7;
contract VersusContract {

  uint[] public feedIds;
  uint public pairCounter;

  struct Pair {
    uint pairId;
    bytes32 title;    
    bytes32 imageSrcA;
    bytes32 imageSrcB;
    uint imageRatingA;
    uint imageRatingB;
    address submitter;
    uint pollMaxNumber;
    uint pollCounter;
  }
  
  mapping(uint => Pair) feedMapping;
  mapping(address => uint) userVersusCountMapping;
  
  function VersusContract() {
    pairCounter = 0;
  }
  
  function addVersus(
		     bytes32 title,		     
		     bytes32 imageSrcA,
		     bytes32 imageSrcB		  
		     ) returns(uint[]) {

    feedMapping[pairCounter] = Pair({pairId: pairCounter,
	  imageSrcA: imageSrcA,
	  imageSrcB: imageSrcB,
	  imageRatingA: 0,
	  imageRatingB: 0,
	  title: title,
	  submitter: msg.sender,
	  pollMaxNumber: 100,
	  pollCounter: 0
    });
    
    feedIds.push(pairCounter);
    pairCounter = pairCounter + 1;	
    
    return feedIds;
  }

  // assumes versusIds sorted from min to max
  function submitPolls(uint[] versusIds, bool[] chosenA) {
    userVersusCountMapping[msg.sender] = versusIds[versusIds.length-1]+1;
    for(uint i = 0; i < versusIds.length; i++) {
      Pair pair = feedMapping[versusIds[i]];      
      if (chosenA[i]) {
	pair.imageRatingA += 1;
      } else {
	pair.imageRatingB += 1;	
      }
    }
  }
  
  // return users and last id
  function getVersuses() constant returns (uint, uint) {
    return (userVersusCountMapping[msg.sender], pairCounter);
  }
  
  function getVersus(uint pairId) constant returns (uint, bytes32, bytes32, bytes32, uint, uint, address) {
    return (feedMapping[pairId].pairId,
	    feedMapping[pairId].title,	    
	    feedMapping[pairId].imageSrcA,
	    feedMapping[pairId].imageSrcB,
	    feedMapping[pairId].imageRatingA,
	    feedMapping[pairId].imageRatingB,
	    feedMapping[pairId].submitter
	    );
  }

}
