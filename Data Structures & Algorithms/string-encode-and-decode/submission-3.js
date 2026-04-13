class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => `${str.length}#${str}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let results = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== '#') j++;
            let length = parseInt(str.slice(i,j));
            results.push(str.slice(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return results;
    }
}
