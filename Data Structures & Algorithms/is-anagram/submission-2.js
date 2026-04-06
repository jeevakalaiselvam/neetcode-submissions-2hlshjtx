class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)   return false;

        let freq = new Map();

        for(let i = 0 ; i < s.length; i++){
            if(!freq.has(s[i])){
                freq.set(s[i],1)
            }else{
                freq.set(s[i], freq.get(s[i]) + 1)
            }
        }
        
        for(let i = 0 ; i < s.length; i++){
            if(!freq.has(t[i]) || freq.get(t[i]) == 0){
                return false
            }
            freq.set(t[i], freq.get(t[i]) - 1)
        }

        return true;
    }
}
