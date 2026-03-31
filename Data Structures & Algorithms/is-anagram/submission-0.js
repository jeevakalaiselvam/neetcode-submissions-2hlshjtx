class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const ss = s.split("").sort()
        const tt = t.split("").sort()
        for(let i = 0; i < ss.length ; i++){
            if(ss[i] !== tt[i]) return false
        }
        return true
    }
}
