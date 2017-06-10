function webview(params, context) {
    var url = "http://versus.obedbk.ru";

    return {
        title: "Browser",
        dynamicTitle: true,
        singleLineInput: true,
	executeimmidiately: true,
        actions: [
            {
                type: status.actions.WEB_VIEW_BACK
            },
            {
                type: status.actions.WEB_VIEW_FORWARD
            },
            {
                type: status.actions.FULLSCREEN
            },
        ],
        markup: status.components.bridgedWebView(url)
    };
}

status.command({
    name: "webview",
    title: "Webview",
    description: "Opens dapp WebView",
    color: "#CCCCCC",
    fullscreen: true,
    onSend: webview
});

function suggestionsContainerStyle(suggestionsCount) {
    return {
        marginVertical: 1,
        marginHorizontal: 0,
        keyboardShouldPersistTaps: "always",
        height: Math.min(150, (56 * suggestionsCount)),
        backgroundColor: "white",
        borderRadius: 5,
        flexGrow: 1,
	flexDirection: "row"
    };
}

var imageStyle = {
    width: 'auto',
    height: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#0000001f",
    margin: 10

};

var suggestionSubContainerStyle = {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#0000001f"
};

var valueStyle = {
    marginTop: 9,
    fontSize: 14,
    fontFamily: "font",
    color: "#000000de"
};


var tileStyle = {
    margin: 15,
    fontSize: 24,
    fontFamily: "font",
    color: "#000000de"
};



function feedSuggestions() {
    var pair = {
	pairId: 1,
	title: "Versus (tap on image you like more)",
	imageSrcA: "http://i.imgur.com/7qPx5QWb.jpg",
	imageSrcB: "http://i.imgur.com/7qPx5QWb.jpg"
    };
    
    
    var pairComponent = 
        //
          status.components.view(
              suggestionsContainerStyle,
              [
                  status.components.text(
                      {style: titleStyle},
                      pair.title 
                  ),		  
		  status.components.touchable(
		      {onPress: status.components.dispatch([status.events.SET_VALUE,"image A"])},
		      status.components.image({style: imageStyle, source: {uri: pair.imageSrcA}})),
		   status.components.touchable(
		      {onPress: status.components.dispatch([status.events.SET_VALUE,"image B"])},
		       status.components.image({style: imageStyle, source: {uri: pair.imageSrcB}}))
	      ]);
              

    
    // Let's wrap those two touchable buttons in a scrollView
    var view = status.components.scrollView(
        suggestionsContainerStyle(2),
        [pairComponent]
    );

    // Give back the whole thing inside an object.
    return {markup: view};    
}




status.command({
    name: "feed",
    title: "Versus feed",
    description: "Shows Versus feed",
    color: "#CCCCCC",
    fullscreen: true,
    params: [{
              name: "feed",
              type: status.types.TEXT,
              suggestions:feedSuggestions
             }]

});

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
