var VersusContract;
angular.module('VersusApp')   
    .controller('ListCtrl', ['VersusService', 'ProfileService', '$rootScope', '$timeout', '$scope', function(VersusService, ProfileService, $rootScope, $timeout, $scope) {
	var ctrl = this;
	
	ctrl.lists = [];
	ctrl.canConfirm = false;

	ctrl.feedMode = true;

	ctrl.feed = [];

	$rootScope.$on('web3', function() {
	    console.log('web3loaded ctrl');
	    VersusContract.getVersuses()
		.then(function(result) {
		    console.log(result);
		    var fromId = result[0].c[0];
		    var toId = result[1].c[0];
		    var lst = [];
		    for (var i=fromId, j=0; i<toId && j<100; i++, j++ ) {
			lst.push(i);
		    }
		    console.log("fromId: ", fromId);
		    console.log("toId: ", toId);
		    console.log("lst: ", lst);
		    return lst;
		}).then(function(vIds) {
		    _.map(vIds, function(vId) {
			
			//console.log(vId);
			VersusContract.getVersus(vId).then(function(d) {
			    console.log(d);
			    var versus = fromContractToVersusObj(d);
			    console.log(versus);
			    ctrl.feed.push(versus);
			    $scope.$digest();
			});
		    });
		});
	});


	var fromContractToVersusObj = function(obj) {
	    var obj;
	    try {
		obj = {
		    pairId: obj[0].toNumber(),
		    title:  web3.toUtf8(obj[1]),
		    imageSrcA: web3.toUtf8(obj[2]),
		    imageSrcB: web3.toUtf8(obj[3]),
		    imageRatingA: obj[4].toNumber(),
		    imageRatingB: obj[5].toNumber(),
		    submitter: obj[6]
		};
	    }	catch(err) {
		console.log("error when parsing from smart contracts: ", err);
	    }
	    return obj;
	};
	

	var checkWeb3Loaded = function() {
	    console.log("checking  web3");
	    if (VersusContract !== undefined) {
		console.log("web3 laoded");
		$rootScope.$broadcast('web3');
		console.log("event transmitted");
		return null;
	    };
	    $timeout(function() {
		checkWeb3Loaded();
	    }, 1000);
	};

	
	checkWeb3Loaded();			       

	
	// VersusService.getVersuses().then(function(lists) {
	//     ctrl.lists = lists;
	// });

	
	ctrl.tap = function(versus, side) {
	    if (!versus.selected) {
		var isSelected = true;
		versus.selected = isSelected;
		if (isSelected) {
		    versus.selectedA = "A" === side;
		    versus.unselectedA = ! versus.selectedA;
		    
	            versus.selectedB = "B" === side;
		    versus.unselectedB = ! versus.selectedB;
		    
		    // update rated count
		    ProfileService.updateRatedCount(versus, +1);
		    ctrl.canConfirm = true;
		}
		// else {
		//     versus.A.selected = false;
		//     versus.A.unselected = false;
		//     versus.B.selected = false;
		//     versus.B.unselected = false;
		    
		//     // update rated count
		//     ProfileService.updateRatedCount(versus, -1);
		    
		// }
	    }
	};


	ctrl.submitPolls = function() {
	    var versusIds = [];
	    var chosenA = [];
	    var selectedFeeds = _.filter(ctrl.feed, function(versus) { return versus.selected;});
	    _.map(selectedFeeds, function(feed) {
		versusIds.push(feed.pairId);
		chosenA.push(feed.selectedA);
	    });


	    console.log("submitting polls: ", versusIds, chosenA);
	    VersusContract.submitPolls(versusIds, chosenA).then(function(data) {
		alert("polls submitted");
		console.log("polls submitted");
		console.log(data);
	    });
	};

	
    }]).controller('ProfileCtrl', ['ProfileService', '$scope', '$rootScope', '$timeout',  function (ProfileService, $scope, $rootScope, $timeout) {
    	var ctrl = this;
    	ctrl.ratedCount = ProfileService.ratedCount;
	$scope.$on('profileCountChange', function() {
    	    ctrl.ratedCount = ProfileService.ratedCount;
	    
	});

	
	
    }]).controller('NewVersusCtrl', function () {
    	var ctrl = this;
	ctrl.feePerPerson = 0.1;
	ctrl.peopleNum = 10;

	
	ctrl.onpeopleNumChange = function(val) {
	    if (val < 10) {
		ctrl.peopleNum = 10;
	    };
	    ctrl.fee = ctrl.peopleNum * ctrl.feePerPerson;
	};

	ctrl.onpeopleNumChange();
	

	

	ctrl.submit = function() {
	    var versus = {
		title: ctrl.title,		
		imageSrcA: ctrl.imageSrcA,
		imageSrcB: ctrl.imageSrcB
	    };
	    console.log("submitting versus: ", versus);
	    
	    VersusContract.addVersus(versus.title, versus.imageSrcA, versus.imageSrcB)
		.then(function(data) {
		    console.log(data);
		    alert("updated");
		});
	};
	
    });

	
