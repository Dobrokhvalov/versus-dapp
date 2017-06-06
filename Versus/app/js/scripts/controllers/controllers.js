angular.module('VersusApp')   
    .controller('ListCtrl', ['VersusService', 'ProfileService', function(VersusService, ProfileService) {
	var ctrl = this;
	
	ctrl.lists = [];
	ctrl.canConfirm = false;
	
	VersusService.getVersuses().then(function(lists) {
	    ctrl.lists = lists;
	});

	
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
    }]).controller('ProfileCtrl', ['ProfileService', '$scope', function (ProfileService, $scope) {
    	var ctrl = this;
    	ctrl.ratedCount = ProfileService.ratedCount;
	$scope.$on('profileCountChange', function() {
    	    ctrl.ratedCount = ProfileService.ratedCount;
	});
	
    }]);

	
	// ctrl.confirm = function() {
	//     if (ctrl.canConfirm) {
	// 	ProfileService.currentProfile.egoCount += 1;
		
	// 	init();
	//     }
	// };
	
	// ctrl.checkIfCanConfirm = function() {
	//     var selectedCount = _.filter(ctrl.dapplers, function(d) {return d.selected;}).length;
	//     console.log(selectedCount);
	//     ctrl.canConfirm = (selectedCount === 2);
	// };
	
	// var init = function() {	
	//     ctrl.dapplers = [];
	
	//     ctrl.canConfirm = false;
	//     DopplrContracts
	// 	.fetchNextDapplers()
	// 	.then(function(data) {
	// 	    ctrl.dapplers = data.dapplers;
	// 	});
	//     };
	
	// init();
	
	
	
    // }]);
    // .controller('MatchesCtrl', ['DopplrContracts', function (DopplrContracts) {
    // 	var ctrl = this;
	
    // 	ctrl.matches = [];
    // 	ctrl.rankedCount = 0;
	
    // 	ctrl.chat = function(match) {
    // 	    alert("Chat Not implemented!");
    // 	};

    // 	ctrl.unlock = function(match) {
    // 	    alert("Unlock Not implemented!");
    // 	};


    // 	var init = function() {	
    // 	    DopplrContracts
    // 		.fetchMatches()
    // 		.then(function(data) {
    // 		    ctrl.matches = data.matches;
    // 		    ctrl.rankedCount = data.rankedCount;
    // 		});
    // 	    };
	

    // 	init();



    // }])

