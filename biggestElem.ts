function findBiggestElement(nums: number[]): number {
	let biggestElem = 0;

	for (let elem of nums) {
		biggestElem = Math.max(elem, biggestElem);
	}

	return biggestElem;
}

console.log(findBiggestElement([1, 2, 3, 89, 2, 3, 122]));
