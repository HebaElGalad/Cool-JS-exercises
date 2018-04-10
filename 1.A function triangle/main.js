// A function "triangle" that takes a number (lines) as an input and prints a triangle up to the number of lines (lines) provided
function triangle(number) {
	var lines		= ""; // to save the output
	var paragraph	= ""; // to add a <p> tag

	for (var i = 1; i <= number; i++) {
		// styles even and odd lines differently
		if (i % 2 == 0) {
			lines += "<strong>"+(""+i).repeat(i)+"</strong>";
		} else {
			lines += (""+i).repeat(i);
		}
		// wraps each line in a p tag (REPLACING 'P' TAG WITH 'SPAN' BCOZ IT'S CONFLICTING WITH THE OTHER FUNCTION)
		paragraph += "<span>"+lines+"</span><br/><br/>";

		// Reset lines to empty string again
		lines = "";
	}

	document.querySelector('#my-output').innerHTML += paragraph;
}

triangle(5);

// A function isEven, that takes as input a number and returns true if the number is even and false otherwise

function isEven(line) {
	if (line % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

// A function correctClass, that returns the class "even" if this is an even row, and "odd" if this is an odd row

function correctClass(isEven, row, index) {
	// var row = isEven(line);
	if (isEven(index) == true) {
		row.className = "even";
		// Style the "even" and "odd" classes similar to what is shown above
		// document.querySelector(".even:last-child").style.fontWeight = "bold";
		return true;
	} else {
		row.className = "odd";
		// Style the "even" and "odd" classes similar to what is shown above
		// document.querySelector(".odd:last-child").style.fontWeight = "normal";
		return false;
	}
}
// correctClass(isEven, 4);

// Add an extra parameter to the "triangle" function which specifies the character to be used when drawing the triangle, for example if that character is '*'. If a character was not provided, then the default should be the numbers shown before

function triangle2(number, character, isEven, correctClass) {
	
	// var row = isEven(i);
	// lines output + correctClass(row);

	if (character) {

		for (var i = 1; i <= number; i++) {
			// to creat new <p> tag 
			var p		= document.createElement("p");
			// wraps each line in a p tag
			var lines	= document.querySelector("#characters").appendChild(p);
			console.log(lines);

			var pArray	= document.getElementsByTagName("p");

			var output	= (""+character).repeat(i);

			// styles even and odd lines differently
			if (correctClass(isEven, pArray[i-1], i) == true) {
				document.querySelector(".even:last-child").innerHTML = output;
			} else {
				document.querySelector(".odd:last-child").innerHTML = output;
			}
			// Reset lines to empty string again
			lines = "";
		}

	} else {

		for (var i = 1; i <= number; i++) {
			// styles even and odd lines differently
			if (i % 2 == 0) {
				lines += "<strong>"+(""+i).repeat(i)+"</strong>";
			} else {
				lines += (""+i).repeat(i);
			}
			// wraps each line in a p tag
			paragraph += "<p>"+lines+"</p>";

			// Reset lines to empty string again
			lines = "";
		}
	}
}

triangle2(5, "&", isEven, correctClass);