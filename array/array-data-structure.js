class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  } //0(1)

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  } //O(1)
  
}

const newArray = new MyArray();


