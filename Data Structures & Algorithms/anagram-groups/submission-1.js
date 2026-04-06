class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(let i = 0 ; i < strs.length; i++){
            let key = strs[i].split("").sort().join("");
            if(!map.has(key)){
                map.set(key,[strs[i]])
            }else{
                map.get(key).push(strs[i])
            }
        }

        return Array.from(map.values())
    }
}
