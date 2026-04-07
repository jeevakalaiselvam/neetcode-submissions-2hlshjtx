class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let freq = new Map();
        if(s.length != t.length) return false;
        for(let i = 0 ; i < s.length; i++){
            freq.set(s[i], (freq.get(s[i]) || 0) + 1)
        }

        for(let j = 0 ; j < t.length; j++){
            freq.set(t[j], (freq.get(t[j]) || 0) - 1)
            if(freq.get(t[j]) < 0) return false;
        }

        return true;
    }
}
