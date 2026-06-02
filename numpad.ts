function letterCombinations(digits: string): string[] {
    const numpad = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"]
    ]);

    
    let ans: string[] = [""];

    for (const digit of digits) {
        const letters = numpad.get(digit)!; // "abc"
        const temp: string[] = [];

        for (const combo of ans) { // ""
            for (const letter of letters) {
                temp.push(combo + letter); // "[a,b,c]"
            }
        }

        ans = temp; // 
    }

    return ans;
    
};

console.log(letterCombinations("23"));