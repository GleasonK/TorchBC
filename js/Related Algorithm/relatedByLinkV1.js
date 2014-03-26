var link1 = {
        URL:"http://www.thetorchbc.com/2014/01/28/faith-on-the-field/",
        image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i122ec7d5094cab09/1390952282/std/image.jpg",
        title: "BC Football: Faith on the Field",
        quote:"We are a team. This is a Catholic School. The Word is the Word. To do it as a team is what it is all about. BC is a family.",
        author: "Yuhas",
        authorFull:"Natalie Yuhas",
        keywords:["Football", "Mass", "Sports"]
};

var link2 = {
        URL:"http://www.thetorchbc.com/2014/01/28/facebook-page-promotes-self-expression-on-campus/",
        image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i93c190421969449b/1390968148/std/faces-of-faith-spirituality-humanity-at-boston-college.png",
		title: "Page Promotes Self Expression",
		quote: "Especially at BC, we all have the problem of putting up a façade of success and happiness...so that’s what inspires me to continue this project.",
		authorFull: "Emily Witsberger",
		author: "Witsberger",
		keywords:["Facebook", "Inspiration", "Students"]
};

var link3 = {
        URL:"http://www.thetorchbc.com/2014/01/28/catholic-school-survivor/",
        image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i539bfcb698351359/1391047258/thumb/image.jpg",
        title: "St. Mary’s Renovation Continues",
        quote:"On the exterior of the building, the roof, windows, and cast stone will be replaced, and the interior, including elevators and floor and wall framing...",
        author: "Borders",
        authorFull:"Margo Borders",
        keywords:["Building", "Church"]
};

var links = [link1, link2, link3];

function matchEval(article, link) {
	for (var i = 0; i < article.keywords.length; i++) {
		for (var j = 0; j < link.keywords.length; j++){
			if (article.keywords[i] === link.keywords[j]) {
				return true;
			}
		}
	}
}



function matchT(article){
	var relatedItems = [];
	for (var i=0; i<links.length; i++){ 
		if (matchEval(article, links[i])) {     //If the Evaluation passes as true
			relatedItems.push(links[i]);  //Pushed every time there is a match
			document.write("Push: "+ links[i].title + "<br/>");
		}
	}
	return relatedItems;
}


function matchK(article){
	var relatedItems = [];
	for (var i = 0; i < article.keywords.length; i++) { //Scroll through all keywords in the article arg
		for (var j=0; j<links.length; j++){         //Scroll through all the links in the link list
			if (matchEval(article, links[j])) {     //If the Evaluation passes as true
				relatedItems.push(links[j]);  //Pushed every time there is a match
				document.write("Push: "+links[j].title + "<br/>");
			}
		}
	}
	return relatedItems;
}



/*
function matchK(article){
	var relatedItems = [];
	for (var i = 0; i < article.keywords.length; i++) {
		for (var j=0; j<links.length; j++){
			for (var t = 0; t < links[j].keywords.length; t++) {
				if (article.keywords[i] === links[j].keywords[t]) {
					relatedItems.push(links[j]);  //Pushed every time there is a match
					abort=true;
					document.write("Push: "+links[j].title + " T= " + t + "<br/>");
				}
			}
		}
	}
	return relatedItems;
}
*/