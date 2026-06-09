function isPrime(num: number): boolean {
	if (num <= 1) return false;

	// we check iteratively from 2 until sqrt(num)

	let sqrtNum = Math.sqrt(num);

	for (let i = 2; i <= sqrtNum; i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

console.log(isPrime(49));
