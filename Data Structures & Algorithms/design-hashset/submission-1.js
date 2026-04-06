class MyHashSet {
    constructor() {
        this.size = 1000;
        this.buckets = Array.from({length: this.size}, () => [])
    }

    _hash(key){
        return key % this.size;
    }

    add(key) {
        let index = this._hash(key);
        if(this.buckets[index].includes(key)){
            return;
        }else{
            this.buckets[index].push(key)
        }
    }

    remove(key) {
        let index = this._hash(key);
        this.buckets[index] = this.buckets[index].filter(item => item != key)
    }

    contains(key) {
        let index = this._hash(key);
        return this.buckets[index].includes(key)
    }
}

