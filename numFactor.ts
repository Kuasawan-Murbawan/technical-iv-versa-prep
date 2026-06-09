function findFactor(num: number, sqr: number): number[] {
	let ans = [];
	for (let i = 1; i <= sqr; i++) {
		if (num % i === 0) {
			ans.push(i);

			if (i !== num / i) {
				ans.push(num / i);
			}
		}
	}

	return ans;
}

function findSqrt(num: number): Promise<number> {
	return new Promise((resolve, reject) => {
		resolve(Math.sqrt(num));
	});
}

let n = 100;

findSqrt(n)
	.then((result) => {
		console.log("Sqrt of " + n + ": " + result);
		return findFactor(n, result);
	})
	.then((answer) => {
		console.log(answer);
	});
