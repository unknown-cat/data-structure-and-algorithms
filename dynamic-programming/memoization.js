function memoizationAddTo80() {
	let cache = {};
	return function (n) {
		if (n in cache) {
			return cache[n]
		} else {
			console.log('long time...');
			cache[n] = n + 80;
			return cache[n];
		}
	}
}

const memoized = memoizationAddTo80();

console.log(memoized(2))
console.log(memoized(4))
console.log(memoized(4))
console.log(memoized(4))
