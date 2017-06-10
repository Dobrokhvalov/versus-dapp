status.addListener("init", function (params, context) {
    return {"text-message": "Greetings traveller! Start using Versus by typing command 'start'!"};
});
// status.addListener("on-message-send", function (params, context) {
//     if (params.message === 'chat') {
// 	console.log("chat");
// 	var result = {
//             err: null,
//             data: null,
//             messages: []
//         };

// 	try {
//             result["text-message"] = "You're amazing, master!";
// 	} catch (e) {
//             result.err = e;
// 	}

// 	return result;
//     } else if (params.message === 'webview') {
// 	return webview();
//     } else if (params.message === 'startchat') {
    
//     return viewSuggestions();
//     }
// });




status.command({
    name: "feed",
    title: "Versus feed",
    description: "Shows Versus feed",
    color: "#CCCCCC",
    fullscreen: true,
    //onSend: feed
    params: [{
              name: "feed",
              type: status.types.TEXT,
              suggestions:feedSuggestions
             }]

});

status.command({
    name: "add",
    title: "Add new Versus",
    description: "Create new Versus",
    color: "#CCCCCC",
    fullscreen: true
    // onSend: webview
});

status.command({
    name: "my",
    title: "My Versuses",
    description: "Shows your created Versuses",
    color: "#CCCCCC",
    fullscreen: true
    // onSend: webview
});


status.command({
     name: "start",
     title: "Start",
     description: "Start versus",
     color: "#0000ff",
     params: [{
              name: "start",
              type: status.types.TEXT,
              suggestions:vsSuggestions
             }]
});




function vsSuggestions() {
    var suggestions = ["feed", "add", "my", "about"].map(function(entry) {
        return status.components.touchable(
            {onPress: status.components.dispatch([status.events.SET_VALUE, entry])},
            status.components.view(
                suggestionsContainerStyle,
                [gstatus.components.view(
                    suggestionSubContainerStyle,
                    [
                        status.components.text(
                            {style: valueStyle},
                            entry
                        )
                    ]
                )]
            )
        );
    });

    // Let's wrap those two touchable buttons in a scrollView
    var view = status.components.scrollView(
        suggestionsContainerStyle(2),
        suggestions
    );

    // Give back the whole thing inside an object.
    return {markup: view};
}

