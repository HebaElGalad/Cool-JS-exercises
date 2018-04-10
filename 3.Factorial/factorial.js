// Write a function called factorial_of_n that takes a number and returns the factorial i.e. factorial_of_n(5) should return 120 (5x4x3x2x1)

function factorialOf(number) {
	if (number >= 0 && number < 2) {
      return 1;
	} else {
		return (number * factorialOf(number - 1));
	}
}

document.querySelector('div').innerHTML = factorialOf(5);

// console.log(factorialOf(5));