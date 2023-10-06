// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null
      // Your code here
    }
  
    insert(val, currentNode=this.root) {
      if (this.root === null) {
        this.root = new TreeNode(val);
        return
      }
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode(val);
        } else {
          this.insert(val, currentNode.left);
        }
      }
      else if (val >= currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(val);
        } else {
          this.insert(val, currentNode.right);
        }
      }
      // Your code here
    }
  
    search(val, currentNode = this.root) {
      if (currentNode === null) {
        return false;
      }
      if (currentNode.val === val) {
        return true;
      }
      if (currentNode.val > val) {
        return this.search(val, currentNode.left)
      }
      if (currentNode.val < val) {
        return this.search(val, currentNode.right)
      }
      // Your code here
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      if (currentNode !== null) {
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
      }
      // Your code here
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      if (currentNode !== null) {
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
        
      }
      // Your code here
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      if (currentNode !== null) {
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
      }
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      if (!this.root) return;
      const queue = [this.root];
  
      while (queue.length > 0) {
        const currentNode = queue.shift()
        console.log(currentNode.val);
      
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
      // your code here
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      if (!this.root) return;
      const stack = [this.root];
  
      while (stack.length > 0) {
        const currentNode = stack.pop();
        console.log(currentNode.val);
  
        if (currentNode.left) {
          stack.push(currentNode.left);
        }
        if (currentNode.right) {
          stack.push(currentNode.right);
        } 
      }
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };