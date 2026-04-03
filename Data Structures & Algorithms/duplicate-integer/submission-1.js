class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Map();
        for(let item of nums){
            if(!seen.has(item)){
                seen.set(item,1)
            }else{
                return true;
            }
        }
        return false;
    }
}
