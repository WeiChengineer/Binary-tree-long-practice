const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if (!rootNode) return
  while (rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.val
  // Your code here
}

function findMaxBST (rootNode) {
  if (!rootNode) return
  while (rootNode.right) {
    rootNode = rootNode.right;
  }
  return rootNode.val;
  // Your code here
}

function findMinBT (rootNode) {
  if (!rootNode) return
  let lo = rootNode.val;
  if (findMinBT(rootNode.left) < lo) {
    lo = findMinBT(rootNode.left)
  }
  if (findMinBT(rootNode.right) < lo) {
    lo = findMinBT(rootNode.right)
  }
  return lo;
  // Your code here
}

function findMaxBT (rootNode) {
  if (!rootNode) return
  let high = rootNode.val;
  if (findMaxBT(rootNode.left) > high) {
    high = findMaxBT(rootNode.left)
  }
  if (findMaxBT(rootNode.right) > high) {
    high = findMaxBT(rootNode.right)
  }
  return high;

  // Your code here
}

function getHeight (rootNode) {
  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0
  let left = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);
  if (left > right) return left + 1
  else return right + 1
  // Your code here
}

function balancedTree (rootNode) {
  if (!rootNode) return true
  let stack = [rootNode]
  while (stack.length) {
    let curr = stack.pop()
    let left = getHeight(curr.left)
    let right = getHeight(curr.right)
    if (Math.abs(left - right) <= 1) {
      if (curr.left) stack.push(curr.left)
      if (curr.right) stack.push(curr.right)
    }
  else return false;
  }
  return true;
  // Your code here
}

function countNodes (rootNode) {
  if (!rootNode) return 0;
  return 1 +countNodes(rootNode.left) + countNodes(rootNode.right);
  // Your code here
}

function getParentNode (rootNode, target) {
  if (rootNode.val === target) return null;
  const queue = [rootNode];
  while (queue.length) {
    let node = queue.shift();
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
    if (queue.filter(ele => (ele.val === target))[0]) return node;
  }
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  let curr = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {
    if (curr) {
      stack.push(curr)
      curr = curr.left
    }
    else if (!curr && stack.length > 0) {
      curr = stack.pop()
      if (curr.val === target) {
        if (!predecessor) return null
        return predecessor.val
      }
      predecessor = curr
      curr = curr.right
    }
    else break;
  }
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  let parent = getParentNode(rootNode, target) 
  // Undefined if the target cannot be found
  if (parent === undefined) return undefined

  // Do a traversal to find the node. Keep track of the parent

  // Set target based on parent
  let targetNode;
  let isLeftChild = false;
  if (!parent) targetNode = rootNode
  else if (parent.left && parent.left.val === target) {
    targetNode = parent.left;
    isLeftChild = true;
  }
  else if (parent.right && parent.right.val === target) targetNode = parent.right;
  // Case 0: Zero children and no parent:
  if (!parent && !targetNode.left && !targetNode.right) return null
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    if (isLeftChild) parent.left = null;
    else parent.right = null;
  }
  
  // Case 2: Two children:
  else if (targetNode.left && targetNode.right) {
    let predecessor = inOrderPredecessor(rootNode, target)
    deleteNodeBST(rootNode, predecessor)
    targetNode.val = predecessor;
  }
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child
  else {
    if (targetNode.left) {
      if (isLeftChild) parent.left = targetNode.left;
      else parent.right = targetNode.left
    }
    else {
      if (isLeftChild) parent.left = targetNode.right;
      else parent.right = targetNode.right;
    }
  }
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}