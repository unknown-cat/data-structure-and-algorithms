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

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  } //O(1)

  delete(index) {
    const item = this.data[index];
    this.shiftItem(index)
  } //O(1 + n) = O(n)

  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  } //O(n)
}

const newArray = new MyArray();


