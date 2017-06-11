status.addListener("on-message-send", function (params, context) {
    //console.log("sending messaged");
    // console.log(params);
    // console.log(context);
    // var account = web3.eth.accounts[0];
    // var balanceWei = web3.eth.getBalance(account);
    // var balanceEth = web3.fromWei(balanceWei, 'ether');
    
    // console.log(account);
    // console.log(balanceEth);
    
    var versusService = VersusService(web3);
    //console.log("versus service inited");


    //versusService.contract = web3.eth.contract(versusService.contractAbi).at(versusService.contractAddress);
    // console.log("versus contract inited");
    //console.log(versusService.contractAbi);
    //console.log(versusService.contractAddress);
    
    
    
    versusService.getVersuses(function(error, data) {
    	if (error) {
    	    status.sendMessage("Oh no! There is an error:  " + error);
    	} else {	    
    	    //console.log("Got versusASS");
    	    console.log(data);
    	    status.sendMessage("Woo! Here are versuses " + data)xs;
    	}
    });
    


    
    // var result = {
    // 	err: null,
    // 	data: null,
    // 	messages: []
    // };
    
    // try {
    // 	result["text-message"] = "Getting vvversuses...";
    // } catch (e) {
    // 	result.err = e;
    // }

    
    // return result;


});
