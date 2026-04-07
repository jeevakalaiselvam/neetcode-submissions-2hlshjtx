class ListNode{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    constructor() {
        this.size = 769;
        this.buckets = Array.from({length: this.size}, () => null);
    }

    hash(key){
        return key % this.size;
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let index = this.hash(key);
        let curr = this.buckets[index];
        if(curr == null){
            this.buckets[index] = new ListNode(key,value);
            return;
        }
        while(curr){
            if(curr.key == key){
                curr.value = value;
                return;
            }
            if(curr.next == null){
                curr.next = new ListNode(key,value);
                return;
            }
            curr = curr.next;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let index = this.hash(key);
        let curr = this.buckets[index];
        if(curr == null) return -1;
        while(curr){
            if(curr.key == key){
                return curr.value;
            }
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.hash(key);
        let curr = this.buckets[index];
        if(curr == null) return;
        let prev = null;
        if(curr.key == key){
            this.buckets[index] = curr.next;
            return;
        }
        while(curr){
            if(curr.key == key){
                prev.next = curr.next;
                return;
            }
            prev = curr;
            curr = curr.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
