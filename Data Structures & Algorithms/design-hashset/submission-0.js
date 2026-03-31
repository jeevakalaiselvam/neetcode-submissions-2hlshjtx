class MyHashSet {
    constructor() {
        this.size = 1000;
        this.buckets = Array.from({length: this.size},() => [])
    }

    _hash(key){
        return key % this.size;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let idx = this._hash(key);
        let bucket = this.buckets[idx];
        if(!bucket.includes(key)){
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let idx = this._hash(key);
        this.buckets[idx] = this.buckets[idx].filter(k => k != key)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let idx = this._hash(key);
        let bucket = this.buckets[idx];
        return bucket.includes(key)
        }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
