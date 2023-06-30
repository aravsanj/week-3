// Creating a binary tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1); 
const node1 = new Node(2);
const node2 = new Node(3);
const node3 = new Node(4);
const node4 = new Node(5);

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

console.log(root);