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

function matchK(keywords){
	var relatedItems = [];
	for (var i = 0; i < keywords.length; i++) {
		for (var j=0; j<links.length; j++){
			for (var t = 0; t < links[j].keywords.length; t++) {
				if (keywords[i] === links[j].keywords[t]) {
					relatedItems.push(links[j]);
				}
			}
		}
	}
	return relatedItems;
}