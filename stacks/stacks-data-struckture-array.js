class Stack {
	constructor() {
		this.array = [];
	}

	peek() {
		return this.array[this.array.length - 1];
	}

	push(value) {
		this.array.push(value);
		return this.length
	}


	pop() {
		this.array.pop();
		return this.length;
	}

}

const myNewStack = new Stack();

myNewStack.push('google')
myNewStack.push('udemy')
myNewStack.push('discord')
myNewStack.pop()
myNewStack.push('discord')
console.log(myNewStack.peek());
console.log(myNewStack);


