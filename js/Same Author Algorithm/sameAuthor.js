function authorWork() {
	$j(document).ready(function(){
		//Check to see if the text has picture
		if($j(".clearover").find('p:first').find('em').html()){
			var author = $j(".clearover").find('p:first').find('em').html();
			var authorInsert = checkSameAuthor(author);
			$j(".clearover").find('p:first').find('em').html(authorInsert);
			console.log("TRUEE: " + author);
		} 
		//Else find text when not using text with picture
		else if ($j("#content_area").find('.j-text')){
			var author = $j("#content_area").find('.j-text').find('p:first').find('em').html();
			var authorInsert = checkSameAuthor(author);
			$j("#content_area").find('.j-text').find('p:first').find('em').html(authorInsert);
		}
	});
}

//Make a case switch for each author to then turn that text into a link and if it doesnt fit any of the criteria then dont use it at all

function checkSameAuthor(author) {
	console.log("CURRENT AUTHOR IS: " + author);
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
		default:
			return author;
	}
}
