class ListNode{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    put(key,value){
        let curr = this.head;
        while(curr){
            if(curr.key == key){
                curr.value = value;
                return;
            }
            curr = curr.next;
        }
        let node = new ListNode(key,value)
        node.next = this.head;
        this.head = node;
    }

    get(key){
        let curr = this.head;
        while(curr){
            if(curr.key == key){
                return curr.value;
            }
            curr = curr.next;
        }
        return -1;
    }

    remove(key){
        if(!this.head) return;

        if(this.head.key == key){
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        while(curr.next){
            if(curr.next.key == key){
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
        return 
    }

}


class MyHashMap {
    constructor() {
        this.size = 1000
        this.buckets = Array.from({length: this.size}, () => new LinkedList())
    }

    _hash(key){
        return key % this.size;
    }

    put(key, value) {
        this.buckets[this._hash(key)].put(key,value)
    }

    get(key) {
        return this.buckets[this._hash(key)].get(key)
    }

    remove(key) {
        this.buckets[this._hash(key)].remove(key)
    }
}
