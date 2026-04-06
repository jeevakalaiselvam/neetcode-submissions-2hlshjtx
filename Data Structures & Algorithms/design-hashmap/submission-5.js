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

    _hash(key){
        return key % this.size;
    }

    put(key, value) {
        let index = this._hash(key);
        if(!this.buckets[index]){
            this.buckets[index] = new ListNode(key,value);
            return;
        }
        let curr = this.buckets[index];
        while(true){
            if(curr.key === key){
                curr.value = value;
                return;
            }
            if(curr.next === null) break;
            curr = curr.next;
        }
        curr.next = new ListNode(key,value)
        return;
    }

    get(key) {
        let index = this._hash(key);
        if(!this.buckets[index]) return -1;
        let curr = this.buckets[index];
        while(true){
            if(curr.key === key){
                return curr.value;
            }
            if(curr.next === null) break;
            curr = curr.next;
        }
        return -1;
    }

    remove(key) {
        let index = this._hash(key);
        if(!this.buckets[index]) return;
        let prev = null;
        let curr = this.buckets[index];
        while(true){
            if(curr.key === key){
                if(prev === null){
                    this.buckets[index] = curr.next;
                }else{
                    prev.next = curr.next;
                }
                return;
            }
            if(curr.next === null) break;
            prev = curr;
            curr = curr.next;
        }
        return;
    }
}

