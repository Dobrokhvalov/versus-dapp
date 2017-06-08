var VersusContract;
angular.module('VersusApp')   
    .controller('ListCtrl', ['VersusService', 'ProfileService', '$rootScope', '$timeout', '$scope', function(VersusService, ProfileService, $rootScope, $timeout, $scope) {
	var ctrl = this;
	ctrl.canConfirm = false;
	ctrl.feedMode = true;
	ctrl.feed = [];
	
	var fetchFeed = function() {
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
			
	    		VersusContract.getVersus(vId).then(function(d) {
	    		    console.log(d);
	    		    var versus = VersusService.fromContractToVersusObj(d);
	    		    console.log(versus);
			    if (versus.submitter !== VersusService.userAddress 
				 && versus.pollMaxNumber > (versus.imageRatingA + versus.imageRatingB)
			       ) {
	    			ctrl.feed.push(versus);
	    			$scope.$digest();
			    }
	    		});
	    	    });
	    	});	
	};

	VersusService.onWeb3Load(fetchFeed);
	
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

	
	
    }]).controller('NewVersusCtrl', ['$state','VersusService',  function ($state, VersusService) {
    	var ctrl = this;
	ctrl.feePerPerson = 0.01;
	ctrl.peopleNum = 10;

	
	ctrl.onpeopleNumChange = function(val) {
	    if (val < 10) {
		ctrl.peopleNum = 10;
	    };
	    ctrl.fee = ctrl.peopleNum * ctrl.feePerPerson;
	};

	ctrl.submit = function() {
	    var versus = {
		title: ctrl.title,		
		imageSrcA: ctrl.imageSrcA,
		imageSrcB: ctrl.imageSrcB,
		pollMaxNumber: ctrl.peopleNum
	    };
	    console.log("submitting versus: ", versus);

	    versus.cost = versus.pollMaxNumber * ctrl.feePerPerson;
	    
	    VersusService.addVersus(versus)
		.then(function(data) {
		    console.log(data);
		    alert("Versus added");
		    $state.go('myversuses');
		});
	};

	ctrl.onpeopleNumChange();
	

	
    }]).controller('MyVersusCtrl', ['VersusService', '$scope', function(VersusService, $scope) {
	var ctrl = this;
	ctrl.feed = [];

	
	var fetchFeed = function() {
	    VersusContract.getUserVersuses()
	    	.then(function(result) {
		    lst = _.map(result, function(r) {
			return r.c[0];
		    });
	    	    return lst;
	    	}).then(function(vIds) {
	    	    _.map(vIds, function(vId) {
			
	    		VersusContract.getVersus(vId).then(function(d) {
	    		    console.log(d);
	    		    var versus = VersusService.fromContractToVersusObj(d);
	    		    console.log(versus);
	    		    ctrl.feed.push(versus);
	    		    $scope.$digest();
	    		});
	    	    });
	    	});	
	};

	VersusService.onWeb3Load(fetchFeed);

    }]);


	
