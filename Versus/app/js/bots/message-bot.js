var counter = 0;
status.addListener("on-message-send", function (params, context) {
    
    
    
    var result = {
	err: null,
	data: null,
	messages: []
    };

    try {
	result["text-message"] = "Welcome to Versus-bot! Start earning tokens by rating versus pictures.\n\nTo add a new Versus switch to Webview by sending '\webview' (currently bot does not support add versus feature).\n\nSend '/loadfeed' to start.";
    } catch (e) {
	result.err = e;
    }

    return result;
});

