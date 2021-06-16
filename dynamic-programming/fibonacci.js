//slow solution
let count = 0

function fib(n) {
	count++
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2)
}

//dynamic programming memoization + recursion solution top down
let dpCount = 0;

function fibonacci() {
	let cache = {};

	return function dynamicFib(n) {
		dpCount++
		if (n in cache) {
			return cache[n]
		} else {
			if (n < 2) {
				return n
			} else {
				cache[n] = dynamicFib(n - 2) + dynamicFib(n - 1);
				return cache[n]
			}
		}
	}
}

const dynamicFib = fibonacci();

//dynamic programming bottom up approach
let fiboCount = 0;

function fibo(n) {
	if (n < 2) {
		return n;
	}

	let result = [0, 1];
	for (let i = 2; i <= n; i++) {
		fiboCount++

		result.push(result[i - 2] + result[i - 1]);
	}
	return result.pop()
}


console.log('result =', fib(20), ', slow calls:', count);
console.log('result =', dynamicFib(70), ', DP calls:', dpCount);
console.log('result =', fibo(70), ', calls:', fiboCount);