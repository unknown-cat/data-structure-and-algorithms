function maxProfit(prices) {
	let min = Number.MAX_SAFE_INTEGER;
	let max = 0;

	for (let i = 0; i < prices.length; i++) {
		debugger

		min = Math.min(min, prices[i]);

		max = Math.max(max, prices[i] - min)

	}
	return max
}

console.log(maxProfit([199, 1, 2, 3, 4, 5, 6, 7, 8, 9]));