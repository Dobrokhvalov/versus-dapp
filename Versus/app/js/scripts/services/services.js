angular.module('VersusApp')   
    .service('VersusService', function() {

	var service = this;

	// service.getVersuses =  VersusContract.getVersuses;

	
	service.getVersuses2 = function() {

	    return new Promise(function(resolve, reject)  {
		var lists = [
		    {
		    pairId: 1,
		    title: "Coke vs Pepsi",
		    description : "bla bla bla",
		    "A": {
			"img": "https://www.magictricks.com/assets/images/trickspix/airbornecokecan2.jpg",
			"rating": 60
		    },
		    "B": {
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OljVmgz4XzlFtdF0Pmdgc9Fc8-rgjoJsYGTJyVH2w4W11jUS6szkmQ",
			rating: 40
		    }		    
		},{
		    pairId: 2,
		    title: "Punk vs HipHop",
		    description : "bla bla bla",
		    "A": {
			"img": "http://9jaflaver.com/wp-content/uploads/2016/03/ac6e5981100beb736f2a981560d8cfb8.png?x62217",
			"rating": 80
		    },
		    "B": {
			"img": "https://s-media-cache-ak0.pinimg.com/736x/0f/43/67/0f436768f8d00f40281be5f8879e5b34.jpg",
			rating: 20
		    }		    
		},
		{
		    pairId: 1,
		    title: "Coke vs Pepsi",
		    description : "bla bla bla",
		    "A": {
			"img": "https://www.magictricks.com/assets/images/trickspix/airbornecokecan2.jpg",
			"rating": 60
		    },
		    "B": {
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OljVmgz4XzlFtdF0Pmdgc9Fc8-rgjoJsYGTJyVH2w4W11jUS6szkmQ",
			rating: 40
		    }		    
		},{
		    pairId: 2,
		    title: "Punk vs HipHop",
		    description : "bla bla bla",
		    "A": {
			"img": "http://9jaflaver.com/wp-content/uploads/2016/03/ac6e5981100beb736f2a981560d8cfb8.png?x62217",
			"rating": 80
		    },
		    "B": {
			"img": "https://s-media-cache-ak0.pinimg.com/736x/0f/43/67/0f436768f8d00f40281be5f8879e5b34.jpg",
			rating: 20
		    }		    
		},
		{
		    pairId: 1,
		    title: "Coke vs Pepsi",
		    description : "bla bla bla",
		    "A": {
			"img": "https://www.magictricks.com/assets/images/trickspix/airbornecokecan2.jpg",
			"rating": 60
		    },
		    "B": {
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OljVmgz4XzlFtdF0Pmdgc9Fc8-rgjoJsYGTJyVH2w4W11jUS6szkmQ",
			rating: 40
		    }		    
		},{
		    pairId: 2,
		    title: "Punk vs HipHop",
		    description : "bla bla bla",
		    "A": {
			"img": "http://9jaflaver.com/wp-content/uploads/2016/03/ac6e5981100beb736f2a981560d8cfb8.png?x62217",
			"rating": 80
		    },
		    "B": {
			"img": "https://s-media-cache-ak0.pinimg.com/736x/0f/43/67/0f436768f8d00f40281be5f8879e5b34.jpg",
			rating: 20
		    }		    
		},{
		    pairId: 1,
		    title: "Coke vs Pepsi",
		    description : "bla bla bla",
		    "A": {
			"img": "https://www.magictricks.com/assets/images/trickspix/airbornecokecan2.jpg",
			"rating": 60
		    },
		    "B": {
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OljVmgz4XzlFtdF0Pmdgc9Fc8-rgjoJsYGTJyVH2w4W11jUS6szkmQ",
			rating: 40
		    }		    
		},{
		    pairId: 2,
		    title: "Punk vs HipHop",
		    description : "bla bla bla",
		    "A": {
			"img": "http://9jaflaver.com/wp-content/uploads/2016/03/ac6e5981100beb736f2a981560d8cfb8.png?x62217",
			"rating": 80
		    },
		    "B": {
			"img": "https://s-media-cache-ak0.pinimg.com/736x/0f/43/67/0f436768f8d00f40281be5f8879e5b34.jpg",
			rating: 20
		    }		    
		},{
		    pairId: 1,
		    title: "Coke vs Pepsi",
		    description : "bla bla bla",
		    "A": {
			"img": "https://www.magictricks.com/assets/images/trickspix/airbornecokecan2.jpg",
			"rating": 60
		    },
		    "B": {
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OljVmgz4XzlFtdF0Pmdgc9Fc8-rgjoJsYGTJyVH2w4W11jUS6szkmQ",
			rating: 40
		    }		    
		},{
		    pairId: 2,
		    title: "Punk vs HipHop",
		    description : "bla bla bla",
		    "A": {
			"img": "http://9jaflaver.com/wp-content/uploads/2016/03/ac6e5981100beb736f2a981560d8cfb8.png?x62217",
			"rating": 80
		    },
		    "B": {
			"img": "https://s-media-cache-ak0.pinimg.com/736x/0f/43/67/0f436768f8d00f40281be5f8879e5b34.jpg",
			rating: 20
		    }		    
		}];
		
		resolve(lists);
	    });
	    
	};
	

    });
