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

function matchA() {
	var relatedItems = [];
	var articleTags = document.getElementsByClassName('postmeta')[0].innerHTML.split(" · ");
	document.write("Tags: "+ articleTags + "<br/>");
	for (var i = 0; i < links.length; i++){ 
		for (var j = 0; j < articleTags.length; j++) {
			if (articleTags[j].toLowerCase() === links[i].author.toLowerCase()) {
				relatedItems.push(links[i]);
				document.write("Push: "+ links[i].title + "<br/>"); //DEBUG LINE
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
			document.write("Related URL: "+ relatedURL.title + "<br/>"); //DEBUG LINE
			break;
		}	
	}
	var tempItems = matchK(relatedURL);
	for (var i=0; i<tempItems.length; i++){ 
		if(relatedURL.title.toLowerCase() != tempItems[i].title.toLowerCase()) {
			relatedItems.push(tempItems[i]);
			document.write("URL Related: "+ tempItems[i].title + "<br/>"); //DEBUG LINE
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
	var relatedItems = matchURL();  //Match URL
	if (relatedItems.length < 3) {  //By Title
		var titleRelated = relatedItems.concat(matchT()); 
		relatedItems = titleRelated;
		if (relatedItems.length < 3) {  //By Tag
			var tagRelated = relatedItems.concat(matchTag());
			relatedItems = tagRelated;
			if (relatedItems.length < 3) { //By Author
				var authorRelated = relatedItems.concat(matchA());
				relatedItems = authorRelated;
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
    	document.write("<div class=\"relatedSplit\"><a href=\"" + links[i].URL + "\" class=\"relatedLink\"><img src=\"" + links[i].image + "\" alt=\"\" class=\"relatedImg\" /><p class=\"relatedOverlay\"> \"" + links[i].quote + "\"<\/p> " + links[i].title + "<br/><span class=\"relAuthor\">by " + links[i].authorFull + "<\/span><\/a><\/div>");
        };
}

function writeRelatedClose() {
	document.write("<\/div><\/center>");
}

function writeRelated() {
	var relatedLinkList = shuffle(findRelated());
    writeRelatedTop();
    writeRelatedItems(relatedLinkList);
    writeRelatedClose();
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};