
<<<<<<< HEAD
// // status.addListener("on-message-send", function (params, context) {
 
    
// //     var result = {
// //     	err: null,
// //     	data: null,
// //     	messages: []
// //     };
    
// //     try {
// //     	result["text-message"] = "Getting versuses...";
// //     } catch (e) {
// //     	result.err = e;
// //     }
=======
// function VersusService() {
//     // address of contract

//     var service = this;

//     service.contractAddress = '0x9684744c20734d370C9232f7E47B17E8Fcc11FFE';  // Ropsten NET
//     //var CONTRACT_ADDRESS = '0xce0b05a42131aa22dcc02461bbd225c958165a28';   // Local
//     service.contractAbi = JSON.parse('[{"constant":true,"inputs":[],"name":"likeFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getUserVersuses","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"pairId","type":"uint256"}],"name":"getVersus","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"versusIds","type":"uint256[]"},{"name":"chosenA","type":"bool[]"}],"name":"submitPolls","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"feedIds","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getVersuses","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"pairCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"title","type":"bytes32"},{"name":"imageSrcA","type":"bytes32"},{"name":"imageSrcB","type":"bytes32"},{"name":"pollMaxNumber","type":"uint256"}],"name":"addVersus","outputs":[{"name":"","type":"uint256[]"}],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]');
	

    
//     service.contract = null;
    
//     service.init = function() {
// 	service.contract = web3.eth.contract(service.contractAbi).at(service.contractAddress);
//     };
    
//     service.getVersuses = function() {
// 	return new Promise(function(resolve, reject) {
// 		service.contract.getVersuses({},function(error, result){
// 		    if(!error) {
// 			console.log(result);
// 			resolve(result);
// 		    } else {
// 			console.error(error);
// 			reject(error);
// 		    }
// 		});
	    
// 	});
//     };
    
//     //service.init();
    
//     return this;

// }


// status.addListener("init",  function (params, context) {    
//     return {"text-message": "Hey, man!"};
// });


// status.addListener("on-message-send", function (params, context) {
//     console.log("sending messages");
//     console.log(params);
//     console.log(context);
//     var account = web3.eth.accounts[0];
//     var balanceWei = web3.eth.getBalance(account);
//     var balanceEth = web3.fromWei(balanceWei, 'ether');
    
//     console.log(account);
//     console.log(balanceEth);

//     var versusService = VersusService();
//     console.log("versus service inited");
//     versusService.contract = web3.eth.contract(versusService.contractAbi).at(versusService.contractAddress);
//     console.log("versus contract inited");
//     //console.log(versusService.contractAbi);
//     //console.log(versusService.contractAddress);
    
//     // versusService.getVersuses().then(function(data) {
//     // 	console.log("Got versuses");
//     // 	console.log(data);
//     // });
    
//     versusService.contract.getVersuses({},function(error, result){
// 	console.log("Got versuses");
// 	if(!error) {
// 	    console.log(result);
// 	    status.sendMessage("Woo! Here are versuses " + result);
	    
// 	} else {
// 	    console.error(error);
// 	    status.sendMessage("Oh no! There is an error:  " + error);
// 	}
//     });

    
//     var result = {
//     	err: null,
//     	data: null,
//     	messages: []
//     };
    
//     try {
//     	result["text-message"] = "Getting versuses...";
//     } catch (e) {
//     	result.err = e;
//     }

//     return result;
>>>>>>> 5f88d9f8230f1f503d7382a19b10f0d2fa01ec75

// //     return result;
    
<<<<<<< HEAD
// // });


// // status.command({
// //     name: "hello",
// //     title: "HelloBot",
// //     description: "Helps you say hello",
// //     color: "#CCCCCC",
// //     preview: function (params) {
// // 	var text = status.components.text(
// // 	    {
// // 		style: {
// // 		    marginTop: 5,
// // 		    marginHorizontal: 0,
// // 		    fontSize: 14,
// // 		    fontFamily: "font",
// // 		    color: "black"
// // 		}
// // 	    }, "Hello from the other side!");

// // 	return {markup: status.components.view({}, [text])};
// //     }
// // });

// // status.command({
// //     name: "greet",
// //     title: "Greeter",
// //     description: "Helps you choose greetings",
// //     color: "#0000ff",
// //     params: [{
// // 	name: "greet",
// // 	type: status.types.TEXT,
// // 	suggestions: helloSuggestions
// //     }]
// // })

// // function suggestionsContainerStyle(suggestionsCount) {
// //     return {
// // 	marginVertical: 1,
// // 	marginHorizontal: 0,
// // 	keyboardShouldPersistTaps: "always",
// // 	height: Math.min(150, (56 * suggestionsCount)),
// // 	backgroundColor: "white",
// // 	borderRadius: 5,
// // 	flexGrow: 1
// //     };
// // }
// // var suggestionSubContainerStyle = {
// //     height: 56,
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#0000001f"
// // };

// // var valueStyle = {
// //     marginTop: 9,
// //     fontSize: 14,
// //     fontFamily: "font",
// //     color: "#000000de"
// // };

// // function helloSuggestions() {
// //     var suggestions = ["Hello", "Goodbye"].map(function(entry) {
// // 	return status.components.touchable(
// // 	    {onPress: status.components.dispatch([status.events.SET_VALUE, entry])},
// // 	    status.components.view(
// // 		suggestionsContainerStyle,
// // 		[status.components.view(
// // 		    suggestionSubContainerStyle,
// // 		    [
// // 			status.components.text(
// // 			    {style: valueStyle},
// // 			    entry
// // 			)
// // 		    ]
// // 		)]
// // 	    )
// // 	);
// //     });

// //     // Let's wrap those two touchable buttons in a scrollView
// //     var view = status.components.scrollView(
// // 	suggestionsContainerStyle(2),
// // 	suggestions
// //     );

// //     // Give back the whole thing inside an object.
// //     return {markup: view};
// // }



// // I18n.translations = {
// //     en: {
// // 	location_title: 'Location',
// // 	location_suggestions_title: 'Send location',
// // 	location_description: 'Share your location',
// // 	location_address: 'address'
// //     },
// //     ru: {
// // 	location_title: 'Location',
// // 	location_suggestions_title: 'Send location',
// // 	location_description: 'Share your location',
// // 	location_address: 'address'
// //     }
// // }

// // status.command({
// //     name: "locations",
// //     title: I18n.t('location_title'),
// //     description: I18n.t('location_description'),
// //     hideSendButton: true,
// //     sequentialParams: true,
// //     params: [{
// // 	name: "address",
// // 	type: status.types.TEXT,
// // 	placeholder: I18n.t('location_address')
// //     }]
// // });


// // function locationsSuggestions (params) {
// //     var result = {title: "Send location"};
// //     var seqArg = params.seqArg ? params.seqArg : "";

// //     if (seqArg == "Dropped pin")
// //     {
// // 	result.markup = ["view", {}, ["text", {}, "Dropped pin" + seqArg]];
// //     }
// //     else if (seqArg != "")
// //     {
// // 	result.markup = ["view", {}, ["text", {}, "Let's try to find something " + seqArg]];
// //     }
// //     else
// //     {
// // 	result.markup = ['current-location', {showMap: true}];
// //     }

// //     return result;
// // }


// function round(n) {
//     return Math.round(n * 100) / 100;
// }

// function doubledValueLabel(params) {
//     var value = round(params.value);
//     return "sliderValue = " + value +
// 	"; (2 * sliderValue) = " + (2 * value);
// }

// status.defineSubscription(
//     // the name of subscription and the name of the value in bot-db
//     // associated with this subscription
//     "doubledValue",
//     // the map of values on which subscription depends: keys are arbitrary names
//     // and values are db paths to another value
//     {value: ["sliderValue"]},
//     // the function which will be called as reaction on changes of values above,
//     // should be pure. Returned result will be associated with subscription in bot-db
//     doubledValueLabel
// );

// status.defineSubscription(
//     "roundedValue",
//     {value: ["sliderValue"]},
//     function (params) {
// 	return round(params.value);
//     }
// );

// function demoSuggestions(params, context) {
//     var balance = parseFloat(web3.fromWei(web3.eth.getBalance(context.from), "ether"));
//     var defaultSliderValue = balance / 2;

//     var view = ["view", {},
// 		["text", {}, "Balance " + balance + " ETH"],
// 		["text", {}, ["subscribe", ["doubledValue"]]],
// 		["slider", {
// 		    maximumValue: ["subscribe", ["balance"]],
// 		    value: defaultSliderValue,
// 		    minimumValue: 0,
// 		    onSlidingComplete: ["dispatch", ["set", "sliderValue"]],
// 		    step: 0.05
// 		}],
// 		['touchable',
// 		 {onPress: ['dispatch', ["set-value-from-db", "roundedValue"]]},
// 		 ["view", {}, ["text", {}, "Set value"]]
// 		],
// 		["text", {style: {color: "red"}}, ["subscribe", ["validationText"]]]
// 	       ];

//     status.setDefaultDb({
// 	sliderValue: defaultSliderValue,
// 	doubledValue: doubledValueLabel({value: defaultSliderValue})
//     });

//     var validationText = "";

//     if (typeof params !== 'undefined') {
// 	if (isNaN(params.message)) {
// 	    validationText = "That's not a float number!";
// 	} else if (parseFloat(params.message) > balance) {
// 	    validationText =
// 		"Input value is too big!" +
// 		" You have only " + balance + " ETH on your balance!";
// 	}
//     }
//     status.updateDb({
// 	balance: balance,
// 	validationText: validationText
//     });

//     return {markup: view};
// };

// status.addListener("on-message-input-change", demoSuggestions);
// status.addListener("init", demoSuggestions);
// status.addListener("on-message-send", function (params, context) {
//     var cnt = localStorage.getItem("cnt");
//     if(!cnt) {
// 	cnt = 0;
//     }

//     cnt++;

//     localStorage.setItem("cnt", cnt);
//     if (isNaN(params.message)) {
// 	return {"text-message": "Seems that you don't want to send money :(. cnt = " + cnt};
//     }

//     var balance = web3.eth.getBalance(context.from);
//     var value = parseFloat(params.message);
//     var weiValue = web3.toWei(value, "ether");
//     if (bn(weiValue).greaterThan(bn(balance))) {
// 	return {"text-message": "No way man, you don't have enough money! :)"};
//     }
//     web3.eth.sendTransaction({
// 	from: context.from,
// 	to: context.from,
// 	value: weiValue
//     }, function (error, hash) {
// 	if (error) {
// 	    status.sendMessage("Something went wrong, try again :(");
// 	    status.showSuggestions(demoSuggestions(params, context).markup);
// 	} else {
// 	    status.sendMessage("You are the hero, you sent " + value + " ETH to yourself!")
// 	}
//     });
// });
=======
// });


// status.command({
//     name: "hello",
//     title: "HelloBot",
//     description: "Helps you say hello",
//     color: "#CCCCCC",
//     preview: function (params) {
// 	var text = status.components.text(
// 	    {
// 		style: {
// 		    marginTop: 5,
// 		    marginHorizontal: 0,
// 		    fontSize: 14,
// 		    fontFamily: "font",
// 		    color: "black"
// 		}
// 	    }, "Hello from the other side!");

// 	return {markup: status.components.view({}, [text])};
//     }
// });

// status.command({
//     name: "greet",
//     title: "Greeter",
//     description: "Helps you choose greetings",
//     color: "#0000ff",
//     params: [{
// 	name: "greet",
// 	type: status.types.TEXT,
// 	suggestions: helloSuggestions
//     }]
// })

// function suggestionsContainerStyle(suggestionsCount) {
//     return {
// 	marginVertical: 1,
// 	marginHorizontal: 0,
// 	keyboardShouldPersistTaps: "always",
// 	height: Math.min(150, (56 * suggestionsCount)),
// 	backgroundColor: "white",
// 	borderRadius: 5,
// 	flexGrow: 1
//     };
// }
// var suggestionSubContainerStyle = {
//     height: 56,
//     borderBottomWidth: 1,
//     borderBottomColor: "#0000001f"
// };

// var valueStyle = {
//     marginTop: 9,
//     fontSize: 14,
//     fontFamily: "font",
//     color: "#000000de"
// };

// function helloSuggestions() {
//     var suggestions = ["Hello", "Goodbye"].map(function(entry) {
// 	return status.components.touchable(
// 	    {onPress: status.components.dispatch([status.events.SET_VALUE, entry])},
// 	    status.components.view(
// 		suggestionsContainerStyle,
// 		[status.components.view(
// 		    suggestionSubContainerStyle,
// 		    [
// 			status.components.text(
// 			    {style: valueStyle},
// 			    entry
// 			)
// 		    ]
// 		)]
// 	    )
// 	);
//     });

//     // Let's wrap those two touchable buttons in a scrollView
//     var view = status.components.scrollView(
// 	suggestionsContainerStyle(2),
// 	suggestions
//     );

//     // Give back the whole thing inside an object.
//     return {markup: view};
// }



// I18n.translations = {
//     en: {
// 	location_title: 'Location',
// 	location_suggestions_title: 'Send location',
// 	location_description: 'Share your location',
// 	location_address: 'address'
//     },
//     ru: {
// 	location_title: 'Location',
// 	location_suggestions_title: 'Send location',
// 	location_description: 'Share your location',
// 	location_address: 'address'
//     }
// }

// status.command({
//     name: "locations",
//     title: I18n.t('location_title'),
//     description: I18n.t('location_description'),
//     hideSendButton: true,
//     sequentialParams: true,
//     params: [{
// 	name: "address",
// 	type: status.types.TEXT,
// 	placeholder: I18n.t('location_address')
//     }]
// });


// function locationsSuggestions (params) {
//     var result = {title: "Send location"};
//     var seqArg = params.seqArg ? params.seqArg : "";

//     if (seqArg == "Dropped pin")
//     {
// 	result.markup = ["view", {}, ["text", {}, "Dropped pin" + seqArg]];
//     }
//     else if (seqArg != "")
//     {
// 	result.markup = ["view", {}, ["text", {}, "Let's try to find something " + seqArg]];
//     }
//     else
//     {
// 	result.markup = ['current-location', {showMap: true}];
//     }

//     return result;
// }


>>>>>>> 5f88d9f8230f1f503d7382a19b10f0d2fa01ec75
