// Issues
var issue1 = {
	URL:"http://issuu.com/thetorchbc/docs/9_25_13",
	image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i6c37d696b2b63675/1384561460/std/image.png",
	title: "Issue 1 - Sep 27, 2013",
};

var issue2 = {
	URL:"http://issuu.com/thetorchbc/docs/10_23_13",
	image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/ic07c92708b5eac0d/1384561489/std/image.png",
	title: "Issue 2 - Oct 25, 2013",
};

var issue3 = {
	URL:"http://issuu.com/thetorchbc/docs/11_20_13",
	image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i1c0d508e30b9337d/1384930173/std/image.png",
	title: "Issue 3 - Nov 20, 2013",
};

var issue4 = {
	URL:"http://issuu.com/thetorchbc/docs/12_10_13",
	image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/iac5930e39fd1fc24/1386804563/std/image.png",
	title: "Issue 4 - Dec 11, 2013",
};

var issue5 = {
	URL:"http://issuu.com/thetorchbc/docs/1_29_14_9828e077f15499",
	image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i55367dd7784895a5/1391017120/std/image.png",
	title: "Issue 5 - Jan 29, 2014",
};

var issue6 = {
	URL:"http://issuu.com/thetorchbc/docs/2_26_14",
	image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i733de2b17d28c524/1393528929/std/image.png",
	title: "Issue 6 - Feb 26, 2014",
};

var issue7 = {
	URL:"http://issuu.com/thetorchbc/docs/3_26_14",
	image:"http://u.jimdo.com/www51/o/s45a8f1d6a0cbe1ad/img/i3f5516447a075130/1396242207/thumb/image.png",
	title: "Issue 7 - Mar 26, 2014",
};

var issues = [issue1, issue2, issue3, issue4, issue5, issue6, issue7];

/*
var issue# = {
	URL:"URL",
	image:"IMAGE",
	title: "DATE",
};
*/




// Functions

function writeAllIssues(){
	document.write('<div style="margin-left:5%; overflow:auto; display:block; clear:both;" id="RecentPub"><h1 style="margin-left:33%;"><b>Past Publications:</b></h1>');
    for (var i=0; i<issues.length; i++){ 
    	document.write('<div style="width:24%; float:left;"><a href=" '+ issues[i].URL +' " style="text-decoration:none;"><span style="margin-left:4px; font-size:13px"> ' + issues[i].title + ' </span><img style="width:90%; border:1px solid #dfdfdf;" class="publication-img" src=" ' + issues[i].image + ' " alt="" /></a></div>');
    	}
    
    document.write("</div>");
}

function writeRecentIssues(){
	document.write('<div style="margin-left:5%; overflow:auto; display:block; clear:both;" id="RecentPub"><h1 style="margin-left:33%;"><b>Past Publications:</b></h1>');
    
    for (var i=issues.length-4; i < issues.length; i++) {
	    document.write('<div style="width:24%; float:left;"><a href=" '+ issues[i].URL + ' " style="text-decoration:none;"><span style="margin-left:4px; font-size:13px"> ' + issues[i].title + ' </span><img style="width:90%; border:1px solid #dfdfdf;" class="publication-img" src=" ' + issues[i].image + ' " alt="" /></a></div>');
    }
    
    document.write("</div>");
}

