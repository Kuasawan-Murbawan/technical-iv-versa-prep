function invertStr(str: string): string {
	let arr = str.split("");

	let left = 0;

	let right = arr.length - 1;

	while (left < right) {
		let temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		left++;
		right--;
	}

	return arr.join("");
}

function invertStr2(str: string): string {
	return str.split("").reverse().join("");
}

console.log(invertStr2("salamjiki"));
