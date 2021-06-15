class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		if (!this.top) {
			return this.top
		}

		return this.top.value
	}

	push(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}

		this.length++;
		return this
	}


	pop() {
		if (!this.top) {
			return null
		}
		if (this.top === this.bottom) {
			this.bottom = null
		}
		this.top = this.top.next;
		this.length--;
		return this
	}

}

const myNewStack = new Stack();

myNewStack.push('google');
myNewStack.push('udemy');
myNewStack.push('discord');
console.log(myNewStack)
myNewStack.pop()
myNewStack.pop()
myNewStack.pop()
console.log(myNewStack.peek())
console.log(myNewStack)

