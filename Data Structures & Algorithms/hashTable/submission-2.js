class HashKey {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor(capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.map = new Array(capacity).fill(null);
    }

    insert(key, value) {
        let index = this.hash(key);
        
        while (true) {
            if (this.map[index] == null) {
                this.map[index] = new HashKey(key, value);
                this.size++;
                if (this.size >= this.capacity / 2) {
                    this.resize();
                } 
                return;
            } else if (this.map[index].key === key) {
                this.map[index].value = value;
                return;
            }
            index = (index + 1) % this.capacity;  // Linear probing
        }
    }

    get(key) {
        let index = this.hash(key);

        while (this.map[index] !== null) {
            if (this.map[index].key === key) {
                return this.map[index].value;
            }
            index = (index + 1) % this.capacity;  // Keep probing
        }

        return -1;
    }

    remove(key) {
        let index = this.hash(key);

        while (this.map[index] !== null) {
            if (this.map[index].key === key) {
                this.map[index] = null;
                this.size--;
                return true;
            }
            index = (index + 1) % this.capacity;  // Keep probing
        }

        return false;
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }

    resize() {
        this.capacity *= 2;
        let newMap = new Array(this.capacity).fill(null);
        let oldMap = this.map;
        this.map = newMap;
        this.size = 0;

        for (let i = 0; i < oldMap.length; i++) {
            if (oldMap[i]) {
                this.insert(oldMap[i].key, oldMap[i].value);  // Fix incorrect field reference
            }
        }
    }

    hash(key) {
        return key % this.capacity;  // Fix incorrect hash function
    }
}
