angular.module('VersusApp')   
    .service('VersusService', ['$rootScope', '$timeout',  function($rootScope, $timeout) {

	var service = this;
	service.userAddress = '';
	web3.eth.getAccounts(function(err, result) {
	    service.userAddress = result[0];
	});
	

	service.addVersus = function(versus )  {
	    return new Promise(function(resolve, reject) {
		var abi = VersusContract.abi;
		var cAddress = VersusContract.address;
		var contractAbi = web3.eth.contract(abi);
		var contract = contractAbi.at(cAddress);
		
		contract.addVersus.sendTransaction(versus.title, versus.imageSrcA, versus.imageSrcB, versus.pollMaxNumber, {from: web3.eth.coinbase, value:web3.toWei(versus.cost,'ether')},
						   function(err, result) {
						       
						       if(err) reject(err);
						       console.log(result);
						       resolve(result);
						   });
		
	    });
	};
	service.onWeb3Load = function(cb) {
	    
	    console.log("checking  web3");
	    if (VersusContract !== undefined) {
		cb();
		return null;
	    };
	    $timeout(function() {
		service.onWeb3Load(cb);
	    }, 1000);
	};
	
	service.fromContractToVersusObj = function(obj) {
	    var obj;
	    try {
		obj = {
		    pairId: obj[0].toNumber(),
		    title:  web3.toUtf8(obj[1]),
		    imageSrcA: web3.toUtf8(obj[2]),
		    imageSrcB: web3.toUtf8(obj[3]),
		    imageRatingA: obj[4].toNumber(),
		    imageRatingB: obj[5].toNumber(),
		    pollMaxNumber: obj[6].toNumber(),
		    submitter: obj[7]
		};
	    }	catch(err) {
		console.log("error when parsing from smart contracts: ", err);
	    }
	    return obj;
	};
	



	

    }]);
