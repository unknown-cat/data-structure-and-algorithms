class Queues {
  constructor() {
    this.array = []
  }

  push(value) {
    return this.array.push(value)
  }

  pop() {
    return this.array.shift()
  }

  peek() {
    return this.array[0]
  }

  empty() {
    return !this.array.length ? true : false
  }
}

const myNewQueues = new Queues();

myNewQueues.push('1');
myNewQueues.push('2');
myNewQueues.push('3');
myNewQueues.pop()

console.log(myNewQueues.peek());
console.log(myNewQueues.array)

