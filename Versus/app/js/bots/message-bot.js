var counter = 0;
status.addListener("on-message-send", function (params, context) {
    
    
    
    var result = {
	err: null,
	data: null,
	messages: []
    };

    try {
	result["text-message"] = "You're amazing, mastes!";
    } catch (e) {
	result.err = e;
    }

    return result;
});

