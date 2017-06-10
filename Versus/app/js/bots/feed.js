

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
