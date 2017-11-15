	/*************************************************************************** 
	This is the mockup bridge object, replacing the real one that suppose 
	to connect between Javascript and Java
	***************************************************************************/
	var android = {
		getHomepageShortcuts: function (numOfItems, callback) {
			var list = [
					{
						id: 23,
						title: "YNET פורטל חדשות",
						url: "http://ynet.co.il"					
					},
					{
						id: 27,
						title: "GOOGLE",
						url: "http://google.com"					
					},
					{
						id: 17,
						title: "trello",
						url: "http://trello.com"					
					},
					{
						id: 12,
						title: "ZAP השוואת מחירים",
						url: "http://zap.co.il"					
					},
					{
						id: 14,
						title: "",
						url: "http://cnn.com"					
					},
					{
						id: 45,
						title: "SPACE.COM",
						url: "https://www.space.com/38180-hi-seas-8-month-mars-simulation-ends.html"					
					},
					{
						id: 123,
						title: "Popular MEchanics",
						url: "www.popularmechanics.com/technology/news/a28303/google-buy-htc-pixel-team/"					
					},
					{
						id: 2,
						title: "Seeking Alpha",
						url: "https://seekingalpha.com/"					
					}
				];
				
			// if we've been asked for a smaller list, let's cutoff our sample list
			if (list.length > numOfItems) {
				list = list.slice(0, numOfItems);
			}
			callback.apply(this, [list]);
		},
		
		getFaviconByUrl(url, callback) {
			var data = "https://davidwalsh.name/demo/nodejs.png";
			/*
			var data = "data:image/png;base64,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";
			/**/
			callback.apply(this, [data]);
		},
		
		focusOnSearch() {
		},
		
		openUrl(url) {
			window.location = url;
		}

	}