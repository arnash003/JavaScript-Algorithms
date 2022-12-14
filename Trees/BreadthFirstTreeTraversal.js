/*
  Breadth First Tree Traversal or level order traversal implementation in javascript
  Author: @GerardUbuntu
*/

class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor () {
    this.root = null
    this.traversal = []
  }

  breadthFirstIterative () {
    this.traversal = []
    if (this.root) {
      this.traversal.push(this.root)
    }
    for (let i = 0; i < this.traversal.length; i++) {
      const currentNode = this.traversal[i]
      if (currentNode.left) {
        this.traversal.push(currentNode.left)
      }
      if (currentNode.right) {
        this.traversal.push(currentNode.right)
      }
      this.traversal[i] = currentNode.data
    }
    return this.traversal
  }

  breadthFirstRecursive () {
    this.traversal = []
    const h = this.getHeight(this.root)
    for (let i = 0; i !== h; i++) {
      this.traverseLevel(this.root, i)
    }
    return this.traversal
  }

  // Computing the height of the tree
  getHeight (node) {
    if (node === null) {
      return 0
    }
    const lheight = this.getHeight(node.left)
    const rheight = this.getHeight(node.right)
    return lheight > rheight ? lheight + 1 : rheight + 1
  }

  traverseLevel (node, levelRemaining) {
    if (node === null) {
      return
    }
    if (levelRemaining === 0) {
      this.traversal.push(node.data)
    } else {
      this.traverseLevel(node.left, levelRemaining - 1)
      this.traverseLevel(node.right, levelRemaining - 1)
    }
  }
}

export { BinaryTree, Node }
