////////////////////////////
//Related Articles Algorithm
//Kevin Gleason 1-16-14
////////////////////////////
/* 
 * Change Log
 * V3 - Switched to use jQuery for find title search
 * V4 - Added authorWork() Algorithm.
 * V5 - Added writers and prepared fir production - Names must be in italics
 * V6 - Fixed Same Author portion, some cases had <span>
 */

function writeFeaturedHead(){
        document.write("<center><div style = \"max-width:300px; text-align:left;\"><h4>Featured Articles:<\/h4> <ul id=\"feat-art\">");
}

function writeFeaturedItems() {
        for(var i = (links.length-5); i < links.length; i++){
                document.write("<li><h3><a href = \"" + links[i].URL + "\">" + links[i].titleFull + " -" + links[i].author + "<\/a><\/h3><\/li>");
        }
}

function writeFeaturedClose() {
        document.write("<\/ul><\/div><\/center>");
}

function writeFeatured() {
        writeFeaturedHead();
        writeFeaturedItems();
        writeFeaturedClose();
}

function purify(list) {
	var pureList = [];
	for (var i = 0; i < list.length; i++) {
		var element = list[i];
		if (!inPurify(element, pureList)){
			pureList.push(element);
		}
	}
	return pureList;
}

function inPurify(element, pureList) {

	for (var i = 0; i < pureList.length; i++){
		if ((pureList[i].title === element.title) || (document.URL === element.URL)) {
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
	return false;
}

function matchEval(article, link) {
	for (var i = 0; i < article.keywords.length; i++) {
		for (var j = 0; j < link.keywords.length; j++){
			if (article.keywords[i].toLowerCase() === link.keywords[j].toLowerCase()) {
				return true;
			}
		}
	}
	return false;
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

function matchC() {
	var relatedItems = [];
	var articleTags = document.getElementsByClassName('postmeta')[0].innerHTML.split(" · ");
	for (var i = 0; i < links.length; i++){ 
		for (var j = 0; j < articleTags.length; j++) {
			if (articleTags[j].toLowerCase() === links[i].category.toLowerCase()) {
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
			var relatedURL = links[i]; //Set URL to matching link
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

function matchT() { //Match by Title
	var relatedItems = [];    //Use $j for noConflict(); 
	var titleElements = $j('a[rel~="bookmark"]').html().replace(/(:)|(;)|(-)|(')/g, '').split(' ');
	//var titleElements = $j("a[href='#permalink']").html().replace(/(:)|(;)|(-)|(')/g, '').split(' ');
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
		var relatedItems = purify(shuffle(matchURL())); //Match URL
	} else {
		var relatedItems = [];
	}
	if (relatedItems.length < 3) {  //By Title
		var titleRelated = purify(relatedItems.concat(shuffle(matchT()))); 
		relatedItems = titleRelated;
		if (relatedItems.length < 3) {  //By Tag
			var tagRelated = purify(relatedItems.concat(shuffle(matchTag())));
			relatedItems = tagRelated;
			if (relatedItems.length < 3) { //By Category
				var categoryRelated = purify(relatedItems.concat(shuffle(matchC())));
				relatedItems = categoryRelated;
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
	}
	return relatedItems;
}

function writeRelatedTop() {
	document.write("<center><h1> Related Articles: </h1><div id=\"relatedArticles\">");
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
	authorWork(); //Uncomment when ready to use V4
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
	while(arr.length < 5){
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

///////////////////////
//Same author algorithm
//Kevin Gleason 3-23-14
///////////////////////

function authorWork() {
	$j(document).ready(function(){
		//Check to see if the text has picture
		if($j(".clearover").find('p:first').find('em').html()){
			var author = $j(".clearover").find('p:first').find('em').html();
			var checkTags = /<[^>]+>/.test(author);
			if (checkTags) author = $j(".clearover").find('p:first').find('em').find('span').html();
			var authorInsert = checkSameAuthor(author);
			$j(".clearover").find('p:first').find('em').html(authorInsert);
		} 
		//Else find text when not using text with picture
		else if ($j("#content_area").find('.j-text')){
			var author = $j("#content_area").find('.j-text').find('p:first').find('em').html();
			var checkTags = /<[^>]+>/.test(author);
			if (checkTags) author = $j("#content_area").find('.j-text').find('p:first').find('em').find('span').html();
			var authorInsert = checkSameAuthor(author);
			$j("#content_area").find('.j-text').find('p:first').find('em').html(authorInsert);
		}
	});
}

//Make a case switch for each author to then turn that text into a link and if it doesnt fit any of the criteria then dont use it at all

function checkSameAuthor(author) {
	console.log("CURRENT AUTHOR IS: " + author);  //DEBUG
	switch(author){
		case "by Natalie Yuhas":
			return '<a href = "http://www.thetorchbc.com/staff/natalie-yuhas/">' + author + '</a>';
		case "by Chris Canniff":
			return '<a href = "http://www.thetorchbc.com/staff/chris-canniff/">' + author + '</a>';
		case "by Ethan Mack":
			return '<a href = "http://www.thetorchbc.com/staff/ethan-mack/">' + author + '</a>';
		case "by Mark Hertenstein":
			return '<a href = "http://www.thetorchbc.com/staff/mark-hertenstein/">' + author + '</a>';
		case "by Nikki Elliott":
			return '<a href = "http://www.thetorchbc.com/staff/nikki-elliott/">' + author + '</a>';
		case "by Katie Rich":
			return '<a href = "http://www.thetorchbc.com/staff/katie-rich/">' + author + '</a>';
		case "by Margo Borders":
			return '<a href = "http://www.thetorchbc.com/staff/margo-borders/">' + author + '</a>';
		case "by Gjergji Evangjeli":
			return '<a href = "http://www.thetorchbc.com/staff/gjergji-evangjeli/">' + author + '</a>';
		case "by Jay Chin":
			return '<a href = "http://www.thetorchbc.com/staff/jay-chin/">' + author + '</a>';
		case "by Alessandra Luedeking":
			return '<a href = "http://www.thetorchbc.com/staff/alessandra-luedeking/">' + author + '</a>';
		case "by Libbie Steiner":
			return '<a href = "http://www.thetorchbc.com/staff/libbie-steiner/">' + author + '</a>';
		case "by Allison R. Shely":
			return '<a href = "http://www.thetorchbc.com/staff/allison-shely/">' + author + '</a>';	
		case "by Stephanie Johnson":
			return '<a href = "http://www.thetorchbc.com/staff/stephanie-johnson/">' + author + '</a>';
		default:
			return author;
	}
}
