let counter = 0;

function inception() {
	if (counter > 3) {
		return 'done' //base case
	}

	counter++;
	return inception() //recursive case
}

console.log(inception());