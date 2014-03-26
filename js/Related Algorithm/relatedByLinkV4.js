var articleURL = document.URL;

function purify(list) {
	var pureList = [list[0]];
	document.write(pureList);
	for (var i = 1; i < list.length; i++) {
		var element = list[i];
		if (!inPurify(element, pureList)){
			pureList.push(element);
			document.write("Push: " + element.title +" now " + pureList + "<br/>");
		}
	}
	document.write(pureList);
	return pureList;
}

function inPurify(element, pureList) {
	for (var i = 0; i < pureList.length; i++){
		if (pureList[i].title === element.title) { //Replace with document.URL
			document.write("Match: " + element.title + "<br/>");
			return true;
		}
	}
	return false;
}

function inList() {  //Check URL
	for (var i = 0; i < links.length; i++){
		if (document.URL === links[i].URL) { //Replace with document.URL
			return true;
		}
	}
}

function matchEval(article, link) {
	for (var i = 0; i < article.keywords.length; i++) {
		for (var j = 0; j < link.keywords.length; j++){
			if (article.keywords[i].toLowerCase() === link.keywords[j].toLowerCase()) {
				return true;
			}
		}
	}
}

function matchK(article){
	var relatedItems = [];
	for (var i=0; i<links.length; i++){ 
		if (matchEval(article, links[i])) {     //If the Evaluation passes as true
			relatedItems.push(links[i]);  //Pushed every time there is a match
		}
	}
	return relatedItems;
}

function matchA() {
	var relatedItems = [];
	var articleTags = document.getElementsByClassName('postmeta')[0].innerHTML.split(" · ");
	for (var i = 0; i < links.length; i++){ 
		for (var j = 0; j < articleTags.length; j++) {
			if (articleTags[j].toLowerCase() === links[i].author.toLowerCase()) {
				relatedItems.push(links[i]);
			}
		}
	}
	return relatedItems;
}

function matchURL() {
	var articleURL = document.URL;
	var relatedItems = [];
	for (var i=0; i<links.length; i++){ 
		if(articleURL.toLowerCase() === links[i].URL.toLowerCase()) {
			var relatedURL = links[i];
			break;
		}	
	}
	var tempItems = matchK(relatedURL);
	for (var i=0; i<tempItems.length; i++){ 
		if(relatedURL.title.toLowerCase() != tempItems[i].title.toLowerCase()) {
			relatedItems.push(tempItems[i]);
		}	
	}
	return relatedItems;
}

function elementEval(elements, link) {
	for (var i = 0; i < elements.length; i++) {
		for (var j = 0; j < link.keywords.length; j++){
			if (elements[i].toLowerCase() === link.keywords[j].toLowerCase()) {
				return true;
			}
		}
	}
}

function matchT() { //FIX
	var relatedItems = [];
	var titleElements = document.getElementsByClassName("post-title")[0].childNodes[0].innerHTML.split(" ");
	for (var i=0; i<links.length; i++){ 
		if (elementEval(titleElements, links[i])) {     //If the Evaluation passes as true
			relatedItems.push(links[i]);  //Pushed every time there is a match
		}
	}
	return relatedItems;
}

function matchTag() {
	var relatedItems = [];
	var articleTags = document.getElementsByClassName('postmeta')[0].innerHTML.split(" · ");
	for (var i=0; i<links.length; i++){ 
		if (elementEval(articleTags, links[i])) {     //If the Evaluation passes as true
			relatedItems.push(links[i]);  //Pushed every time there is a match
		}
	}
	return relatedItems;
}

function findRelated() {
	if (inList()) {
		var relatedItems = matchURL();
	} else {
		var relatedItems = [];
	}
	  //Match URL
	if (relatedItems.length < 3) {  //By Title
		var titleRelated = purify(relatedItems.concat(shuffle(matchT()))); 
		relatedItems = titleRelated;
		if (relatedItems.length < 3) {  //By Tag
			var tagRelated = purify(relatedItems.concat(shuffle(matchTag())));
			relatedItems = tagRelated;
			if (relatedItems.length < 3) { //By Author
				var authorRelated = purify(relatedItems.concat(shuffle(matchA())));
				relatedItems = authorRelated;
				if (relatedItems.length < 3) { //By Random
					var randomRelated = purify(relatedItems.concat(shuffle(getRandom()))); //Shuffle before adding!!!!
					relatedItems = randomRelated;
				}
			}
		}
	}
	return relatedItems;
}

function writeRelatedTop() {
	document.write("<center><h1> See Also: </h1><div id=\"relatedArticles\">");
}

function writeRelatedItems(articles) {
	for(var i = 0; i < 3; i++) {
    	document.write("<div class=\"relatedSplit\"><a href=\"" + articles[i].URL + "\" class=\"relatedLink\"><img src=\"" + articles[i].image + "\" alt=\"\" class=\"relatedImg\" /><p class=\"relatedOverlay\"> \"" + articles[i].quote + "\"<\/p> " + articles[i].title + "<br/><span class=\"relAuthor\">by " + articles[i].authorFull + "<\/span><\/a><\/div>");
        };
}

function writeRelatedClose() {
	document.write("<\/div><\/center>");
}

function writeRelated() {
	var relatedLinkList = findRelated();
    writeRelatedTop();
    writeRelatedItems(relatedLinkList);
    writeRelatedClose();
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function getRandom() {
	var arr = []
	var randomRelated = [];
	while(arr.length < 4){
		var randomnumber = Math.ceil(Math.random()*(links.length-1))
		var found=false;
		for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){found=true;break}
		}
			if(!found)arr[arr.length]=randomnumber;
	}
	for (var i = 0; i < arr.length; i++) {
		randomRelated.push(links[arr[i]]);
	}
	return randomRelated;
}

function toString(list){
	for (var i = 0; i < list.length; i++) {
		document.write("Element " + i + ": " + list[i].title + " <br/>");
	}
}