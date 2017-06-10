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
