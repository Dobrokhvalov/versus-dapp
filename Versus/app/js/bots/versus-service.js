
function VersusService(web3_) {
    // address of contract

    var service = this;

    service.contractAddress = '0x9684744c20734d370C9232f7E47B17E8Fcc11FFE';  // Ropsten NET
    //var CONTRACT_ADDRESS = '0xce0b05a42131aa22dcc02461bbd225c958165a28';   // Local
    service.contractAbi = JSON.parse('[{"constant":true,"inputs":[],"name":"likeFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getUserVersuses","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"pairId","type":"uint256"}],"name":"getVersus","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"versusIds","type":"uint256[]"},{"name":"chosenA","type":"bool[]"}],"name":"submitPolls","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"feedIds","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getVersuses","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"pairCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"title","type":"bytes32"},{"name":"imageSrcA","type":"bytes32"},{"name":"imageSrcB","type":"bytes32"},{"name":"pollMaxNumber","type":"uint256"}],"name":"addVersus","outputs":[{"name":"","type":"uint256[]"}],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]');
	

    
    service.contract = null;
    
    service.init = function() {
    	service.contract = web3_.eth.contract(service.contractAbi).at(service.contractAddress);
    };


    service._fromContractToVersusObj = function(obj) {
	var result;
	try {
	    result = {
		pairId: obj[0].toNumber(),
		title:  web3_.toUtf8(obj[1]),
		imageSrcA: web3_.toUtf8(obj[2]),
		imageSrcB: web3_.toUtf8(obj[3]),
		imageRatingA: obj[4].toNumber(),
		imageRatingB: obj[5].toNumber(),
		pollMaxNumber: obj[6].toNumber(),
		submitter: obj[7]
	    };
	} catch(err) {
	    console.log("error when parsing from smart contracts: ");
	    console.log(err);
	}
	return result;
    };
	
    
    service._getVersusesHandler = function(getListFunc, callback) {
    	getListFunc({}, function(err, data) {
	    if (err) {
		callback(err);
		return;
	    } else {
				
		//console.log("got versusIds");
		//console.log(data);	    		
		
		var fromId = parseInt(data[0]);
		var toId = parseInt(data[1]);
		
		var versusIds = [];
		var max_versuses_num=0;
		for (var i=fromId; i < toId; i++) {		    
		    versusIds.push(i);
		}
		//console.log("im here!!!");
		
		//console.log(versusIds);
		var lst = [];
		
		_.map(versusIds, function(versusId) {
		    service.getVersus(versusId, function(err, versusContractObj) {
			var versus = service._fromContractToVersusObj(versusContractObj);
			lst.push(versus);
			// if got all versuses
			if (lst.length === versusIds.length) {
			    callback(null, lst);
			}
			//console.log(lst.length);
		    });
		});
	    }
	});
	
    };
    
    service.getVersus = function(id, callback) {
	service.contract.getVersus(id, callback);
    };
    
    service.getVersuses = function(callback) {
	service._getVersusesHandler(service.contract.getVersuses, callback);
    };
    
    service.getUserVersuses = function(callback) {
	service._getVersusesHandler(service.contract.getUserVersuses, callback);
    };
    

    service.init();
    
    return this;

}
