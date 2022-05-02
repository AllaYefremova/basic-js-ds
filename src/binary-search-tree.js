const {
  resetHistory
} = require('sinon')
const {
  NotImplementedError
} = require('../extensions/index.js')

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.base = null
  }

  root() {
    return this.base
  }

  add(data) {
    let current = this.base

    while (current) {
      if (data > current.data) {
        if (!current.right) {
          current.right = new Node(data)
          return
        }
        current = current.right
      } else {
        if (!current.left) {
          current.left = new Node(data)
          return
        }
        current = current.left
      }

    }
  }

  has(data) {
    let current = this.base

    while (current) {
      if (data === current.data) {
        return true
      } else if (data > current.data) {
        if (!current.right) {
          return false
        }
        current = current.right
      } else {
        if (!current.left) {
          return false
        }
        current = current.left
      }

      return false
    }
  }

  find(data) {
    let current = this.base


    while (current) {
      if (data === current.data) {
        return current
      } else if (data > current.data) {
        if (!current.right) {
          return null
        }
        current = current.right
      } else {
        if (!current.left) {
          return null
        }
        current = current.left
      }

      return null
    }
  }

  remove(data) {
    if (this.base) return null
    this.base = deleteFunc(this.rootNode, data)
  }

  min() {
    let current = this.base
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this.base
    while (current.right) {
      current = current.right
    }
    return current.data
  }
}

function deleteFunc (current, value) {
  if (current.data === value) {
    if (!current.left && !current.right) {
      return null
    } else if (!current.left) {
      return current.right
    } else if (!current.right) {
      return current.left
    } else {
      let rightChild = current.right

      while (rightChild.left) {
        rightChild = rightChild.left
      }
      current.data = rightChild.data
      current.right = deleteFunc(current.right, rightChild.data)
      return current
    }
  }
  if (value < current.data) {
    if (current.left === null) {
      return current
    }
  }

  if (value > current.data) {
    if (current.right === null) {
      return current
    }
  }
}

module.exports = {
  BinarySearchTree,
}
