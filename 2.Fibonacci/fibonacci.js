// By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. For example, the first ten Fibonacci numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(n) {
	var numbers = [];
	var total = [];

	for (var i = 0; i <= n; i++) {
	numbers.push(i);

		if (i < 2) {
			total[i] = i;
		} else {
			total[i] = total[i-1] + total[i-2];
		}
	}
	// console.log(numbers);
	// console.log(total);
	return total;	
}

document.querySelector('div').innerHTML = fibonacci(15);
