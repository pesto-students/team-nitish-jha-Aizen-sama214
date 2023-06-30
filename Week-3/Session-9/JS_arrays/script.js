// Put your solution here
function divideArray(nums){
    nums.sort();
    odd_array = [];
    even_array = [];
    const l = nums.length;
    for(let i = 0; i < l; i++){
        if(nums[i]%2 === 0){
            even_array.push(nums[i]);
            continue;
        } 
        odd_array.push(nums[i])
    }
    console.log("Even numbers:")
    for(let i = 0;i < even_array.length; i++){
        console.log(even_array[i])
    }
    console.log("Odd numbers:")
    for(let i = 0;i < odd_array.length; i++){
        console.log(odd_array[i])
    }
}