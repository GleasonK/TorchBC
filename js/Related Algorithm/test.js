var link1 = {
        URL:"http://www.thetorchbc.com/2014/01/28/faith-on-the-field/",
        image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i34adf57a2626a273/1390956642/std/image.jpg",
        title: "BC Football: Faith on the Field",
        titleFull: "BC Football: Faith on the Field",
        category: "World",
        quote:"the monks first decided to brew beer which would be sold to the public in order to help support the monastery",
        author: "Yuhas",
        authorFull:"Natalie Yuhas",
        keywords:["Football", "Mass", "Sports", "Faith", "Liturgy"]
};

var link1 = {
        URL:"http://www.thetorchbc.com/2014/01/28/facebook-page-promotes-self-expression-on-campus/",
        title: "Facebook Page Promotes Self Expression",
        author: "Witsberger"
};

var link2 = {
        URL:"http://www.thetorchbc.com/2014/01/28/faith-on-the-field/",
        title: "BC Football: Faith on the Field",
        author: "Yuhas",
};

var link3 = {
        URL:"http://www.thetorchbc.com/2014/01/28/trappist-monastery-in-massachusetts-begins-brewing-beer/",
        image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i34adf57a2626a273/1390956642/std/image.jpg",
        title: "Monastery Brews Beer",
        titleFull: "Trappist Monastery Begins Brewing Beer",
        category: "World",
        quote:"...the monks first decided to brew beer which would be sold to the public in order to help support the monastery",
        author: "Evangjeli"
        authorFull:"Gjergji Evangjeli",
        keywords:["Monks", "Jesuit"]
};
var link4 = {
        URL:"http://www.thetorchbc.com/2014/01/28/catholic-school-survivor/",
        image:"http://girlsjustwannahaveguns.com/wp-content/uploads/2013/05/pope-francis1.jpg",
        title: "Catholic School \"Survivor\"",
        titleFull: "Catholic School \"Survivor\"",
        category: "SeniorStaff",
        quote: "From where I stand now, it seems that Catholic education will be the defining feature of my entire life.",
        author: "Canniff",
        authorFull:"Chris Canniff",
        keywords:["Catholic", "Catholicism", "School", "Students"]
};

var link5 = {
        URL:"http://www.thetorchbc.com/2014/01/28/pope-francis-and-international-relations-a-new-diplomacy-of-dialogue/",
        image:"http://girlsjustwannahaveguns.com/wp-content/uploads/2013/05/pope-francis1.jpg",
        title: "Pope Francis International Relations",
        titleFull: "Pope Francis and International Relations",
        category: "Faculty",
        quote: "...the shift from \"the diplomacy of determination\" about religious liberty around the world to a new emphasis on dialogue between states and groups.",
        author: "Fr. Gallagher",
        authorFull:"Fr. Gallagher, S.J.",
        keywords:["Pope", "International", "Jesuit"]
};

var links = [link1, link2, link3, link4, link5];

function writeHead(){
        document.write("<center><div style = \"max-width:300px; text-align:left;\"><h4>Featured Articles:<\/h4> <ul id=\"feat-art\">");
}

function writeItems() {
        for(var item in links){
                document.write("<li><h3><a href = \"" + links[item].URL + "\">" + links[item].title + " -" + links[item].author + "<\/a><\/h3><\/li>");
        }
}

function writeClose() {
        document.write("<\/ul><\/div><\/center>");
}

function writeFeatured() {
        writeHead();
        writeItems();
        writeClose();
}
