class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } //really fast we considering it like O(n)

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } //O(n)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  } //O(1) if no collisions (most times in a real life) !!! if low on memory
  // it could become O(n)

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0])
          }
        } else {

          keysArray.push(this.data[i][0])
        }
      }
    }
    return keysArray;
  }

}

const myHashTable = new HashTable(20);
