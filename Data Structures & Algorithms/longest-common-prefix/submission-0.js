class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        while(prefix.length > 0){
            let allMatch = true;
            for(let i = 1; i < strs.length; i++){
                if(!strs[i].startsWith(prefix)){
                    allMatch = false;
                    break;
                }
            }
            if(allMatch) return prefix;
            prefix = prefix.slice(0,-1)
        }
        return ""

    }
}
