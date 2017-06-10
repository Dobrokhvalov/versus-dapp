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
