class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length == 0) return ""
        if(strs.length == 1) return strs[0];
        let match = strs[0];
        let i = 1;
        while(match.length > 0 && i < strs.length){
            if(!strs[i].startsWith(match)){
                i = 1;
                match = match.slice(0,-1);
            }else{
                i++;
            }
        }

        return match;
    }
}
