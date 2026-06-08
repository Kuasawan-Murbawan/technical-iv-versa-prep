// Questions
// 1. Fizzbuzz problem (3=fizz, 5=buzz, 3&5=fizzbuzz)
// 2. If there are letters (a-z), convert into integer using Nokia Keypad (eg: 32 = )
// 3. Loop until there is 10,000 count of a digit, display the i and the digit that reached 10,000
// word to numbers

var countDigit = new Map();
var sign = true;
var count = 0;

function fizzbuzz(digit: number) {
	let ans = "";

	if (digit % 3 == 0) {
		ans += "fizz";
	}

	if (digit % 5 == 0) {
		ans += "buzz";
	}

	if (ans == "") {
		console.log("In if: ", digit);
		mapCounter(String(digit));
	} else {
		toNumber(ans);
	}
}

function toNumber(str: string) {
	// Input : "fizz"
	// Ouput : "33344499999999"
	let nokiaNumpad: Record<string, string> = {
		f: "333",
		i: "444",
		z: "9999",
		b: "22",
		u: "88",
	};

	let converted = "";

	for (let elem of str) {
		converted += nokiaNumpad[elem];
	}

	mapCounter(converted);
}

function mapCounter(input: string) {
	console.log(input);
	for (let elem of input) {
		countDigit.set(elem, (countDigit.get(elem) | 0) + 1);
		if (countDigit.get(elem) === 1000) {
			sign = false;
			console.log("elemnt: ", elem);
			break;
		}
	}
}

while (sign) {
	count++;
	fizzbuzz(count);
}
console.log(countDigit);
console.log(count);
