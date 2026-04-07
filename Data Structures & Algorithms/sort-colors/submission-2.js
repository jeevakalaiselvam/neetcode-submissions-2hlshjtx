class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    swap(nums,i,j){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

    sortColors(nums) {
        let low = 0;
        let mid = 0;
        let high = nums.length - 1;

        while(mid <= high){
            if(nums[mid] === 0){
                this.swap(nums,mid,low);
                low++;
                mid++;
            }else if(nums[mid] == 1){
                mid++;
            }else{
                this.swap(nums,mid,high)
                high--
            }
        }

        return nums;
    }
}
