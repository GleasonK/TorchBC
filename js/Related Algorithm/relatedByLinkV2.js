var articleURL = document.URL;

function inList(article) {  //Replace with document.URL
	for (var i = 0; i < links.length; i++){
		if (article.URL === links[i].URL) { //Replace with document.URL
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
			document.write("Push: "+ links[i].title + "<br/>"); //DEBUG LINE
		}
	}
	return relatedItems;
}

function matchA(article) {
	var relatedItems = [];
	for (var i=0; i<links.length; i++){ 
		if(article.author.toLowerCase() === links[i].author.toLowerCase()) {
			relatedItems.push(links[i]);
			document.write("Push: "+ links[i].title + "<br/>"); //DEBUG LINE
		}	
	}
	return relatedItems;
}

function matchURL() {
	var articleURL = document.URL;
	for (var i=0; i<links.length; i++){ 
		if(articleURL.toLowerCase() === links[i].URL.toLowerCase()) {
			return matchK(links[i]);
		}	
	}
	return 0;
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

function matchT() {
	var relatedItems = [];
	var titleElements = document.getElementsByClassName("post-title")[0].innerHTML.split(" ");
	document.write("TE: "+ titleElements + "<br/>");
	for (var i=0; i<links.length; i++){ 
		if (elementEval(titleElements, links[i])) {     //If the Evaluation passes as true
			relatedItems.push(links[i]);  //Pushed every time there is a match
			document.write("Push: "+ links[i].title + "<br/>"); //DEBUG LINE
		}
	}
	return relatedItems;
}

function matchTag() {
	var relatedItems = [];
	var articleTags = document.getElementsByClassName('postmeta')[0].innerHTML.split(" · ");
	document.write("TE: "+ articleTags + "<br/>");
	for (var i=0; i<links.length; i++){ 
		if (elementEval(articleTags, links[i])) {     //If the Evaluation passes as true
			relatedItems.push(links[i]);  //Pushed every time there is a match
			document.write("Push: "+ links[i].title + "<br/>"); //DEBUG LINE
		}
	}
	return relatedItems;
}

function findRelated() {
	var relatedItems = matchURL();
	return relatedItems;
}