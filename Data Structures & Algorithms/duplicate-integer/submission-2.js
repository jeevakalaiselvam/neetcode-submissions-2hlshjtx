class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Map();
        for(let i = 0 ; i < nums.length; i++){
            if(!seen.has(nums[i])){
                seen.set(nums[i], 1)
            }else{
                return true;
            }
        }
        return false;
    }
}
