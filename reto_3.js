const fibonacci = () => {    
    let nums = [0,1]    
    for(let i = 0; i < 48; i++){
        nums.push(nums[nums.length - 1] + nums[nums.length - 2])                
    }
    console.log(nums)
}

fibonacci()