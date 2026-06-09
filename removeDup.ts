// Write a function to remove duplicates from an array.

function removeDuplication(nums: number[]): number[] {
	let arr = nums.filter((num, index, nums) => {
		return nums.indexOf(num) == index;
	});

	let anchor = 0;
	for (let explorer = 1; explorer < nums.length; explorer++) {
		if (nums[anchor] != nums[explorer]) {
			anchor++;
			nums[anchor] = nums[explorer];
		}
	}

	return nums.slice(0, anchor + 1);
}

console.log(removeDuplication([1, 1, 1, 2, 2, 3, 4, 5, 5, 6]));
