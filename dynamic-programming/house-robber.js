let rob = function (nums) {
	const length = nums.length;
	if (length === 0) return 0;
	if (length === 1) return nums[1];

	let house = [];
	house[0] = nums[0];
	house[1] = Math.max(nums[0], nums[1]);

	for (let i = 2; i < length; i++) {
		house[i] = Math.max(nums[i] + house[i - 2], house[i - 1])
	}

	return house[house.length - 1]
};

console.log(rob([1, 2, 3, 4, 5, 7]));
