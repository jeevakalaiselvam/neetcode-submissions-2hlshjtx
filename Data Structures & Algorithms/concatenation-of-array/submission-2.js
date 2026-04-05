class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let result = []
        let n = nums.length
        for(let i = 0 ; i < nums.length; i++){
            result[i] = nums[i];
            result[i + n] = nums[i];
        }
        return result;
    }
}
