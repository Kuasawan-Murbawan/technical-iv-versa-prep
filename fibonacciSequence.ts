// function fibSeq(n: number): number {
// 	if (n == 0) {
// 		return 0;
// 	} else if (n == 1) {
// 		return 1;
// 	} else {
// 		return fibSeq(n - 1) + fibSeq(n - 2);
// 	}
// }

function fibSeq(n: number) {
	let fibArr = [0, 1];

	for (let i = 2; i <= n; i++) {
		fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
	}

	return fibArr[n];
}

console.log(fibSeq(10));

// fib(0) = 0;
// fib(1) = 1
// fib(2) = fib(0) + fib(1)
// fib(3) = fib(2) + fib(1)
