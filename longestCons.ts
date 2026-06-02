
function longestConsecutive(nums: number[]) : number{

    nums = nums.sort((a,b) => {
        return a-b;
    });
    let count =1;

    let maxCount = 0;

    for(let i=1; i<nums.length; i++){

        if(nums[i] === nums[i-1]) continue;

        if(nums[i] -1 === nums[i-1]){
            count++;
            maxCount = Math.max(maxCount, count);
        }else{
            count = 1;
        }

    }

    return maxCount;
}

console.log(longestConsecutive([1,0,1,2]));