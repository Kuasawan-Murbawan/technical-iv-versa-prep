
function removeDuplicates(nums : number[]) : number[]{

    let anchor = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[anchor] != nums[i]){
            anchor++;
            nums[anchor] = nums[i];
        }

    }

    return nums.slice(0,anchor+1);


}

console.log(removeDuplicates([1,1,2,2,3,3,3,4,4,4,5]));