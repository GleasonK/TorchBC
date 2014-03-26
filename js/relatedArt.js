function writeRelatedTop() {
	document.write("<center><h1> See Also: </h1><div id=\"relatedArticles\">");
}

function writeRelatedItems() {
        for(var i = 0; i < 3; i++) {
                document.write("<div class=\"relatedSplit\"><a href=\"" + links[i].URL + "\" class=\"relatedLink\"><img src=\"" + links[i].image + "\" alt=\"\" class=\"relatedImg\" /><p class=\"relatedOverlay\"> \"" + links[i].quote + "\"<\/p> " + links[i].title + "<br/><span class=\"relAuthor\">by " + links[i].authorFull + "<\/span><\/a><\/div>");
        };
}

function writeRelatedClose() {
        document.write("<\/div><\/center>");
}

function writeRelated() {
        writeRelatedTop();
        writeRelatedItems();
        writeRelatedClose();
}