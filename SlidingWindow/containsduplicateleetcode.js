var containsNearbyDuplicate = function(nums, k) {
    let length = nums.length;
    let a = {};
    for (let i = 0; i < length; i++)  {
        if (i - a[nums[i]] >= k) {
            return true;
        } else {
            a[nums[i]] = i;
        };
    };
    return false;
};
console.log(containsNearbyDuplicate([1,2,3,1],1))

