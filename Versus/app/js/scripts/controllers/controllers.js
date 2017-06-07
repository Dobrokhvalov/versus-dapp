var VersusContract;
angular.module('VersusApp')   
    .controller('ListCtrl', ['VersusService', 'ProfileService', '$rootScope', '$timeout', function(VersusService, ProfileService, $rootScope, $timeout) {
	var ctrl = this;
	
	ctrl.lists = [];
	ctrl.canConfirm = false;

	ctrl.feedMode = true;

	ctrl.feed = [];

	$rootScope.$on('web3', function() {
	    console.log('web3loaded ctrl');
	    VersusContract.getVersuses().then(function(result) {
	    	console.log(result);
	    	ctrl.feed = result;
	    });
	});


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

	
	ctrl.tap = function(list, side) {
	    if (!list.selected) {
		var isSelected = true;
		list.selected = isSelected;
		if (isSelected) {
		    list.A.selected = "A" === side;
		    list.A.unselected = ! list.A.selected;
		    
	            list.B.selected = "B" === side;
		    list.B.unselected = ! list.B.selected;
		    
		    // update rated count
		    ProfileService.updateRatedCount(list, +1);
		    ctrl.canConfirm = true;
		}
		// else {
		//     list.A.selected = false;
		//     list.A.unselected = false;
		//     list.B.selected = false;
		//     list.B.unselected = false;
		    
		//     // update rated count
		//     ProfileService.updateRatedCount(list, -1);
		    
		// }
	    }
	};
    }]).controller('ProfileCtrl', ['ProfileService', '$scope', '$rootScope', '$timeout',  function (ProfileService, $scope, $rootScope, $timeout) {
    	var ctrl = this;
    	ctrl.ratedCount = ProfileService.ratedCount;
	$scope.$on('profileCountChange', function() {
    	    ctrl.ratedCount = ProfileService.ratedCount;
	    
	});

	
	
    }]).controller('NewVersusCtrl', function () {
    	var ctrl = this;

	web3.eth.getAccounts(function(err, result) {
	    ctrl.submitter = result[0];
	});
	
	ctrl.submit = function() {
	    console.log("submittin");
	    
	    VersusContract.addVersus(
		ctrl.imageSrcA,
		ctrl.imageSrcB,
		ctrl.title,
		ctrl.submitter		  
	    )
		.then(function(data) {
		    console.log(data);
		    alert("updated");
		});
	};
	
    });

	
