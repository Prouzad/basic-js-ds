const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
	constructor() {
		this.front = null;
		this.back = null;
	}


	getUnderlyingList() {
		if (!this.isEmpty()) {
			let obj = this.front;
			return obj;
		}
	}
	isEmpty() {
		return !this.front; //front not null
	}
	enqueue(value) {
		let nodeList = new ListNode(value);

		switch (this.isEmpty()) {
			case true:
				this.front = nodeList;
				this.back = nodeList;
				break
			case false:
				this.back.next = nodeList;
				this.back = nodeList;
				break
		}
		console.log(nodeList);
	}

	dequeue() {
		let objList = this.front;

		if (!this.isEmpty()) {
			this.front = this.front.next;

		}
		if (!this.front) {
			this.back = null;
		}
		this.getUnderlyingList();
		return objList.value;
	}
}
const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue.getUnderlyingList());


module.exports = {
	Queue
};
