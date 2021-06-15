//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
	let arrayStr = str.split('');
	let reverseArray = [];

	function addToArray(array) {
		if (array.length > 0) {
			reverseArray.push(arrayStr.pop());
			addToArray(array)
		}
		return
	}

	addToArray(arrayStr)
	return reverseArray.join('')
}

console.log(reverseString('yoyo mastery'));

//should return: 'yretsam oyoy'

function reverseStringRecursive(str) {
	if (str === '') {
		return ''
	} else {
		return reverseStringRecursive(str.substring(1)) + str.charAt(0);
	}
}

console.log(reverseStringRecursive('yoyo mastery'));


