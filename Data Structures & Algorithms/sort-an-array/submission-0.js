class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    quicksort(nums, left, right){
        if (left >= right) return;

        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

        const pivot = nums[right];
        let i = left;

        for (let j = left; j < right; j++) {
            if (nums[j] < pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }

        [nums[i], nums[right]] = [nums[right], nums[i]];

        this.quicksort(nums, left, i - 1);
        this.quicksort(nums, i + 1, right);
    }

    sortArray(nums) {
        this.quicksort(nums, 0, nums.length - 1);
        return nums;
    }
}