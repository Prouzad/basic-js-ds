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
  constructor(){
    this.root = null;
    
  }
  root() {
    return this.root;
  }

  add(data, root = this.root) {
    if(root == null){
      root = new Node(data);
    }else if(data < root.data){
      if(root.left == null){
        root.left = new Node(data);
      }else{
        this.add(data, root.left);
      }
    }else if(data > root.data){
      if(root.right == null){
        root.right = new Node(data);
      }else{
        this.add(data, root.right);
      }
    }else{
      return;
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, root = this.root) {
    let node = root;
    while(node !== null){
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

  remove(data, root = this.root) {
    if (!this.has(data)) return;
    if (!root) {
        return null;
    }
    if(data < root.data){
      root.left = this.remove(data, root.left);
    }else if(data> root.data){
      root.right = this.remove(data, root.right);
    }else{
      if (!root.left) {
        return root.right;
      }else if(!root.right) {
          return root.left;
      }else{
          root.data = this.min(root.right);
          root.right = this.remove(root.data, root.right);
      }
    }
    return root;
  }

  min(root = this.root) {
    if(root == null || root == undefined){
      return null;
    }
    let node = root;
    while(node.left !== null){
      node = node.left;
    }
    return node.data;
  }

  max(root = this.root) {
    if(root === null){
      return null;
    }
    let node = root;
    while(node.right !== null){
      node = node.right;
    }
    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};