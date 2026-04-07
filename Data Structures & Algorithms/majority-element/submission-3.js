class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        if(nums.length == 1) return nums[0];

        let max = Math.floor(nums.length / 2) + 1;

        let map = new Map();
        for(let i = 0 ; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
            if(map.get(nums[i]) >= max){
                return nums[i]
            }
        }
        return -1;
    }
}
