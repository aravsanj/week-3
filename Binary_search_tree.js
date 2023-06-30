class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return this;
        }
      } else if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          return this;
        }
      } else {
        return undefined;
      }
    }
  }

  remove(value) {
    this.root = this._removeItem(this.root, value);
  }

  _removeItem(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._removeItem(node.left, value);
    } else if (value > node.value) {
      node.right = this._removeItem(node.right, value);
    } else {
      if (!node.left && !node.right) return null;

      if (node.left && !node.right) return node.left;
      else if (node.right && !node.left) return node.right;

      let minRight = this.min(node.right);
      node.value = minRight.value;

      node.right = this._removeItem(node.right, minRight.value);
    }

    return node;
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  min(node) {
    if (!node.left) {
      return node;
    } else {
      return this.min(node.left);
    }
  }

  max(node) {
    if (!node.right) {
      return node;
    } else {
      return this.max(node.right);
    }
  }

  bfs() {
    let data = [];
    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();
      data.push(current.value);
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    return data;
  }

  dfsPreOrder() {
    let data = [];

    function dfs(node) {
      if (node) {
        data.push(node.value);

        dfs(node.left);
        dfs(node.right);
      }
    }

    dfs(this.root);

    return data;
  }

  dfsInOrder() {
    let data = [];

    function dfs(node) {
      if (node) {
        dfs(node.left);
        data.push(node.value);
        dfs(node.right);
      }
    }

    dfs(this.root);

    return data;
  }

  dfsPostOrder() {
    let data = [];

    function dfs(node) {
      if (node) {
        dfs(node.left);
        dfs(node.right);

        data.push(node.value);
      }
    }

    dfs(this.root);

    return data;
  }

  findDepth(node) {
    if (node) {
      let leftDepth = this.findDepth(node.left);
      let rightDepth = this.findDepth(node.right);

      return Math.max(leftDepth, rightDepth) + 1;
    }
    return 0;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(20);
tree.insert(19);
tree.insert(18);
tree.insert(17);

console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsInOrder());
console.log(tree.dfsPostOrder());

console.log(tree.findDepth(tree.root));