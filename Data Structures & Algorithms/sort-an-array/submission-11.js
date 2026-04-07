class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    swap(nums,i,j){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

    partition(nums,low,high){
        let pivot = nums[low];
        let i = low - 1;
        let j = high + 1;
        while(true){
            do{
                i++;
            }while(nums[i] < pivot)
            do{
                j--;
            }while(nums[j] > pivot)
            if(i >= j) return j;
            this.swap(nums,i,j);
        }
    }

    quicksort(nums,low,high){
        if(low < high){
            let j = this.partition(nums,low,high)
            this.quicksort(nums,low,j)
            this.quicksort(nums,j+1,high)
        }
    }

    sortArray(nums) {
        this.quicksort(nums,0,nums.length - 1);
        return nums;
    }
}
