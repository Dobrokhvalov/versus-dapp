var counter = 0;
status.addListener("on-message-send", function (params, context) {
    counter += 1;
    var result = {
	err: null,
	data: null,
	messages: []
    };
    var ans = "You're amazing, master! "+counter;
    
    if (params.message === "image A") {
	ans = "Good choice, man!";
    } else if (params.message === "image B") {
	ans = "Bad choice, man!";
    } else {


    }
    
	
    try {
	result["text-message"] = ans;
    } catch (e) {
	result.err = e;
    }
    
    return result;

});
