const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.tree = null;
	}
	root() {
		return this.tree;
	}
	add(data, node = this.tree) {
		if (node === null) {
			this.tree = new Node(data);
		} else {
			if (data < node.data) {
				if (node.left === null) {
					node.left = new Node(data);
				} else {
					this.add(data, node.left);
				}
			} else if (data > node.data) {
				if (node.right === null) {
					node.right = new Node(data);
				} else {
					this.add(data, node.right);
				}
			} else {
				return null;
			}
		}
	}

	has(data) {
		let res = (this.find(data) !== null);
		return res;
	}
	find(data, tree = this.tree) {
		let node = tree;
		while (node !== null) {
			if (node.data === data) {
				return node;
			} else if (data < node.data) {
				node = node.left;
			} else if (data > node.data) {
				node = node.right;
			}
		}
		return null;
	}

	remove(data, tree = this.tree) {
		if (!this.has(data)) return;
		if (!tree) {
			return null;
		}
		if (data < tree.data) {
			tree.left = this.remove(data, tree.left);
		} else if (data > tree.data) {
			tree.right = this.remove(data, tree.right);
		} else {
			if (!tree.left) {
				return tree.right;
			} else if (!tree.right) {
				return tree.left;
			} else {
				tree.data = this.min(tree.right);
				tree.right = this.remove(tree.data, tree.right);
			}
		}
		return tree;
	}
	min(tree = this.tree) {
		if (tree == null || tree == undefined) {
			return null;
		}
		let m = tree.data;
		let nod = tree;
		while (nod.left !== null) {
			m = nod.left.data;
			nod = nod.left;
		}
		return m;
	}

	max(tree = this.tree) {
		if (tree === null) {
			return null;
		}
		let max = tree.data;
		let nod = tree;
		while (nod.right !== null) {
			max = nod.right.data;
			nod = nod.right;

		}
		return max;
	}

}

let bst = new BinarySearchTree();
bst.add(1);
bst.add(5);
bst.add(11);
bst.add(4);
bst.add(20);



module.exports = {
	BinarySearchTree
};
