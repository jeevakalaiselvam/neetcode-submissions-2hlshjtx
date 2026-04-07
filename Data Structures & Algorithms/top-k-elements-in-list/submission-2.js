class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();

        for(let num of nums){
            freqMap.set(num,(freqMap.get(num) || 0)+1);
        }
        
        console.log(freqMap)

        let buckets = Array.from({length: nums.length + 1}, () => []);

        for(let [num,freq] of freqMap){
            buckets[freq].push(Number(num));
        }

        let results = [];

        for(let i = buckets.length - 1 ; i >= 0 && results.length < k; i--){
            for(let num of buckets[i]){
                if(results.length == k) break;
                results.push(num);
            }
        }

        return results;
    }
}