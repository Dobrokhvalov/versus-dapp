var VersusContract;
angular.module('VersusApp')   
    .service('VersusService', ['$rootScope', '$timeout', 'VersusContract_',   function($rootScope, $timeout, VersusContract_) {
	
	var service = this;	
	service.userAddress = '';
	
	
	var setup = function() {
	    
	    web3.eth.getAccounts(function(err, result) {
		if (!err && result !== undefined) {
		    service.userAddress = result[0];
		}
	    });

	    VersusContract_.init();
	    
	    service.getVersuses = VersusContract_.getVersuses;
	    service.getVersus = VersusContract_.getVersus;
	    service.submitPolls = VersusContract_.submitPolls;
	    service.getUserVersuses =  VersusContract_.getUserVersuses;
	    service.addVersus = VersusContract_.addVersus;
	    
	};

	
	service.onWeb3Load = function(cb) {
	    
	    console.log("checking  web3");
	    if (web3 !== undefined) {
		cb();
		return null;
	    };
	    $timeout(function() {
		service.onWeb3Load(cb);
	    }, 500);
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
	


	service.onWeb3Load(setup);
	
	return service; 
    }]).service('VersusContract_', function() {

	// address of contract
	var CONTRACT_ADDRESS = '0x9684744c20734d370C9232f7E47B17E8Fcc11FFE';
	var CONTRACT_ABI = JSON.parse('[{"constant":true,"inputs":[],"name":"likeFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getUserVersuses","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"pairId","type":"uint256"}],"name":"getVersus","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"versusIds","type":"uint256[]"},{"name":"chosenA","type":"bool[]"}],"name":"submitPolls","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"feedIds","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getVersuses","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"pairCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"title","type":"bytes32"},{"name":"imageSrcA","type":"bytes32"},{"name":"imageSrcB","type":"bytes32"},{"name":"pollMaxNumber","type":"uint256"}],"name":"addVersus","outputs":[{"name":"","type":"uint256[]"}],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]');
	
	var service = this;

	service.init = function() {
	    service.contract = web3.eth.contract(CONTRACT_ABI).at(CONTRACT_ADDRESS);
	};

	service.getVersuses = function() {
	    return new Promise(function(resolve, reject) {
		service.contract.getVersuses({},function(error, result){
		    if(!error) {
			console.log(result);
			resolve(result);
		    } else {
			console.error(error);
		    }
		});
		
	    });
	};

	service.getUserVersuses = function() {
	    return new Promise(function(resolve, reject) {
		service.contract.getUserVersuses({},function(error, result){
		    if(!error) {
			console.log(result);
			resolve(result);
		    } else {
			console.error(error);
		    }
		});
		
	    });
	};

	
	service.getVersus = function(id) {
	    return new Promise(function(resolve, reject) {
		service.contract.getVersus(id,function(error, result){
		    if(!error) {
			console.log(result);
			resolve(result);
		    } else {
			console.error(error);
		    }
		});
		
	    });
	};


	service.submitPolls = function(ids, bools) {
	    return new Promise(function(resolve, reject) {
		service.contract.submitPolls(ids, bools,function(error, result){
		    if(!error) {
			console.log(result);
			resolve(result);
		    } else {
			console.error(error);
			reject(error);
		    }
		});
		
	    });
	};
	

	
	
	service.addVersus = function(versus )  {
		return new Promise(function(resolve, reject) {		    
		    service.contract.addVersus.sendTransaction(versus.title, versus.imageSrcA, versus.imageSrcB, versus.pollMaxNumber, {from: web3.eth.coinbase, value:web3.toWei(versus.cost,'ether')}, function(err, result) {
								   
			if(err) reject(err);
			console.log(result);
			resolve(result);
		    });
		    
		});
	};
	

	
	return service;
	    
    });
