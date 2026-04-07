class MyHashSet {
    constructor() {
        this.size = 769;
        this.buckets = Array.from({length: this.size},() => [])
    }

    hash(key){
        return key % this.size;
    }

    add(key) {
        let index = this.hash(key);
        if(!this.buckets[index].includes(key)){
            this.buckets[index].push(key)
        }
    }

    remove(key) {
        let index = this.hash(key)
        this.buckets[index] = this.buckets[index].filter(item => item != key);
    }

    contains(key) {
        let index = this.hash(key);
        return this.buckets[index].includes(key)
    }
}

