class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    
    sortArray(nums) {
        if(nums.length <= 1) return nums;
        let middle = Math.floor(nums.length / 2);
        let left = this.sortArray(nums.slice(0,middle));
        let right = this.sortArray(nums.slice(middle));
        return this.merge(left,right);
    }

    merge(left,right){
        let result = [];
        let i = 0;
        let j = 0;
        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                result.push(left[i]);
                i++;
            }else{
                result.push(right[j]);
                j++;
            }
        }
        return [...result,...left.slice(i),...right.slice(j)]
    }
}
